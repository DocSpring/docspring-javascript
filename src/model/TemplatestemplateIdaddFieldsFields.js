/**
 * API v1
 * DocSpring is a service that helps you fill out and sign PDF templates.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.TemplatestemplateIdaddFieldsFields = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TemplatestemplateIdaddFieldsFields model module.
   * @module model/TemplatestemplateIdaddFieldsFields
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>TemplatestemplateIdaddFieldsFields</code>.
   * @alias module:model/TemplatestemplateIdaddFieldsFields
   * @class
   */
  var exports = function() {
    var _this = this;






















































































  };

  /**
   * Constructs a <code>TemplatestemplateIdaddFieldsFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplatestemplateIdaddFieldsFields} obj Optional instance to populate.
   * @return {module:model/TemplatestemplateIdaddFieldsFields} The populated <code>TemplatestemplateIdaddFieldsFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backgroundColorFieldName')) {
        obj['backgroundColorFieldName'] = ApiClient.convertToType(data['backgroundColorFieldName'], 'String');
      }
      if (data.hasOwnProperty('uppercase')) {
        obj['uppercase'] = ApiClient.convertToType(data['uppercase'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
      }
      if (data.hasOwnProperty('barcodeSymbology')) {
        obj['barcodeSymbology'] = ApiClient.convertToType(data['barcodeSymbology'], 'String');
      }
      if (data.hasOwnProperty('minLength')) {
        obj['minLength'] = ApiClient.convertToType(data['minLength'], 'Number');
      }
      if (data.hasOwnProperty('integer')) {
        obj['integer'] = ApiClient.convertToType(data['integer'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('combValueOffset')) {
        obj['combValueOffset'] = ApiClient.convertToType(data['combValueOffset'], 'Number');
      }
      if (data.hasOwnProperty('imageGravity')) {
        obj['imageGravity'] = ApiClient.convertToType(data['imageGravity'], 'String');
      }
      if (data.hasOwnProperty('overflow')) {
        obj['overflow'] = ApiClient.convertToType(data['overflow'], 'String');
      }
      if (data.hasOwnProperty('qrcodeColor')) {
        obj['qrcodeColor'] = ApiClient.convertToType(data['qrcodeColor'], 'String');
      }
      if (data.hasOwnProperty('colorFieldRequired')) {
        obj['colorFieldRequired'] = ApiClient.convertToType(data['colorFieldRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('backgroundColorFieldRequired')) {
        obj['backgroundColorFieldRequired'] = ApiClient.convertToType(data['backgroundColorFieldRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('imageScaleType')) {
        obj['imageScaleType'] = ApiClient.convertToType(data['imageScaleType'], 'String');
      }
      if (data.hasOwnProperty('exclusiveMinimum')) {
        obj['exclusiveMinimum'] = ApiClient.convertToType(data['exclusiveMinimum'], 'Boolean');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('numberConditionRangeExclusiveMax')) {
        obj['numberConditionRangeExclusiveMax'] = ApiClient.convertToType(data['numberConditionRangeExclusiveMax'], 'Boolean');
      }
      if (data.hasOwnProperty('invertBooleanCondition')) {
        obj['invertBooleanCondition'] = ApiClient.convertToType(data['invertBooleanCondition'], 'Boolean');
      }
      if (data.hasOwnProperty('shapeFillColorFieldName')) {
        obj['shapeFillColorFieldName'] = ApiClient.convertToType(data['shapeFillColorFieldName'], 'String');
      }
      if (data.hasOwnProperty('static')) {
        obj['static'] = ApiClient.convertToType(data['static'], 'Boolean');
      }
      if (data.hasOwnProperty('shapeBorderColorFieldName')) {
        obj['shapeBorderColorFieldName'] = ApiClient.convertToType(data['shapeBorderColorFieldName'], 'String');
      }
      if (data.hasOwnProperty('vAlignment')) {
        obj['vAlignment'] = ApiClient.convertToType(data['vAlignment'], 'String');
      }
      if (data.hasOwnProperty('bold')) {
        obj['bold'] = ApiClient.convertToType(data['bold'], 'Boolean');
      }
      if (data.hasOwnProperty('shapeBorderWidth')) {
        obj['shapeBorderWidth'] = ApiClient.convertToType(data['shapeBorderWidth'], 'Number');
      }
      if (data.hasOwnProperty('combNumberOfCells')) {
        obj['combNumberOfCells'] = ApiClient.convertToType(data['combNumberOfCells'], 'Number');
      }
      if (data.hasOwnProperty('shapeBorderColor')) {
        obj['shapeBorderColor'] = ApiClient.convertToType(data['shapeBorderColor'], 'String');
      }
      if (data.hasOwnProperty('comb')) {
        obj['comb'] = ApiClient.convertToType(data['comb'], 'Boolean');
      }
      if (data.hasOwnProperty('typeface')) {
        obj['typeface'] = ApiClient.convertToType(data['typeface'], 'String');
      }
      if (data.hasOwnProperty('shapeType')) {
        obj['shapeType'] = ApiClient.convertToType(data['shapeType'], 'String');
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
      }
      if (data.hasOwnProperty('displayType')) {
        obj['displayType'] = ApiClient.convertToType(data['displayType'], 'String');
      }
      if (data.hasOwnProperty('checkColor')) {
        obj['checkColor'] = ApiClient.convertToType(data['checkColor'], 'String');
      }
      if (data.hasOwnProperty('multilineLines')) {
        obj['multilineLines'] = ApiClient.convertToType(data['multilineLines'], 'Number');
      }
      if (data.hasOwnProperty('multiline')) {
        obj['multiline'] = ApiClient.convertToType(data['multiline'], 'Boolean');
      }
      if (data.hasOwnProperty('trueText')) {
        obj['trueText'] = ApiClient.convertToType(data['trueText'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('fontSize')) {
        obj['fontSize'] = ApiClient.convertToType(data['fontSize'], 'Number');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('alignment')) {
        obj['alignment'] = ApiClient.convertToType(data['alignment'], 'String');
      }
      if (data.hasOwnProperty('maxLength')) {
        obj['maxLength'] = ApiClient.convertToType(data['maxLength'], 'Number');
      }
      if (data.hasOwnProperty('autoCalculateMaxLength')) {
        obj['autoCalculateMaxLength'] = ApiClient.convertToType(data['autoCalculateMaxLength'], 'Boolean');
      }
      if (data.hasOwnProperty('colorFieldName')) {
        obj['colorFieldName'] = ApiClient.convertToType(data['colorFieldName'], 'String');
      }
      if (data.hasOwnProperty('qrcodeColorFieldName')) {
        obj['qrcodeColorFieldName'] = ApiClient.convertToType(data['qrcodeColorFieldName'], 'String');
      }
      if (data.hasOwnProperty('numberConditionRangeMin')) {
        obj['numberConditionRangeMin'] = ApiClient.convertToType(data['numberConditionRangeMin'], 'Number');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('checkColorFieldRequired')) {
        obj['checkColorFieldRequired'] = ApiClient.convertToType(data['checkColorFieldRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('combinedFieldFormat')) {
        obj['combinedFieldFormat'] = ApiClient.convertToType(data['combinedFieldFormat'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('shapeBorderColorFieldRequired')) {
        obj['shapeBorderColorFieldRequired'] = ApiClient.convertToType(data['shapeBorderColorFieldRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('combinedFieldNames')) {
        obj['combinedFieldNames'] = ApiClient.convertToType(data['combinedFieldNames'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('numberConditionRangeExclusiveMin')) {
        obj['numberConditionRangeExclusiveMin'] = ApiClient.convertToType(data['numberConditionRangeExclusiveMin'], 'Boolean');
      }
      if (data.hasOwnProperty('combinedFieldSeparator')) {
        obj['combinedFieldSeparator'] = ApiClient.convertToType(data['combinedFieldSeparator'], 'String');
      }
      if (data.hasOwnProperty('exclusiveMaximum')) {
        obj['exclusiveMaximum'] = ApiClient.convertToType(data['exclusiveMaximum'], 'Boolean');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'String');
      }
      if (data.hasOwnProperty('combinedFieldType')) {
        obj['combinedFieldType'] = ApiClient.convertToType(data['combinedFieldType'], 'String');
      }
      if (data.hasOwnProperty('dateTimeFormat')) {
        obj['dateTimeFormat'] = ApiClient.convertToType(data['dateTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('qrcodeColorFieldRequired')) {
        obj['qrcodeColorFieldRequired'] = ApiClient.convertToType(data['qrcodeColorFieldRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'Boolean');
      }
      if (data.hasOwnProperty('falseText')) {
        obj['falseText'] = ApiClient.convertToType(data['falseText'], 'String');
      }
      if (data.hasOwnProperty('strikethrough')) {
        obj['strikethrough'] = ApiClient.convertToType(data['strikethrough'], 'Boolean');
      }
      if (data.hasOwnProperty('characterSpacing')) {
        obj['characterSpacing'] = ApiClient.convertToType(data['characterSpacing'], 'Number');
      }
      if (data.hasOwnProperty('numberConditionRangeMax')) {
        obj['numberConditionRangeMax'] = ApiClient.convertToType(data['numberConditionRangeMax'], 'Number');
      }
      if (data.hasOwnProperty('backgroundColor')) {
        obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
      }
      if (data.hasOwnProperty('checkColorFieldName')) {
        obj['checkColorFieldName'] = ApiClient.convertToType(data['checkColorFieldName'], 'String');
      }
      if (data.hasOwnProperty('checkCharacter')) {
        obj['checkCharacter'] = ApiClient.convertToType(data['checkCharacter'], 'String');
      }
      if (data.hasOwnProperty('rotation')) {
        obj['rotation'] = ApiClient.convertToType(data['rotation'], 'Number');
      }
      if (data.hasOwnProperty('optionList')) {
        obj['optionList'] = ApiClient.convertToType(data['optionList'], 'String');
      }
      if (data.hasOwnProperty('shapeFillColor')) {
        obj['shapeFillColor'] = ApiClient.convertToType(data['shapeFillColor'], 'String');
      }
      if (data.hasOwnProperty('stringConditionType')) {
        obj['stringConditionType'] = ApiClient.convertToType(data['stringConditionType'], 'String');
      }
      if (data.hasOwnProperty('shapeFillColorFieldRequired')) {
        obj['shapeFillColorFieldRequired'] = ApiClient.convertToType(data['shapeFillColorFieldRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('decimalPlaces')) {
        obj['decimalPlaces'] = ApiClient.convertToType(data['decimalPlaces'], 'Number');
      }
      if (data.hasOwnProperty('includeTime')) {
        obj['includeTime'] = ApiClient.convertToType(data['includeTime'], 'Boolean');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('x')) {
        obj['x'] = ApiClient.convertToType(data['x'], 'Number');
      }
      if (data.hasOwnProperty('maximum')) {
        obj['maximum'] = ApiClient.convertToType(data['maximum'], 'Number');
      }
      if (data.hasOwnProperty('y')) {
        obj['y'] = ApiClient.convertToType(data['y'], 'Number');
      }
      if (data.hasOwnProperty('signatureAllowDraw')) {
        obj['signatureAllowDraw'] = ApiClient.convertToType(data['signatureAllowDraw'], 'Boolean');
      }
      if (data.hasOwnProperty('numberConditionType')) {
        obj['numberConditionType'] = ApiClient.convertToType(data['numberConditionType'], 'String');
      }
      if (data.hasOwnProperty('opacity')) {
        obj['opacity'] = ApiClient.convertToType(data['opacity'], 'Number');
      }
      if (data.hasOwnProperty('minimum')) {
        obj['minimum'] = ApiClient.convertToType(data['minimum'], 'Number');
      }
      if (data.hasOwnProperty('signatureAllowType')) {
        obj['signatureAllowType'] = ApiClient.convertToType(data['signatureAllowType'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} backgroundColorFieldName
   */
  exports.prototype['backgroundColorFieldName'] = undefined;
  /**
   * @member {Boolean} uppercase
   */
  exports.prototype['uppercase'] = undefined;
  /**
   * @member {String} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} barcodeSymbology
   */
  exports.prototype['barcodeSymbology'] = undefined;
  /**
   * @member {Number} minLength
   */
  exports.prototype['minLength'] = undefined;
  /**
   * @member {Boolean} integer
   */
  exports.prototype['integer'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;
  /**
   * @member {Number} combValueOffset
   */
  exports.prototype['combValueOffset'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.ImageGravityEnum} imageGravity
   */
  exports.prototype['imageGravity'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.OverflowEnum} overflow
   */
  exports.prototype['overflow'] = undefined;
  /**
   * @member {String} qrcodeColor
   */
  exports.prototype['qrcodeColor'] = undefined;
  /**
   * @member {Boolean} colorFieldRequired
   */
  exports.prototype['colorFieldRequired'] = undefined;
  /**
   * @member {Boolean} backgroundColorFieldRequired
   */
  exports.prototype['backgroundColorFieldRequired'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.ImageScaleTypeEnum} imageScaleType
   */
  exports.prototype['imageScaleType'] = undefined;
  /**
   * @member {Boolean} exclusiveMinimum
   */
  exports.prototype['exclusiveMinimum'] = undefined;
  /**
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * @member {Boolean} numberConditionRangeExclusiveMax
   */
  exports.prototype['numberConditionRangeExclusiveMax'] = undefined;
  /**
   * @member {Boolean} invertBooleanCondition
   */
  exports.prototype['invertBooleanCondition'] = undefined;
  /**
   * @member {String} shapeFillColorFieldName
   */
  exports.prototype['shapeFillColorFieldName'] = undefined;
  /**
   * @member {Boolean} static
   */
  exports.prototype['static'] = undefined;
  /**
   * @member {String} shapeBorderColorFieldName
   */
  exports.prototype['shapeBorderColorFieldName'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.VAlignmentEnum} vAlignment
   */
  exports.prototype['vAlignment'] = undefined;
  /**
   * @member {Boolean} bold
   */
  exports.prototype['bold'] = undefined;
  /**
   * @member {Number} shapeBorderWidth
   */
  exports.prototype['shapeBorderWidth'] = undefined;
  /**
   * @member {Number} combNumberOfCells
   */
  exports.prototype['combNumberOfCells'] = undefined;
  /**
   * @member {String} shapeBorderColor
   */
  exports.prototype['shapeBorderColor'] = undefined;
  /**
   * @member {Boolean} comb
   */
  exports.prototype['comb'] = undefined;
  /**
   * @member {String} typeface
   */
  exports.prototype['typeface'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.ShapeTypeEnum} shapeType
   */
  exports.prototype['shapeType'] = undefined;
  /**
   * @member {String} condition
   */
  exports.prototype['condition'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.DisplayTypeEnum} displayType
   */
  exports.prototype['displayType'] = undefined;
  /**
   * @member {String} checkColor
   */
  exports.prototype['checkColor'] = undefined;
  /**
   * @member {Number} multilineLines
   */
  exports.prototype['multilineLines'] = undefined;
  /**
   * @member {Boolean} multiline
   */
  exports.prototype['multiline'] = undefined;
  /**
   * @member {String} trueText
   */
  exports.prototype['trueText'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} fontSize
   */
  exports.prototype['fontSize'] = undefined;
  /**
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.AlignmentEnum} alignment
   */
  exports.prototype['alignment'] = undefined;
  /**
   * @member {Number} maxLength
   */
  exports.prototype['maxLength'] = undefined;
  /**
   * @member {Boolean} autoCalculateMaxLength
   */
  exports.prototype['autoCalculateMaxLength'] = undefined;
  /**
   * @member {String} colorFieldName
   */
  exports.prototype['colorFieldName'] = undefined;
  /**
   * @member {String} qrcodeColorFieldName
   */
  exports.prototype['qrcodeColorFieldName'] = undefined;
  /**
   * @member {Number} numberConditionRangeMin
   */
  exports.prototype['numberConditionRangeMin'] = undefined;
  /**
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;
  /**
   * @member {Boolean} checkColorFieldRequired
   */
  exports.prototype['checkColorFieldRequired'] = undefined;
  /**
   * @member {String} combinedFieldFormat
   */
  exports.prototype['combinedFieldFormat'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} shapeBorderColorFieldRequired
   */
  exports.prototype['shapeBorderColorFieldRequired'] = undefined;
  /**
   * @member {String} combinedFieldNames
   */
  exports.prototype['combinedFieldNames'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Boolean} numberConditionRangeExclusiveMin
   */
  exports.prototype['numberConditionRangeExclusiveMin'] = undefined;
  /**
   * @member {String} combinedFieldSeparator
   */
  exports.prototype['combinedFieldSeparator'] = undefined;
  /**
   * @member {Boolean} exclusiveMaximum
   */
  exports.prototype['exclusiveMaximum'] = undefined;
  /**
   * @member {String} default
   */
  exports.prototype['default'] = undefined;
  /**
   * @member {String} combinedFieldType
   */
  exports.prototype['combinedFieldType'] = undefined;
  /**
   * @member {String} dateTimeFormat
   */
  exports.prototype['dateTimeFormat'] = undefined;
  /**
   * @member {Boolean} qrcodeColorFieldRequired
   */
  exports.prototype['qrcodeColorFieldRequired'] = undefined;
  /**
   * @member {Boolean} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} falseText
   */
  exports.prototype['falseText'] = undefined;
  /**
   * @member {Boolean} strikethrough
   */
  exports.prototype['strikethrough'] = undefined;
  /**
   * @member {Number} characterSpacing
   */
  exports.prototype['characterSpacing'] = undefined;
  /**
   * @member {Number} numberConditionRangeMax
   */
  exports.prototype['numberConditionRangeMax'] = undefined;
  /**
   * @member {String} backgroundColor
   */
  exports.prototype['backgroundColor'] = undefined;
  /**
   * @member {String} checkColorFieldName
   */
  exports.prototype['checkColorFieldName'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.CheckCharacterEnum} checkCharacter
   */
  exports.prototype['checkCharacter'] = undefined;
  /**
   * @member {Number} rotation
   */
  exports.prototype['rotation'] = undefined;
  /**
   * @member {String} optionList
   */
  exports.prototype['optionList'] = undefined;
  /**
   * @member {String} shapeFillColor
   */
  exports.prototype['shapeFillColor'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.StringConditionTypeEnum} stringConditionType
   */
  exports.prototype['stringConditionType'] = undefined;
  /**
   * @member {Boolean} shapeFillColorFieldRequired
   */
  exports.prototype['shapeFillColorFieldRequired'] = undefined;
  /**
   * @member {Number} decimalPlaces
   */
  exports.prototype['decimalPlaces'] = undefined;
  /**
   * @member {Boolean} includeTime
   */
  exports.prototype['includeTime'] = undefined;
  /**
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;
  /**
   * @member {Number} x
   */
  exports.prototype['x'] = undefined;
  /**
   * @member {Number} maximum
   */
  exports.prototype['maximum'] = undefined;
  /**
   * @member {Number} y
   */
  exports.prototype['y'] = undefined;
  /**
   * @member {Boolean} signatureAllowDraw
   */
  exports.prototype['signatureAllowDraw'] = undefined;
  /**
   * @member {module:model/TemplatestemplateIdaddFieldsFields.NumberConditionTypeEnum} numberConditionType
   */
  exports.prototype['numberConditionType'] = undefined;
  /**
   * @member {Number} opacity
   */
  exports.prototype['opacity'] = undefined;
  /**
   * @member {Number} minimum
   */
  exports.prototype['minimum'] = undefined;
  /**
   * @member {Boolean} signatureAllowType
   */
  exports.prototype['signatureAllowType'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "string"
     * @const
     */
    "string": "string",
    /**
     * value: "number"
     * @const
     */
    "number": "number",
    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",
    /**
     * value: "date"
     * @const
     */
    "date": "date",
    /**
     * value: "address"
     * @const
     */
    "address": "address",
    /**
     * value: "country"
     * @const
     */
    "country": "country",
    /**
     * value: "email"
     * @const
     */
    "email": "email",
    /**
     * value: "url"
     * @const
     */
    "url": "url",
    /**
     * value: "image"
     * @const
     */
    "image": "image",
    /**
     * value: "signature"
     * @const
     */
    "signature": "signature",
    /**
     * value: "barcode"
     * @const
     */
    "barcode": "barcode",
    /**
     * value: "combined"
     * @const
     */
    "combined": "combined"  };

  /**
   * Allowed values for the <code>imageGravity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ImageGravityEnum = {
    /**
     * value: "NorthWest"
     * @const
     */
    "NorthWest": "NorthWest",
    /**
     * value: "North"
     * @const
     */
    "North": "North",
    /**
     * value: "NorthEast"
     * @const
     */
    "NorthEast": "NorthEast",
    /**
     * value: "West"
     * @const
     */
    "West": "West",
    /**
     * value: "Center"
     * @const
     */
    "Center": "Center",
    /**
     * value: "East"
     * @const
     */
    "East": "East",
    /**
     * value: "SouthWest"
     * @const
     */
    "SouthWest": "SouthWest",
    /**
     * value: "South"
     * @const
     */
    "South": "South",
    /**
     * value: "SouthEast"
     * @const
     */
    "SouthEast": "SouthEast"  };

  /**
   * Allowed values for the <code>overflow</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OverflowEnum = {
    /**
     * value: "shrink_to_fit"
     * @const
     */
    "shrink_to_fit": "shrink_to_fit",
    /**
     * value: "truncate"
     * @const
     */
    "truncate": "truncate"  };

  /**
   * Allowed values for the <code>imageScaleType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ImageScaleTypeEnum = {
    /**
     * value: "fit"
     * @const
     */
    "fit": "fit",
    /**
     * value: "fill"
     * @const
     */
    "fill": "fill",
    /**
     * value: "stretch"
     * @const
     */
    "stretch": "stretch"  };

  /**
   * Allowed values for the <code>vAlignment</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VAlignmentEnum = {
    /**
     * value: "bottom"
     * @const
     */
    "bottom": "bottom",
    /**
     * value: "center"
     * @const
     */
    "center": "center",
    /**
     * value: "top"
     * @const
     */
    "top": "top"  };

  /**
   * Allowed values for the <code>shapeType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ShapeTypeEnum = {
    /**
     * value: "square"
     * @const
     */
    "square": "square",
    /**
     * value: "rectangle"
     * @const
     */
    "rectangle": "rectangle",
    /**
     * value: "circle"
     * @const
     */
    "circle": "circle",
    /**
     * value: "ellipse"
     * @const
     */
    "ellipse": "ellipse"  };

  /**
   * Allowed values for the <code>displayType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DisplayTypeEnum = {
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "check"
     * @const
     */
    "check": "check",
    /**
     * value: "qrcode"
     * @const
     */
    "qrcode": "qrcode",
    /**
     * value: "barcode"
     * @const
     */
    "barcode": "barcode",
    /**
     * value: "image"
     * @const
     */
    "image": "image",
    /**
     * value: "shape"
     * @const
     */
    "shape": "shape"  };

  /**
   * Allowed values for the <code>alignment</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AlignmentEnum = {
    /**
     * value: "left"
     * @const
     */
    "left": "left",
    /**
     * value: "center"
     * @const
     */
    "center": "center",
    /**
     * value: "right"
     * @const
     */
    "right": "right"  };

  /**
   * Allowed values for the <code>checkCharacter</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CheckCharacterEnum = {
    /**
     * value: "&#10003;"
     * @const
     */
    "10003;": "&#10003;",
    /**
     * value: "&#10004;"
     * @const
     */
    "10004;": "&#10004;",
    /**
     * value: "&#10006;"
     * @const
     */
    "10006;": "&#10006;",
    /**
     * value: "&#10007;"
     * @const
     */
    "10007;": "&#10007;",
    /**
     * value: "&#10008;"
     * @const
     */
    "10008;": "&#10008;"  };

  /**
   * Allowed values for the <code>stringConditionType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StringConditionTypeEnum = {
    /**
     * value: "equals"
     * @const
     */
    "equals": "equals",
    /**
     * value: "contains"
     * @const
     */
    "contains": "contains",
    /**
     * value: "starts_with"
     * @const
     */
    "starts_with": "starts_with",
    /**
     * value: "ends_with"
     * @const
     */
    "ends_with": "ends_with",
    /**
     * value: "regex"
     * @const
     */
    "regex": "regex"  };

  /**
   * Allowed values for the <code>numberConditionType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NumberConditionTypeEnum = {
    /**
     * value: "equals"
     * @const
     */
    "equals": "equals",
    /**
     * value: "range"
     * @const
     */
    "range": "range",
    /**
     * value: "gte"
     * @const
     */
    "gte": "gte",
    /**
     * value: "gt"
     * @const
     */
    "gt": "gt",
    /**
     * value: "lte"
     * @const
     */
    "lte": "lte",
    /**
     * value: "lt"
     * @const
     */
    "lt": "lt"  };


  return exports;
}));


