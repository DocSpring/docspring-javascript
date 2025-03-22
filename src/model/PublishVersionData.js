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
 * The PublishVersionData model module.
 * @module model/PublishVersionData
 * @version 2.1.0
 */
class PublishVersionData {
    /**
     * Constructs a new <code>PublishVersionData</code>.
     * @alias module:model/PublishVersionData
     * @param versionType {String} 
     */
    constructor(versionType) { 
        
        PublishVersionData.initialize(this, versionType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, versionType) { 
        obj['version_type'] = versionType;
    }

    /**
     * Constructs a <code>PublishVersionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublishVersionData} obj Optional instance to populate.
     * @return {module:model/PublishVersionData} The populated <code>PublishVersionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublishVersionData();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('version_type')) {
                obj['version_type'] = ApiClient.convertToType(data['version_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PublishVersionData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PublishVersionData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PublishVersionData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['version_type'] && !(typeof data['version_type'] === 'string' || data['version_type'] instanceof String)) {
            throw new Error("Expected the field `version_type` to be a primitive type in the JSON string but got " + data['version_type']);
        }

        return true;
    }


}

PublishVersionData.RequiredProperties = ["version_type"];

/**
 * @member {String} description
 */
PublishVersionData.prototype['description'] = undefined;

/**
 * @member {String} version_type
 */
PublishVersionData.prototype['version_type'] = undefined;






export default PublishVersionData;

