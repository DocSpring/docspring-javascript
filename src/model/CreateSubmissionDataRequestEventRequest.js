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
 * The CreateSubmissionDataRequestEventRequest model module.
 * @module model/CreateSubmissionDataRequestEventRequest
 * @version 2.0.0
 */
class CreateSubmissionDataRequestEventRequest {
    /**
     * Constructs a new <code>CreateSubmissionDataRequestEventRequest</code>.
     * @alias module:model/CreateSubmissionDataRequestEventRequest
     * @param eventType {module:model/CreateSubmissionDataRequestEventRequest.EventTypeEnum} 
     */
    constructor(eventType) { 
        
        CreateSubmissionDataRequestEventRequest.initialize(this, eventType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventType) { 
        obj['event_type'] = eventType;
    }

    /**
     * Constructs a <code>CreateSubmissionDataRequestEventRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSubmissionDataRequestEventRequest} obj Optional instance to populate.
     * @return {module:model/CreateSubmissionDataRequestEventRequest} The populated <code>CreateSubmissionDataRequestEventRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSubmissionDataRequestEventRequest();

            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSubmissionDataRequestEventRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSubmissionDataRequestEventRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSubmissionDataRequestEventRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['event_type'] && !(typeof data['event_type'] === 'string' || data['event_type'] instanceof String)) {
            throw new Error("Expected the field `event_type` to be a primitive type in the JSON string but got " + data['event_type']);
        }
        // ensure the json data is a string
        if (data['message_type'] && !(typeof data['message_type'] === 'string' || data['message_type'] instanceof String)) {
            throw new Error("Expected the field `message_type` to be a primitive type in the JSON string but got " + data['message_type']);
        }

        return true;
    }


}

CreateSubmissionDataRequestEventRequest.RequiredProperties = ["event_type"];

/**
 * @member {module:model/CreateSubmissionDataRequestEventRequest.EventTypeEnum} event_type
 */
CreateSubmissionDataRequestEventRequest.prototype['event_type'] = undefined;

/**
 * @member {module:model/CreateSubmissionDataRequestEventRequest.MessageTypeEnum} message_type
 */
CreateSubmissionDataRequestEventRequest.prototype['message_type'] = undefined;





/**
 * Allowed values for the <code>event_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateSubmissionDataRequestEventRequest['EventTypeEnum'] = {

    /**
     * value: "send_request"
     * @const
     */
    "send_request": "send_request",

    /**
     * value: "view_request"
     * @const
     */
    "view_request": "view_request",

    /**
     * value: "accepted_terms"
     * @const
     */
    "accepted_terms": "accepted_terms",

    /**
     * value: "decline_request"
     * @const
     */
    "decline_request": "decline_request",

    /**
     * value: "sign_request"
     * @const
     */
    "sign_request": "sign_request",

    /**
     * value: "all_completed"
     * @const
     */
    "all_completed": "all_completed"
};


/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateSubmissionDataRequestEventRequest['MessageTypeEnum'] = {

    /**
     * value: "email"
     * @const
     */
    "email": "email",

    /**
     * value: "sms"
     * @const
     */
    "sms": "sms",

    /**
     * value: "fax"
     * @const
     */
    "fax": "fax",

    /**
     * value: "mail"
     * @const
     */
    "mail": "mail",

    /**
     * value: "slack"
     * @const
     */
    "slack": "slack",

    /**
     * value: "msteams"
     * @const
     */
    "msteams": "msteams",

    /**
     * value: "discord"
     * @const
     */
    "discord": "discord",

    /**
     * value: "telegram"
     * @const
     */
    "telegram": "telegram",

    /**
     * value: "whatsapp"
     * @const
     */
    "whatsapp": "whatsapp"
};



export default CreateSubmissionDataRequestEventRequest;

