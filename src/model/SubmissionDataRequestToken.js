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
 * The SubmissionDataRequestToken model module.
 * @module model/SubmissionDataRequestToken
 * @version 2.0.0
 */
class SubmissionDataRequestToken {
    /**
     * Constructs a new <code>SubmissionDataRequestToken</code>.
     * @alias module:model/SubmissionDataRequestToken
     * @param id {String} 
     * @param secret {String} 
     * @param expiresAt {String} 
     * @param dataRequestUrl {String} 
     */
    constructor(id, secret, expiresAt, dataRequestUrl) { 
        
        SubmissionDataRequestToken.initialize(this, id, secret, expiresAt, dataRequestUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, secret, expiresAt, dataRequestUrl) { 
        obj['id'] = id;
        obj['secret'] = secret;
        obj['expires_at'] = expiresAt;
        obj['data_request_url'] = dataRequestUrl;
    }

    /**
     * Constructs a <code>SubmissionDataRequestToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmissionDataRequestToken} obj Optional instance to populate.
     * @return {module:model/SubmissionDataRequestToken} The populated <code>SubmissionDataRequestToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmissionDataRequestToken();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
            if (data.hasOwnProperty('data_request_url')) {
                obj['data_request_url'] = ApiClient.convertToType(data['data_request_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmissionDataRequestToken</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmissionDataRequestToken</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubmissionDataRequestToken.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // ensure the json data is a string
        if (data['expires_at'] && !(typeof data['expires_at'] === 'string' || data['expires_at'] instanceof String)) {
            throw new Error("Expected the field `expires_at` to be a primitive type in the JSON string but got " + data['expires_at']);
        }
        // ensure the json data is a string
        if (data['data_request_url'] && !(typeof data['data_request_url'] === 'string' || data['data_request_url'] instanceof String)) {
            throw new Error("Expected the field `data_request_url` to be a primitive type in the JSON string but got " + data['data_request_url']);
        }

        return true;
    }


}

SubmissionDataRequestToken.RequiredProperties = ["id", "secret", "expires_at", "data_request_url"];

/**
 * @member {String} id
 */
SubmissionDataRequestToken.prototype['id'] = undefined;

/**
 * @member {String} secret
 */
SubmissionDataRequestToken.prototype['secret'] = undefined;

/**
 * @member {String} expires_at
 */
SubmissionDataRequestToken.prototype['expires_at'] = undefined;

/**
 * @member {String} data_request_url
 */
SubmissionDataRequestToken.prototype['data_request_url'] = undefined;






export default SubmissionDataRequestToken;

