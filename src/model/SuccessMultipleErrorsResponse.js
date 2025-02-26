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
 * The SuccessMultipleErrorsResponse model module.
 * @module model/SuccessMultipleErrorsResponse
 * @version 2.0.0
 */
class SuccessMultipleErrorsResponse {
    /**
     * Constructs a new <code>SuccessMultipleErrorsResponse</code>.
     * @alias module:model/SuccessMultipleErrorsResponse
     * @param status {module:model/SuccessMultipleErrorsResponse.StatusEnum} 
     */
    constructor(status) { 
        
        SuccessMultipleErrorsResponse.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>SuccessMultipleErrorsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessMultipleErrorsResponse} obj Optional instance to populate.
     * @return {module:model/SuccessMultipleErrorsResponse} The populated <code>SuccessMultipleErrorsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessMultipleErrorsResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SuccessMultipleErrorsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SuccessMultipleErrorsResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SuccessMultipleErrorsResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }

        return true;
    }


}

SuccessMultipleErrorsResponse.RequiredProperties = ["status"];

/**
 * @member {module:model/SuccessMultipleErrorsResponse.StatusEnum} status
 */
SuccessMultipleErrorsResponse.prototype['status'] = undefined;

/**
 * @member {Array.<String>} errors
 */
SuccessMultipleErrorsResponse.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SuccessMultipleErrorsResponse['StatusEnum'] = {

    /**
     * value: "success"
     * @const
     */
    "success": "success",

    /**
     * value: "error"
     * @const
     */
    "error": "error"
};



export default SuccessMultipleErrorsResponse;

