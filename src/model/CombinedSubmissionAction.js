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
    root.DocSpring.CombinedSubmissionAction = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CombinedSubmissionAction model module.
   * @module model/CombinedSubmissionAction
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>CombinedSubmissionAction</code>.
   * @alias module:model/CombinedSubmissionAction
   * @class
   * @param id {String} 
   * @param integrationId {String} 
   * @param state {module:model/CombinedSubmissionAction.StateEnum} 
   * @param actionCategory {module:model/CombinedSubmissionAction.ActionCategoryEnum} 
   * @param actionType {module:model/CombinedSubmissionAction.ActionTypeEnum} 
   * @param resultData {Object} 
   */
  var exports = function(id, integrationId, state, actionCategory, actionType, resultData) {
    var _this = this;

    _this['id'] = id;
    _this['integration_id'] = integrationId;
    _this['state'] = state;
    _this['action_category'] = actionCategory;
    _this['action_type'] = actionType;
    _this['result_data'] = resultData;
  };

  /**
   * Constructs a <code>CombinedSubmissionAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombinedSubmissionAction} obj Optional instance to populate.
   * @return {module:model/CombinedSubmissionAction} The populated <code>CombinedSubmissionAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('integration_id')) {
        obj['integration_id'] = ApiClient.convertToType(data['integration_id'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('action_category')) {
        obj['action_category'] = ApiClient.convertToType(data['action_category'], 'String');
      }
      if (data.hasOwnProperty('action_type')) {
        obj['action_type'] = ApiClient.convertToType(data['action_type'], 'String');
      }
      if (data.hasOwnProperty('result_data')) {
        obj['result_data'] = ApiClient.convertToType(data['result_data'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} integration_id
   */
  exports.prototype['integration_id'] = undefined;
  /**
   * @member {module:model/CombinedSubmissionAction.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/CombinedSubmissionAction.ActionCategoryEnum} action_category
   */
  exports.prototype['action_category'] = undefined;
  /**
   * @member {module:model/CombinedSubmissionAction.ActionTypeEnum} action_type
   */
  exports.prototype['action_type'] = undefined;
  /**
   * @member {Object} result_data
   */
  exports.prototype['result_data'] = undefined;


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
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };

  /**
   * Allowed values for the <code>action_category</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionCategoryEnum = {
    /**
     * value: "notification"
     * @const
     */
    "notification": "notification",
    /**
     * value: "file_upload"
     * @const
     */
    "file_upload": "file_upload"  };

  /**
   * Allowed values for the <code>action_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionTypeEnum = {
    /**
     * value: "webhook"
     * @const
     */
    "webhook": "webhook",
    /**
     * value: "slack_webhook"
     * @const
     */
    "slack_webhook": "slack_webhook",
    /**
     * value: "email"
     * @const
     */
    "email": "email",
    /**
     * value: "aws_s3_upload"
     * @const
     */
    "aws_s3_upload": "aws_s3_upload"  };


  return exports;
}));


