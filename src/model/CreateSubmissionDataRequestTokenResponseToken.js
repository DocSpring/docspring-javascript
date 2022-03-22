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
    root.DocSpring.CreateSubmissionDataRequestTokenResponseToken = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateSubmissionDataRequestTokenResponseToken model module.
   * @module model/CreateSubmissionDataRequestTokenResponseToken
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>CreateSubmissionDataRequestTokenResponseToken</code>.
   * @alias module:model/CreateSubmissionDataRequestTokenResponseToken
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CreateSubmissionDataRequestTokenResponseToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSubmissionDataRequestTokenResponseToken} obj Optional instance to populate.
   * @return {module:model/CreateSubmissionDataRequestTokenResponseToken} The populated <code>CreateSubmissionDataRequestTokenResponseToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expires_at')) {
        obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
      if (data.hasOwnProperty('data_request_url')) {
        obj['data_request_url'] = ApiClient.convertToType(data['data_request_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} expires_at
   */
  exports.prototype['expires_at'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;
  /**
   * @member {String} data_request_url
   */
  exports.prototype['data_request_url'] = undefined;



  return exports;
}));


