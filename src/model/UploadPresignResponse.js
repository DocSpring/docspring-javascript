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
 * The UploadPresignResponse model module.
 * @module model/UploadPresignResponse
 * @version 2.0.0
 */
class UploadPresignResponse {
    /**
     * Constructs a new <code>UploadPresignResponse</code>.
     * @alias module:model/UploadPresignResponse
     * @param fields {Object} 
     * @param headers {Object} 
     * @param url {String} 
     */
    constructor(fields, headers, url) { 
        
        UploadPresignResponse.initialize(this, fields, headers, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fields, headers, url) { 
        obj['fields'] = fields;
        obj['headers'] = headers;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>UploadPresignResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadPresignResponse} obj Optional instance to populate.
     * @return {module:model/UploadPresignResponse} The populated <code>UploadPresignResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadPresignResponse();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], Object);
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], Object);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadPresignResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadPresignResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UploadPresignResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }

        return true;
    }


}

UploadPresignResponse.RequiredProperties = ["fields", "headers", "url"];

/**
 * @member {Object} fields
 */
UploadPresignResponse.prototype['fields'] = undefined;

/**
 * @member {Object} headers
 */
UploadPresignResponse.prototype['headers'] = undefined;

/**
 * @member {String} url
 */
UploadPresignResponse.prototype['url'] = undefined;

/**
 * @member {module:model/UploadPresignResponse.MethodEnum} method
 */
UploadPresignResponse.prototype['method'] = undefined;





/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
UploadPresignResponse['MethodEnum'] = {

    /**
     * value: "post"
     * @const
     */
    "post": "post"
};



export default UploadPresignResponse;

