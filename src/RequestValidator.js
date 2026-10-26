/**
 * Checks a request against API v2's request schemas (RequestSchemas.js, the schemas the API validates requests with)
 * before it's sent, and says what the API would say about it. api_clients/validator_conformance checks that it agrees
 * with the API.
 */
import requestSchemas from './RequestSchemas';

/**
 * Rejects a request before it's sent when the API would reject it with a 422. `details` are the API's error details:
 * objects with `code`, `message` and a `pointer` into the body (or a `parameter` for a query parameter).
 */
export class ValidationError extends Error {
  constructor(details) {
    const shown = details.slice(0, 3).map((detail) => {
      const subject = detail.pointer === '' ? 'the request body' : detail.pointer || detail.parameter;
      return `${subject} ${detail.message}`;
    });
    let message = `Invalid request: ${shown.join('; ')}`;
    if (details.length > 3) message += ` (and ${details.length - 3} more)`;
    super(message);
    this.name = 'ValidationError';
    this.details = details;
  }
}

const TYPE_NAMES = {
  string: 'a string',
  integer: 'an integer',
  number: 'a number',
  boolean: 'true or false',
  object: 'an object',
  array: 'an array',
  null: 'null',
};
// What a multipart body's file field holds when the API checks it
const FILE_PLACEHOLDER = '(file)';
// A date and time as the API reads it (Ruby's DateTime.rfc3339, then json_schemer's checks)
const DATE_TIME =
  /^[ \t\n\v\f\r]*(-?\d{4})-(\d{2})-(\d{2})[Tt \t\n\v\f\r](\d{2}):(\d{2}):(\d{2})(?:\.\d+)?(?:[Zz]|([+-])(\d{2}):(\d{2}))$/;
// An absolute URI as the API reads it (RFC 3986, as Ruby's URI parser has it), a little looser for IP addresses
// Lookaheads check the escapes, so only character classes repeat: Java and PHP recurse on each repetition of a group
const SEGMENT = '[%!$&-.0-9:;=@A-Z_a-z~/]';
const URI = new RegExp(
  '^(?![^?#]*%(?![0-9A-Fa-f]{2}))[A-Za-z][+\\-.0-9A-Za-z]*:' +
    '(?://(?:[%!$&-.0-9:;=A-Z_a-z~]*@)?' +
    '(?:\\[(?:[0-9A-Fa-f:.]+|[vV][0-9A-Fa-f]+\\.[!$&-.0-9:;=A-Z_a-z~]+)\\]|[%!$&-.0-9;=A-Z_a-z~]*)' +
    `(?::[0-9]*)?(?:/${SEGMENT}*)?` +
    `|/(?:(?!/)${SEGMENT}+)?` +
    `|(?!/)${SEGMENT}+` +
    '|)' +
    '(?:\\?[^#]*)?' +
    '(?:#(?![^#]*%(?![0-9A-Fa-f]{2}))[%!$&-.0-9:;=@A-Z_a-z~/?]*)?$'
);
const WHITESPACE = /[ \t\n\v\f\r]/;
const patterns = {};

/**
 * The ValidationError for a request the API would reject, or null. `path` is the operation's path template
 * (/templates/{template_id}); `body` is the JSON the SDK sends, or a multipart body's params (files as file objects).
 */
export function requestError(method, path, query, body, isFile) {
  const operationId = requestSchemas.routes[`${method.toUpperCase()} ${path}`];
  if (!operationId) return null;

  const entry = requestSchemas.operations[operationId];
  let requestBody = body;
  if (entry.body && entry.body.mediaType === 'multipart/form-data' && body) {
    requestBody = {};
    Object.keys(body).forEach((key) => {
      if (body[key] !== undefined) requestBody[key] = isFile(body[key]) ? FILE_PLACEHOLDER : body[key];
    });
  } else if (body !== null && body !== undefined) {
    // The JSON the request sends
    requestBody = JSON.parse(JSON.stringify(body));
  }
  const details = errors(operationId, query || {}, requestBody);
  return details.length ? new ValidationError(details) : null;
}

/** The details for a request to an operation (createSubmission) */
export function errors(operationId, query, body) {
  const entry = requestSchemas.operations[operationId];
  const details = [];
  const queryValues = {};
  Object.keys(query || {}).forEach((key) => {
    if (query[key] !== undefined && query[key] !== null) queryValues[key] = query[key];
  });
  if (entry.query && Object.keys(queryValues).length) {
    const params = entry.query;
    const properties = {};
    const required = [];
    Object.keys(params).forEach((name) => {
      properties[name] = params[name].schema;
      if (params[name].required) required.push(name);
    });
    const schema = { type: 'object', properties, required, additionalProperties: false };
    details.push(...validateParams(schema, queryValues, 'query'));
  }
  if (entry.body && body !== null && body !== undefined) {
    if (entry.body.mediaType === 'multipart/form-data') {
      details.push(...validateParams(entry.body.schema, body, 'body'));
    } else {
      details.push(...validate(entry.body.schema, typeof body === 'string' ? JSON.parse(body) : body, 'body'));
    }
  }
  return details;
}

/** The details for `data` checked against `schema` at `location` (body or query) */
export function validate(schema, data, location) {
  const details = [];
  check(schema, data, '', location, details);
  return details;
}

// Query and multipart params arrive as strings, which the API converts where the schema types them
function validateParams(schema, data, location) {
  const properties = schema.properties || {};
  const converted = {};
  Object.keys(data).forEach((key) => {
    converted[key] = convertParam(data[key], properties[key]);
  });
  return validate(schema, converted, location);
}

function convertParam(value, schema) {
  if (!isObject(schema)) return value;
  const types = typesOf(schema);
  if (Array.isArray(value) && types.includes('array')) return value.map((item) => convertParam(item, schema.items));
  if (value instanceof Date) return value.toISOString();
  if (typeof value !== 'string') return value;
  if (types.includes('integer') && /^-?[0-9]+$/.test(value)) return parseInt(value, 10);
  if (types.includes('number') && /^-?[0-9]+(?:\.[0-9]+)?$/.test(value)) return Number(value);
  if (types.includes('boolean') && (value === 'true' || value === 'false')) return value === 'true';
  return value;
}

function typesOf(schema) {
  if (schema.type === undefined) return [];
  return Array.isArray(schema.type) ? schema.type : [schema.type];
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function resolve(schema) {
  let resolved = schema;
  while (isObject(resolved) && resolved.$ref) {
    resolved = requestSchemas.components.schemas[resolved.$ref.replace('#/components/schemas/', '')];
  }
  return resolved;
}

function check(rawSchema, data, pointer, location, details) {
  const schema = resolve(rawSchema);
  if (!isObject(schema)) return;
  if (schema.discriminator) {
    checkUnion(schema, data, pointer, location, details);
    return;
  }

  if (schema.type !== undefined && !typesOf(schema).some((type) => isType(data, type))) {
    const message = pointer === '' && location === 'body' ? 'must be a JSON object' : typeMessage(typesOf(schema));
    details.push(detail(location, pointer, 'type', message));
  }
  if (schema.enum && !schema.enum.some((value) => jsonEqual(value, data))) {
    details.push(detail(location, pointer, 'enum', `must be one of: ${schema.enum.map(toJson).join(', ')}`));
  }
  if ('const' in schema && !jsonEqual(schema.const, data)) {
    details.push(detail(location, pointer, 'const', `must be ${toJson(schema.const)}`));
  }

  if (typeof data === 'string') checkString(schema, data, pointer, location, details);
  else if (typeof data === 'number') checkNumber(schema, data, pointer, location, details);
  else if (Array.isArray(data)) checkArray(schema, data, pointer, location, details);
  else if (isObject(data)) checkObject(schema, data, pointer, location, details);
}

// A union (oneOf with a discriminator): the discriminator property's value picks the variant, and only that one is
// checked, as the API does
function checkUnion(schema, data, pointer, location, details) {
  if (!isObject(data)) {
    details.push(detail(location, pointer, 'type', `must be ${TYPE_NAMES.object}`));
    return;
  }

  const name = schema.discriminator.propertyName;
  const child = `${pointer}/${escape(name)}`;
  if (!Object.prototype.hasOwnProperty.call(data, name)) {
    details.push(detail(location, child, 'required', 'is required'));
    return;
  }

  // [value, $ref] pairs, in the order the API lists them
  const mapping = schema.discriminator.mapping;
  const value = data[name];
  const variant = typeof value === 'string' ? mapping.find(([candidate]) => candidate === value) : undefined;
  if (variant) {
    check({ $ref: variant[1] }, data, pointer, location, details);
    return;
  }

  details.push(detail(location, child, 'enum', `must be one of: ${mapping.map(([candidate]) => toJson(candidate)).join(', ')}`));
}

function checkString(schema, data, pointer, location, details) {
  const length = Array.from(data).length;
  if (schema.minLength !== undefined && length < schema.minLength) {
    const message = atLeast(schema.minLength, `must be at least ${count(schema.minLength, 'character')}`);
    details.push(detail(location, pointer, 'minLength', message));
  }
  if (schema.maxLength !== undefined && length > schema.maxLength) {
    details.push(detail(location, pointer, 'maxLength', `must be at most ${count(schema.maxLength, 'character')}`));
  }
  if (schema.pattern !== undefined && !pattern(schema.pattern).test(data)) {
    const message = schema['x-pattern-message'] || `must match the pattern ${schema.pattern}`;
    details.push(detail(location, pointer, 'pattern', message));
  }
  if (schema.format !== undefined && !format(schema.format, data)) {
    const message = requestSchemas.formatMessages[schema.format] || `must be a valid ${schema.format}`;
    details.push(detail(location, pointer, 'format', message));
  }
}

function checkNumber(schema, data, pointer, location, details) {
  if (schema.minimum !== undefined && data < schema.minimum) {
    details.push(detail(location, pointer, 'minimum', `must be at least ${schema.minimum}`));
  }
  if (schema.maximum !== undefined && data > schema.maximum) {
    details.push(detail(location, pointer, 'maximum', `must be at most ${schema.maximum}`));
  }
  if (schema.exclusiveMinimum !== undefined && data <= schema.exclusiveMinimum) {
    details.push(detail(location, pointer, 'exclusiveMinimum', `must be greater than ${schema.exclusiveMinimum}`));
  }
  if (schema.exclusiveMaximum !== undefined && data >= schema.exclusiveMaximum) {
    details.push(detail(location, pointer, 'exclusiveMaximum', `must be less than ${schema.exclusiveMaximum}`));
  }
}

function checkArray(schema, data, pointer, location, details) {
  if (schema.minItems !== undefined && data.length < schema.minItems) {
    const message = atLeast(schema.minItems, `must have at least ${count(schema.minItems, 'item')}`);
    details.push(detail(location, pointer, 'minItems', message));
  }
  if (schema.maxItems !== undefined && data.length > schema.maxItems) {
    details.push(detail(location, pointer, 'maxItems', `must have at most ${count(schema.maxItems, 'item')}`));
  }
  if (schema.uniqueItems && !unique(data)) {
    const duplicate = firstDuplicate(data);
    const message = duplicate ? `has ${toJson(duplicate.value)} more than once` : "can't contain the same item twice";
    details.push(detail(location, pointer, 'uniqueItems', message));
  }
  if (schema.items !== undefined) {
    data.forEach((item, index) => check(schema.items, item, `${pointer}/${index}`, location, details));
  }
}

function checkObject(schema, data, pointer, location, details) {
  (schema.required || []).forEach((name) => {
    if (!Object.prototype.hasOwnProperty.call(data, name)) {
      details.push(detail(location, `${pointer}/${escape(name)}`, 'required', 'is required'));
    }
  });

  const properties = schema.properties || {};
  Object.keys(data).forEach((name) => {
    const child = `${pointer}/${escape(name)}`;
    if (Object.prototype.hasOwnProperty.call(properties, name)) {
      check(properties[name], data[name], child, location, details);
    } else if (schema.additionalProperties === false) {
      details.push(unknownProperty(schema, name, child, location));
    } else if (isObject(schema.additionalProperties)) {
      check(schema.additionalProperties, data[name], child, location, details);
    }
  });
}

function unknownProperty(schema, name, pointer, location) {
  const notAllowed = (schema['x-not-allowed-properties'] || {})[name];
  if (notAllowed) return detail(location, pointer, 'not_allowed', notAllowed);

  const noun = location === 'query' ? 'query parameter' : 'property';
  const custom = schema['x-unknown-property-message'];
  let message = custom || `isn't a documented ${noun}`;
  const snake = underscore(name);
  if (snake !== name && Object.prototype.hasOwnProperty.call(schema.properties || {}, snake)) {
    const plural = custom ? 'settings' : noun === 'property' ? 'properties' : 'query parameters';
    message += `. API v2 names ${plural} in snake_case: '${snake}'`;
  }
  return detail(location, pointer, 'unknown_property', message);
}

function detail(location, pointer, code, message) {
  if (location !== 'query') return { code, message, pointer };

  const parameter = pointer.slice(1).split('/')[0].replace(/~1/g, '/').replace(/~0/g, '~');
  return { code, message, parameter };
}

function isType(data, type) {
  switch (type) {
    case 'string':
      return typeof data === 'string';
    case 'integer':
      return typeof data === 'number' && Number.isInteger(data);
    case 'number':
      return typeof data === 'number' && Number.isFinite(data);
    case 'boolean':
      return typeof data === 'boolean';
    case 'object':
      return isObject(data);
    case 'array':
      return Array.isArray(data);
    case 'null':
      return data === null;
    default:
      return false;
  }
}

// Patterns are ECMA-262 regexps, as OpenAPI says: ^ and $ are the start and end of the value, not of a line. The
// API's patterns only use ^ as the first character and $ as the last (api_clients/scripts/extract_request_schemas).
// JavaScript reads them that way. The u flag counts characters as the API does (an emoji is one), but rejects some
// escapes that are fine without it (\-).
function pattern(source) {
  if (!patterns[source]) {
    try {
      patterns[source] = new RegExp(source, 'u');
    } catch (error) {
      patterns[source] = new RegExp(source);
    }
  }
  return patterns[source];
}

function format(name, data) {
  if (name === 'uri') return /^[\x00-\x7f]*$/.test(data) && !WHITESPACE.test(data) && URI.test(data);
  if (name === 'date-time') return dateTime(data);
  return true;
}

function dateTime(data) {
  const match = DATE_TIME.exec(data);
  if (!match) return false;

  const [year, month, day, hour, minute, second] = match.slice(1, 7).map((value) => parseInt(value, 10));
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) return false;
  if (hour > 23 || minute > 59 || second > 60) return false;

  let offset = 0;
  if (match[7]) {
    const offsetHours = parseInt(match[8], 10);
    const offsetMinutes = parseInt(match[9], 10);
    if (offsetHours > 23 || offsetMinutes > 59) return false;
    offset = (match[7] === '-' ? -1 : 1) * (offsetHours * 60 + offsetMinutes);
  }
  // A leap second is only at the end of a UTC day
  return second < 60 || (((hour * 60 + minute - offset) % 1440) + 1440) % 1440 === 1439;
}

// Before the Gregorian calendar (1582), the API's dates are Julian: every fourth year is a leap year
function daysInMonth(year, month) {
  const leap = year % 4 === 0 && (year < 1583 || year % 100 !== 0 || year % 400 === 0);
  if (month === 2 && leap) return 29;
  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

function unique(data) {
  return !data.some((item, index) => data.slice(index + 1).some((other) => jsonEqual(item, other)));
}

// The first value that's in the list twice, as the API names it
function firstDuplicate(data) {
  const counts = new Map();
  const firsts = new Map();
  data.forEach((item) => {
    const key = tallyKey(item);
    counts.set(key, (counts.get(key) || 0) + 1);
    if (!firsts.has(key)) firsts.set(key, item);
  });
  for (const [key, times] of counts) {
    if (times > 1) return { value: firsts.get(key) };
  }
  return null;
}

function tallyKey(value) {
  if (Array.isArray(value)) return `[${value.map(tallyKey).join(',')}]`;
  if (isObject(value)) {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${tallyKey(value[key])}`)
      .join(',')}}`;
  }
  return JSON.stringify(value);
}

// JSON equality: numbers by value, objects regardless of key order
function jsonEqual(left, right) {
  if (Array.isArray(left) && Array.isArray(right)) {
    return left.length === right.length && left.every((item, index) => jsonEqual(item, right[index]));
  }
  if (isObject(left) && isObject(right)) {
    const keys = Object.keys(left);
    return (
      keys.length === Object.keys(right).length &&
      keys.every((key) => Object.prototype.hasOwnProperty.call(right, key) && jsonEqual(left[key], right[key]))
    );
  }
  return left === right;
}

function typeMessage(types) {
  const names = types.map((type) => TYPE_NAMES[type] || type);
  const connector = names.length > 1 && names.some((name) => name.includes(' or ')) ? ', or ' : ' or ';
  if (names.length === 1) return `must be ${names[0]}`;
  if (names.length === 2) return `must be ${names.join(connector)}`;
  return `must be ${names.slice(0, -1).join(', ')}${connector}${names[names.length - 1]}`;
}

function atLeast(limit, message) {
  return limit === 1 ? "can't be empty" : message;
}

function count(number, noun) {
  return `${number} ${number === 1 ? noun : `${noun}s`}`;
}

function toJson(value) {
  return JSON.stringify(value);
}

function escape(token) {
  return String(token).replace(/~/g, '~0').replace(/\//g, '~1');
}

function underscore(name) {
  return name
    .replace(/([A-Z\d]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/-/g, '_')
    .toLowerCase();
}
