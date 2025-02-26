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
    instance = new DocSpring.CreateSubmissionDataRequestData();
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

  describe('CreateSubmissionDataRequestData', function() {
    it('should create an instance of CreateSubmissionDataRequestData', function() {
      // uncomment below and update the code to test CreateSubmissionDataRequestData
      //var instance = new DocSpring.CreateSubmissionDataRequestData();
      //expect(instance).to.be.a(DocSpring.CreateSubmissionDataRequestData);
    });

    it('should have the property authSecondFactorType (base name: "auth_second_factor_type")', function() {
      // uncomment below and update the code to test the property authSecondFactorType
      //var instance = new DocSpring.CreateSubmissionDataRequestData();
      //expect(instance).to.be();
    });

    it('should have the property authType (base name: "auth_type")', function() {
      // uncomment below and update the code to test the property authType
      //var instance = new DocSpring.CreateSubmissionDataRequestData();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new DocSpring.CreateSubmissionDataRequestData();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new DocSpring.CreateSubmissionDataRequestData();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new DocSpring.CreateSubmissionDataRequestData();
      //expect(instance).to.be();
    });

  });

}));
