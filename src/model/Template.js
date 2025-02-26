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
 * The Template model module.
 * @module model/Template
 * @version 2.0.0
 */
class Template {
    /**
     * Constructs a new <code>Template</code>.
     * @alias module:model/Template
     * @param addDataRequestSubmissionIdFooters {Boolean} 
     * @param allowAdditionalProperties {Boolean} 
     * @param description {String} 
     * @param documentFilename {String} 
     * @param documentMd5 {String} 
     * @param documentParseError {Boolean} 
     * @param documentProcessed {Boolean} 
     * @param documentState {module:model/Template.DocumentStateEnum} 
     * @param documentUrl {String} 
     * @param editableSubmissions {Boolean} 
     * @param embedDomains {String} 
     * @param encryptPdfsPassword {String} 
     * @param encryptPdfs {Boolean} 
     * @param expirationInterval {String} 
     * @param expireAfter {Number} 
     * @param expireSubmissions {Boolean} 
     * @param externalPredefinedFieldsTemplateId {String} 
     * @param externalPredefinedFieldsTemplateName {String} 
     * @param firstTemplate {Boolean} 
     * @param id {String} 
     * @param locked {Boolean} 
     * @param mergeAuditTrailPdf {Boolean} 
     * @param name {String} 
     * @param pageCount {Number} 
     * @param pageDimensions {Array.<Array.<Number>>} 
     * @param parentFolderId {String} 
     * @param path {String} 
     * @param permanentDocumentUrl {String} 
     * @param publicSubmissions {Boolean} 
     * @param publicWebForm {Boolean} 
     * @param redirectUrl {String} 
     * @param slackWebhookUrl {String} 
     * @param templateType {module:model/Template.TemplateTypeEnum} 
     * @param updatedAt {String} 
     * @param webhookUrl {String} 
     * @param demo {Boolean} 
     * @param defaults {Object} 
     * @param fieldOrder {Array.<Array.<Number>>} 
     * @param fields {Object} 
     * @param footerHtml {String} 
     * @param headerHtml {String} 
     * @param htmlEngineOptions {Object} 
     * @param html {String} 
     * @param predefinedFields {Array.<Object>} 
     * @param scss {String} 
     * @param sharedFieldData {Object} 
     */
    constructor(addDataRequestSubmissionIdFooters, allowAdditionalProperties, description, documentFilename, documentMd5, documentParseError, documentProcessed, documentState, documentUrl, editableSubmissions, embedDomains, encryptPdfsPassword, encryptPdfs, expirationInterval, expireAfter, expireSubmissions, externalPredefinedFieldsTemplateId, externalPredefinedFieldsTemplateName, firstTemplate, id, locked, mergeAuditTrailPdf, name, pageCount, pageDimensions, parentFolderId, path, permanentDocumentUrl, publicSubmissions, publicWebForm, redirectUrl, slackWebhookUrl, templateType, updatedAt, webhookUrl, demo, defaults, fieldOrder, fields, footerHtml, headerHtml, htmlEngineOptions, html, predefinedFields, scss, sharedFieldData) { 
        
        Template.initialize(this, addDataRequestSubmissionIdFooters, allowAdditionalProperties, description, documentFilename, documentMd5, documentParseError, documentProcessed, documentState, documentUrl, editableSubmissions, embedDomains, encryptPdfsPassword, encryptPdfs, expirationInterval, expireAfter, expireSubmissions, externalPredefinedFieldsTemplateId, externalPredefinedFieldsTemplateName, firstTemplate, id, locked, mergeAuditTrailPdf, name, pageCount, pageDimensions, parentFolderId, path, permanentDocumentUrl, publicSubmissions, publicWebForm, redirectUrl, slackWebhookUrl, templateType, updatedAt, webhookUrl, demo, defaults, fieldOrder, fields, footerHtml, headerHtml, htmlEngineOptions, html, predefinedFields, scss, sharedFieldData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addDataRequestSubmissionIdFooters, allowAdditionalProperties, description, documentFilename, documentMd5, documentParseError, documentProcessed, documentState, documentUrl, editableSubmissions, embedDomains, encryptPdfsPassword, encryptPdfs, expirationInterval, expireAfter, expireSubmissions, externalPredefinedFieldsTemplateId, externalPredefinedFieldsTemplateName, firstTemplate, id, locked, mergeAuditTrailPdf, name, pageCount, pageDimensions, parentFolderId, path, permanentDocumentUrl, publicSubmissions, publicWebForm, redirectUrl, slackWebhookUrl, templateType, updatedAt, webhookUrl, demo, defaults, fieldOrder, fields, footerHtml, headerHtml, htmlEngineOptions, html, predefinedFields, scss, sharedFieldData) { 
        obj['add_data_request_submission_id_footers'] = addDataRequestSubmissionIdFooters;
        obj['allow_additional_properties'] = allowAdditionalProperties;
        obj['description'] = description;
        obj['document_filename'] = documentFilename;
        obj['document_md5'] = documentMd5;
        obj['document_parse_error'] = documentParseError;
        obj['document_processed'] = documentProcessed;
        obj['document_state'] = documentState;
        obj['document_url'] = documentUrl;
        obj['editable_submissions'] = editableSubmissions;
        obj['embed_domains'] = embedDomains;
        obj['encrypt_pdfs_password'] = encryptPdfsPassword;
        obj['encrypt_pdfs'] = encryptPdfs;
        obj['expiration_interval'] = expirationInterval;
        obj['expire_after'] = expireAfter;
        obj['expire_submissions'] = expireSubmissions;
        obj['external_predefined_fields_template_id'] = externalPredefinedFieldsTemplateId;
        obj['external_predefined_fields_template_name'] = externalPredefinedFieldsTemplateName;
        obj['first_template'] = firstTemplate;
        obj['id'] = id;
        obj['locked'] = locked;
        obj['merge_audit_trail_pdf'] = mergeAuditTrailPdf;
        obj['name'] = name;
        obj['page_count'] = pageCount;
        obj['page_dimensions'] = pageDimensions;
        obj['parent_folder_id'] = parentFolderId;
        obj['path'] = path;
        obj['permanent_document_url'] = permanentDocumentUrl;
        obj['public_submissions'] = publicSubmissions;
        obj['public_web_form'] = publicWebForm;
        obj['redirect_url'] = redirectUrl;
        obj['slack_webhook_url'] = slackWebhookUrl;
        obj['template_type'] = templateType;
        obj['updated_at'] = updatedAt;
        obj['webhook_url'] = webhookUrl;
        obj['demo'] = demo;
        obj['defaults'] = defaults;
        obj['field_order'] = fieldOrder;
        obj['fields'] = fields;
        obj['footer_html'] = footerHtml;
        obj['header_html'] = headerHtml;
        obj['html_engine_options'] = htmlEngineOptions;
        obj['html'] = html;
        obj['predefined_fields'] = predefinedFields;
        obj['scss'] = scss;
        obj['shared_field_data'] = sharedFieldData;
    }

    /**
     * Constructs a <code>Template</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Template} obj Optional instance to populate.
     * @return {module:model/Template} The populated <code>Template</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Template();

            if (data.hasOwnProperty('add_data_request_submission_id_footers')) {
                obj['add_data_request_submission_id_footers'] = ApiClient.convertToType(data['add_data_request_submission_id_footers'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_additional_properties')) {
                obj['allow_additional_properties'] = ApiClient.convertToType(data['allow_additional_properties'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('document_filename')) {
                obj['document_filename'] = ApiClient.convertToType(data['document_filename'], 'String');
            }
            if (data.hasOwnProperty('document_md5')) {
                obj['document_md5'] = ApiClient.convertToType(data['document_md5'], 'String');
            }
            if (data.hasOwnProperty('document_parse_error')) {
                obj['document_parse_error'] = ApiClient.convertToType(data['document_parse_error'], 'Boolean');
            }
            if (data.hasOwnProperty('document_processed')) {
                obj['document_processed'] = ApiClient.convertToType(data['document_processed'], 'Boolean');
            }
            if (data.hasOwnProperty('document_state')) {
                obj['document_state'] = ApiClient.convertToType(data['document_state'], 'String');
            }
            if (data.hasOwnProperty('document_url')) {
                obj['document_url'] = ApiClient.convertToType(data['document_url'], 'String');
            }
            if (data.hasOwnProperty('editable_submissions')) {
                obj['editable_submissions'] = ApiClient.convertToType(data['editable_submissions'], 'Boolean');
            }
            if (data.hasOwnProperty('embed_domains')) {
                obj['embed_domains'] = ApiClient.convertToType(data['embed_domains'], 'String');
            }
            if (data.hasOwnProperty('encrypt_pdfs_password')) {
                obj['encrypt_pdfs_password'] = ApiClient.convertToType(data['encrypt_pdfs_password'], 'String');
            }
            if (data.hasOwnProperty('encrypt_pdfs')) {
                obj['encrypt_pdfs'] = ApiClient.convertToType(data['encrypt_pdfs'], 'Boolean');
            }
            if (data.hasOwnProperty('expiration_interval')) {
                obj['expiration_interval'] = ApiClient.convertToType(data['expiration_interval'], 'String');
            }
            if (data.hasOwnProperty('expire_after')) {
                obj['expire_after'] = ApiClient.convertToType(data['expire_after'], 'Number');
            }
            if (data.hasOwnProperty('expire_submissions')) {
                obj['expire_submissions'] = ApiClient.convertToType(data['expire_submissions'], 'Boolean');
            }
            if (data.hasOwnProperty('external_predefined_fields_template_id')) {
                obj['external_predefined_fields_template_id'] = ApiClient.convertToType(data['external_predefined_fields_template_id'], 'String');
            }
            if (data.hasOwnProperty('external_predefined_fields_template_name')) {
                obj['external_predefined_fields_template_name'] = ApiClient.convertToType(data['external_predefined_fields_template_name'], 'String');
            }
            if (data.hasOwnProperty('first_template')) {
                obj['first_template'] = ApiClient.convertToType(data['first_template'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('merge_audit_trail_pdf')) {
                obj['merge_audit_trail_pdf'] = ApiClient.convertToType(data['merge_audit_trail_pdf'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('page_count')) {
                obj['page_count'] = ApiClient.convertToType(data['page_count'], 'Number');
            }
            if (data.hasOwnProperty('page_dimensions')) {
                obj['page_dimensions'] = ApiClient.convertToType(data['page_dimensions'], [['Number']]);
            }
            if (data.hasOwnProperty('parent_folder_id')) {
                obj['parent_folder_id'] = ApiClient.convertToType(data['parent_folder_id'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('permanent_document_url')) {
                obj['permanent_document_url'] = ApiClient.convertToType(data['permanent_document_url'], 'String');
            }
            if (data.hasOwnProperty('public_submissions')) {
                obj['public_submissions'] = ApiClient.convertToType(data['public_submissions'], 'Boolean');
            }
            if (data.hasOwnProperty('public_web_form')) {
                obj['public_web_form'] = ApiClient.convertToType(data['public_web_form'], 'Boolean');
            }
            if (data.hasOwnProperty('redirect_url')) {
                obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
            }
            if (data.hasOwnProperty('slack_webhook_url')) {
                obj['slack_webhook_url'] = ApiClient.convertToType(data['slack_webhook_url'], 'String');
            }
            if (data.hasOwnProperty('template_type')) {
                obj['template_type'] = ApiClient.convertToType(data['template_type'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('webhook_url')) {
                obj['webhook_url'] = ApiClient.convertToType(data['webhook_url'], 'String');
            }
            if (data.hasOwnProperty('demo')) {
                obj['demo'] = ApiClient.convertToType(data['demo'], 'Boolean');
            }
            if (data.hasOwnProperty('defaults')) {
                obj['defaults'] = ApiClient.convertToType(data['defaults'], Object);
            }
            if (data.hasOwnProperty('field_order')) {
                obj['field_order'] = ApiClient.convertToType(data['field_order'], [['Number']]);
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], Object);
            }
            if (data.hasOwnProperty('footer_html')) {
                obj['footer_html'] = ApiClient.convertToType(data['footer_html'], 'String');
            }
            if (data.hasOwnProperty('header_html')) {
                obj['header_html'] = ApiClient.convertToType(data['header_html'], 'String');
            }
            if (data.hasOwnProperty('html_engine_options')) {
                obj['html_engine_options'] = ApiClient.convertToType(data['html_engine_options'], Object);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('predefined_fields')) {
                obj['predefined_fields'] = ApiClient.convertToType(data['predefined_fields'], [Object]);
            }
            if (data.hasOwnProperty('scss')) {
                obj['scss'] = ApiClient.convertToType(data['scss'], 'String');
            }
            if (data.hasOwnProperty('shared_field_data')) {
                obj['shared_field_data'] = ApiClient.convertToType(data['shared_field_data'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Template</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Template</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Template.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['document_filename'] && !(typeof data['document_filename'] === 'string' || data['document_filename'] instanceof String)) {
            throw new Error("Expected the field `document_filename` to be a primitive type in the JSON string but got " + data['document_filename']);
        }
        // ensure the json data is a string
        if (data['document_md5'] && !(typeof data['document_md5'] === 'string' || data['document_md5'] instanceof String)) {
            throw new Error("Expected the field `document_md5` to be a primitive type in the JSON string but got " + data['document_md5']);
        }
        // ensure the json data is a string
        if (data['document_state'] && !(typeof data['document_state'] === 'string' || data['document_state'] instanceof String)) {
            throw new Error("Expected the field `document_state` to be a primitive type in the JSON string but got " + data['document_state']);
        }
        // ensure the json data is a string
        if (data['document_url'] && !(typeof data['document_url'] === 'string' || data['document_url'] instanceof String)) {
            throw new Error("Expected the field `document_url` to be a primitive type in the JSON string but got " + data['document_url']);
        }
        // ensure the json data is a string
        if (data['embed_domains'] && !(typeof data['embed_domains'] === 'string' || data['embed_domains'] instanceof String)) {
            throw new Error("Expected the field `embed_domains` to be a primitive type in the JSON string but got " + data['embed_domains']);
        }
        // ensure the json data is a string
        if (data['encrypt_pdfs_password'] && !(typeof data['encrypt_pdfs_password'] === 'string' || data['encrypt_pdfs_password'] instanceof String)) {
            throw new Error("Expected the field `encrypt_pdfs_password` to be a primitive type in the JSON string but got " + data['encrypt_pdfs_password']);
        }
        // ensure the json data is a string
        if (data['expiration_interval'] && !(typeof data['expiration_interval'] === 'string' || data['expiration_interval'] instanceof String)) {
            throw new Error("Expected the field `expiration_interval` to be a primitive type in the JSON string but got " + data['expiration_interval']);
        }
        // ensure the json data is a string
        if (data['external_predefined_fields_template_id'] && !(typeof data['external_predefined_fields_template_id'] === 'string' || data['external_predefined_fields_template_id'] instanceof String)) {
            throw new Error("Expected the field `external_predefined_fields_template_id` to be a primitive type in the JSON string but got " + data['external_predefined_fields_template_id']);
        }
        // ensure the json data is a string
        if (data['external_predefined_fields_template_name'] && !(typeof data['external_predefined_fields_template_name'] === 'string' || data['external_predefined_fields_template_name'] instanceof String)) {
            throw new Error("Expected the field `external_predefined_fields_template_name` to be a primitive type in the JSON string but got " + data['external_predefined_fields_template_name']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['page_dimensions'])) {
            throw new Error("Expected the field `page_dimensions` to be an array in the JSON data but got " + data['page_dimensions']);
        }
        // ensure the json data is a string
        if (data['parent_folder_id'] && !(typeof data['parent_folder_id'] === 'string' || data['parent_folder_id'] instanceof String)) {
            throw new Error("Expected the field `parent_folder_id` to be a primitive type in the JSON string but got " + data['parent_folder_id']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['permanent_document_url'] && !(typeof data['permanent_document_url'] === 'string' || data['permanent_document_url'] instanceof String)) {
            throw new Error("Expected the field `permanent_document_url` to be a primitive type in the JSON string but got " + data['permanent_document_url']);
        }
        // ensure the json data is a string
        if (data['redirect_url'] && !(typeof data['redirect_url'] === 'string' || data['redirect_url'] instanceof String)) {
            throw new Error("Expected the field `redirect_url` to be a primitive type in the JSON string but got " + data['redirect_url']);
        }
        // ensure the json data is a string
        if (data['slack_webhook_url'] && !(typeof data['slack_webhook_url'] === 'string' || data['slack_webhook_url'] instanceof String)) {
            throw new Error("Expected the field `slack_webhook_url` to be a primitive type in the JSON string but got " + data['slack_webhook_url']);
        }
        // ensure the json data is a string
        if (data['template_type'] && !(typeof data['template_type'] === 'string' || data['template_type'] instanceof String)) {
            throw new Error("Expected the field `template_type` to be a primitive type in the JSON string but got " + data['template_type']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['webhook_url'] && !(typeof data['webhook_url'] === 'string' || data['webhook_url'] instanceof String)) {
            throw new Error("Expected the field `webhook_url` to be a primitive type in the JSON string but got " + data['webhook_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['field_order'])) {
            throw new Error("Expected the field `field_order` to be an array in the JSON data but got " + data['field_order']);
        }
        // ensure the json data is a string
        if (data['footer_html'] && !(typeof data['footer_html'] === 'string' || data['footer_html'] instanceof String)) {
            throw new Error("Expected the field `footer_html` to be a primitive type in the JSON string but got " + data['footer_html']);
        }
        // ensure the json data is a string
        if (data['header_html'] && !(typeof data['header_html'] === 'string' || data['header_html'] instanceof String)) {
            throw new Error("Expected the field `header_html` to be a primitive type in the JSON string but got " + data['header_html']);
        }
        // ensure the json data is a string
        if (data['html'] && !(typeof data['html'] === 'string' || data['html'] instanceof String)) {
            throw new Error("Expected the field `html` to be a primitive type in the JSON string but got " + data['html']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['predefined_fields'])) {
            throw new Error("Expected the field `predefined_fields` to be an array in the JSON data but got " + data['predefined_fields']);
        }
        // ensure the json data is a string
        if (data['scss'] && !(typeof data['scss'] === 'string' || data['scss'] instanceof String)) {
            throw new Error("Expected the field `scss` to be a primitive type in the JSON string but got " + data['scss']);
        }

        return true;
    }


}

Template.RequiredProperties = ["add_data_request_submission_id_footers", "allow_additional_properties", "description", "document_filename", "document_md5", "document_parse_error", "document_processed", "document_state", "document_url", "editable_submissions", "embed_domains", "encrypt_pdfs_password", "encrypt_pdfs", "expiration_interval", "expire_after", "expire_submissions", "external_predefined_fields_template_id", "external_predefined_fields_template_name", "first_template", "id", "locked", "merge_audit_trail_pdf", "name", "page_count", "page_dimensions", "parent_folder_id", "path", "permanent_document_url", "public_submissions", "public_web_form", "redirect_url", "slack_webhook_url", "template_type", "updated_at", "webhook_url", "demo", "defaults", "field_order", "fields", "footer_html", "header_html", "html_engine_options", "html", "predefined_fields", "scss", "shared_field_data"];

/**
 * @member {Boolean} add_data_request_submission_id_footers
 */
Template.prototype['add_data_request_submission_id_footers'] = undefined;

/**
 * @member {Boolean} allow_additional_properties
 */
Template.prototype['allow_additional_properties'] = undefined;

/**
 * @member {String} description
 */
Template.prototype['description'] = undefined;

/**
 * @member {String} document_filename
 */
Template.prototype['document_filename'] = undefined;

/**
 * @member {String} document_md5
 */
Template.prototype['document_md5'] = undefined;

/**
 * @member {Boolean} document_parse_error
 */
Template.prototype['document_parse_error'] = undefined;

/**
 * @member {Boolean} document_processed
 */
Template.prototype['document_processed'] = undefined;

/**
 * @member {module:model/Template.DocumentStateEnum} document_state
 */
Template.prototype['document_state'] = undefined;

/**
 * @member {String} document_url
 */
Template.prototype['document_url'] = undefined;

/**
 * @member {Boolean} editable_submissions
 */
Template.prototype['editable_submissions'] = undefined;

/**
 * @member {String} embed_domains
 */
Template.prototype['embed_domains'] = undefined;

/**
 * @member {String} encrypt_pdfs_password
 */
Template.prototype['encrypt_pdfs_password'] = undefined;

/**
 * @member {Boolean} encrypt_pdfs
 */
Template.prototype['encrypt_pdfs'] = undefined;

/**
 * @member {String} expiration_interval
 */
Template.prototype['expiration_interval'] = undefined;

/**
 * @member {Number} expire_after
 */
Template.prototype['expire_after'] = undefined;

/**
 * @member {Boolean} expire_submissions
 */
Template.prototype['expire_submissions'] = undefined;

/**
 * @member {String} external_predefined_fields_template_id
 */
Template.prototype['external_predefined_fields_template_id'] = undefined;

/**
 * @member {String} external_predefined_fields_template_name
 */
Template.prototype['external_predefined_fields_template_name'] = undefined;

/**
 * @member {Boolean} first_template
 */
Template.prototype['first_template'] = undefined;

/**
 * @member {String} id
 */
Template.prototype['id'] = undefined;

/**
 * @member {Boolean} locked
 */
Template.prototype['locked'] = undefined;

/**
 * @member {Boolean} merge_audit_trail_pdf
 */
Template.prototype['merge_audit_trail_pdf'] = undefined;

/**
 * @member {String} name
 */
Template.prototype['name'] = undefined;

/**
 * @member {Number} page_count
 */
Template.prototype['page_count'] = undefined;

/**
 * @member {Array.<Array.<Number>>} page_dimensions
 */
Template.prototype['page_dimensions'] = undefined;

/**
 * @member {String} parent_folder_id
 */
Template.prototype['parent_folder_id'] = undefined;

/**
 * @member {String} path
 */
Template.prototype['path'] = undefined;

/**
 * @member {String} permanent_document_url
 */
Template.prototype['permanent_document_url'] = undefined;

/**
 * @member {Boolean} public_submissions
 */
Template.prototype['public_submissions'] = undefined;

/**
 * @member {Boolean} public_web_form
 */
Template.prototype['public_web_form'] = undefined;

/**
 * @member {String} redirect_url
 */
Template.prototype['redirect_url'] = undefined;

/**
 * @member {String} slack_webhook_url
 */
Template.prototype['slack_webhook_url'] = undefined;

/**
 * @member {module:model/Template.TemplateTypeEnum} template_type
 */
Template.prototype['template_type'] = undefined;

/**
 * @member {String} updated_at
 */
Template.prototype['updated_at'] = undefined;

/**
 * @member {String} webhook_url
 */
Template.prototype['webhook_url'] = undefined;

/**
 * @member {Boolean} demo
 */
Template.prototype['demo'] = undefined;

/**
 * @member {Object} defaults
 */
Template.prototype['defaults'] = undefined;

/**
 * @member {Array.<Array.<Number>>} field_order
 */
Template.prototype['field_order'] = undefined;

/**
 * @member {Object} fields
 */
Template.prototype['fields'] = undefined;

/**
 * @member {String} footer_html
 */
Template.prototype['footer_html'] = undefined;

/**
 * @member {String} header_html
 */
Template.prototype['header_html'] = undefined;

/**
 * @member {Object} html_engine_options
 */
Template.prototype['html_engine_options'] = undefined;

/**
 * @member {String} html
 */
Template.prototype['html'] = undefined;

/**
 * @member {Array.<Object>} predefined_fields
 */
Template.prototype['predefined_fields'] = undefined;

/**
 * @member {String} scss
 */
Template.prototype['scss'] = undefined;

/**
 * @member {Object} shared_field_data
 */
Template.prototype['shared_field_data'] = undefined;





/**
 * Allowed values for the <code>document_state</code> property.
 * @enum {String}
 * @readonly
 */
Template['DocumentStateEnum'] = {

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
     * value: "password_required"
     * @const
     */
    "password_required": "password_required",

    /**
     * value: "malformed_pdf"
     * @const
     */
    "malformed_pdf": "malformed_pdf",

    /**
     * value: "unknown_error"
     * @const
     */
    "unknown_error": "unknown_error"
};


/**
 * Allowed values for the <code>template_type</code> property.
 * @enum {String}
 * @readonly
 */
Template['TemplateTypeEnum'] = {

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



export default Template;

