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
    define(['../ApiClient', '../model/CustomFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFile'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.CreateCustomFileResponse = factory(root.DocSpring.ApiClient, root.DocSpring.CustomFile);
  }
}(this, function(ApiClient, CustomFile) {
  'use strict';




  /**
   * The CreateCustomFileResponse model module.
   * @module model/CreateCustomFileResponse
   * @version 1.3.2
   */

  /**
   * Constructs a new <code>CreateCustomFileResponse</code>.
   * @alias module:model/CreateCustomFileResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CreateCustomFileResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCustomFileResponse} obj Optional instance to populate.
   * @return {module:model/CreateCustomFileResponse} The populated <code>CreateCustomFileResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('custom_file')) {
        obj['custom_file'] = CustomFile.constructFromObject(data['custom_file']);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CustomFile} custom_file
   */
  exports.prototype['custom_file'] = undefined;
  /**
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {module:model/CreateCustomFileResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


