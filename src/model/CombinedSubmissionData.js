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
    root.DocSpring.CombinedSubmissionData = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CombinedSubmissionData model module.
   * @module model/CombinedSubmissionData
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>CombinedSubmissionData</code>.
   * @alias module:model/CombinedSubmissionData
   * @class
   * @param submissionIds {Array.<String>} 
   */
  var exports = function(submissionIds) {
    var _this = this;




    _this['submission_ids'] = submissionIds;

  };

  /**
   * Constructs a <code>CombinedSubmissionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombinedSubmissionData} obj Optional instance to populate.
   * @return {module:model/CombinedSubmissionData} The populated <code>CombinedSubmissionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('submission_ids')) {
        obj['submission_ids'] = ApiClient.convertToType(data['submission_ids'], ['String']);
      }
      if (data.hasOwnProperty('test')) {
        obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Array.<String>} submission_ids
   */
  exports.prototype['submission_ids'] = undefined;
  /**
   * @member {Boolean} test
   */
  exports.prototype['test'] = undefined;



  return exports;
}));


