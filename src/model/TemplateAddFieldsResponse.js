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
 * The TemplateAddFieldsResponse model module.
 * @module model/TemplateAddFieldsResponse
 * @version 2.0.0
 */
class TemplateAddFieldsResponse {
    /**
     * Constructs a new <code>TemplateAddFieldsResponse</code>.
     * @alias module:model/TemplateAddFieldsResponse
     * @param status {module:model/TemplateAddFieldsResponse.StatusEnum} 
     */
    constructor(status) { 
        
        TemplateAddFieldsResponse.initialize(this, status);
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
     * Constructs a <code>TemplateAddFieldsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateAddFieldsResponse} obj Optional instance to populate.
     * @return {module:model/TemplateAddFieldsResponse} The populated <code>TemplateAddFieldsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateAddFieldsResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('new_field_ids')) {
                obj['new_field_ids'] = ApiClient.convertToType(data['new_field_ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateAddFieldsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateAddFieldsResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TemplateAddFieldsResponse.RequiredProperties) {
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
        // ensure the json data is an array
        if (!Array.isArray(data['new_field_ids'])) {
            throw new Error("Expected the field `new_field_ids` to be an array in the JSON data but got " + data['new_field_ids']);
        }

        return true;
    }


}

TemplateAddFieldsResponse.RequiredProperties = ["status"];

/**
 * @member {module:model/TemplateAddFieldsResponse.StatusEnum} status
 */
TemplateAddFieldsResponse.prototype['status'] = undefined;

/**
 * @member {Array.<String>} errors
 */
TemplateAddFieldsResponse.prototype['errors'] = undefined;

/**
 * @member {Array.<Number>} new_field_ids
 */
TemplateAddFieldsResponse.prototype['new_field_ids'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TemplateAddFieldsResponse['StatusEnum'] = {

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



export default TemplateAddFieldsResponse;

