# DocSpring.PDFApi

All URIs are relative to *https://sync.api.docspring.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFieldsToTemplate**](PDFApi.md#addFieldsToTemplate) | **PUT** /templates/{template_id}/add_fields | Add new fields to a Template
[**batchGeneratePdfs**](PDFApi.md#batchGeneratePdfs) | **POST** /submissions/batches | Generates multiple PDFs
[**combinePdfs**](PDFApi.md#combinePdfs) | **POST** /combined_submissions?v&#x3D;2 | Merge submission PDFs, template PDFs, or custom files
[**combineSubmissions**](PDFApi.md#combineSubmissions) | **POST** /combined_submissions | Merge generated PDFs together
[**copyTemplate**](PDFApi.md#copyTemplate) | **POST** /templates/{template_id}/copy | Copy a Template
[**createCustomFileFromUpload**](PDFApi.md#createCustomFileFromUpload) | **POST** /custom_files | Create a new custom file from a cached presign upload
[**createDataRequestEvent**](PDFApi.md#createDataRequestEvent) | **POST** /data_requests/{data_request_id}/events | Creates a new event for emailing a signee a request for signature
[**createDataRequestToken**](PDFApi.md#createDataRequestToken) | **POST** /data_requests/{data_request_id}/tokens | Creates a new data request token for form authentication
[**createFolder**](PDFApi.md#createFolder) | **POST** /folders/ | Create a folder
[**createHTMLTemplate**](PDFApi.md#createHTMLTemplate) | **POST** /templates?endpoint_description&#x3D;html | Create a new HTML template
[**createPDFTemplate**](PDFApi.md#createPDFTemplate) | **POST** /templates | Create a new PDF template with a form POST file upload
[**createPDFTemplateFromUpload**](PDFApi.md#createPDFTemplateFromUpload) | **POST** /templates?endpoint_description&#x3D;cached_upload | Create a new PDF template from a cached presign upload
[**deleteFolder**](PDFApi.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
[**deleteTemplate**](PDFApi.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete a template
[**expireCombinedSubmission**](PDFApi.md#expireCombinedSubmission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
[**expireSubmission**](PDFApi.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
[**generatePdf**](PDFApi.md#generatePdf) | **POST** /templates/{template_id}/submissions | Generates a new PDF
[**generatePdfForHtmlTemplate**](PDFApi.md#generatePdfForHtmlTemplate) | **POST** /templates/{template_id}/submissions?endpoint_description&#x3D;html_templates | Generates a new PDF for an HTML template
[**generatePreview**](PDFApi.md#generatePreview) | **POST** /submissions/{submission_id}/generate_preview | Generated a preview PDF for partially completed data requests
[**getCombinedSubmission**](PDFApi.md#getCombinedSubmission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
[**getDataRequest**](PDFApi.md#getDataRequest) | **GET** /data_requests/{data_request_id} | Look up a submission data request
[**getFullTemplate**](PDFApi.md#getFullTemplate) | **GET** /templates/{template_id}?full&#x3D;true | Fetch the full attributes for a PDF template
[**getPresignUrl**](PDFApi.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned URL so that you can upload a file to our AWS S3 bucket
[**getSubmission**](PDFApi.md#getSubmission) | **GET** /submissions/{submission_id} | Check the status of a PDF
[**getSubmissionBatch**](PDFApi.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
[**getTemplate**](PDFApi.md#getTemplate) | **GET** /templates/{template_id} | Check the status of an uploaded template
[**getTemplateSchema**](PDFApi.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Fetch the JSON schema for a template
[**listCombinedSubmissions**](PDFApi.md#listCombinedSubmissions) | **GET** /combined_submissions | Get a list of all combined submissions
[**listFolders**](PDFApi.md#listFolders) | **GET** /folders/ | Get a list of all folders
[**listSubmissions**](PDFApi.md#listSubmissions) | **GET** /submissions | List all submissions
[**listTemplateSubmissions**](PDFApi.md#listTemplateSubmissions) | **GET** /templates/{template_id}/submissions | List all submissions for a given template
[**listTemplates**](PDFApi.md#listTemplates) | **GET** /templates | Get a list of all templates
[**moveFolderToFolder**](PDFApi.md#moveFolderToFolder) | **POST** /folders/{folder_id}/move | Move a folder
[**moveTemplateToFolder**](PDFApi.md#moveTemplateToFolder) | **POST** /templates/{template_id}/move | Move Template to folder
[**publishTemplateVersion**](PDFApi.md#publishTemplateVersion) | **POST** /templates/{template_id}/publish_version | Publish a template version
[**renameFolder**](PDFApi.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**restoreTemplateVersion**](PDFApi.md#restoreTemplateVersion) | **POST** /templates/{template_id}/restore_version | Restore a template version
[**testAuthentication**](PDFApi.md#testAuthentication) | **GET** /authentication | Test Authentication
[**updateDataRequest**](PDFApi.md#updateDataRequest) | **PUT** /data_requests/{data_request_id} | Update a submission data request
[**updateTemplate**](PDFApi.md#updateTemplate) | **PUT** /templates/{template_id} | Update a Template



## addFieldsToTemplate

> TemplateAddFieldsResponse addFieldsToTemplate(templateId, data)

Add new fields to a Template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef02"; // String | 
let data = new DocSpring.AddFieldsData(); // AddFieldsData | 
apiInstance.addFieldsToTemplate(templateId, data, (error, data, response) => {
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
 **templateId** | **String**|  | 
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

Generates multiple PDFs

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
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

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
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


## combineSubmissions

> CreateCombinedSubmissionResponse combineSubmissions(data, opts)

Merge generated PDFs together

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let data = new DocSpring.CombinedSubmissionData(); // CombinedSubmissionData | 
let opts = {
  'wait': true // Boolean | Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
};
apiInstance.combineSubmissions(data, opts, (error, data, response) => {
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
 **data** | [**CombinedSubmissionData**](CombinedSubmissionData.md)|  | 
 **wait** | **Boolean**| Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | [optional] [default to true]

### Return type

[**CreateCombinedSubmissionResponse**](CreateCombinedSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## copyTemplate

> TemplatePreview copyTemplate(templateId, opts)

Copy a Template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
let opts = {
  'options': new DocSpring.CopyTemplateOptions() // CopyTemplateOptions | 
};
apiInstance.copyTemplate(templateId, opts, (error, data, response) => {
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
 **templateId** | **String**|  | 
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

Create a new custom file from a cached presign upload

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
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

> CreateSubmissionDataRequestEventResponse createDataRequestEvent(dataRequestId, event)

Creates a new event for emailing a signee a request for signature

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let dataRequestId = "drq_1234567890abcdef01"; // String | 
let event = new DocSpring.CreateSubmissionDataRequestEventRequest(); // CreateSubmissionDataRequestEventRequest | 
apiInstance.createDataRequestEvent(dataRequestId, event, (error, data, response) => {
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
 **dataRequestId** | **String**|  | 
 **event** | [**CreateSubmissionDataRequestEventRequest**](CreateSubmissionDataRequestEventRequest.md)|  | 

### Return type

[**CreateSubmissionDataRequestEventResponse**](CreateSubmissionDataRequestEventResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDataRequestToken

> CreateSubmissionDataRequestTokenResponse createDataRequestToken(dataRequestId, opts)

Creates a new data request token for form authentication

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let dataRequestId = "drq_1234567890abcdef01"; // String | 
let opts = {
  'type': "api" // String | 
};
apiInstance.createDataRequestToken(dataRequestId, opts, (error, data, response) => {
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
 **dataRequestId** | **String**|  | 
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

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
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


## createHTMLTemplate

> TemplatePreview createHTMLTemplate(data)

Create a new HTML template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let data = new DocSpring.CreateHtmlTemplate(); // CreateHtmlTemplate | 
apiInstance.createHTMLTemplate(data, (error, data, response) => {
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


## createPDFTemplate

> TemplatePreview createPDFTemplate(templateDocument, templateName, opts)

Create a new PDF template with a form POST file upload

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateDocument = "/path/to/file"; // File | 
let templateName = "templateName_example"; // String | 
let opts = {
  'wait': true, // Boolean | Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
  'templateDescription': "templateDescription_example", // String | 
  'templateParentFolderId': "templateParentFolderId_example" // String | 
};
apiInstance.createPDFTemplate(templateDocument, templateName, opts, (error, data, response) => {
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
 **templateDocument** | **File**|  | 
 **templateName** | **String**|  | 
 **wait** | **Boolean**| Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | [optional] [default to true]
 **templateDescription** | **String**|  | [optional] 
 **templateParentFolderId** | **String**|  | [optional] 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## createPDFTemplateFromUpload

> TemplatePreview createPDFTemplateFromUpload(data)

Create a new PDF template from a cached presign upload

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let data = new DocSpring.CreatePdfTemplate(); // CreatePdfTemplate | 
apiInstance.createPDFTemplateFromUpload(data, (error, data, response) => {
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

> Folder deleteFolder(folderId)

Delete a folder

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let folderId = "fld_1234567890abcdef01"; // String | 
apiInstance.deleteFolder(folderId, (error, data, response) => {
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
 **folderId** | **String**|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTemplate

> TemplateDeleteResponse deleteTemplate(templateId, opts)

Delete a template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
let opts = {
  'version': "0.1.0" // String | 
};
apiInstance.deleteTemplate(templateId, opts, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **version** | **String**|  | [optional] 

### Return type

[**TemplateDeleteResponse**](TemplateDeleteResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expireCombinedSubmission

> CombinedSubmission expireCombinedSubmission(combinedSubmissionId)

Expire a combined submission

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let combinedSubmissionId = "com_1234567890abcdef01"; // String | 
apiInstance.expireCombinedSubmission(combinedSubmissionId, (error, data, response) => {
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
 **combinedSubmissionId** | **String**|  | 

### Return type

[**CombinedSubmission**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expireSubmission

> SubmissionPreview expireSubmission(submissionId)

Expire a PDF submission

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let submissionId = "sub_1234567890abcdef01"; // String | 
apiInstance.expireSubmission(submissionId, (error, data, response) => {
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
 **submissionId** | **String**|  | 

### Return type

[**SubmissionPreview**](SubmissionPreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generatePdf

> CreateSubmissionResponse generatePdf(templateId, submission, opts)

Generates a new PDF

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
let submission = new DocSpring.CreatePdfSubmissionData(); // CreatePdfSubmissionData | 
let opts = {
  'wait': true // Boolean | Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
};
apiInstance.generatePdf(templateId, submission, opts, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **submission** | [**CreatePdfSubmissionData**](CreatePdfSubmissionData.md)|  | 
 **wait** | **Boolean**| Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | [optional] [default to true]

### Return type

[**CreateSubmissionResponse**](CreateSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generatePdfForHtmlTemplate

> CreateSubmissionResponse generatePdfForHtmlTemplate(templateId, submission, opts)

Generates a new PDF for an HTML template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_HTML567890abcdef01"; // String | 
let submission = new DocSpring.CreateHtmlSubmissionData(); // CreateHtmlSubmissionData | 
let opts = {
  'wait': true // Boolean | Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
};
apiInstance.generatePdfForHtmlTemplate(templateId, submission, opts, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **submission** | [**CreateHtmlSubmissionData**](CreateHtmlSubmissionData.md)|  | 
 **wait** | **Boolean**| Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | [optional] [default to true]

### Return type

[**CreateSubmissionResponse**](CreateSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generatePreview

> SuccessErrorResponse generatePreview(submissionId)

Generated a preview PDF for partially completed data requests

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let submissionId = "sub_1234567890abcdef01"; // String | 
apiInstance.generatePreview(submissionId, (error, data, response) => {
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
 **submissionId** | **String**|  | 

### Return type

[**SuccessErrorResponse**](SuccessErrorResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCombinedSubmission

> CombinedSubmission getCombinedSubmission(combinedSubmissionId)

Check the status of a combined submission (merged PDFs)

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let combinedSubmissionId = "com_1234567890abcdef01"; // String | 
apiInstance.getCombinedSubmission(combinedSubmissionId, (error, data, response) => {
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
 **combinedSubmissionId** | **String**|  | 

### Return type

[**CombinedSubmission**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDataRequest

> SubmissionDataRequestShow getDataRequest(dataRequestId)

Look up a submission data request

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let dataRequestId = "drq_1234567890abcdef01"; // String | 
apiInstance.getDataRequest(dataRequestId, (error, data, response) => {
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
 **dataRequestId** | **String**|  | 

### Return type

[**SubmissionDataRequestShow**](SubmissionDataRequestShow.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFullTemplate

> Template getFullTemplate(templateId)

Fetch the full attributes for a PDF template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
apiInstance.getFullTemplate(templateId, (error, data, response) => {
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
 **templateId** | **String**|  | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPresignUrl

> UploadPresignResponse getPresignUrl()

Get a presigned URL so that you can upload a file to our AWS S3 bucket

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
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

> Submission getSubmission(submissionId, opts)

Check the status of a PDF

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let submissionId = "sub_1234567890abcdef01"; // String | 
let opts = {
  'includeData': true // Boolean | 
};
apiInstance.getSubmission(submissionId, opts, (error, data, response) => {
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
 **submissionId** | **String**|  | 
 **includeData** | **Boolean**|  | [optional] 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubmissionBatch

> SubmissionBatchWithSubmissions getSubmissionBatch(submissionBatchId, opts)

Check the status of a submission batch job

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let submissionBatchId = "sbb_1234567890abcdef01"; // String | 
let opts = {
  'includeSubmissions': true // Boolean | 
};
apiInstance.getSubmissionBatch(submissionBatchId, opts, (error, data, response) => {
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
 **submissionBatchId** | **String**|  | 
 **includeSubmissions** | **Boolean**|  | [optional] 

### Return type

[**SubmissionBatchWithSubmissions**](SubmissionBatchWithSubmissions.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplate

> TemplatePreview getTemplate(templateId)

Check the status of an uploaded template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
apiInstance.getTemplate(templateId, (error, data, response) => {
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
 **templateId** | **String**|  | 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateSchema

> JsonSchema getTemplateSchema(templateId)

Fetch the JSON schema for a template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
apiInstance.getTemplateSchema(templateId, (error, data, response) => {
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
 **templateId** | **String**|  | 

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

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let opts = {
  'page': 2, // Number | Default: 1
  'perPage': 1 // Number | Default: 50
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
 **perPage** | **Number**| Default: 50 | [optional] 

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

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let opts = {
  'parentFolderId': "fld_1234567890abcdef02" // String | Filter By Folder Id
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
 **parentFolderId** | **String**| Filter By Folder Id | [optional] 

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

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let opts = {
  'cursor': "sub_1234567890abcdef12", // String | 
  'limit': 3, // Number | 
  'createdAfter': "2019-01-01T09:00:00-05:00", // String | 
  'createdBefore': "2020-01-01T09:00:00.000+0200", // String | 
  'type': "test", // String | 
  'includeData': true // Boolean | 
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
 **createdAfter** | **String**|  | [optional] 
 **createdBefore** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **includeData** | **Boolean**|  | [optional] 

### Return type

[**ListSubmissionsResponse**](ListSubmissionsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplateSubmissions

> ListSubmissionsResponse listTemplateSubmissions(templateId, opts)

List all submissions for a given template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef02"; // String | 
let opts = {
  'cursor': "cursor_example", // String | 
  'limit': 3.4, // Number | 
  'createdAfter': "createdAfter_example", // String | 
  'createdBefore': "createdBefore_example", // String | 
  'type': "type_example", // String | 
  'includeData': true // Boolean | 
};
apiInstance.listTemplateSubmissions(templateId, opts, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **cursor** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **createdAfter** | **String**|  | [optional] 
 **createdBefore** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **includeData** | **Boolean**|  | [optional] 

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

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let opts = {
  'query': "2", // String | Search By Name
  'parentFolderId': "fld_1234567890abcdef01", // String | Filter By Folder Id
  'page': 2, // Number | Default: 1
  'perPage': 1 // Number | Default: 50
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
 **parentFolderId** | **String**| Filter By Folder Id | [optional] 
 **page** | **Number**| Default: 1 | [optional] 
 **perPage** | **Number**| Default: 50 | [optional] 

### Return type

[**[TemplatePreview]**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## moveFolderToFolder

> Folder moveFolderToFolder(folderId, data)

Move a folder

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let folderId = "fld_1234567890abcdef01"; // String | 
let data = new DocSpring.MoveFolderData(); // MoveFolderData | 
apiInstance.moveFolderToFolder(folderId, data, (error, data, response) => {
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
 **folderId** | **String**|  | 
 **data** | [**MoveFolderData**](MoveFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## moveTemplateToFolder

> TemplatePreview moveTemplateToFolder(templateId, data)

Move Template to folder

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
let data = new DocSpring.MoveTemplateData(); // MoveTemplateData | 
apiInstance.moveTemplateToFolder(templateId, data, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **data** | [**MoveTemplateData**](MoveTemplateData.md)|  | 

### Return type

[**TemplatePreview**](TemplatePreview.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## publishTemplateVersion

> TemplatePublishVersionResponse publishTemplateVersion(templateId, data)

Publish a template version

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
let data = new DocSpring.PublishVersionData(); // PublishVersionData | 
apiInstance.publishTemplateVersion(templateId, data, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **data** | [**PublishVersionData**](PublishVersionData.md)|  | 

### Return type

[**TemplatePublishVersionResponse**](TemplatePublishVersionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## renameFolder

> Folder renameFolder(folderId, data)

Rename a folder

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let folderId = "fld_1234567890abcdef01"; // String | 
let data = new DocSpring.RenameFolderData(); // RenameFolderData | 
apiInstance.renameFolder(folderId, data, (error, data, response) => {
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
 **folderId** | **String**|  | 
 **data** | [**RenameFolderData**](RenameFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restoreTemplateVersion

> SuccessErrorResponse restoreTemplateVersion(templateId, data)

Restore a template version

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef01"; // String | 
let data = new DocSpring.RestoreVersionData(); // RestoreVersionData | 
apiInstance.restoreTemplateVersion(templateId, data, (error, data, response) => {
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
 **templateId** | **String**|  | 
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

Test Authentication

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
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

> CreateSubmissionDataRequestResponse updateDataRequest(dataRequestId, data)

Update a submission data request

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let dataRequestId = "drq_1234567890abcdef01"; // String | 
let data = new DocSpring.UpdateSubmissionDataRequestData(); // UpdateSubmissionDataRequestData | 
apiInstance.updateDataRequest(dataRequestId, data, (error, data, response) => {
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
 **dataRequestId** | **String**|  | 
 **data** | [**UpdateSubmissionDataRequestData**](UpdateSubmissionDataRequestData.md)|  | 

### Return type

[**CreateSubmissionDataRequestResponse**](CreateSubmissionDataRequestResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplate

> SuccessMultipleErrorsResponse updateTemplate(templateId, data)

Update a Template

### Example

```javascript
import DocSpring from 'docspring';
let defaultClient = DocSpring.ApiClient.instance;
// Configure HTTP basic authorization: api_token_basic
let api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

let apiInstance = new DocSpring.PDFApi();
let templateId = "tpl_1234567890abcdef03"; // String | 
let data = new DocSpring.UpdateHtmlTemplate(); // UpdateHtmlTemplate | 
apiInstance.updateTemplate(templateId, data, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **data** | [**UpdateHtmlTemplate**](UpdateHtmlTemplate.md)|  | 

### Return type

[**SuccessMultipleErrorsResponse**](SuccessMultipleErrorsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

