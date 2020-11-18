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
    define(['../ApiClient', '../model/CreateSubmissionBatchSubmissionsResponse', '../model/SubmissionBatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateSubmissionBatchSubmissionsResponse'), require('./SubmissionBatch'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.CreateSubmissionBatchResponse = factory(root.DocSpring.ApiClient, root.DocSpring.CreateSubmissionBatchSubmissionsResponse, root.DocSpring.SubmissionBatch);
  }
}(this, function(ApiClient, CreateSubmissionBatchSubmissionsResponse, SubmissionBatch) {
  'use strict';




  /**
   * The CreateSubmissionBatchResponse model module.
   * @module model/CreateSubmissionBatchResponse
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>CreateSubmissionBatchResponse</code>.
   * @alias module:model/CreateSubmissionBatchResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CreateSubmissionBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSubmissionBatchResponse} obj Optional instance to populate.
   * @return {module:model/CreateSubmissionBatchResponse} The populated <code>CreateSubmissionBatchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('submission_batch')) {
        obj['submission_batch'] = SubmissionBatch.constructFromObject(data['submission_batch']);
      }
      if (data.hasOwnProperty('submissions')) {
        obj['submissions'] = ApiClient.convertToType(data['submissions'], [CreateSubmissionBatchSubmissionsResponse]);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
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
   * @member {module:model/SubmissionBatch} submission_batch
   */
  exports.prototype['submission_batch'] = undefined;
  /**
   * @member {Array.<module:model/CreateSubmissionBatchSubmissionsResponse>} submissions
   */
  exports.prototype['submissions'] = undefined;
  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {module:model/CreateSubmissionBatchResponse.StatusEnum} status
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


