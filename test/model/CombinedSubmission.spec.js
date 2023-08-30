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
    instance = new DocSpring.CombinedSubmission();
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

  describe('CombinedSubmission', function() {
    it('should create an instance of CombinedSubmission', function() {
      // uncomment below and update the code to test CombinedSubmission
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be.a(DocSpring.CombinedSubmission);
    });

    it('should have the property errorMessage (base name: "error_message")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property expired (base name: "expired")', function() {
      // uncomment below and update the code to test the property expired
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property sourcePdfs (base name: "source_pdfs")', function() {
      // uncomment below and update the code to test the property sourcePdfs
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property pdfHash (base name: "pdf_hash")', function() {
      // uncomment below and update the code to test the property pdfHash
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property downloadUrl (base name: "download_url")', function() {
      // uncomment below and update the code to test the property downloadUrl
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property submissionIds (base name: "submission_ids")', function() {
      // uncomment below and update the code to test the property submissionIds
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property expiresIn (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expiresIn
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instance = new DocSpring.CombinedSubmission();
      //expect(instance).to.be();
    });

  });

}));
