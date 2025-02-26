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
 * The CopyTemplateOptions model module.
 * @module model/CopyTemplateOptions
 * @version 2.0.0
 */
class CopyTemplateOptions {
    /**
     * Constructs a new <code>CopyTemplateOptions</code>.
     * @alias module:model/CopyTemplateOptions
     * @param parentFolderId {String} 
     */
    constructor(parentFolderId) { 
        
        CopyTemplateOptions.initialize(this, parentFolderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, parentFolderId) { 
        obj['parent_folder_id'] = parentFolderId;
    }

    /**
     * Constructs a <code>CopyTemplateOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopyTemplateOptions} obj Optional instance to populate.
     * @return {module:model/CopyTemplateOptions} The populated <code>CopyTemplateOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyTemplateOptions();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent_folder_id')) {
                obj['parent_folder_id'] = ApiClient.convertToType(data['parent_folder_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CopyTemplateOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CopyTemplateOptions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CopyTemplateOptions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['parent_folder_id'] && !(typeof data['parent_folder_id'] === 'string' || data['parent_folder_id'] instanceof String)) {
            throw new Error("Expected the field `parent_folder_id` to be a primitive type in the JSON string but got " + data['parent_folder_id']);
        }

        return true;
    }


}

CopyTemplateOptions.RequiredProperties = ["parent_folder_id"];

/**
 * @member {String} name
 */
CopyTemplateOptions.prototype['name'] = undefined;

/**
 * @member {String} parent_folder_id
 */
CopyTemplateOptions.prototype['parent_folder_id'] = undefined;






export default CopyTemplateOptions;

