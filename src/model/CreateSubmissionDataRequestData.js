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
 * The CreateSubmissionDataRequestData model module.
 * @module model/CreateSubmissionDataRequestData
 * @version 2.0.0
 */
class CreateSubmissionDataRequestData {
    /**
     * Constructs a new <code>CreateSubmissionDataRequestData</code>.
     * @alias module:model/CreateSubmissionDataRequestData
     */
    constructor() { 
        
        CreateSubmissionDataRequestData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateSubmissionDataRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSubmissionDataRequestData} obj Optional instance to populate.
     * @return {module:model/CreateSubmissionDataRequestData} The populated <code>CreateSubmissionDataRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSubmissionDataRequestData();

            if (data.hasOwnProperty('auth_second_factor_type')) {
                obj['auth_second_factor_type'] = ApiClient.convertToType(data['auth_second_factor_type'], 'String');
            }
            if (data.hasOwnProperty('auth_type')) {
                obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSubmissionDataRequestData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSubmissionDataRequestData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['auth_second_factor_type'] && !(typeof data['auth_second_factor_type'] === 'string' || data['auth_second_factor_type'] instanceof String)) {
            throw new Error("Expected the field `auth_second_factor_type` to be a primitive type in the JSON string but got " + data['auth_second_factor_type']);
        }
        // ensure the json data is a string
        if (data['auth_type'] && !(typeof data['auth_type'] === 'string' || data['auth_type'] instanceof String)) {
            throw new Error("Expected the field `auth_type` to be a primitive type in the JSON string but got " + data['auth_type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['fields'])) {
            throw new Error("Expected the field `fields` to be an array in the JSON data but got " + data['fields']);
        }

        return true;
    }


}



/**
 * @member {module:model/CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum} auth_second_factor_type
 */
CreateSubmissionDataRequestData.prototype['auth_second_factor_type'] = undefined;

/**
 * @member {module:model/CreateSubmissionDataRequestData.AuthTypeEnum} auth_type
 */
CreateSubmissionDataRequestData.prototype['auth_type'] = undefined;

/**
 * @member {Array.<String>} fields
 */
CreateSubmissionDataRequestData.prototype['fields'] = undefined;

/**
 * @member {Object} metadata
 */
CreateSubmissionDataRequestData.prototype['metadata'] = undefined;

/**
 * @member {Number} order
 */
CreateSubmissionDataRequestData.prototype['order'] = undefined;





/**
 * Allowed values for the <code>auth_second_factor_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateSubmissionDataRequestData['AuthSecondFactorTypeEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "phone_number"
     * @const
     */
    "phone_number": "phone_number",

    /**
     * value: "totp"
     * @const
     */
    "totp": "totp",

    /**
     * value: "mobile_push"
     * @const
     */
    "mobile_push": "mobile_push",

    /**
     * value: "security_key"
     * @const
     */
    "security_key": "security_key",

    /**
     * value: "fingerprint"
     * @const
     */
    "fingerprint": "fingerprint"
};


/**
 * Allowed values for the <code>auth_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateSubmissionDataRequestData['AuthTypeEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "password"
     * @const
     */
    "password": "password",

    /**
     * value: "oauth"
     * @const
     */
    "oauth": "oauth",

    /**
     * value: "email_link"
     * @const
     */
    "email_link": "email_link",

    /**
     * value: "phone_number"
     * @const
     */
    "phone_number": "phone_number",

    /**
     * value: "ldap"
     * @const
     */
    "ldap": "ldap",

    /**
     * value: "saml"
     * @const
     */
    "saml": "saml"
};



export default CreateSubmissionDataRequestData;

