# DocSpring.Submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchId** | **String** |  | 
**dataRequests** | [**[SubmissionDataRequest]**](SubmissionDataRequest.md) |  | 
**editable** | **Boolean** |  | 
**expired** | **Boolean** |  | 
**expiresAt** | **String** |  | 
**id** | **String** |  | 
**jsonSchemaErrors** | **[String]** |  | 
**metadata** | **Object** |  | 
**password** | **String** |  | 
**processedAt** | **String** |  | 
**state** | **String** |  | 
**templateId** | **String** |  | 
**test** | **Boolean** |  | 
**truncatedText** | **Object** |  | 
**pdfHash** | **String** |  | 
**downloadUrl** | **String** |  | 
**permanentDownloadUrl** | **String** |  | 
**previewDownloadUrl** | **String** |  | 
**previewGeneratedAt** | **String** |  | 
**auditTrailDownloadUrl** | **String** |  | 
**actions** | [**[SubmissionAction]**](SubmissionAction.md) |  | 
**source** | **String** |  | 
**referrer** | **String** |  | 
**data** | **Object** |  | 



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





## Enum: SourceEnum


* `api` (value: `"api"`)

* `web` (value: `"web"`)

* `reprocess` (value: `"reprocess"`)

* `webhook` (value: `"webhook"`)




