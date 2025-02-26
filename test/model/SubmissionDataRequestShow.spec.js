/**
 * DocSpring API
 * DocSpring provides an API that helps you fill out and sign PDF templates.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DocSpring);
  }
}(this, function(expect, DocSpring) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DocSpring.SubmissionDataRequestShow();
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

  describe('SubmissionDataRequestShow', function() {
    it('should create an instance of SubmissionDataRequestShow', function() {
      // uncomment below and update the code to test SubmissionDataRequestShow
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be.a(DocSpring.SubmissionDataRequestShow);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property sortOrder (base name: "sort_order")', function() {
      // uncomment below and update the code to test the property sortOrder
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property viewedAt (base name: "viewed_at")', function() {
      // uncomment below and update the code to test the property viewedAt
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property completedAt (base name: "completed_at")', function() {
      // uncomment below and update the code to test the property completedAt
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property authType (base name: "auth_type")', function() {
      // uncomment below and update the code to test the property authType
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property authSecondFactorType (base name: "auth_second_factor_type")', function() {
      // uncomment below and update the code to test the property authSecondFactorType
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property authProvider (base name: "auth_provider")', function() {
      // uncomment below and update the code to test the property authProvider
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property authSessionStartedAt (base name: "auth_session_started_at")', function() {
      // uncomment below and update the code to test the property authSessionStartedAt
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property authSessionIdHash (base name: "auth_session_id_hash")', function() {
      // uncomment below and update the code to test the property authSessionIdHash
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property authUserIdHash (base name: "auth_user_id_hash")', function() {
      // uncomment below and update the code to test the property authUserIdHash
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property authUsernameHash (base name: "auth_username_hash")', function() {
      // uncomment below and update the code to test the property authUsernameHash
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property authPhoneNumberHash (base name: "auth_phone_number_hash")', function() {
      // uncomment below and update the code to test the property authPhoneNumberHash
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ip_address")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property userAgent (base name: "user_agent")', function() {
      // uncomment below and update the code to test the property userAgent
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

    it('should have the property submissionId (base name: "submission_id")', function() {
      // uncomment below and update the code to test the property submissionId
      //var instance = new DocSpring.SubmissionDataRequestShow();
      //expect(instance).to.be();
    });

  });

}));
