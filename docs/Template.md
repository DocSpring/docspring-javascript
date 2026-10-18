# DocSpring.Template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_data_request_submission_id_footers** | **Boolean** |  | 
**allow_additional_properties** | **Boolean** |  | 
**description** | **String** |  | 
**document_filename** | **String** |  | 
**document_md5** | **String** |  | 
**document_parse_error** | **Boolean** |  | 
**document_processed** | **Boolean** |  | 
**document_state** | **String** |  | 
**document_url** | **String** |  | 
**editable_submissions** | **Boolean** |  | 
**embed_domains** | **String** |  | 
**embed_edit_allow_settings** | **Boolean** |  | 
**embed_edit_allow_versioning** | **Boolean** |  | 
**embed_edit_allow_document_replacement** | **Boolean** |  | 
**encrypt_pdfs_password** | **String** |  | 
**encrypt_pdfs** | **Boolean** |  | 
**expiration_interval** | **String** |  | 
**expire_after** | **Number** |  | 
**expire_submissions** | **Boolean** |  | 
**external_predefined_fields_template_id** | **String** |  | 
**external_predefined_fields_template_name** | **String** |  | 
**first_template** | **Boolean** |  | 
**id** | **String** |  | 
**locked** | **Boolean** |  | 
**merge_audit_trail_pdf** | **Boolean** |  | 
**name** | **String** |  | 
**page_count** | **Number** |  | 
**page_dimensions** | **[[Number]]** |  | 
**parent_folder_id** | **String** |  | 
**parse_dates_using_template_date_format** | **Boolean** |  | 
**path** | **String** |  | 
**permanent_document_url** | **String** |  | 
**public_submissions** | **Boolean** |  | 
**public_web_form** | **Boolean** |  | 
**redirect_url** | **String** |  | 
**slack_webhook_url** | **String** |  | 
**template_type** | **String** |  | 
**updated_at** | **String** |  | 
**version_published_at** | **String** |  | 
**version** | **String** |  | 
**webhook_url** | **String** |  | 
**embed_edit_token** | **String** |  | [optional] 
**demo** | **Boolean** |  | 
**latest_version** | **String** |  | 
**last_changed_at** | **String** |  | 
**last_changed_by_type** | **String** |  | 
**last_changed_by_id** | **String** |  | 
**last_changed_by_external_name** | **String** |  | 
**last_changed_by_external_email** | **String** |  | 
**last_changed_by_external_id** | **String** |  | 
**defaults** | **Object** |  | 
**field_dependencies** | **[Object]** |  | 
**field_order** | **[[Number]]** |  | 
**fields** | **Object** |  | 
**footer_html** | **String** |  | 
**header_html** | **String** |  | 
**html_engine_options** | **Object** |  | 
**html** | **String** |  | 
**predefined_fields** | **[Object]** |  | 
**scss** | **String** |  | 
**shared_field_data** | **Object** |  | 
**template_schema_version** | **Number** |  | 
**versions** | **[Object]** |  | 



## Enum: DocumentStateEnum


* `pending` (value: `"pending"`)

* `processed` (value: `"processed"`)

* `password_required` (value: `"password_required"`)

* `malformed_pdf` (value: `"malformed_pdf"`)

* `unknown_error` (value: `"unknown_error"`)





## Enum: TemplateTypeEnum


* `pdf` (value: `"pdf"`)

* `html` (value: `"html"`)





## Enum: LastChangedByTypeEnum


* `user` (value: `"user"`)

* `api` (value: `"api"`)

* `external_user` (value: `"external_user"`)




