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
    instance = new DocSpring.CreateSubmissionDataRequestEventResponse();
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

  describe('CreateSubmissionDataRequestEventResponse', function() {
    it('should create an instance of CreateSubmissionDataRequestEventResponse', function() {
      // uncomment below and update the code to test CreateSubmissionDataRequestEventResponse
      //var instance = new DocSpring.CreateSubmissionDataRequestEventResponse();
      //expect(instance).to.be.a(DocSpring.CreateSubmissionDataRequestEventResponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new DocSpring.CreateSubmissionDataRequestEventResponse();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instance = new DocSpring.CreateSubmissionDataRequestEventResponse();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new DocSpring.CreateSubmissionDataRequestEventResponse();
      //expect(instance).to.be();
    });

  });

}));
