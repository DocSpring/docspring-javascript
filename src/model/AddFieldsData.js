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
    define(['../ApiClient', '../model/TemplatestemplateIdaddFieldsFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplatestemplateIdaddFieldsFields'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.AddFieldsData = factory(root.DocSpring.ApiClient, root.DocSpring.TemplatestemplateIdaddFieldsFields);
  }
}(this, function(ApiClient, TemplatestemplateIdaddFieldsFields) {
  'use strict';




  /**
   * The AddFieldsData model module.
   * @module model/AddFieldsData
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>AddFieldsData</code>.
   * @alias module:model/AddFieldsData
   * @class
   * @param fields {Array.<module:model/TemplatestemplateIdaddFieldsFields>} 
   */
  var exports = function(fields) {
    var _this = this;

    _this['fields'] = fields;
  };

  /**
   * Constructs a <code>AddFieldsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddFieldsData} obj Optional instance to populate.
   * @return {module:model/AddFieldsData} The populated <code>AddFieldsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [TemplatestemplateIdaddFieldsFields]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/TemplatestemplateIdaddFieldsFields>} fields
   */
  exports.prototype['fields'] = undefined;



  return exports;
}));


