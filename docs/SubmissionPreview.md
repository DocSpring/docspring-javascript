# DocSpring.SubmissionPreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **String** |  | 
**data_requests** | [**[SubmissionDataRequest]**](SubmissionDataRequest.md) |  | 
**editable** | **Boolean** |  | 
**expired** | **Boolean** |  | 
**expires_at** | **String** |  | 
**id** | **String** |  | 
**json_schema_errors** | **[String]** |  | 
**metadata** | **Object** |  | 
**password** | **String** |  | 
**processed_at** | **String** |  | 
**state** | **String** |  | 
**template_id** | **String** |  | 
**template_type** | **String** |  | 
**template_version** | **String** |  | 
**test** | **Boolean** |  | 
**truncated_text** | **Object** |  | 
**pdf_hash** | **String** |  | 
**download_url** | **String** |  | 
**permanent_download_url** | **String** |  | 
**preview_download_url** | **String** |  | 
**preview_generated_at** | **String** |  | 
**audit_trail_download_url** | **String** |  | 
**actions** | [**[SubmissionAction]**](SubmissionAction.md) |  | 



## Enum: StateEnum


* `pending` (value: `"pending"`)

* `processed` (value: `"processed"`)

* `invalid_data` (value: `"invalid_data"`)

* `error` (value: `"error"`)

* `image_download_failed` (value: `"image_download_failed"`)

* `image_processing_failed` (value: `"image_processing_failed"`)

* `waiting_for_data_requests` (value: `"waiting_for_data_requests"`)

* `syntax_error` (value: `"syntax_error"`)

* `account_suspended` (value: `"account_suspended"`)

* `license_revoked` (value: `"license_revoked"`)

* `accidental` (value: `"accidental"`)





## Enum: TemplateTypeEnum


* `pdf` (value: `"pdf"`)

* `html` (value: `"html"`)




