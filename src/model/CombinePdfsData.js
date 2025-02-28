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
 * The CombinePdfsData model module.
 * @module model/CombinePdfsData
 * @version 2.0.0
 */
class CombinePdfsData {
    /**
     * Constructs a new <code>CombinePdfsData</code>.
     * @alias module:model/CombinePdfsData
     * @param sourcePdfs {Array.<Object>} 
     */
    constructor(sourcePdfs) { 
        
        CombinePdfsData.initialize(this, sourcePdfs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourcePdfs) { 
        obj['source_pdfs'] = sourcePdfs;
    }

    /**
     * Constructs a <code>CombinePdfsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CombinePdfsData} obj Optional instance to populate.
     * @return {module:model/CombinePdfsData} The populated <code>CombinePdfsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CombinePdfsData();

            if (data.hasOwnProperty('delete_custom_files')) {
                obj['delete_custom_files'] = ApiClient.convertToType(data['delete_custom_files'], 'Boolean');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('source_pdfs')) {
                obj['source_pdfs'] = ApiClient.convertToType(data['source_pdfs'], [Object]);
            }
            if (data.hasOwnProperty('test')) {
                obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CombinePdfsData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CombinePdfsData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CombinePdfsData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['source_pdfs'])) {
            throw new Error("Expected the field `source_pdfs` to be an array in the JSON data but got " + data['source_pdfs']);
        }

        return true;
    }


}

CombinePdfsData.RequiredProperties = ["source_pdfs"];

/**
 * @member {Boolean} delete_custom_files
 */
CombinePdfsData.prototype['delete_custom_files'] = undefined;

/**
 * @member {Number} expires_in
 */
CombinePdfsData.prototype['expires_in'] = undefined;

/**
 * @member {Object} metadata
 */
CombinePdfsData.prototype['metadata'] = undefined;

/**
 * @member {String} password
 */
CombinePdfsData.prototype['password'] = undefined;

/**
 * @member {Array.<Object>} source_pdfs
 */
CombinePdfsData.prototype['source_pdfs'] = undefined;

/**
 * @member {Boolean} test
 */
CombinePdfsData.prototype['test'] = undefined;






export default CombinePdfsData;

