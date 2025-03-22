/**
 * DocSpring API
 * DocSpring provides an API that helps you fill out and sign PDF templates.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The JsonSchema model module.
 * @module model/JsonSchema
 * @version 2.1.0
 */
class JsonSchema {
    /**
     * Constructs a new <code>JsonSchema</code>.
     * @alias module:model/JsonSchema
     */
    constructor() { 
        
        JsonSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonSchema} obj Optional instance to populate.
     * @return {module:model/JsonSchema} The populated <code>JsonSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonSchema();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('definitions')) {
                obj['definitions'] = ApiClient.convertToType(data['definitions'], Object);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], Object);
            }
            if (data.hasOwnProperty('additionalProperties')) {
                obj['additionalProperties'] = ApiClient.convertToType(data['additionalProperties'], 'Boolean');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JsonSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JsonSchema</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['required'])) {
            throw new Error("Expected the field `required` to be an array in the JSON data but got " + data['required']);
        }

        return true;
    }


}



/**
 * @member {String} $schema
 */
JsonSchema.prototype['$schema'] = undefined;

/**
 * @member {String} id
 */
JsonSchema.prototype['id'] = undefined;

/**
 * @member {String} title
 */
JsonSchema.prototype['title'] = undefined;

/**
 * @member {String} description
 */
JsonSchema.prototype['description'] = undefined;

/**
 * @member {Object} definitions
 */
JsonSchema.prototype['definitions'] = undefined;

/**
 * @member {String} type
 */
JsonSchema.prototype['type'] = undefined;

/**
 * @member {Object} properties
 */
JsonSchema.prototype['properties'] = undefined;

/**
 * @member {Boolean} additionalProperties
 */
JsonSchema.prototype['additionalProperties'] = undefined;

/**
 * @member {Array.<String>} required
 */
JsonSchema.prototype['required'] = undefined;






export default JsonSchema;

