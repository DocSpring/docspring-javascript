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
 * The UpdateHtmlTemplate model module.
 * @module model/UpdateHtmlTemplate
 * @version 2.0.0
 */
class UpdateHtmlTemplate {
    /**
     * Constructs a new <code>UpdateHtmlTemplate</code>.
     * @alias module:model/UpdateHtmlTemplate
     * @param template {Object} 
     */
    constructor(template) { 
        
        UpdateHtmlTemplate.initialize(this, template);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, template) { 
        obj['template'] = template;
    }

    /**
     * Constructs a <code>UpdateHtmlTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateHtmlTemplate} obj Optional instance to populate.
     * @return {module:model/UpdateHtmlTemplate} The populated <code>UpdateHtmlTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateHtmlTemplate();

            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateHtmlTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateHtmlTemplate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateHtmlTemplate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

UpdateHtmlTemplate.RequiredProperties = ["template"];

/**
 * @member {Object} template
 */
UpdateHtmlTemplate.prototype['template'] = undefined;






export default UpdateHtmlTemplate;

