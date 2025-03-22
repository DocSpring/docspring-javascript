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
 * The AddFieldsData model module.
 * @module model/AddFieldsData
 * @version 2.1.0
 */
class AddFieldsData {
    /**
     * Constructs a new <code>AddFieldsData</code>.
     * @alias module:model/AddFieldsData
     * @param fields {Array.<Object>} 
     */
    constructor(fields) { 
        
        AddFieldsData.initialize(this, fields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fields) { 
        obj['fields'] = fields;
    }

    /**
     * Constructs a <code>AddFieldsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFieldsData} obj Optional instance to populate.
     * @return {module:model/AddFieldsData} The populated <code>AddFieldsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFieldsData();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddFieldsData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddFieldsData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddFieldsData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['fields'])) {
            throw new Error("Expected the field `fields` to be an array in the JSON data but got " + data['fields']);
        }

        return true;
    }


}

AddFieldsData.RequiredProperties = ["fields"];

/**
 * @member {Array.<Object>} fields
 */
AddFieldsData.prototype['fields'] = undefined;






export default AddFieldsData;

