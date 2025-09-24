# DocSpring.Client

All URIs are relative to *https://sync.api.docspring.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFieldsToTemplate**](Client.md#addFieldsToTemplate) | **PUT** /templates/{template_id}/add_fields | Add new fields to a Template
[**batchGeneratePdfs**](Client.md#batchGeneratePdfs) | **POST** /submissions/batches | Generate multiple PDFs
[**combinePdfs**](Client.md#combinePdfs) | **POST** /combined_submissions | Merge submission PDFs, template PDFs, or custom files
[**copyTemplate**](Client.md#copyTemplate) | **POST** /templates/{template_id}/copy | Copy a template
[**createCustomFileFromUpload**](Client.md#createCustomFileFromUpload) | **POST** /custom_files | Create a new custom file from a cached S3 upload
[**createDataRequestEvent**](Client.md#createDataRequestEvent) | **POST** /data_requests/{data_request_id}/events | Create a new event for emailing a signee a request for signature
[**createDataRequestToken**](Client.md#createDataRequestToken) | **POST** /data_requests/{data_request_id}/tokens | Create a new data request token for form authentication
[**createFolder**](Client.md#createFolder) | **POST** /folders/ | Create a folder
[**createHtmlTemplate**](Client.md#createHtmlTemplate) | **POST** /templates?endpoint_variant&#x3D;create_html_template | Create a new HTML template
[**createPdfTemplate**](Client.md#createPdfTemplate) | **POST** /templates | Create a new PDF template with a form POST file upload
[**createPdfTemplateFromUpload**](Client.md#createPdfTemplateFromUpload) | **POST** /templates?endpoint_variant&#x3D;create_template_from_cached_upload | Create a new PDF template from a cached S3 file upload
[**deleteFolder**](Client.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
[**deleteTemplate**](Client.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete a template
[**expireCombinedSubmission**](Client.md#expireCombinedSubmission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
[**expireSubmission**](Client.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
[**generatePdf**](Client.md#generatePdf) | **POST** /templates/{template_id}/submissions | Generate a PDF
[**generatePreview**](Client.md#generatePreview) | **POST** /submissions/{submission_id}/generate_preview | Generate a preview PDF for partially completed data requests
[**getCombinedSubmission**](Client.md#getCombinedSubmission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
[**getDataRequest**](Client.md#getDataRequest) | **GET** /data_requests/{data_request_id} | Look up a submission data request
[**getFullTemplate**](Client.md#getFullTemplate) | **GET** /templates/{template_id}?full&#x3D;true | Fetch the full attributes for a PDF template
[**getPresignUrl**](Client.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned S3 URL for direct file upload
[**getSubmission**](Client.md#getSubmission) | **GET** /submissions/{submission_id} | Check the status of a PDF
[**getSubmissionBatch**](Client.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
[**getTemplate**](Client.md#getTemplate) | **GET** /templates/{template_id} | Check the status of an uploaded template
[**getTemplateSchema**](Client.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Fetch the JSON schema for a template
[**listCombinedSubmissions**](Client.md#listCombinedSubmissions) | **GET** /combined_submissions | Get a list of all combined submissions
[**listFolders**](Client.md#listFolders) | **GET** /folders/ | Get a list of all folders
[**listSubmissions**](Client.md#listSubmissions) | **GET** /submissions | List all submissions
[**listTemplateSubmissions**](Client.md#listTemplateSubmissions) | **GET** /templates/{template_id}/submissions | List all submissions for a given template
[**listTemplates**](Client.md#listTemplates) | **GET** /templates | Get a list of all templates
[**moveFolderToFolder**](Client.md#moveFolderToFolder) | **POST** /folders/{folder_id}/move | Move a folder
[**moveTemplateToFolder**](Client.md#moveTemplateToFolder) | **POST** /templates/{template_id}/move | Move Template to folder
[**publishTemplateVersion**](Client.md#publishTemplateVersion) | **POST** /templates/{template_id}/publish_version | Publish a template version
[**renameFolder**](Client.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**restoreTemplateVersion**](Client.md#restoreTemplateVersion) | **POST** /templates/{template_id}/restore_version | Restore a template version
[**testAuthentication**](Client.md#testAuthentication) | **GET** /authentication | Test authentication
[**updateDataRequest**](Client.md#updateDataRequest) | **PUT** /data_requests/{data_request_id} | Update a submission data request
[**updateTemplate**](Client.md#updateTemplate) | **PUT** /templates/{template_id} | Update a Template
[**updateTemplateDocument**](Client.md#updateTemplateDocument) | **PUT** /templates/{template_id}?endpoint_variant&#x3D;update_template_pdf_with_form_post | Update a template&#39;s document with a form POST file upload
[**updateTemplateDocumentFromUpload**](Client.md#updateTemplateDocumentFromUpload) | **PUT** /templates/{template_id}?endpoint_variant&#x3D;update_template_pdf_with_cached_upload | Update a template&#39;s document with a cached S3 file upload



## addFieldsToTemplate

> TemplateAddFieldsResponse addFieldsToTemplate(template_id, data)

Add new fields to a Template

Adds fields to a PDF template. Configure field types, positions, defaults, and formatting options. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef02"; // String | 
let data = new DocSpring.AddFieldsData(); // AddFieldsData | 
apiInstance.addFieldsToTemplate(template_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **data** | [**AddFieldsData**](AddFieldsData.md)|  | 

### Return type

[**TemplateAddFieldsResponse**](TemplateAddFieldsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchGeneratePdfs

> BatchGeneratePdfs201Response batchGeneratePdfs(data, opts)

Generate multiple PDFs

Generates up to 50 PDFs in a single request. Each submission can use a different template and data. Supports both synchronous (wait for all PDFs) and asynchronous processing. More efficient than individual requests when creating multiple PDFs.  See also: - [Batch and Combine PDFs](https://docspring.com/docs/api-guide/generate-pdfs/batch-generate-pdfs/) - Generate and merge PDFs in one request 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data = new DocSpring.SubmissionBatchData(); // SubmissionBatchData | 
let opts = {
  'wait': true // Boolean | Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
};
apiInstance.batchGeneratePdfs(data, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**SubmissionBatchData**](SubmissionBatchData.md)|  | 
 **wait** | **Boolean**| Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | [optional] [default to true]

### Return type

[**BatchGeneratePdfs201Response**](BatchGeneratePdfs201Response.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## combinePdfs

> CreateCombinedSubmissionResponse combinePdfs(data)

Merge submission PDFs, template PDFs, or custom files

Combines multiple PDFs from various sources into a single PDF file. Supports merging submission PDFs, template PDFs, custom files, other merged PDFs, and PDFs from URLs. Merges the PDFs in the order provided. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data = new DocSpring.CombinePdfsData(); // CombinePdfsData | 
apiInstance.combinePdfs(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CombinePdfsData**](CombinePdfsData.md)|  | 

### Return type

[**CreateCombinedSubmissionResponse**](CreateCombinedSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## copyTemplate

> TemplatePreview copyTemplate(template_id, opts)

Copy a template

Creates a copy of an existing template with all its fields and configuration. Optionally specify a new name and target folder. The copied template starts as a new draft that can be modified independently of the original. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
let opts = {
  'options': new DocSpring.CopyTemplateOptions() // CopyTemplateOptions | 
};
apiInstance.copyTemplate(template_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **options** | [**CopyTemplateOptions**](CopyTemplateOptions.md)|  | [optional] 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCustomFileFromUpload

> CreateCustomFileResponse createCustomFileFromUpload(data)

Create a new custom file from a cached S3 upload

The Custom Files API endpoint allows you to upload PDFs to DocSpring and then merge them with other PDFs. First upload your file using the presigned URL endpoint, then use the returned cache_id to create the custom file. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data = new DocSpring.CreateCustomFileData(); // CreateCustomFileData | 
apiInstance.createCustomFileFromUpload(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CreateCustomFileData**](CreateCustomFileData.md)|  | 

### Return type

[**CreateCustomFileResponse**](CreateCustomFileResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDataRequestEvent

> CreateSubmissionDataRequestEventResponse createDataRequestEvent(data_request_id, event)

Create a new event for emailing a signee a request for signature

Records user notification events for data requests. Use this to create an audit trail showing when and how users were notified about data request forms. Supports email, SMS, and other notification types. Records the notification time for compliance tracking.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - User notification workflow 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data_request_id = "drq_1234567890abcdef01"; // String | 
let event = new DocSpring.CreateSubmissionDataRequestEventRequest(); // CreateSubmissionDataRequestEventRequest | 
apiInstance.createDataRequestEvent(data_request_id, event, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_request_id** | **String**|  | 
 **event** | [**CreateSubmissionDataRequestEventRequest**](CreateSubmissionDataRequestEventRequest.md)|  | 

### Return type

[**CreateSubmissionDataRequestEventResponse**](CreateSubmissionDataRequestEventResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDataRequestToken

> CreateSubmissionDataRequestTokenResponse createDataRequestToken(data_request_id, opts)

Create a new data request token for form authentication

Creates an authentication token for accessing a data request form. Tokens can be created for API access (1 hour expiration) or email links (30 day expiration). Returns a token and a pre-authenticated URL for the data request form.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data_request_id = "drq_1234567890abcdef01"; // String | 
let opts = {
  'type': "api" // String | 
};
apiInstance.createDataRequestToken(data_request_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_request_id** | **String**|  | 
 **type** | **String**|  | [optional] 

### Return type

[**CreateSubmissionDataRequestTokenResponse**](CreateSubmissionDataRequestTokenResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createFolder

> Folder createFolder(data)

Create a folder

Creates a new folder for organizing templates. Folders can be nested within other folders by providing a &#x60;parent_folder_id&#x60;. Folder names must be unique within the same parent. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data = new DocSpring.CreateFolderData(); // CreateFolderData | 
apiInstance.createFolder(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CreateFolderData**](CreateFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createHtmlTemplate

> TemplatePreview createHtmlTemplate(data)

Create a new HTML template

Creates a new HTML template using HTML, CSS/SCSS, and Liquid templating. Allows complete control over PDF layout and styling. Supports headers, footers, and dynamic content using Liquid syntax for field values, conditions, loops, and filters. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data = new DocSpring.CreateHtmlTemplate(); // CreateHtmlTemplate | 
apiInstance.createHtmlTemplate(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CreateHtmlTemplate**](CreateHtmlTemplate.md)|  | 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPdfTemplate

> TemplatePreview createPdfTemplate(template_document, template_name, opts)

Create a new PDF template with a form POST file upload

Creates a new PDF template by uploading a PDF file. The uploaded PDF becomes the foundation for your template, and you can then add fillable fields using the template editor. Use the wait parameter to control whether the request waits for document processing to complete. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_document = "/path/to/file"; // File | 
let template_name = "template_name_example"; // String | 
let opts = {
  'wait': true, // Boolean | Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
  'template_description': "template_description_example", // String | 
  'template_parent_folder_id': "template_parent_folder_id_example" // String | 
};
apiInstance.createPdfTemplate(template_document, template_name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_document** | **File**|  | 
 **template_name** | **String**|  | 
 **wait** | **Boolean**| Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | [optional] [default to true]
 **template_description** | **String**|  | [optional] 
 **template_parent_folder_id** | **String**|  | [optional] 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## createPdfTemplateFromUpload

> TemplatePreview createPdfTemplateFromUpload(data)

Create a new PDF template from a cached S3 file upload

Creates a new PDF template from a file previously uploaded to S3 using a presigned URL. This two-step process allows for more reliable large file uploads by first uploading the file to S3, then creating the template using the cached upload ID. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data = new DocSpring.CreatePdfTemplate(); // CreatePdfTemplate | 
apiInstance.createPdfTemplateFromUpload(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CreatePdfTemplate**](CreatePdfTemplate.md)|  | 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFolder

> Folder deleteFolder(folder_id)

Delete a folder

Deletes an empty folder. The folder must not contain any templates or subfolders. Move or delete all contents before attempting to delete the folder. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let folder_id = "fld_1234567890abcdef01"; // String | 
apiInstance.deleteFolder(folder_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **String**|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTemplate

> TemplateDeleteResponse deleteTemplate(template_id, opts)

Delete a template

Deletes a template or a specific template version. When no version is specified, deletes the entire template including all versions. When a version is specified, deletes only that version while preserving others. Returns remaining version information. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
let opts = {
  'version': "0.1.0" // String | 
};
apiInstance.deleteTemplate(template_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **version** | **String**|  | [optional] 

### Return type

[**TemplateDeleteResponse**](TemplateDeleteResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expireCombinedSubmission

> CombinedSubmission expireCombinedSubmission(combined_submission_id)

Expire a combined submission

Expiring a combined submission deletes the PDF from our system. This is useful for invalidating sensitive documents. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let combined_submission_id = "com_1234567890abcdef01"; // String | 
apiInstance.expireCombinedSubmission(combined_submission_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combined_submission_id** | **String**|  | 

### Return type

[**CombinedSubmission**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expireSubmission

> SubmissionPreview expireSubmission(submission_id)

Expire a PDF submission

Expiring a PDF submission deletes the PDF and removes the data from our database. This is useful for invalidating sensitive documents after they&#39;ve been downloaded. You can also [configure a data retention policy for your submissions](https://docspring.com/docs/template-editor/settings/#expire-submissions) so that they automatically expire. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_id = "sub_1234567890abcdef01"; // String | 
apiInstance.expireSubmission(submission_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **String**|  | 

### Return type

[**SubmissionPreview**](SubmissionPreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generatePdf

> CreateSubmissionResponse generatePdf(template_id, submission, opts)

Generate a PDF

Creates a PDF submission by filling in a template with data. Supports both synchronous (default) and asynchronous processing. Set &#x60;wait: false&#x60; to return immediately.  See also: - [Customize the PDF Title and Filename](https://docspring.com/docs/api-guide/generate-pdfs/customize-pdf-title-and-filename/) - Set custom metadata - [Handling Truncated Text](https://docspring.com/docs/api-guide/generate-pdfs/handle-truncated-text/) - Handle text that doesn&#39;t fit in fields 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
let submission = new DocSpring.CreatePdfSubmissionData(); // CreatePdfSubmissionData | 
let opts = {
  'wait': true // Boolean | Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
};
apiInstance.generatePdf(template_id, submission, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **submission** | [**CreatePdfSubmissionData**](CreatePdfSubmissionData.md)|  | 
 **wait** | **Boolean**| Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | [optional] [default to true]

### Return type

[**CreateSubmissionResponse**](CreateSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generatePreview

> SuccessErrorResponse generatePreview(submission_id)

Generate a preview PDF for partially completed data requests

Generates a preview PDF for a submission with partially completed data requests. Useful for showing users what the final document will look like before all signatures or data have been collected. The preview includes any data collected so far. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_id = "sub_1234567890abcdef01"; // String | 
apiInstance.generatePreview(submission_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **String**|  | 

### Return type

[**SuccessErrorResponse**](SuccessErrorResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCombinedSubmission

> CombinedSubmission getCombinedSubmission(combined_submission_id)

Check the status of a combined submission (merged PDFs)

Retrieves the details and status of a combined submission. Returns processing state, download URL (if processed), metadata, and information about any integrated actions (e.g., S3 uploads). 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let combined_submission_id = "com_1234567890abcdef01"; // String | 
apiInstance.getCombinedSubmission(combined_submission_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combined_submission_id** | **String**|  | 

### Return type

[**CombinedSubmission**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDataRequest

> SubmissionDataRequestShow getDataRequest(data_request_id)

Look up a submission data request

Retrieves the details and status of a data request. Returns information about the request state (pending, viewed, completed), authentication details, and metadata. Includes audit information like IP address, browseruser agent, and timestamps.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - Complete guide to data request workflow 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data_request_id = "drq_1234567890abcdef01"; // String | 
apiInstance.getDataRequest(data_request_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_request_id** | **String**|  | 

### Return type

[**SubmissionDataRequestShow**](SubmissionDataRequestShow.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFullTemplate

> Template getFullTemplate(template_id)

Fetch the full attributes for a PDF template

Retrieves complete template information including fields, defaults, settings, and HTML/SCSS content. Use this to get all template data needed for automated updates or analysis. Returns more detailed information than the basic &#x60;getTemplate&#x60; endpoint. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
apiInstance.getFullTemplate(template_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPresignUrl

> UploadPresignResponse getPresignUrl()

Get a presigned S3 URL for direct file upload

Returns a presigned S3 URL for uploading files directly to our S3 bucket. Use this endpoint to upload large files before creating templates or custom files. S3 will respond with a JSON object that you can include in your DocSpring API request.  Uploaded files can be used to: - [Create templates](https://docspring.com/docs/api/#tag/templates/post/templates?endpoint_variant&#x3D;create_template_from_cached_upload) - [Update templates](https://docspring.com/docs/api/#tag/templates/put/templates/{template_id}?endpoint_variant&#x3D;update_template_pdf_with_cached_upload) - [Create custom files](https://docspring.com/docs/api/#tag/custom-files/post/custom_files) and then [merge them with other PDFs](https://docspring.com/docs/api/#tag/combine-pdfs/post/combined_submissions) 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
apiInstance.getPresignUrl((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UploadPresignResponse**](UploadPresignResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubmission

> Submission getSubmission(submission_id, opts)

Check the status of a PDF

Retrieves the details and status of a PDF submission. Returns processing state, download URL (if processed), metadata, submission data (optional), and information about any integrated actions. Use this to poll for completion when using asynchronous processing. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_id = "sub_1234567890abcdef01"; // String | 
let opts = {
  'include_data': true // Boolean | 
};
apiInstance.getSubmission(submission_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **String**|  | 
 **include_data** | **Boolean**|  | [optional] 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubmissionBatch

> SubmissionBatchWithSubmissions getSubmissionBatch(submission_batch_id, opts)

Check the status of a submission batch job

Retrieves the status and results of a batch PDF generation job. Returns processing state, completion statistics, and optionally includes all individual submission details. Use this to poll for completion when using asynchronous batch processing. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let submission_batch_id = "sbb_1234567890abcdef01"; // String | 
let opts = {
  'include_submissions': true // Boolean | 
};
apiInstance.getSubmissionBatch(submission_batch_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_batch_id** | **String**|  | 
 **include_submissions** | **Boolean**|  | [optional] 

### Return type

[**SubmissionBatchWithSubmissions**](SubmissionBatchWithSubmissions.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplate

> TemplatePreview getTemplate(template_id)

Check the status of an uploaded template

Retrieves information about a template including processing status and document URL. Use this to check if template is ready to view in the template editor or generate PDFs. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
apiInstance.getTemplate(template_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateSchema

> JsonSchema getTemplateSchema(template_id)

Fetch the JSON schema for a template

Retrieves the JSON Schema definition for a template&#39;s fields. Use this to validate data before submitting it for PDF generation, or to build dynamic forms that match the template&#39;s field structure and validation requirements.  See also: - [Generate PDFs Guide](https://docspring.com/docs/api-guide/generate-pdfs/generate-pdfs-via-api/) - Use schema to validate submission data 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
apiInstance.getTemplateSchema(template_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 

### Return type

[**JsonSchema**](JsonSchema.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCombinedSubmissions

> [CombinedSubmission] listCombinedSubmissions(opts)

Get a list of all combined submissions

Returns a paginated list of combined submissions (merged PDFs) for your account. Includes processing status, expiration details, and download URLs for processed PDFs. 

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
  'page': 3, // Number | Default: 1
  'per_page': 1 // Number | Default: 50
};
apiInstance.listCombinedSubmissions(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Default: 1 | [optional] 
 **per_page** | **Number**| Default: 50 | [optional] 

### Return type

[**[CombinedSubmission]**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFolders

> [Folder] listFolders(opts)

Get a list of all folders

Returns a list of folders in your account. Can be filtered by parent folder ID to retrieve subfolders. Folders help organize templates and maintain a hierarchical structure. 

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
  'parent_folder_id': "fld_1234567890abcdef02" // String | Filter By Folder Id
};
apiInstance.listFolders(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_folder_id** | **String**| Filter By Folder Id | [optional] 

### Return type

[**[Folder]**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubmissions

> ListSubmissionsResponse listSubmissions(opts)

List all submissions

Returns a paginated list of all PDF submissions across all templates in your account. Can be filtered by date range and submission type (test/live). Supports cursor-based pagination and optionally includes submission data for each result. 

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
  'cursor': "sub_1234567890abcdef12", // String | 
  'limit': 3, // Number | 
  'created_after': "2019-01-01T09:00:00-05:00", // String | 
  'created_before': "2020-01-01T09:00:00.000+0200", // String | 
  'type': "test", // String | 
  'include_data': true // Boolean | 
};
apiInstance.listSubmissions(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **created_after** | **String**|  | [optional] 
 **created_before** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **include_data** | **Boolean**|  | [optional] 

### Return type

[**ListSubmissionsResponse**](ListSubmissionsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplateSubmissions

> ListSubmissionsResponse listTemplateSubmissions(template_id, opts)

List all submissions for a given template

Returns a paginated list of all submissions for a specific template. Can be filtered by date range, submission type (test/live), and optionally include submission data. Supports cursor-based pagination for efficient retrieval of large result sets. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef02"; // String | 
let opts = {
  'cursor': "cursor_example", // String | 
  'limit': 56, // Number | 
  'created_after': "created_after_example", // String | 
  'created_before': "created_before_example", // String | 
  'type': "type_example", // String | 
  'include_data': true // Boolean | 
};
apiInstance.listTemplateSubmissions(template_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **cursor** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **created_after** | **String**|  | [optional] 
 **created_before** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **include_data** | **Boolean**|  | [optional] 

### Return type

[**ListSubmissionsResponse**](ListSubmissionsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplates

> [TemplatePreview] listTemplates(opts)

Get a list of all templates

Retrieves a list of your templates with search, filtering, and pagination options. Returns basic template information including ID, name, type (PDF or HTML), and folder location. Supports text search by name and filtering by parent folder. 

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
  'query': "2", // String | Search By Name
  'parent_folder_id': "fld_1234567890abcdef01", // String | Filter By Folder Id
  'page': 2, // Number | Default: 1
  'per_page': 1 // Number | Default: 50
};
apiInstance.listTemplates(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search By Name | [optional] 
 **parent_folder_id** | **String**| Filter By Folder Id | [optional] 
 **page** | **Number**| Default: 1 | [optional] 
 **per_page** | **Number**| Default: 50 | [optional] 

### Return type

[**[TemplatePreview]**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## moveFolderToFolder

> Folder moveFolderToFolder(folder_id, data)

Move a folder

Moves a folder to a new parent folder or to the root level. All templates and subfolders within the folder are moved together. Cannot move a folder into one of its own subfolders. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let folder_id = "fld_1234567890abcdef01"; // String | 
let data = new DocSpring.MoveFolderData(); // MoveFolderData | 
apiInstance.moveFolderToFolder(folder_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **String**|  | 
 **data** | [**MoveFolderData**](MoveFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## moveTemplateToFolder

> TemplatePreview moveTemplateToFolder(template_id, data)

Move Template to folder

Moves a template to a different folder or to the root level. Use this to organize templates within your folders. Provide a folder ID to move to a specific folder, or &#x60;null&#x60; to move to the root level. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
let data = new DocSpring.MoveTemplateData(); // MoveTemplateData | 
apiInstance.moveTemplateToFolder(template_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **data** | [**MoveTemplateData**](MoveTemplateData.md)|  | 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## publishTemplateVersion

> TemplatePublishVersionResponse publishTemplateVersion(template_id, data)

Publish a template version

Publishes the current draft version of a template and creates a new immutable version with semantic versioning (major.minor.patch). 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
let data = new DocSpring.PublishVersionData(); // PublishVersionData | 
apiInstance.publishTemplateVersion(template_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **data** | [**PublishVersionData**](PublishVersionData.md)|  | 

### Return type

[**TemplatePublishVersionResponse**](TemplatePublishVersionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## renameFolder

> Folder renameFolder(folder_id, data)

Rename a folder

Renames an existing folder. The new name must be unique within the same parent folder. This operation only changes the folder name, not its location or contents. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let folder_id = "fld_1234567890abcdef01"; // String | 
let data = new DocSpring.RenameFolderData(); // RenameFolderData | 
apiInstance.renameFolder(folder_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **String**|  | 
 **data** | [**RenameFolderData**](RenameFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restoreTemplateVersion

> SuccessErrorResponse restoreTemplateVersion(template_id, data)

Restore a template version

Restores your template to a previously published version, copying that version&#39;s content and configuration to the current draft. Use this to revert changes or recover from an unwanted modification. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
let data = new DocSpring.RestoreVersionData(); // RestoreVersionData | 
apiInstance.restoreTemplateVersion(template_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **data** | [**RestoreVersionData**](RestoreVersionData.md)|  | 

### Return type

[**SuccessErrorResponse**](SuccessErrorResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## testAuthentication

> SuccessErrorResponse testAuthentication()

Test authentication

Checks whether your API token is valid by making an authenticated request. Returns a success response if authentication passes. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
apiInstance.testAuthentication((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccessErrorResponse**](SuccessErrorResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDataRequest

> CreateSubmissionDataRequestResponse updateDataRequest(data_request_id, data)

Update a submission data request

Updates authentication details for a data request. Use this when a user logs in to record their authentication method, provider, session information, and hashed identifiers. Updates metadata and tracks authentication state changes for auditing and compliance. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let data_request_id = "drq_1234567890abcdef01"; // String | 
let data = new DocSpring.UpdateSubmissionDataRequestData(); // UpdateSubmissionDataRequestData | 
apiInstance.updateDataRequest(data_request_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_request_id** | **String**|  | 
 **data** | [**UpdateSubmissionDataRequestData**](UpdateSubmissionDataRequestData.md)|  | 

### Return type

[**CreateSubmissionDataRequestResponse**](CreateSubmissionDataRequestResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplate

> SuccessMultipleErrorsResponse updateTemplate(template_id, data)

Update a Template

Updates template content and properties. For HTML templates, you can modify the HTML, SCSS, headers, footers, name, and description. Changes are applied to your draft template and do not affect published template versions. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef03"; // String | 
let data = new DocSpring.UpdateHtmlTemplate(); // UpdateHtmlTemplate | 
apiInstance.updateTemplate(template_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **data** | [**UpdateHtmlTemplate**](UpdateHtmlTemplate.md)|  | 

### Return type

[**SuccessMultipleErrorsResponse**](SuccessMultipleErrorsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplateDocument

> SuccessMultipleErrorsResponse updateTemplateDocument(template_id, template_document, opts)

Update a template&#39;s document with a form POST file upload

Upload a new PDF file to update a PDF template&#39;s document. This replaces the template&#39;s PDF while preserving all of the existing fields. If you upload a PDF with fewer pages than the current document, any fields on the removed pages will be deleted. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
let template_document = "/path/to/file"; // File | 
let opts = {
  'template_name': "template_name_example" // String | 
};
apiInstance.updateTemplateDocument(template_id, template_document, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **template_document** | **File**|  | 
 **template_name** | **String**|  | [optional] 

### Return type

[**SuccessMultipleErrorsResponse**](SuccessMultipleErrorsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateTemplateDocumentFromUpload

> SuccessMultipleErrorsResponse updateTemplateDocumentFromUpload(template_id, data)

Update a template&#39;s document with a cached S3 file upload

Updates a PDF template&#39;s document using a cached file upload. This is a three-step process: First, request a presigned URL to upload your PDF file to our S3 bucket. Then, use that URL to upload your PDF file. Finally, submit the ID of the uploaded file to replace the template&#39;s document. 

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.Client();
let template_id = "tpl_1234567890abcdef01"; // String | 
let data = new DocSpring.UpdatePdfTemplate(); // UpdatePdfTemplate | 
apiInstance.updateTemplateDocumentFromUpload(template_id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **String**|  | 
 **data** | [**UpdatePdfTemplate**](UpdatePdfTemplate.md)|  | 

### Return type

[**SuccessMultipleErrorsResponse**](SuccessMultipleErrorsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

