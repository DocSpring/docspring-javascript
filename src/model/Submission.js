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
import SubmissionAction from './SubmissionAction';
import SubmissionDataRequest from './SubmissionDataRequest';

/**
 * The Submission model module.
 * @module model/Submission
 * @version 2.1.0
 */
class Submission {
    /**
     * Constructs a new <code>Submission</code>.
     * @alias module:model/Submission
     * @param batchId {String} 
     * @param dataRequests {Array.<module:model/SubmissionDataRequest>} 
     * @param editable {Boolean} 
     * @param expired {Boolean} 
     * @param expiresAt {String} 
     * @param id {String} 
     * @param jsonSchemaErrors {Array.<String>} 
     * @param metadata {Object} 
     * @param password {String} 
     * @param processedAt {String} 
     * @param state {module:model/Submission.StateEnum} 
     * @param templateId {String} 
     * @param templateType {module:model/Submission.TemplateTypeEnum} 
     * @param templateVersion {String} 
     * @param test {Boolean} 
     * @param truncatedText {Object} 
     * @param pdfHash {String} 
     * @param downloadUrl {String} 
     * @param permanentDownloadUrl {String} 
     * @param previewDownloadUrl {String} 
     * @param previewGeneratedAt {String} 
     * @param auditTrailDownloadUrl {String} 
     * @param actions {Array.<module:model/SubmissionAction>} 
     * @param source {module:model/Submission.SourceEnum} 
     * @param referrer {String} 
     * @param data {Object} 
     */
    constructor(batchId, dataRequests, editable, expired, expiresAt, id, jsonSchemaErrors, metadata, password, processedAt, state, templateId, templateType, templateVersion, test, truncatedText, pdfHash, downloadUrl, permanentDownloadUrl, previewDownloadUrl, previewGeneratedAt, auditTrailDownloadUrl, actions, source, referrer, data) { 
        
        Submission.initialize(this, batchId, dataRequests, editable, expired, expiresAt, id, jsonSchemaErrors, metadata, password, processedAt, state, templateId, templateType, templateVersion, test, truncatedText, pdfHash, downloadUrl, permanentDownloadUrl, previewDownloadUrl, previewGeneratedAt, auditTrailDownloadUrl, actions, source, referrer, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, batchId, dataRequests, editable, expired, expiresAt, id, jsonSchemaErrors, metadata, password, processedAt, state, templateId, templateType, templateVersion, test, truncatedText, pdfHash, downloadUrl, permanentDownloadUrl, previewDownloadUrl, previewGeneratedAt, auditTrailDownloadUrl, actions, source, referrer, data) { 
        obj['batch_id'] = batchId;
        obj['data_requests'] = dataRequests;
        obj['editable'] = editable;
        obj['expired'] = expired;
        obj['expires_at'] = expiresAt;
        obj['id'] = id;
        obj['json_schema_errors'] = jsonSchemaErrors;
        obj['metadata'] = metadata;
        obj['password'] = password;
        obj['processed_at'] = processedAt;
        obj['state'] = state;
        obj['template_id'] = templateId;
        obj['template_type'] = templateType;
        obj['template_version'] = templateVersion;
        obj['test'] = test;
        obj['truncated_text'] = truncatedText;
        obj['pdf_hash'] = pdfHash;
        obj['download_url'] = downloadUrl;
        obj['permanent_download_url'] = permanentDownloadUrl;
        obj['preview_download_url'] = previewDownloadUrl;
        obj['preview_generated_at'] = previewGeneratedAt;
        obj['audit_trail_download_url'] = auditTrailDownloadUrl;
        obj['actions'] = actions;
        obj['source'] = source;
        obj['referrer'] = referrer;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>Submission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Submission} obj Optional instance to populate.
     * @return {module:model/Submission} The populated <code>Submission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Submission();

            if (data.hasOwnProperty('batch_id')) {
                obj['batch_id'] = ApiClient.convertToType(data['batch_id'], 'String');
            }
            if (data.hasOwnProperty('data_requests')) {
                obj['data_requests'] = ApiClient.convertToType(data['data_requests'], [SubmissionDataRequest]);
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('expired')) {
                obj['expired'] = ApiClient.convertToType(data['expired'], 'Boolean');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('json_schema_errors')) {
                obj['json_schema_errors'] = ApiClient.convertToType(data['json_schema_errors'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('processed_at')) {
                obj['processed_at'] = ApiClient.convertToType(data['processed_at'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('template_id')) {
                obj['template_id'] = ApiClient.convertToType(data['template_id'], 'String');
            }
            if (data.hasOwnProperty('template_type')) {
                obj['template_type'] = ApiClient.convertToType(data['template_type'], 'String');
            }
            if (data.hasOwnProperty('template_version')) {
                obj['template_version'] = ApiClient.convertToType(data['template_version'], 'String');
            }
            if (data.hasOwnProperty('test')) {
                obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
            }
            if (data.hasOwnProperty('truncated_text')) {
                obj['truncated_text'] = ApiClient.convertToType(data['truncated_text'], Object);
            }
            if (data.hasOwnProperty('pdf_hash')) {
                obj['pdf_hash'] = ApiClient.convertToType(data['pdf_hash'], 'String');
            }
            if (data.hasOwnProperty('download_url')) {
                obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
            }
            if (data.hasOwnProperty('permanent_download_url')) {
                obj['permanent_download_url'] = ApiClient.convertToType(data['permanent_download_url'], 'String');
            }
            if (data.hasOwnProperty('preview_download_url')) {
                obj['preview_download_url'] = ApiClient.convertToType(data['preview_download_url'], 'String');
            }
            if (data.hasOwnProperty('preview_generated_at')) {
                obj['preview_generated_at'] = ApiClient.convertToType(data['preview_generated_at'], 'String');
            }
            if (data.hasOwnProperty('audit_trail_download_url')) {
                obj['audit_trail_download_url'] = ApiClient.convertToType(data['audit_trail_download_url'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [SubmissionAction]);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('referrer')) {
                obj['referrer'] = ApiClient.convertToType(data['referrer'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Submission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Submission</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Submission.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['batch_id'] && !(typeof data['batch_id'] === 'string' || data['batch_id'] instanceof String)) {
            throw new Error("Expected the field `batch_id` to be a primitive type in the JSON string but got " + data['batch_id']);
        }
        if (data['data_requests']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data_requests'])) {
                throw new Error("Expected the field `data_requests` to be an array in the JSON data but got " + data['data_requests']);
            }
            // validate the optional field `data_requests` (array)
            for (const item of data['data_requests']) {
                SubmissionDataRequest.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['expires_at'] && !(typeof data['expires_at'] === 'string' || data['expires_at'] instanceof String)) {
            throw new Error("Expected the field `expires_at` to be a primitive type in the JSON string but got " + data['expires_at']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['json_schema_errors'])) {
            throw new Error("Expected the field `json_schema_errors` to be an array in the JSON data but got " + data['json_schema_errors']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['processed_at'] && !(typeof data['processed_at'] === 'string' || data['processed_at'] instanceof String)) {
            throw new Error("Expected the field `processed_at` to be a primitive type in the JSON string but got " + data['processed_at']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['template_id'] && !(typeof data['template_id'] === 'string' || data['template_id'] instanceof String)) {
            throw new Error("Expected the field `template_id` to be a primitive type in the JSON string but got " + data['template_id']);
        }
        // ensure the json data is a string
        if (data['template_type'] && !(typeof data['template_type'] === 'string' || data['template_type'] instanceof String)) {
            throw new Error("Expected the field `template_type` to be a primitive type in the JSON string but got " + data['template_type']);
        }
        // ensure the json data is a string
        if (data['template_version'] && !(typeof data['template_version'] === 'string' || data['template_version'] instanceof String)) {
            throw new Error("Expected the field `template_version` to be a primitive type in the JSON string but got " + data['template_version']);
        }
        // ensure the json data is a string
        if (data['pdf_hash'] && !(typeof data['pdf_hash'] === 'string' || data['pdf_hash'] instanceof String)) {
            throw new Error("Expected the field `pdf_hash` to be a primitive type in the JSON string but got " + data['pdf_hash']);
        }
        // ensure the json data is a string
        if (data['download_url'] && !(typeof data['download_url'] === 'string' || data['download_url'] instanceof String)) {
            throw new Error("Expected the field `download_url` to be a primitive type in the JSON string but got " + data['download_url']);
        }
        // ensure the json data is a string
        if (data['permanent_download_url'] && !(typeof data['permanent_download_url'] === 'string' || data['permanent_download_url'] instanceof String)) {
            throw new Error("Expected the field `permanent_download_url` to be a primitive type in the JSON string but got " + data['permanent_download_url']);
        }
        // ensure the json data is a string
        if (data['preview_download_url'] && !(typeof data['preview_download_url'] === 'string' || data['preview_download_url'] instanceof String)) {
            throw new Error("Expected the field `preview_download_url` to be a primitive type in the JSON string but got " + data['preview_download_url']);
        }
        // ensure the json data is a string
        if (data['preview_generated_at'] && !(typeof data['preview_generated_at'] === 'string' || data['preview_generated_at'] instanceof String)) {
            throw new Error("Expected the field `preview_generated_at` to be a primitive type in the JSON string but got " + data['preview_generated_at']);
        }
        // ensure the json data is a string
        if (data['audit_trail_download_url'] && !(typeof data['audit_trail_download_url'] === 'string' || data['audit_trail_download_url'] instanceof String)) {
            throw new Error("Expected the field `audit_trail_download_url` to be a primitive type in the JSON string but got " + data['audit_trail_download_url']);
        }
        if (data['actions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['actions'])) {
                throw new Error("Expected the field `actions` to be an array in the JSON data but got " + data['actions']);
            }
            // validate the optional field `actions` (array)
            for (const item of data['actions']) {
                SubmissionAction.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['referrer'] && !(typeof data['referrer'] === 'string' || data['referrer'] instanceof String)) {
            throw new Error("Expected the field `referrer` to be a primitive type in the JSON string but got " + data['referrer']);
        }

        return true;
    }


}

Submission.RequiredProperties = ["batch_id", "data_requests", "editable", "expired", "expires_at", "id", "json_schema_errors", "metadata", "password", "processed_at", "state", "template_id", "template_type", "template_version", "test", "truncated_text", "pdf_hash", "download_url", "permanent_download_url", "preview_download_url", "preview_generated_at", "audit_trail_download_url", "actions", "source", "referrer", "data"];

/**
 * @member {String} batch_id
 */
Submission.prototype['batch_id'] = undefined;

/**
 * @member {Array.<module:model/SubmissionDataRequest>} data_requests
 */
Submission.prototype['data_requests'] = undefined;

/**
 * @member {Boolean} editable
 */
Submission.prototype['editable'] = undefined;

/**
 * @member {Boolean} expired
 */
Submission.prototype['expired'] = undefined;

/**
 * @member {String} expires_at
 */
Submission.prototype['expires_at'] = undefined;

/**
 * @member {String} id
 */
Submission.prototype['id'] = undefined;

/**
 * @member {Array.<String>} json_schema_errors
 */
Submission.prototype['json_schema_errors'] = undefined;

/**
 * @member {Object} metadata
 */
Submission.prototype['metadata'] = undefined;

/**
 * @member {String} password
 */
Submission.prototype['password'] = undefined;

/**
 * @member {String} processed_at
 */
Submission.prototype['processed_at'] = undefined;

/**
 * @member {module:model/Submission.StateEnum} state
 */
Submission.prototype['state'] = undefined;

/**
 * @member {String} template_id
 */
Submission.prototype['template_id'] = undefined;

/**
 * @member {module:model/Submission.TemplateTypeEnum} template_type
 */
Submission.prototype['template_type'] = undefined;

/**
 * @member {String} template_version
 */
Submission.prototype['template_version'] = undefined;

/**
 * @member {Boolean} test
 */
Submission.prototype['test'] = undefined;

/**
 * @member {Object} truncated_text
 */
Submission.prototype['truncated_text'] = undefined;

/**
 * @member {String} pdf_hash
 */
Submission.prototype['pdf_hash'] = undefined;

/**
 * @member {String} download_url
 */
Submission.prototype['download_url'] = undefined;

/**
 * @member {String} permanent_download_url
 */
Submission.prototype['permanent_download_url'] = undefined;

/**
 * @member {String} preview_download_url
 */
Submission.prototype['preview_download_url'] = undefined;

/**
 * @member {String} preview_generated_at
 */
Submission.prototype['preview_generated_at'] = undefined;

/**
 * @member {String} audit_trail_download_url
 */
Submission.prototype['audit_trail_download_url'] = undefined;

/**
 * @member {Array.<module:model/SubmissionAction>} actions
 */
Submission.prototype['actions'] = undefined;

/**
 * @member {module:model/Submission.SourceEnum} source
 */
Submission.prototype['source'] = undefined;

/**
 * @member {String} referrer
 */
Submission.prototype['referrer'] = undefined;

/**
 * @member {Object} data
 */
Submission.prototype['data'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Submission['StateEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "processed"
     * @const
     */
    "processed": "processed",

    /**
     * value: "invalid_data"
     * @const
     */
    "invalid_data": "invalid_data",

    /**
     * value: "error"
     * @const
     */
    "error": "error",

    /**
     * value: "image_download_failed"
     * @const
     */
    "image_download_failed": "image_download_failed",

    /**
     * value: "image_processing_failed"
     * @const
     */
    "image_processing_failed": "image_processing_failed",

    /**
     * value: "waiting_for_data_requests"
     * @const
     */
    "waiting_for_data_requests": "waiting_for_data_requests",

    /**
     * value: "syntax_error"
     * @const
     */
    "syntax_error": "syntax_error",

    /**
     * value: "account_suspended"
     * @const
     */
    "account_suspended": "account_suspended",

    /**
     * value: "license_revoked"
     * @const
     */
    "license_revoked": "license_revoked",

    /**
     * value: "accidental"
     * @const
     */
    "accidental": "accidental"
};


/**
 * Allowed values for the <code>template_type</code> property.
 * @enum {String}
 * @readonly
 */
Submission['TemplateTypeEnum'] = {

    /**
     * value: "pdf"
     * @const
     */
    "pdf": "pdf",

    /**
     * value: "html"
     * @const
     */
    "html": "html"
};


/**
 * Allowed values for the <code>source</code> property.
 * @enum {String}
 * @readonly
 */
Submission['SourceEnum'] = {

    /**
     * value: "api"
     * @const
     */
    "api": "api",

    /**
     * value: "web"
     * @const
     */
    "web": "web",

    /**
     * value: "reprocess"
     * @const
     */
    "reprocess": "reprocess",

    /**
     * value: "webhook"
     * @const
     */
    "webhook": "webhook"
};



export default Submission;

