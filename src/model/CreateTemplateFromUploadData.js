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
    define(['../ApiClient', '../model/UploadTemplateData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UploadTemplateData'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.CreateTemplateFromUploadData = factory(root.DocSpring.ApiClient, root.DocSpring.UploadTemplateData);
  }
}(this, function(ApiClient, UploadTemplateData) {
  'use strict';




  /**
   * The CreateTemplateFromUploadData model module.
   * @module model/CreateTemplateFromUploadData
   * @version 1.3.2
   */

  /**
   * Constructs a new <code>CreateTemplateFromUploadData</code>.
   * @alias module:model/CreateTemplateFromUploadData
   * @class
   * @param template {module:model/UploadTemplateData} 
   */
  var exports = function(template) {
    var _this = this;

    _this['template'] = template;
  };

  /**
   * Constructs a <code>CreateTemplateFromUploadData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTemplateFromUploadData} obj Optional instance to populate.
   * @return {module:model/CreateTemplateFromUploadData} The populated <code>CreateTemplateFromUploadData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('template')) {
        obj['template'] = UploadTemplateData.constructFromObject(data['template']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UploadTemplateData} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));


