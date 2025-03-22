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

import ApiClient from '../ApiClient';

/**
 * The CreateHtmlSubmissionData model module.
 * @module model/CreateHtmlSubmissionData
 * @version 2.1.0
 */
class CreateHtmlSubmissionData {
    /**
     * Constructs a new <code>CreateHtmlSubmissionData</code>.
     * @alias module:model/CreateHtmlSubmissionData
     */
    constructor() { 
        
        CreateHtmlSubmissionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateHtmlSubmissionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateHtmlSubmissionData} obj Optional instance to populate.
     * @return {module:model/CreateHtmlSubmissionData} The populated <code>CreateHtmlSubmissionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateHtmlSubmissionData();

            if (data.hasOwnProperty('css')) {
                obj['css'] = ApiClient.convertToType(data['css'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
            }
            if (data.hasOwnProperty('field_overrides')) {
                obj['field_overrides'] = ApiClient.convertToType(data['field_overrides'], Object);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('test')) {
                obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateHtmlSubmissionData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateHtmlSubmissionData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['css'] && !(typeof data['css'] === 'string' || data['css'] instanceof String)) {
            throw new Error("Expected the field `css` to be a primitive type in the JSON string but got " + data['css']);
        }
        // ensure the json data is a string
        if (data['html'] && !(typeof data['html'] === 'string' || data['html'] instanceof String)) {
            throw new Error("Expected the field `html` to be a primitive type in the JSON string but got " + data['html']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }

        return true;
    }


}



/**
 * @member {String} css
 */
CreateHtmlSubmissionData.prototype['css'] = undefined;

/**
 * @member {Object} data
 */
CreateHtmlSubmissionData.prototype['data'] = undefined;

/**
 * @member {Boolean} editable
 */
CreateHtmlSubmissionData.prototype['editable'] = undefined;

/**
 * @member {Number} expires_in
 */
CreateHtmlSubmissionData.prototype['expires_in'] = undefined;

/**
 * @member {Object} field_overrides
 */
CreateHtmlSubmissionData.prototype['field_overrides'] = undefined;

/**
 * @member {String} html
 */
CreateHtmlSubmissionData.prototype['html'] = undefined;

/**
 * @member {Object} metadata
 */
CreateHtmlSubmissionData.prototype['metadata'] = undefined;

/**
 * @member {String} password
 */
CreateHtmlSubmissionData.prototype['password'] = undefined;

/**
 * @member {Boolean} test
 */
CreateHtmlSubmissionData.prototype['test'] = undefined;

/**
 * @member {String} version
 */
CreateHtmlSubmissionData.prototype['version'] = undefined;






export default CreateHtmlSubmissionData;

