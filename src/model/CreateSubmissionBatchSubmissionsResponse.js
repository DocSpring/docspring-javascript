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
    root.DocSpring.CreateSubmissionBatchSubmissionsResponse = factory(root.DocSpring.ApiClient, root.DocSpring.Submission);
  }
}(this, function(ApiClient, Submission) {
  'use strict';




  /**
   * The CreateSubmissionBatchSubmissionsResponse model module.
   * @module model/CreateSubmissionBatchSubmissionsResponse
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>CreateSubmissionBatchSubmissionsResponse</code>.
   * @alias module:model/CreateSubmissionBatchSubmissionsResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CreateSubmissionBatchSubmissionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSubmissionBatchSubmissionsResponse} obj Optional instance to populate.
   * @return {module:model/CreateSubmissionBatchSubmissionsResponse} The populated <code>CreateSubmissionBatchSubmissionsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('submission')) {
        obj['submission'] = Submission.constructFromObject(data['submission']);
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
   * @member {module:model/Submission} submission
   */
  exports.prototype['submission'] = undefined;
  /**
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {module:model/CreateSubmissionBatchSubmissionsResponse.StatusEnum} status
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
    "error": "error",
    /**
     * value: "valid_but_not_saved"
     * @const
     */
    "valid_but_not_saved": "valid_but_not_saved"  };


  return exports;
}));


