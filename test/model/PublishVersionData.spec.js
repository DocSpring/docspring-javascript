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
    instance = new DocSpring.PublishVersionData();
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

  describe('PublishVersionData', function() {
    it('should create an instance of PublishVersionData', function() {
      // uncomment below and update the code to test PublishVersionData
      //var instance = new DocSpring.PublishVersionData();
      //expect(instance).to.be.a(DocSpring.PublishVersionData);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DocSpring.PublishVersionData();
      //expect(instance).to.be();
    });

    it('should have the property versionType (base name: "version_type")', function() {
      // uncomment below and update the code to test the property versionType
      //var instance = new DocSpring.PublishVersionData();
      //expect(instance).to.be();
    });

  });

}));
