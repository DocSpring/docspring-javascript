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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DocSpring);
  }
}(this, function(expect, DocSpring) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DocSpring.UploadTemplateData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UploadTemplateData', function() {
    it('should create an instance of UploadTemplateData', function() {
      // uncomment below and update the code to test UploadTemplateData
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be.a(DocSpring.UploadTemplateData);
    });

    it('should have the property expirationInterval (base name: "expiration_interval")', function() {
      // uncomment below and update the code to test the property expirationInterval
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property webhookUrl (base name: "webhook_url")', function() {
      // uncomment below and update the code to test the property webhookUrl
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property scss (base name: "scss")', function() {
      // uncomment below and update the code to test the property scss
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property allowAdditionalProperties (base name: "allow_additional_properties")', function() {
      // uncomment below and update the code to test the property allowAdditionalProperties
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property expireAfter (base name: "expire_after")', function() {
      // uncomment below and update the code to test the property expireAfter
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property publicSubmissions (base name: "public_submissions")', function() {
      // uncomment below and update the code to test the property publicSubmissions
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property slackWebhookUrl (base name: "slack_webhook_url")', function() {
      // uncomment below and update the code to test the property slackWebhookUrl
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property headerHtml (base name: "header_html")', function() {
      // uncomment below and update the code to test the property headerHtml
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property publicWebForm (base name: "public_web_form")', function() {
      // uncomment below and update the code to test the property publicWebForm
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property editableSubmissions (base name: "editable_submissions")', function() {
      // uncomment below and update the code to test the property editableSubmissions
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property expireSubmissions (base name: "expire_submissions")', function() {
      // uncomment below and update the code to test the property expireSubmissions
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property footerHtml (base name: "footer_html")', function() {
      // uncomment below and update the code to test the property footerHtml
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property html (base name: "html")', function() {
      // uncomment below and update the code to test the property html
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property templateType (base name: "template_type")', function() {
      // uncomment below and update the code to test the property templateType
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property redirectUrl (base name: "redirect_url")', function() {
      // uncomment below and update the code to test the property redirectUrl
      //var instance = new DocSpring.UploadTemplateData();
      //expect(instance).to.be();
    });

  });

}));
