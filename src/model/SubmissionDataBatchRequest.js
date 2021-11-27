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
    root.DocSpring.SubmissionDataBatchRequest = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SubmissionDataBatchRequest model module.
   * @module model/SubmissionDataBatchRequest
   * @version 1.3.2
   */

  /**
   * Constructs a new <code>SubmissionDataBatchRequest</code>.
   * @alias module:model/SubmissionDataBatchRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SubmissionDataBatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubmissionDataBatchRequest} obj Optional instance to populate.
   * @return {module:model/SubmissionDataBatchRequest} The populated <code>SubmissionDataBatchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('css')) {
        obj['css'] = ApiClient.convertToType(data['css'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('test')) {
        obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
      if (data.hasOwnProperty('template_id')) {
        obj['template_id'] = ApiClient.convertToType(data['template_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} css
   */
  exports.prototype['css'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Boolean} test
   */
  exports.prototype['test'] = undefined;
  /**
   * @member {String} html
   */
  exports.prototype['html'] = undefined;
  /**
   * @member {String} template_id
   */
  exports.prototype['template_id'] = undefined;



  return exports;
}));


