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
    root.DocSpring.SubmissionBatch = factory(root.DocSpring.ApiClient, root.DocSpring.Submission);
  }
}(this, function(ApiClient, Submission) {
  'use strict';




  /**
   * The SubmissionBatch model module.
   * @module model/SubmissionBatch
   * @version 1.3.2
   */

  /**
   * Constructs a new <code>SubmissionBatch</code>.
   * @alias module:model/SubmissionBatch
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>SubmissionBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubmissionBatch} obj Optional instance to populate.
   * @return {module:model/SubmissionBatch} The populated <code>SubmissionBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pending_count')) {
        obj['pending_count'] = ApiClient.convertToType(data['pending_count'], 'Number');
      }
      if (data.hasOwnProperty('completion_percentage')) {
        obj['completion_percentage'] = ApiClient.convertToType(data['completion_percentage'], 'Number');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
      }
      if (data.hasOwnProperty('submissions')) {
        obj['submissions'] = ApiClient.convertToType(data['submissions'], [Submission]);
      }
      if (data.hasOwnProperty('processed_at')) {
        obj['processed_at'] = ApiClient.convertToType(data['processed_at'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('error_count')) {
        obj['error_count'] = ApiClient.convertToType(data['error_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} pending_count
   */
  exports.prototype['pending_count'] = undefined;
  /**
   * @member {Number} completion_percentage
   */
  exports.prototype['completion_percentage'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;
  /**
   * @member {Array.<module:model/Submission>} submissions
   */
  exports.prototype['submissions'] = undefined;
  /**
   * @member {String} processed_at
   */
  exports.prototype['processed_at'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/SubmissionBatch.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Number} error_count
   */
  exports.prototype['error_count'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "processed"
     * @const
     */
    "processed": "processed",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


