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
 * The CreateCustomFileData model module.
 * @module model/CreateCustomFileData
 * @version 2.0.0
 */
class CreateCustomFileData {
    /**
     * Constructs a new <code>CreateCustomFileData</code>.
     * @alias module:model/CreateCustomFileData
     * @param cacheId {String} 
     */
    constructor(cacheId) { 
        
        CreateCustomFileData.initialize(this, cacheId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cacheId) { 
        obj['cache_id'] = cacheId;
    }

    /**
     * Constructs a <code>CreateCustomFileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCustomFileData} obj Optional instance to populate.
     * @return {module:model/CreateCustomFileData} The populated <code>CreateCustomFileData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCustomFileData();

            if (data.hasOwnProperty('cache_id')) {
                obj['cache_id'] = ApiClient.convertToType(data['cache_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCustomFileData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCustomFileData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateCustomFileData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cache_id'] && !(typeof data['cache_id'] === 'string' || data['cache_id'] instanceof String)) {
            throw new Error("Expected the field `cache_id` to be a primitive type in the JSON string but got " + data['cache_id']);
        }

        return true;
    }


}

CreateCustomFileData.RequiredProperties = ["cache_id"];

/**
 * @member {String} cache_id
 */
CreateCustomFileData.prototype['cache_id'] = undefined;






export default CreateCustomFileData;

