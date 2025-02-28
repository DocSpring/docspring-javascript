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
import SubmissionPreview from './SubmissionPreview';

/**
 * The CreateSubmissionResponse model module.
 * @module model/CreateSubmissionResponse
 * @version 2.0.0
 */
class CreateSubmissionResponse {
    /**
     * Constructs a new <code>CreateSubmissionResponse</code>.
     * @alias module:model/CreateSubmissionResponse
     * @param status {module:model/CreateSubmissionResponse.StatusEnum} 
     * @param submission {module:model/SubmissionPreview} 
     */
    constructor(status, submission) { 
        
        CreateSubmissionResponse.initialize(this, status, submission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, submission) { 
        obj['status'] = status;
        obj['submission'] = submission;
    }

    /**
     * Constructs a <code>CreateSubmissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSubmissionResponse} obj Optional instance to populate.
     * @return {module:model/CreateSubmissionResponse} The populated <code>CreateSubmissionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSubmissionResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('submission')) {
                obj['submission'] = SubmissionPreview.constructFromObject(data['submission']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSubmissionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSubmissionResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSubmissionResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `submission`
        if (data['submission']) { // data not null
          SubmissionPreview.validateJSON(data['submission']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }

        return true;
    }


}

CreateSubmissionResponse.RequiredProperties = ["status", "submission"];

/**
 * @member {module:model/CreateSubmissionResponse.StatusEnum} status
 */
CreateSubmissionResponse.prototype['status'] = undefined;

/**
 * @member {module:model/SubmissionPreview} submission
 */
CreateSubmissionResponse.prototype['submission'] = undefined;

/**
 * @member {Array.<String>} errors
 */
CreateSubmissionResponse.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CreateSubmissionResponse['StatusEnum'] = {

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



export default CreateSubmissionResponse;

