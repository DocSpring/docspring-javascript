# DocSpring.Client

All URIs are relative to *https://sync.api.docspring.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTemplateFields**](Client.md#addTemplateFields) | **POST** /templates/{template_id}/fields | Add fields to a template
[**copyTemplate**](Client.md#copyTemplate) | **POST** /templates/{template_id}/copy | Copy a template
[**createCombinedPdf**](Client.md#createCombinedPdf) | **POST** /combined_pdfs | Combine PDFs
[**createCustomFileFromUpload**](Client.md#createCustomFileFromUpload) | **POST** /custom_files | Create a custom file from an upload
[**createFolder**](Client.md#createFolder) | **POST** /folders | Create a folder
[**createSignatureRequestEvent**](Client.md#createSignatureRequestEvent) | **POST** /signature_requests/{signature_request_id}/events | Record a signature request event
[**createSignatureRequestToken**](Client.md#createSignatureRequestToken) | **POST** /signature_requests/{signature_request_id}/tokens | Create a signature request token
[**createSubmission**](Client.md#createSubmission) | **POST** /templates/{template_id}/submissions | Generate a PDF
[**createSubmissionBatch**](Client.md#createSubmissionBatch) | **POST** /submissions/batches | Generate PDFs in a batch
[**createTemplate**](Client.md#createTemplate) | **POST** /templates | Create a template
[**createTemplatePreview**](Client.md#createTemplatePreview) | **POST** /templates/{template_id}/previews | Preview a template with data
[**createWebhook**](Client.md#createWebhook) | **POST** /webhooks | Create a webhook
[**deleteCustomFile**](Client.md#deleteCustomFile) | **DELETE** /custom_files/{custom_file_id} | Delete a custom file
[**deleteFolder**](Client.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
[**deleteTemplate**](Client.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete a template
[**deleteWebhook**](Client.md#deleteWebhook) | **DELETE** /webhooks/{webhook_id} | Delete a webhook
[**expireCombinedPdf**](Client.md#expireCombinedPdf) | **DELETE** /combined_pdfs/{combined_pdf_id} | Expire a combined PDF
[**expireSubmission**](Client.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a submission
[**generateSubmissionFiles**](Client.md#generateSubmissionFiles) | **POST** /submissions/{submission_id}/generate_files | Generate more files
[**generateSubmissionPreview**](Client.md#generateSubmissionPreview) | **POST** /submissions/{submission_id}/generate_preview | Generate a preview PDF
[**getCombinedPdf**](Client.md#getCombinedPdf) | **GET** /combined_pdfs/{combined_pdf_id} | Get a combined PDF
[**getCustomFile**](Client.md#getCustomFile) | **GET** /custom_files/{custom_file_id} | Get a custom file
[**getFolder**](Client.md#getFolder) | **GET** /folders/{folder_id} | Get a folder
[**getPresignUrl**](Client.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned URL to upload a file
[**getSignatureRequest**](Client.md#getSignatureRequest) | **GET** /signature_requests/{signature_request_id} | Get a signature request
[**getSubmission**](Client.md#getSubmission) | **GET** /submissions/{submission_id} | Get a submission
[**getSubmissionBatch**](Client.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Get a batch
[**getTemplate**](Client.md#getTemplate) | **GET** /templates/{template_id} | Get a template
[**getTemplateDiff**](Client.md#getTemplateDiff) | **GET** /templates/{template_id}/diff | Compare a version of a template with the one before it
[**getTemplateModelCode**](Client.md#getTemplateModelCode) | **GET** /templates/{template_id}/model_code | Generate typed code for a template's submission data
[**getTemplatePageImages**](Client.md#getTemplatePageImages) | **GET** /templates/{template_id}/page_images | Get images of a template's pages
[**getTemplatePreview**](Client.md#getTemplatePreview) | **GET** /templates/{template_id}/previews/{preview_id} | Get a template preview
[**getTemplateSchema**](Client.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Get the JSON Schema of a template's submission data
[**getWebhook**](Client.md#getWebhook) | **GET** /webhooks/{webhook_id} | Get a webhook
[**listCombinedPdfs**](Client.md#listCombinedPdfs) | **GET** /combined_pdfs | List combined PDFs
[**listCustomFiles**](Client.md#listCustomFiles) | **GET** /custom_files | List custom files
[**listFolders**](Client.md#listFolders) | **GET** /folders | List folders
[**listSubmissions**](Client.md#listSubmissions) | **GET** /submissions | List submissions
[**listTemplateFields**](Client.md#listTemplateFields) | **GET** /templates/{template_id}/fields | List a template's fields
[**listTemplateSubmissions**](Client.md#listTemplateSubmissions) | **GET** /templates/{template_id}/submissions | List a template's submissions
[**listTemplates**](Client.md#listTemplates) | **GET** /templates | List templates
[**listWebhooks**](Client.md#listWebhooks) | **GET** /webhooks | List webhooks
[**moveFolder**](Client.md#moveFolder) | **POST** /folders/{folder_id}/move | Move a folder
[**moveTemplate**](Client.md#moveTemplate) | **POST** /templates/{template_id}/move | Move a template to a folder
[**publishTemplateVersion**](Client.md#publishTemplateVersion) | **POST** /templates/{template_id}/publish_version | Publish a template version
[**removeTemplateFields**](Client.md#removeTemplateFields) | **POST** /templates/{template_id}/fields/remove | Remove fields from a template
[**renameFolder**](Client.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**reorderTemplateFields**](Client.md#reorderTemplateFields) | **POST** /templates/{template_id}/fields/reorder | Reorder a template's fields
[**restoreTemplateVersion**](Client.md#restoreTemplateVersion) | **POST** /templates/{template_id}/restore_version | Restore a template version
[**testAuthentication**](Client.md#testAuthentication) | **GET** /authentication | Test authentication
[**updateSignatureRequest**](Client.md#updateSignatureRequest) | **PUT** /signature_requests/{signature_request_id} | Update a signature request
[**updateTemplate**](Client.md#updateTemplate) | **PUT** /templates/{template_id} | Update a template
[**updateTemplateDocument**](Client.md#updateTemplateDocument) | **PUT** /templates/{template_id}/document | Replace a template's document
[**updateTemplateFields**](Client.md#updateTemplateFields) | **PUT** /templates/{template_id}/fields | Update a template's fields
[**updateWebhook**](Client.md#updateWebhook) | **PUT** /webhooks/{webhook_id} | Update a webhook
[**uploadTemplate**](Client.md#uploadTemplate) | **POST** /templates/upload | Create a template from an uploaded PDF or Word document
[**uploadTemplateDocument**](Client.md#uploadTemplateDocument) | **PUT** /templates/{template_id}/document/upload | Replace a template's document with an uploaded file
[**validateSubmission**](Client.md#validateSubmission) | **POST** /templates/{template_id}/submissions/validate | Check a submission without creating it



## addTemplateFields

> TemplateFields addTemplateFields(template_id, body)

Add fields to a template

Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"fields":[{"name":"email","page":1,"x":100,"y":300,"width":600,"height":80,"type":"email","required":true},{"name":"signature","page":1,"x":100,"y":400,"width":600,"height":150,"type":"signature","display_type":"image"}]}; // AddTemplateFieldsRequest | The fields to add to the template's draft.
apiInstance.addTemplateFields(template_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**AddTemplateFieldsRequest**](AddTemplateFieldsRequest.md)| The fields to add to the template's draft. | 

### Return type

[**TemplateFields**](TemplateFields.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## copyTemplate

> Template copyTemplate(template_id, opts)

Copy a template

Copies a template (its draft, or a published version) into a new template.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let opts = {
  'body': {"parent_folder_id":"fld_1234567890abcdef01"} // CopyTemplateRequest | Settings for the copy.
};
apiInstance.copyTemplate(template_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**CopyTemplateRequest**](CopyTemplateRequest.md)| Settings for the copy. | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCombinedPdf

> CombinedPdf createCombinedPdf(body, opts)

Combine PDFs

Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let body = {"source_pdfs":[{"type":"submission","id":"sub_1234567890abcdef01"},{"type":"template","id":"tpl_1234567890abcdef01"},{"type":"url","url":"https://example.com/terms.pdf"}],"metadata":{"user_id":42},"password":"secret","expires_in":3600}; // CreateCombinedPdfRequest | The PDFs to merge, and the combined PDF's settings.
let opts = {
  'wait': true, // Boolean | Wait until the PDF has been generated before responding. Default true on sync.api hosts.
  'idempotencyKey': "idempotencyKey_example" // String | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another combined PDF. Send a new key with each new combined PDF, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
};
apiInstance.createCombinedPdf(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateCombinedPdfRequest**](CreateCombinedPdfRequest.md)| The PDFs to merge, and the combined PDF's settings. | 
 **wait** | **Boolean**| Wait until the PDF has been generated before responding. Default true on sync.api hosts. | [optional] 
 **idempotencyKey** | **String**| A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another combined PDF. Send a new key with each new combined PDF, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds. | [optional] 

### Return type

[**CombinedPdf**](CombinedPdf.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCustomFileFromUpload

> CustomFile createCustomFileFromUpload(body)

Create a custom file from an upload

Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let body = {"cache_id":"cfi_1234567890abcdef01.pdf"}; // CreateCustomFileFromUploadRequest | The uploaded file to create the custom file from.
apiInstance.createCustomFileFromUpload(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateCustomFileFromUploadRequest**](CreateCustomFileFromUploadRequest.md)| The uploaded file to create the custom file from. | 

### Return type

[**CustomFile**](CustomFile.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFolder

> Folder createFolder(body)

Create a folder

Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let body = {"name":"Folder 3","parent_folder_id":"fld_1234567890abcdef01"}; // CreateFolderRequest | The folder to create.
apiInstance.createFolder(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFolderRequest**](CreateFolderRequest.md)| The folder to create. | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSignatureRequestEvent

> SignatureRequestEvent createSignatureRequestEvent(signature_request_id, body)

Record a signature request event

Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. A finished (completed, declined or expired) signature request's audit trail takes no more events, and a test API token can't record one for a live signature request. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let signature_request_id = "srq_1234567890abcdef01"; // String | The signature request's ID.
let body = {"event_type":"send_request","message_type":"email","message_recipient":"john@example.com","occurred_at":"2018-10-20T08:59:00Z"}; // CreateSignatureRequestEventRequest | The event to record.
apiInstance.createSignatureRequestEvent(signature_request_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signature_request_id** | **String**| The signature request's ID. | 
 **body** | [**CreateSignatureRequestEventRequest**](CreateSignatureRequestEventRequest.md)| The event to record. | 

### Return type

[**SignatureRequestEvent**](SignatureRequestEvent.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSignatureRequestToken

> SignatureRequestToken createSignatureRequestToken(signature_request_id, opts)

Create a signature request token

Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let signature_request_id = "srq_1234567890abcdef01"; // String | The signature request's ID.
let opts = {
  'body': {"type":"email"} // CreateSignatureRequestTokenRequest | The kind of link to make. Send no body for an `api` token.
};
apiInstance.createSignatureRequestToken(signature_request_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signature_request_id** | **String**| The signature request's ID. | 
 **body** | [**CreateSignatureRequestTokenRequest**](CreateSignatureRequestTokenRequest.md)| The kind of link to make. Send no body for an `api` token. | [optional] 

### Return type

[**SignatureRequestToken**](SignatureRequestToken.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSubmission

> Submission createSubmission(template_id, body, opts)

Generate a PDF

Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"data":{"first_name":"John","last_name":"Smith","phone_number":"+11234567890"},"metadata":{"user_id":42},"test":true}; // CreateSubmissionRequest | The submission's data and settings.
let opts = {
  'version': "version_example", // String | The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
  'wait': true, // Boolean | Wait until the files have been generated before responding. Default true on sync.api hosts.
  'idempotencyKey': "idempotencyKey_example" // String | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another submission. Send a new key with each new submission, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
};
apiInstance.createSubmission(template_id, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**CreateSubmissionRequest**](CreateSubmissionRequest.md)| The submission's data and settings. | 
 **version** | **String**| The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published). | [optional] 
 **wait** | **Boolean**| Wait until the files have been generated before responding. Default true on sync.api hosts. | [optional] 
 **idempotencyKey** | **String**| A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another submission. Send a new key with each new submission, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds. | [optional] 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSubmissionBatch

> SubmissionBatch createSubmissionBatch(body, opts)

Generate PDFs in a batch

Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let body = {"template_id":"tpl_1234567890abcdef01","metadata":{"job_id":54321},"submissions":[{"data":{"first_name":"John","last_name":"Smith"},"metadata":{"row":1}},{"data":{"first_name":"Jane","last_name":"Doe"},"test":true,"metadata":{"row":2}}]}; // CreateSubmissionBatchRequest | The submissions to create, and the settings they share.
let opts = {
  'wait': true, // Boolean | Wait until every file in the batch has been generated before responding. Default true on sync.api hosts.
  'idempotencyKey': "idempotencyKey_example" // String | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another batch. Send a new key with each new batch, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
};
apiInstance.createSubmissionBatch(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateSubmissionBatchRequest**](CreateSubmissionBatchRequest.md)| The submissions to create, and the settings they share. | 
 **wait** | **Boolean**| Wait until every file in the batch has been generated before responding. Default true on sync.api hosts. | [optional] 
 **idempotencyKey** | **String**| A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another batch. Send a new key with each new batch, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds. | [optional] 

### Return type

[**SubmissionBatch**](SubmissionBatch.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTemplate

> Template createTemplate(body, opts)

Create a template

Creates an HTML template, or a PDF or Word template from a file you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. You can send a link to the file (`document_url`) or the file in base64 (`document_base64`) instead, or send the file with the request with POST /templates/upload. A Word template is made from a Word document (.docx) or an OpenDocument text file (.odt), which DocSpring converts to a Word document. It needs its `output_format`: what each submission makes, a Word document (`docx`), an OpenDocument file (`odt`) or a PDF.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF, a template created from a `document_url` once its document has been downloaded, and one created from an .odt once it has been converted (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let body = {"template_type":"html","name":"Receipt","html":"<h1>Receipt for {{ name }}</h1>","scss":"h1 { font-size: 24px; }","html_engine_options":{"format":"A4","landscape":true},"parent_folder_id":"fld_1234567890abcdef01"}; // CreateTemplateRequest | The template to create.
let opts = {
  'wait': true // Boolean | Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
};
apiInstance.createTemplate(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateTemplateRequest**](CreateTemplateRequest.md)| The template to create. | 
 **wait** | **Boolean**| Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTemplatePreview

> TemplatePreview createTemplatePreview(template_id, body, opts)

Preview a template with data

Makes PNG images of a template's pages filled in with the data you send (not a PDF), so you can check how an HTML, PDF or Word template prints with your data before you publish a version or send live data. A Word template's pages are its PDF's, whatever its `output_format`. It renders the template's draft, or the published `version` you ask for. A preview makes no submission and uses no credits, and its pages are watermarked like a test submission's PDF. It's `pending` while it renders: get it with GET /templates/{template_id}/previews/{preview_id} until it's `processed`, with an image of each page, or `error`. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef02"; // String | The template's ID.
let body = {"data":{"invoice_number":"INV-001"}}; // CreateTemplatePreviewRequest | The data to render the template with.
let opts = {
  'version': "version_example" // String | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
};
apiInstance.createTemplatePreview(template_id, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**CreateTemplatePreviewRequest**](CreateTemplatePreviewRequest.md)| The data to render the template with. | 
 **version** | **String**| A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`. | [optional] 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWebhook

> Webhook createWebhook(body)

Create a webhook

Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let body = {"name":"Test Webhook","url":"https://example.com/webhook","event_types":["submission.processed","signature_request.completed"],"template_ids":["tpl_1234567890abcdef01"],"headers":{"X-Zapier-Subscription":"123"}}; // CreateWebhookRequest | The webhook to create.
apiInstance.createWebhook(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateWebhookRequest**](CreateWebhookRequest.md)| The webhook to create. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomFile

> CustomFile deleteCustomFile(custom_file_id)

Delete a custom file

Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let custom_file_id = "custom_file_id_example"; // String | The custom file's ID.
apiInstance.deleteCustomFile(custom_file_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_file_id** | **String**| The custom file's ID. | 

### Return type

[**CustomFile**](CustomFile.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFolder

> Folder deleteFolder(folder_id)

Delete a folder

Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let folder_id = "folder_id_example"; // String | The folder's ID.
apiInstance.deleteFolder(folder_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **String**| The folder's ID. | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTemplate

> Template deleteTemplate(template_id, opts)

Delete a template

Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef02"; // String | The template's ID.
let opts = {
  'version': "version_example" // String | Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted.
};
apiInstance.deleteTemplate(template_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **version** | **String**| Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted. | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWebhook

> Webhook deleteWebhook(webhook_id)

Delete a webhook

Deletes a webhook so it stops receiving events, and returns it.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let webhook_id = "webhook_id_example"; // String | The webhook's ID.
apiInstance.deleteWebhook(webhook_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **String**| The webhook's ID. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expireCombinedPdf

> CombinedPdf expireCombinedPdf(combined_pdf_id)

Expire a combined PDF

Deletes a combined PDF's PDF and returns the expired combined PDF.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let combined_pdf_id = "com_1234567890abcdef05"; // String | The combined PDF's ID.
apiInstance.expireCombinedPdf(combined_pdf_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combined_pdf_id** | **String**| The combined PDF's ID. | 

### Return type

[**CombinedPdf**](CombinedPdf.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expireSubmission

> Submission expireSubmission(submission_id)

Expire a submission

Deletes a submission's data and PDF now, and returns the expired submission.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_id = "sub_1234567890abcdef01"; // String | The submission's ID.
apiInstance.expireSubmission(submission_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **String**| The submission's ID. | 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateSubmissionFiles

> Submission generateSubmissionFiles(submission_id, body, opts)

Generate more files

Adds formats to a processed submission's files, in the background, without using credits again: `pdf`, the PDF of a Word template's submission that made only its Word document (converted from that document), `docx`, the Word document of a Word template's submission that made only its PDF (made again from its data and the template version it used), `odt`, a Word template's submission's OpenDocument file (converted from its Word document, or from one made again when it didn't keep one), and `png`, a PNG image of each page of the PDF (up to 100 pages), which makes the PDF first when the submission doesn't have one. To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_id = "sub_1234567890abcdef01"; // String | The submission's ID.
let body = {"formats":["png"]}; // GenerateSubmissionFilesRequest | The formats to make.
let opts = {
  'wait': true // Boolean | Wait until the files have been generated before responding. Default true on sync.api hosts.
};
apiInstance.generateSubmissionFiles(submission_id, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **String**| The submission's ID. | 
 **body** | [**GenerateSubmissionFilesRequest**](GenerateSubmissionFilesRequest.md)| The formats to make. | 
 **wait** | **Boolean**| Wait until the files have been generated before responding. Default true on sync.api hosts. | [optional] 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateSubmissionPreview

> Submission generateSubmissionPreview(submission_id)

Generate a preview PDF

Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_id = "sub_1234567890abcdef03"; // String | The submission's ID.
apiInstance.generateSubmissionPreview(submission_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **String**| The submission's ID. | 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCombinedPdf

> CombinedPdf getCombinedPdf(combined_pdf_id)

Get a combined PDF

Returns a combined PDF, with a temporary link to download it once it has been generated.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let combined_pdf_id = "com_1234567890abcdef05"; // String | The combined PDF's ID.
apiInstance.getCombinedPdf(combined_pdf_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combined_pdf_id** | **String**| The combined PDF's ID. | 

### Return type

[**CombinedPdf**](CombinedPdf.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomFile

> CustomFile getCustomFile(custom_file_id)

Get a custom file

Returns a custom file, with a temporary URL to download it.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let custom_file_id = "custom_file_id_example"; // String | The custom file's ID.
apiInstance.getCustomFile(custom_file_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_file_id** | **String**| The custom file's ID. | 

### Return type

[**CustomFile**](CustomFile.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolder

> Folder getFolder(folder_id)

Get a folder

Returns a folder.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let folder_id = "folder_id_example"; // String | The folder's ID.
apiInstance.getFolder(folder_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **String**| The folder's ID. | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPresignUrl

> UploadPresign getPresignUrl()

Get a presigned URL to upload a file

Returns a presigned S3 form for uploading a file directly to DocSpring, for files too large to send in a request body. POST the `fields` and the file (as `file`) to `url` as multipart/form-data, then pass `fields.key` as the `cache_id` when you create a custom file. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
apiInstance.getPresignUrl().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UploadPresign**](UploadPresign.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSignatureRequest

> SignatureRequest getSignatureRequest(signature_request_id)

Get a signature request

Returns a signature request, with the values the person has entered so far.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let signature_request_id = "srq_1234567890abcdef01"; // String | The signature request's ID.
apiInstance.getSignatureRequest(signature_request_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signature_request_id** | **String**| The signature request's ID. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubmission

> Submission getSubmission(submission_id)

Get a submission

Returns a submission, with its data and links to download its PDF.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_id = "sub_1234567890abcdef01"; // String | The submission's ID.
apiInstance.getSubmission(submission_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **String**| The submission's ID. | 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubmissionBatch

> SubmissionBatch getSubmissionBatch(submission_batch_id, opts)

Get a batch

Returns a batch with its submissions. The batch has finished once `processed_at` is set: its `state` is `processed` when every PDF was generated, or `error` when any submission failed. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_batch_id = "sbb_1234567890abcdef05"; // String | The batch's ID.
let opts = {
  'include_data': true // Boolean | Include each submission's `data` (null without it).
};
apiInstance.getSubmissionBatch(submission_batch_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_batch_id** | **String**| The batch's ID. | 
 **include_data** | **Boolean**| Include each submission's `data` (null without it). | [optional] 

### Return type

[**SubmissionBatch**](SubmissionBatch.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplate

> Template getTemplate(template_id, opts)

Get a template

Returns a template: its draft, or one of its published versions.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let opts = {
  'version': "latest" // String | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
};
apiInstance.getTemplate(template_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **version** | **String**| A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`. | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateDiff

> TemplateDiff getTemplateDiff(template_id, opts)

Compare a version of a template with the one before it

Returns what changed in the template's draft since its latest published version (or in a published version since the one before it): fields added, removed, changed and moved, the settings that changed, and whether the document was replaced. Check it before you publish a version. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let opts = {
  'version': "0.1.0" // String | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
};
apiInstance.getTemplateDiff(template_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **version** | **String**| A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`. | [optional] 

### Return type

[**TemplateDiff**](TemplateDiff.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateModelCode

> TemplateModelCode getTemplateModelCode(template_id, lang, opts)

Generate typed code for a template's submission data

Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir, Go or Rust, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object, and `just_types=true` leaves out the code that converts JSON to and from the types. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let lang = new DocSpring.ModelCodeLanguage(); // ModelCodeLanguage | The language to generate the code in.
let opts = {
  'version': "draft", // String | The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
  'just_types': true // Boolean | Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types, PHP has no types-only code, and Rust's code is only types (serde converts the JSON), so theirs is the same either way.
};
apiInstance.getTemplateModelCode(template_id, lang, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **lang** | [**ModelCodeLanguage**](.md)| The language to generate the code in. | 
 **version** | **String**| The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default. | [optional] 
 **just_types** | **Boolean**| Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types, PHP has no types-only code, and Rust's code is only types (serde converts the JSON), so theirs is the same either way. | [optional] 

### Return type

[**TemplateModelCode**](TemplateModelCode.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplatePageImages

> TemplatePageImages getTemplatePageImages(template_id, opts)

Get images of a template's pages

Returns a JPEG image of each page of a PDF template's PDF, with temporary links to download them: the draft's PDF, or a published version's. Use them to see the pages that fields are placed on. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let opts = {
  'version': "latest" // String | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
};
apiInstance.getTemplatePageImages(template_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **version** | **String**| A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`. | [optional] 

### Return type

[**TemplatePageImages**](TemplatePageImages.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplatePreview

> TemplatePreview getTemplatePreview(template_id, preview_id)

Get a template preview

Returns a preview made with POST /templates/{template_id}/previews. Once it's `processed`, `pages` has a PNG image of each page with a temporary link to download it: a preview has no PDF. Previews are deleted an hour after they're created. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef02"; // String | The template's ID.
let preview_id = "tpv_1234567890abcdef0123"; // String | The preview's ID.
apiInstance.getTemplatePreview(template_id, preview_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **preview_id** | **String**| The preview's ID. | 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateSchema

> {String: Object} getTemplateSchema(template_id, opts)

Get the JSON Schema of a template's submission data

Returns the JSON Schema that a submission's `data` must match. Use it to check data before you create submissions, or to build a form for the template's fields. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let opts = {
  'version': "draft" // String | The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
};
apiInstance.getTemplateSchema(template_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **version** | **String**| The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default. | [optional] 

### Return type

**{String: Object}**

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhook

> Webhook getWebhook(webhook_id)

Get a webhook

Returns a webhook.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let webhook_id = "webhook_id_example"; // String | The webhook's ID.
apiInstance.getWebhook(webhook_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **String**| The webhook's ID. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCombinedPdfs

> CombinedPdfList listCombinedPdfs(opts)

List combined PDFs

Returns the combined PDFs in your account, newest first, one page at a time.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let opts = {
  'limit': 50, // Number | How many items to return (1-100, default 50).
  'cursor': "cursor_example" // String | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
};
apiInstance.listCombinedPdfs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return (1-100, default 50). | [optional] [default to 50]
 **cursor** | **String**| The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | [optional] 

### Return type

[**CombinedPdfList**](CombinedPdfList.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCustomFiles

> CustomFileList listCustomFiles(opts)

List custom files

Returns the custom files in your account, newest first, one page at a time.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let opts = {
  'limit': 50, // Number | How many items to return (1-100, default 50).
  'cursor': "cursor_example" // String | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
};
apiInstance.listCustomFiles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return (1-100, default 50). | [optional] [default to 50]
 **cursor** | **String**| The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | [optional] 

### Return type

[**CustomFileList**](CustomFileList.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFolders

> FolderList listFolders(opts)

List folders

Returns the folders in your account, newest first, one page at a time. Pass `parent_folder_id` to list the folders in one folder. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let opts = {
  'parent_folder_id': "fld_1234567890abcdef02", // String | Only list the folders in this folder. Without it, the list has every folder, at any depth.
  'limit': 2, // Number | How many items to return (1-100, default 50).
  'cursor': "fld_1234567890abcdef02" // String | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
};
apiInstance.listFolders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_folder_id** | **String**| Only list the folders in this folder. Without it, the list has every folder, at any depth. | [optional] 
 **limit** | **Number**| How many items to return (1-100, default 50). | [optional] [default to 50]
 **cursor** | **String**| The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | [optional] 

### Return type

[**FolderList**](FolderList.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubmissions

> SubmissionList listSubmissions(opts)

List submissions

Returns the submissions in your account, newest first, one page at a time. Each one is a summary: its `data` is null unless you pass `include_data=true`, and its `files` are empty unless you pass `include_files=true`. Get a submission by its ID for its signature requests, uploads and page images. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let opts = {
  'template_id': "tpl_1234567890abcdef01", // String | Only list this template's submissions.
  'test': false, // Boolean | Only list test submissions (true) or live submissions (false).
  'created_after': new Date("2018-10-20T08:40:00Z"), // Date | Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
  'created_before': new Date("2018-10-20T09:00:00Z"), // Date | Only list submissions created before this time.
  'include_data': true, // Boolean | Include each submission's `data` (null without it).
  'limit': 50, // Number | How many items to return (1-100, default 50).
  'cursor': "cursor_example", // String | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
  'state': new DocSpring.SubmissionState(), // SubmissionState | Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck.
  'include_files': true // Boolean | Include each submission's generated files and their download links (`files`, empty without it), without the page images' links.
};
apiInstance.listSubmissions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| Only list this template's submissions. | [optional] 
 **test** | **Boolean**| Only list test submissions (true) or live submissions (false). | [optional] 
 **created_after** | **Date**| Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`). | [optional] 
 **created_before** | **Date**| Only list submissions created before this time. | [optional] 
 **include_data** | **Boolean**| Include each submission's `data` (null without it). | [optional] 
 **limit** | **Number**| How many items to return (1-100, default 50). | [optional] [default to 50]
 **cursor** | **String**| The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | [optional] 
 **state** | [**SubmissionState**](.md)| Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck. | [optional] 
 **include_files** | **Boolean**| Include each submission's generated files and their download links (`files`, empty without it), without the page images' links. | [optional] 

### Return type

[**SubmissionList**](SubmissionList.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplateFields

> TemplateFields listTemplateFields(template_id, opts)

List a template's fields

Returns a template's fields with all of their settings, page by page: the draft's fields, or a published version's. A PDF template's fields are placed on its pages: GET /templates/{template_id}/page_images has images of the pages. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let opts = {
  'version': "latest" // String | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
};
apiInstance.listTemplateFields(template_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **version** | **String**| A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`. | [optional] 

### Return type

[**TemplateFields**](TemplateFields.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplateSubmissions

> SubmissionList listTemplateSubmissions(template_id, opts)

List a template's submissions

Returns a template's submissions (from every version of the template), newest first.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let opts = {
  'test': true, // Boolean | Only list test submissions (true) or live submissions (false).
  'created_after': new Date("2013-10-20T19:20:30+01:00"), // Date | Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
  'created_before': new Date("2013-10-20T19:20:30+01:00"), // Date | Only list submissions created before this time.
  'include_data': true, // Boolean | Include each submission's `data` (null without it).
  'limit': 50, // Number | How many items to return (1-100, default 50).
  'cursor': "cursor_example", // String | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
  'state': new DocSpring.SubmissionState(), // SubmissionState | Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck.
  'include_files': true // Boolean | Include each submission's generated files and their download links (`files`, empty without it), without the page images' links.
};
apiInstance.listTemplateSubmissions(template_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **test** | **Boolean**| Only list test submissions (true) or live submissions (false). | [optional] 
 **created_after** | **Date**| Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`). | [optional] 
 **created_before** | **Date**| Only list submissions created before this time. | [optional] 
 **include_data** | **Boolean**| Include each submission's `data` (null without it). | [optional] 
 **limit** | **Number**| How many items to return (1-100, default 50). | [optional] [default to 50]
 **cursor** | **String**| The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | [optional] 
 **state** | [**SubmissionState**](.md)| Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck. | [optional] 
 **include_files** | **Boolean**| Include each submission's generated files and their download links (`files`, empty without it), without the page images' links. | [optional] 

### Return type

[**SubmissionList**](SubmissionList.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplates

> TemplateSummaryList listTemplates(opts)

List templates

Returns the templates in your account (their drafts), newest first, one page at a time. Each one is a summary: get a template by its ID for its settings, its PDF in full, its HTML, defaults and published versions. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let opts = {
  'query': "rental", // String | Only list templates whose name contains this text (ignoring case).
  'parent_folder_id': "fld_1234567890abcdef01", // String | Only list the templates in this folder (not in its subfolders).
  'limit': 1, // Number | How many items to return (1-100, default 50).
  'cursor': "cursor_example" // String | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
};
apiInstance.listTemplates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Only list templates whose name contains this text (ignoring case). | [optional] 
 **parent_folder_id** | **String**| Only list the templates in this folder (not in its subfolders). | [optional] 
 **limit** | **Number**| How many items to return (1-100, default 50). | [optional] [default to 50]
 **cursor** | **String**| The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | [optional] 

### Return type

[**TemplateSummaryList**](TemplateSummaryList.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhooks

> WebhookList listWebhooks(opts)

List webhooks

Returns the webhooks in your account, newest first, one page at a time. Filter them by event type, mode, or the API token, template or folder they're scoped to. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let opts = {
  'event_type': new DocSpring.WebhookEventType(), // WebhookEventType | Only list webhooks that subscribe to this event.
  'mode': new DocSpring.WebhookMode(), // WebhookMode | Only list webhooks set to this mode.
  'template_id': "tpl_1234567890abcdef01", // String | Only list webhooks scoped to this template.
  'folder_id': "folder_id_example", // String | Only list webhooks scoped to this folder.
  'api_token_id': "api_token_id_example", // String | Only list webhooks scoped to this API token.
  'limit': 50, // Number | How many items to return (1-100, default 50).
  'cursor': "cursor_example" // String | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
};
apiInstance.listWebhooks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_type** | [**WebhookEventType**](.md)| Only list webhooks that subscribe to this event. | [optional] 
 **mode** | [**WebhookMode**](.md)| Only list webhooks set to this mode. | [optional] 
 **template_id** | **String**| Only list webhooks scoped to this template. | [optional] 
 **folder_id** | **String**| Only list webhooks scoped to this folder. | [optional] 
 **api_token_id** | **String**| Only list webhooks scoped to this API token. | [optional] 
 **limit** | **Number**| How many items to return (1-100, default 50). | [optional] [default to 50]
 **cursor** | **String**| The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | [optional] 

### Return type

[**WebhookList**](WebhookList.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## moveFolder

> Folder moveFolder(folder_id, body)

Move a folder

Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let folder_id = "folder_id_example"; // String | The folder's ID.
let body = {"parent_folder_id":"fld_1234567890abcdef02"}; // MoveFolderRequest | Where to move the folder.
apiInstance.moveFolder(folder_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **String**| The folder's ID. | 
 **body** | [**MoveFolderRequest**](MoveFolderRequest.md)| Where to move the folder. | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## moveTemplate

> Template moveTemplate(template_id, body)

Move a template to a folder

Moves a template and all of its published versions to a folder, or to the root (`null`).

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"parent_folder_id":null}; // MoveTemplateRequest | Where to move the template.
apiInstance.moveTemplate(template_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**MoveTemplateRequest**](MoveTemplateRequest.md)| Where to move the template. | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## publishTemplateVersion

> TemplateVersion publishTemplateVersion(template_id, body)

Publish a template version

Publishes the template's draft as a new version. Its content (the PDF or HTML, fields, name and description) never changes, while settings such as `webhook_url` and `public_submissions` keep following the draft. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"version_type":"minor","description":"Added the signature fields"}; // PublishTemplateVersionRequest | The version to publish.
apiInstance.publishTemplateVersion(template_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**PublishTemplateVersionRequest**](PublishTemplateVersionRequest.md)| The version to publish. | 

### Return type

[**TemplateVersion**](TemplateVersion.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeTemplateFields

> TemplateFields removeTemplateFields(template_id, body)

Remove fields from a template

Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"field_ids":[3]}; // RemoveTemplateFieldsRequest | The fields to remove from the template's draft.
apiInstance.removeTemplateFields(template_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**RemoveTemplateFieldsRequest**](RemoveTemplateFieldsRequest.md)| The fields to remove from the template's draft. | 

### Return type

[**TemplateFields**](TemplateFields.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## renameFolder

> Folder renameFolder(folder_id, body)

Rename a folder

Renames a folder. The name must be unique within its parent folder. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let folder_id = "folder_id_example"; // String | The folder's ID.
let body = {"name":"Folder 3"}; // RenameFolderRequest | The folder's new name.
apiInstance.renameFolder(folder_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **String**| The folder's ID. | 
 **body** | [**RenameFolderRequest**](RenameFolderRequest.md)| The folder's new name. | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reorderTemplateFields

> TemplateFields reorderTemplateFields(template_id, body)

Reorder a template's fields

Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"field_ids":[3,1,2]}; // ReorderTemplateFieldsRequest | The new order of the fields in the template's draft.
apiInstance.reorderTemplateFields(template_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**ReorderTemplateFieldsRequest**](ReorderTemplateFieldsRequest.md)| The new order of the fields in the template's draft. | 

### Return type

[**TemplateFields**](TemplateFields.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restoreTemplateVersion

> Template restoreTemplateVersion(template_id, body)

Restore a template version

Replaces the template's draft with a copy of one of its published versions. The draft keeps its settings that apply to every version, such as `webhook_url`.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"version":"0.1.0"}; // RestoreTemplateVersionRequest | The version to restore.
apiInstance.restoreTemplateVersion(template_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**RestoreTemplateVersionRequest**](RestoreTemplateVersionRequest.md)| The version to restore. | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## testAuthentication

> AuthenticationCheck testAuthentication()

Test authentication

Checks whether your API token is valid by making an authenticated request. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
apiInstance.testAuthentication().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthenticationCheck**](AuthenticationCheck.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSignatureRequest

> SignatureRequest updateSignatureRequest(signature_request_id, body)

Update a signature request

Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let signature_request_id = "srq_1234567890abcdef01"; // String | The signature request's ID.
let body = {"metadata":{"user_id":43},"auth_type":"oauth","auth_provider":"google","auth_session_started_at":"2018-10-20T08:00:00Z","auth_user_id_hash":"8ae0e445664ca53407906db8638d8ba07a2383f656383a4427bed1ab645ca29a"}; // UpdateSignatureRequestRequest | The settings to change. Properties left out keep their values.
apiInstance.updateSignatureRequest(signature_request_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signature_request_id** | **String**| The signature request's ID. | 
 **body** | [**UpdateSignatureRequestRequest**](UpdateSignatureRequestRequest.md)| The settings to change. Properties left out keep their values. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplate

> Template updateTemplate(template_id, body)

Update a template

Changes a template's draft. Properties left out keep their values. `defaults` and `html_engine_options` replace the whole object, and `field_groups` changes only the groups it lists. Settings such as `webhook_url`, `public_submissions` and `expire_after` apply to every published version too, and setting `parent_folder_id` moves the template and all of its published versions. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"name":"Rental Contract 2025","parent_folder_id":null,"slack_webhook_url":"https://hooks.slack.com/services/T000/B000/XXXX","encrypt_pdfs_password":null,"default_form_mode":"dual","ai_field_naming_language":"form_language","defaults":{"typeface":"Helvetica","font_size":10,"bold":true}}; // UpdateTemplateRequest | The settings to change. Properties left out keep their values.
apiInstance.updateTemplate(template_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**UpdateTemplateRequest**](UpdateTemplateRequest.md)| The settings to change. Properties left out keep their values. | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplateDocument

> Template updateTemplateDocument(template_id, body, opts)

Replace a template's document

Replaces a PDF template's PDF, or a Word template's Word document (from a .docx or an .odt), with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. To send the file as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"cache_id":"cache/original-0000000000","filename":"fw8ben.pdf","reimport_fields":true}; // UpdateTemplateDocumentRequest | The new PDF, or a Word template's new Word document, as one of `cache_id`, `document_url` and `document_base64`.
let opts = {
  'wait': true // Boolean | Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
};
apiInstance.updateTemplateDocument(template_id, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**UpdateTemplateDocumentRequest**](UpdateTemplateDocumentRequest.md)| The new PDF, or a Word template's new Word document, as one of `cache_id`, `document_url` and `document_base64`. | 
 **wait** | **Boolean**| Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplateFields

> TemplateFields updateTemplateFields(template_id, body)

Update a template's fields

Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"fields":[{"id":0,"x":5}]}; // UpdateTemplateFieldsRequest | The fields to change in the template's draft.
apiInstance.updateTemplateFields(template_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**UpdateTemplateFieldsRequest**](UpdateTemplateFieldsRequest.md)| The fields to change in the template's draft. | 

### Return type

[**TemplateFields**](TemplateFields.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebhook

> Webhook updateWebhook(webhook_id, body)

Update a webhook

Updates a webhook. Only the properties you send change.

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let webhook_id = "webhook_id_example"; // String | The webhook's ID.
let body = {"name":"Updated Webhook","enabled":false}; // UpdateWebhookRequest | The settings to change. Properties left out keep their values.
apiInstance.updateWebhook(webhook_id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **String**| The webhook's ID. | 
 **body** | [**UpdateWebhookRequest**](UpdateWebhookRequest.md)| The settings to change. Properties left out keep their values. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadTemplate

> Template uploadTemplate(document, opts)

Create a template from an uploaded PDF or Word document

Creates a PDF template from a PDF, or a Word template from a Word document (.docx) or an OpenDocument text file (.odt), sent with the request (`multipart/form-data`). A Word template needs its `output_format`. For large files, upload the file with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let document = "/path/to/file"; // File | A PDF (for a PDF template) or a Word document (.docx or .odt, for a Word template). DocSpring converts an OpenDocument text file (.odt) to a Word document after responding: the template's `document.state` is `converting` until then (sync.api hosts wait for it).
let opts = {
  'wait': true, // Boolean | Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
  'name': "name_example", // String | The template's name.
  'description': "description_example", // String | The template's description.
  'parent_folder_id': "parent_folder_id_example", // String | The folder to put the template in. Left out, it's created at the root.
  'ai_field_naming_language': new DocSpring.AiFieldNamingLanguage(), // AiFieldNamingLanguage | The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings.
  'detect_fields': true, // Boolean | Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up.
  'field_source': new DocSpring.FieldSetupSource(), // FieldSetupSource | With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields.
  'field_naming': new DocSpring.FieldSetupNaming(), // FieldSetupNaming | With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`.
  'field_logic': new DocSpring.FieldSetupLogic(), // FieldSetupLogic | With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings.
  'output_format': new DocSpring.OutputFormat() // OutputFormat | What each submission of a Word template makes unless its request sets `output_formats`: `docx` (a Word document), `odt` (an OpenDocument file, converted from the Word document) or `pdf`. Required when `document` is a Word document.
};
apiInstance.uploadTemplate(document, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document** | **File**| A PDF (for a PDF template) or a Word document (.docx or .odt, for a Word template). DocSpring converts an OpenDocument text file (.odt) to a Word document after responding: the template's `document.state` is `converting` until then (sync.api hosts wait for it). | 
 **wait** | **Boolean**| Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. | [optional] 
 **name** | **String**| The template's name. | [optional] 
 **description** | **String**| The template's description. | [optional] 
 **parent_folder_id** | **String**| The folder to put the template in. Left out, it's created at the root. | [optional] 
 **ai_field_naming_language** | [**AiFieldNamingLanguage**](AiFieldNamingLanguage.md)| The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings. | [optional] 
 **detect_fields** | **Boolean**| Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up. | [optional] 
 **field_source** | [**FieldSetupSource**](FieldSetupSource.md)| With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields. | [optional] 
 **field_naming** | [**FieldSetupNaming**](FieldSetupNaming.md)| With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`. | [optional] 
 **field_logic** | [**FieldSetupLogic**](FieldSetupLogic.md)| With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings. | [optional] 
 **output_format** | [**OutputFormat**](OutputFormat.md)| What each submission of a Word template makes unless its request sets `output_formats`: `docx` (a Word document), `odt` (an OpenDocument file, converted from the Word document) or `pdf`. Required when `document` is a Word document. | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## uploadTemplateDocument

> Template uploadTemplateDocument(template_id, document, opts)

Replace a template's document with an uploaded file

Replaces a PDF template's PDF, or a Word template's Word document, with one sent with the request (`multipart/form-data`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let document = "/path/to/file"; // File | The new PDF, or the new Word document (.docx or .odt) of a Word template.
let opts = {
  'wait': true, // Boolean | Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
  'reimport_fields': true // Boolean | Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. Only for PDF templates: a Word template adds a field for each new tag.
};
apiInstance.uploadTemplateDocument(template_id, document, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **document** | **File**| The new PDF, or the new Word document (.docx or .odt) of a Word template. | 
 **wait** | **Boolean**| Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. | [optional] 
 **reimport_fields** | **Boolean**| Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. Only for PDF templates: a Word template adds a field for each new tag. | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## validateSubmission

> SubmissionValidation validateSubmission(template_id, body, opts)

Check a submission without creating it

Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | The template's ID.
let body = {"data":{"first_name":"John","last_name":"Smith","phone_number":"+11234567890"}}; // ValidateSubmissionRequest | The submission's data and settings.
let opts = {
  'version': "latest" // String | The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
};
apiInstance.validateSubmission(template_id, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**| The template's ID. | 
 **body** | [**ValidateSubmissionRequest**](ValidateSubmissionRequest.md)| The submission's data and settings. | 
 **version** | **String**| The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published). | [optional] 

### Return type

[**SubmissionValidation**](SubmissionValidation.md)

### Authorization

[api_token_basic](../README.md#install-and-configure)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

