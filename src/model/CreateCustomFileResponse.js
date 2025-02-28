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
import CustomFile from './CustomFile';

/**
 * The CreateCustomFileResponse model module.
 * @module model/CreateCustomFileResponse
 * @version 2.0.0
 */
class CreateCustomFileResponse {
    /**
     * Constructs a new <code>CreateCustomFileResponse</code>.
     * @alias module:model/CreateCustomFileResponse
     * @param status {module:model/CreateCustomFileResponse.StatusEnum} 
     * @param customFile {module:model/CustomFile} 
     */
    constructor(status, customFile) { 
        
        CreateCustomFileResponse.initialize(this, status, customFile);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, customFile) { 
        obj['status'] = status;
        obj['custom_file'] = customFile;
    }

    /**
     * Constructs a <code>CreateCustomFileResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCustomFileResponse} obj Optional instance to populate.
     * @return {module:model/CreateCustomFileResponse} The populated <code>CreateCustomFileResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCustomFileResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('custom_file')) {
                obj['custom_file'] = CustomFile.constructFromObject(data['custom_file']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCustomFileResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCustomFileResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateCustomFileResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `custom_file`
        if (data['custom_file']) { // data not null
          CustomFile.validateJSON(data['custom_file']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }

        return true;
    }


}

CreateCustomFileResponse.RequiredProperties = ["status", "custom_file"];

/**
 * @member {module:model/CreateCustomFileResponse.StatusEnum} status
 */
CreateCustomFileResponse.prototype['status'] = undefined;

/**
 * @member {module:model/CustomFile} custom_file
 */
CreateCustomFileResponse.prototype['custom_file'] = undefined;

/**
 * @member {Array.<String>} errors
 */
CreateCustomFileResponse.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CreateCustomFileResponse['StatusEnum'] = {

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



export default CreateCustomFileResponse;

