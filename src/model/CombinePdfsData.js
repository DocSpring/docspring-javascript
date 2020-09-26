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
    root.DocSpring.CombinePdfsData = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CombinePdfsData model module.
   * @module model/CombinePdfsData
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>CombinePdfsData</code>.
   * @alias module:model/CombinePdfsData
   * @class
   * @param sourcePdfs {Array.<Object>} 
   */
  var exports = function(sourcePdfs) {
    var _this = this;




    _this['source_pdfs'] = sourcePdfs;

  };

  /**
   * Constructs a <code>CombinePdfsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombinePdfsData} obj Optional instance to populate.
   * @return {module:model/CombinePdfsData} The populated <code>CombinePdfsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('delete_custom_files')) {
        obj['delete_custom_files'] = ApiClient.convertToType(data['delete_custom_files'], 'Boolean');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('source_pdfs')) {
        obj['source_pdfs'] = ApiClient.convertToType(data['source_pdfs'], [Object]);
      }
      if (data.hasOwnProperty('test')) {
        obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} delete_custom_files
   */
  exports.prototype['delete_custom_files'] = undefined;
  /**
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Array.<Object>} source_pdfs
   */
  exports.prototype['source_pdfs'] = undefined;
  /**
   * @member {Boolean} test
   */
  exports.prototype['test'] = undefined;



  return exports;
}));


