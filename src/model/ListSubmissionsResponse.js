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
    define(['../ApiClient', '../model/Submission'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Submission'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.ListSubmissionsResponse = factory(root.DocSpring.ApiClient, root.DocSpring.Submission);
  }
}(this, function(ApiClient, Submission) {
  'use strict';




  /**
   * The ListSubmissionsResponse model module.
   * @module model/ListSubmissionsResponse
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>ListSubmissionsResponse</code>.
   * @alias module:model/ListSubmissionsResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ListSubmissionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSubmissionsResponse} obj Optional instance to populate.
   * @return {module:model/ListSubmissionsResponse} The populated <code>ListSubmissionsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('next_cursor')) {
        obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
      }
      if (data.hasOwnProperty('submissions')) {
        obj['submissions'] = ApiClient.convertToType(data['submissions'], [Submission]);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} next_cursor
   */
  exports.prototype['next_cursor'] = undefined;
  /**
   * @member {Array.<module:model/Submission>} submissions
   */
  exports.prototype['submissions'] = undefined;
  /**
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;



  return exports;
}));


