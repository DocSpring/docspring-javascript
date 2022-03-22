# DocSpring.PDFApi

All URIs are relative to *https://api.docspring.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFieldsToTemplate**](PDFApi.md#addFieldsToTemplate) | **PUT** /templates/{template_id}/add_fields | Add new fields to a Template
[**batchGeneratePdfV1**](PDFApi.md#batchGeneratePdfV1) | **POST** /templates/{template_id}/submissions/batch | Generates multiple PDFs
[**batchGeneratePdfs**](PDFApi.md#batchGeneratePdfs) | **POST** /submissions/batches | Generates multiple PDFs
[**combinePdfs**](PDFApi.md#combinePdfs) | **POST** /combined_submissions?v&#x3D;2 | Merge submission PDFs, template PDFs, or custom files
[**combineSubmissions**](PDFApi.md#combineSubmissions) | **POST** /combined_submissions | Merge generated PDFs together
[**copyTemplate**](PDFApi.md#copyTemplate) | **POST** /templates/{template_id}/copy | Copy a Template
[**createCustomFileFromUpload**](PDFApi.md#createCustomFileFromUpload) | **POST** /custom_files | Create a new custom file from a cached presign upload
[**createDataRequestToken**](PDFApi.md#createDataRequestToken) | **POST** /data_requests/{data_request_id}/tokens | Creates a new data request token for form authentication
[**createFolder**](PDFApi.md#createFolder) | **POST** /folders/ | Create a folder
[**createHTMLTemplate**](PDFApi.md#createHTMLTemplate) | **POST** /templates?desc&#x3D;html | Create a new HTML template
[**createPDFTemplate**](PDFApi.md#createPDFTemplate) | **POST** /templates | Create a new PDF template with a form POST file upload
[**createPDFTemplateFromUpload**](PDFApi.md#createPDFTemplateFromUpload) | **POST** /templates?desc&#x3D;cached_upload | Create a new PDF template from a cached presign upload
[**deleteFolder**](PDFApi.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
[**expireCombinedSubmission**](PDFApi.md#expireCombinedSubmission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
[**expireSubmission**](PDFApi.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
[**generatePDF**](PDFApi.md#generatePDF) | **POST** /templates/{template_id}/submissions | Generates a new PDF
[**getCombinedSubmission**](PDFApi.md#getCombinedSubmission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
[**getDataRequest**](PDFApi.md#getDataRequest) | **GET** /data_requests/{data_request_id} | Look up a submission data request
[**getFullTemplate**](PDFApi.md#getFullTemplate) | **GET** /templates/{template_id}?full&#x3D;true | Fetch the full template attributes
[**getPresignUrl**](PDFApi.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned URL so that you can upload a file to our AWS S3 bucket
[**getSubmission**](PDFApi.md#getSubmission) | **GET** /submissions/{submission_id} | Check the status of a PDF
[**getSubmissionBatch**](PDFApi.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
[**getTemplate**](PDFApi.md#getTemplate) | **GET** /templates/{template_id} | Check the status of an uploaded template
[**getTemplateSchema**](PDFApi.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Fetch the JSON schema for a template
[**listFolders**](PDFApi.md#listFolders) | **GET** /folders/ | Get a list of all folders
[**listSubmissions**](PDFApi.md#listSubmissions) | **GET** /submissions | List all submissions
[**listSubmissions_0**](PDFApi.md#listSubmissions_0) | **GET** /templates/{template_id}/submissions | List all submissions for a given template
[**listTemplates**](PDFApi.md#listTemplates) | **GET** /templates | Get a list of all templates
[**moveFolderToFolder**](PDFApi.md#moveFolderToFolder) | **POST** /folders/{folder_id}/move | Move a folder
[**moveTemplateToFolder**](PDFApi.md#moveTemplateToFolder) | **POST** /templates/{template_id}/move | Move Template to folder
[**renameFolder**](PDFApi.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**testAuthentication**](PDFApi.md#testAuthentication) | **GET** /authentication | Test Authentication
[**updateDataRequest**](PDFApi.md#updateDataRequest) | **PUT** /data_requests/{data_request_id} | Update a submission data request
[**updateTemplate**](PDFApi.md#updateTemplate) | **PUT** /templates/{template_id} | Update a Template


<a name="addFieldsToTemplate"></a>
# **addFieldsToTemplate**
> AddFieldsTemplateResponse addFieldsToTemplate(templateId, addFieldsData)

Add new fields to a Template

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000002; // String | 
var addFieldsData = new DocSpring.AddFieldsData(); // AddFieldsData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addFieldsToTemplate(templateId, addFieldsData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 
 **addFieldsData** | [**AddFieldsData**](AddFieldsData.md)|  | 

### Return type

[**AddFieldsTemplateResponse**](AddFieldsTemplateResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="batchGeneratePdfV1"></a>
# **batchGeneratePdfV1**
> [CreateSubmissionResponse] batchGeneratePdfV1(templateId, requestBody)

Generates multiple PDFs

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var requestBody = [null]; // [Object] | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.batchGeneratePdfV1(templateId, requestBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 
 **requestBody** | [**[Object]**](Array.md)|  | 

### Return type

[**[CreateSubmissionResponse]**](CreateSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="batchGeneratePdfs"></a>
# **batchGeneratePdfs**
> CreateSubmissionBatchResponse batchGeneratePdfs(submissionBatchData)

Generates multiple PDFs

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var submissionBatchData = new DocSpring.SubmissionBatchData(); // SubmissionBatchData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.batchGeneratePdfs(submissionBatchData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionBatchData** | [**SubmissionBatchData**](SubmissionBatchData.md)|  | 

### Return type

[**CreateSubmissionBatchResponse**](CreateSubmissionBatchResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combinePdfs"></a>
# **combinePdfs**
> CreateCombinedSubmissionResponse combinePdfs(combinePdfsData)

Merge submission PDFs, template PDFs, or custom files

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var combinePdfsData = new DocSpring.CombinePdfsData(); // CombinePdfsData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.combinePdfs(combinePdfsData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinePdfsData** | [**CombinePdfsData**](CombinePdfsData.md)|  | 

### Return type

[**CreateCombinedSubmissionResponse**](CreateCombinedSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combineSubmissions"></a>
# **combineSubmissions**
> CreateCombinedSubmissionResponse combineSubmissions(combinedSubmissionData)

Merge generated PDFs together

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var combinedSubmissionData = new DocSpring.CombinedSubmissionData(); // CombinedSubmissionData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.combineSubmissions(combinedSubmissionData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedSubmissionData** | [**CombinedSubmissionData**](CombinedSubmissionData.md)|  | 

### Return type

[**CreateCombinedSubmissionResponse**](CreateCombinedSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyTemplate"></a>
# **copyTemplate**
> Template copyTemplate(templateId, copyTemplateData)

Copy a Template

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var copyTemplateData = new DocSpring.CopyTemplateData(); // CopyTemplateData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyTemplate(templateId, copyTemplateData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 
 **copyTemplateData** | [**CopyTemplateData**](CopyTemplateData.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCustomFileFromUpload"></a>
# **createCustomFileFromUpload**
> CreateCustomFileResponse createCustomFileFromUpload(createCustomFileData)

Create a new custom file from a cached presign upload

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var createCustomFileData = new DocSpring.CreateCustomFileData(); // CreateCustomFileData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCustomFileFromUpload(createCustomFileData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFileData** | [**CreateCustomFileData**](CreateCustomFileData.md)|  | 

### Return type

[**CreateCustomFileResponse**](CreateCustomFileResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDataRequestToken"></a>
# **createDataRequestToken**
> CreateSubmissionDataRequestTokenResponse createDataRequestToken(dataRequestId)

Creates a new data request token for form authentication

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var dataRequestId = drq_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDataRequestToken(dataRequestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequestId** | **String**|  | 

### Return type

[**CreateSubmissionDataRequestTokenResponse**](CreateSubmissionDataRequestTokenResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createFolder"></a>
# **createFolder**
> Folder createFolder(createFolderData)

Create a folder

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var createFolderData = new DocSpring.CreateFolderData(); // CreateFolderData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFolder(createFolderData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFolderData** | [**CreateFolderData**](CreateFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createHTMLTemplate"></a>
# **createHTMLTemplate**
> PendingTemplate createHTMLTemplate(createHtmlTemplateData)

Create a new HTML template

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var createHtmlTemplateData = new DocSpring.CreateHtmlTemplateData(); // CreateHtmlTemplateData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createHTMLTemplate(createHtmlTemplateData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createHtmlTemplateData** | [**CreateHtmlTemplateData**](CreateHtmlTemplateData.md)|  | 

### Return type

[**PendingTemplate**](PendingTemplate.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPDFTemplate"></a>
# **createPDFTemplate**
> PendingTemplate createPDFTemplate(templateDocument, templateName, opts)

Create a new PDF template with a form POST file upload

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateDocument = "/path/to/file"; // File | 
var templateName = "templateName_example"; // String | 
var opts = {
  'templateParentFolderId': "templateParentFolderId_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPDFTemplate(templateDocument, templateName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateDocument** | **File**|  | 
 **templateName** | **String**|  | 
 **templateParentFolderId** | **String**|  | [optional] 

### Return type

[**PendingTemplate**](PendingTemplate.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createPDFTemplateFromUpload"></a>
# **createPDFTemplateFromUpload**
> PendingTemplate createPDFTemplateFromUpload(createTemplateFromUploadData)

Create a new PDF template from a cached presign upload

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var createTemplateFromUploadData = new DocSpring.CreateTemplateFromUploadData(); // CreateTemplateFromUploadData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPDFTemplateFromUpload(createTemplateFromUploadData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTemplateFromUploadData** | [**CreateTemplateFromUploadData**](CreateTemplateFromUploadData.md)|  | 

### Return type

[**PendingTemplate**](PendingTemplate.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
# **deleteFolder**
> Folder deleteFolder(folderId)

Delete a folder

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var folderId = fld_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteFolder(folderId, callback);
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

<a name="expireCombinedSubmission"></a>
# **expireCombinedSubmission**
> CombinedSubmission expireCombinedSubmission(combinedSubmissionId)

Expire a combined submission

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var combinedSubmissionId = com_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.expireCombinedSubmission(combinedSubmissionId, callback);
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

<a name="expireSubmission"></a>
# **expireSubmission**
> Submission expireSubmission(submissionId)

Expire a PDF submission

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var submissionId = sub_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.expireSubmission(submissionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | **String**|  | 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="generatePDF"></a>
# **generatePDF**
> CreateSubmissionResponse generatePDF(templateId, submissionData)

Generates a new PDF

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var submissionData = new DocSpring.SubmissionData(); // SubmissionData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generatePDF(templateId, submissionData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 
 **submissionData** | [**SubmissionData**](SubmissionData.md)|  | 

### Return type

[**CreateSubmissionResponse**](CreateSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCombinedSubmission"></a>
# **getCombinedSubmission**
> CombinedSubmission getCombinedSubmission(combinedSubmissionId)

Check the status of a combined submission (merged PDFs)

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var combinedSubmissionId = com_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCombinedSubmission(combinedSubmissionId, callback);
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

<a name="getDataRequest"></a>
# **getDataRequest**
> SubmissionDataRequest getDataRequest(dataRequestId)

Look up a submission data request

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var dataRequestId = drq_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDataRequest(dataRequestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequestId** | **String**|  | 

### Return type

[**SubmissionDataRequest**](SubmissionDataRequest.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFullTemplate"></a>
# **getFullTemplate**
> FullTemplate getFullTemplate(templateId)

Fetch the full template attributes

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFullTemplate(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 

### Return type

[**FullTemplate**](FullTemplate.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPresignUrl"></a>
# **getPresignUrl**
> {String: Object} getPresignUrl()

Get a presigned URL so that you can upload a file to our AWS S3 bucket

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPresignUrl(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{String: Object}**

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubmission"></a>
# **getSubmission**
> Submission getSubmission(submissionId, opts)

Check the status of a PDF

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var submissionId = sub_000000000000000001; // String | 
var opts = {
  'includeData': true // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubmission(submissionId, opts, callback);
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

<a name="getSubmissionBatch"></a>
# **getSubmissionBatch**
> SubmissionBatch getSubmissionBatch(submissionBatchId, opts)

Check the status of a submission batch job

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var submissionBatchId = sbb_000000000000000001; // String | 
var opts = {
  'includeSubmissions': true // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubmissionBatch(submissionBatchId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionBatchId** | **String**|  | 
 **includeSubmissions** | **Boolean**|  | [optional] 

### Return type

[**SubmissionBatch**](SubmissionBatch.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTemplate"></a>
# **getTemplate**
> Template getTemplate(templateId)

Check the status of an uploaded template

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplate(templateId, callback);
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

<a name="getTemplateSchema"></a>
# **getTemplateSchema**
> {String: Object} getTemplateSchema(templateId)

Fetch the JSON schema for a template

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplateSchema(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 

### Return type

**{String: Object}**

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFolders"></a>
# **listFolders**
> [Folder] listFolders(opts)

Get a list of all folders

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var opts = {
  'parentFolderId': fld_000000000000000002 // String | Filter By Folder Id
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFolders(opts, callback);
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

<a name="listSubmissions"></a>
# **listSubmissions**
> ListSubmissionsResponse listSubmissions(opts)

List all submissions

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var opts = {
  'cursor': sub_list_000012, // String | 
  'limit': 3, // Number | 
  'createdAfter': 2019-01-01T09:00:00-05:00, // String | 
  'createdBefore': 2020-01-01T09:00:00-05:00, // String | 
  'type': test, // String | 
  'includeData': true // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSubmissions(opts, callback);
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

<a name="listSubmissions_0"></a>
# **listSubmissions_0**
> ListSubmissionsResponse listSubmissions_0(templateId, opts)

List all submissions for a given template

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000002; // String | 
var opts = {
  'cursor': "cursor_example", // String | 
  'limit': 3.4, // Number | 
  'createdAfter': "createdAfter_example", // String | 
  'createdBefore': "createdBefore_example", // String | 
  'type': "type_example", // String | 
  'includeData': true // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSubmissions_0(templateId, opts, callback);
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

<a name="listTemplates"></a>
# **listTemplates**
> [Template] listTemplates(opts)

Get a list of all templates

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var opts = {
  'query': 2, // String | Search By Name
  'parentFolderId': fld_000000000000000001, // String | Filter By Folder Id
  'page': 2, // Number | Default: 1
  'perPage': 1 // Number | Default: 50
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTemplates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search By Name | [optional] 
 **parentFolderId** | **String**| Filter By Folder Id | [optional] 
 **page** | **Number**| Default: 1 | [optional] 
 **perPage** | **Number**| Default: 50 | [optional] 

### Return type

[**[Template]**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="moveFolderToFolder"></a>
# **moveFolderToFolder**
> Folder moveFolderToFolder(folderId, moveFolderData)

Move a folder

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var folderId = fld_000000000000000001; // String | 
var moveFolderData = new DocSpring.MoveFolderData(); // MoveFolderData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveFolderToFolder(folderId, moveFolderData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**|  | 
 **moveFolderData** | [**MoveFolderData**](MoveFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveTemplateToFolder"></a>
# **moveTemplateToFolder**
> Template moveTemplateToFolder(templateId, moveTemplateData)

Move Template to folder

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var moveTemplateData = new DocSpring.MoveTemplateData(); // MoveTemplateData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveTemplateToFolder(templateId, moveTemplateData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 
 **moveTemplateData** | [**MoveTemplateData**](MoveTemplateData.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renameFolder"></a>
# **renameFolder**
> renameFolder(folderId, renameFolderData)

Rename a folder

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var folderId = fld_000000000000000001; // String | 
var renameFolderData = new DocSpring.RenameFolderData(); // RenameFolderData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.renameFolder(folderId, renameFolderData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**|  | 
 **renameFolderData** | [**RenameFolderData**](RenameFolderData.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testAuthentication"></a>
# **testAuthentication**
> AuthenticationSuccessResponse testAuthentication()

Test Authentication

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testAuthentication(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthenticationSuccessResponse**](AuthenticationSuccessResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDataRequest"></a>
# **updateDataRequest**
> UpdateDataRequestResponse updateDataRequest(dataRequestId, updateSubmissionDataRequestData)

Update a submission data request

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var dataRequestId = drq_000000000000000001; // String | 
var updateSubmissionDataRequestData = new DocSpring.UpdateSubmissionDataRequestData(); // UpdateSubmissionDataRequestData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDataRequest(dataRequestId, updateSubmissionDataRequestData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequestId** | **String**|  | 
 **updateSubmissionDataRequestData** | [**UpdateSubmissionDataRequestData**](UpdateSubmissionDataRequestData.md)|  | 

### Return type

[**UpdateDataRequestResponse**](UpdateDataRequestResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTemplate"></a>
# **updateTemplate**
> UpdateTemplateResponse updateTemplate(templateId, updateTemplateData)

Update a Template

### Example
```javascript
var DocSpring = require('docspring');
var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new DocSpring.PDFApi();
var templateId = tpl_000000000000000003; // String | 
var updateTemplateData = new DocSpring.UpdateTemplateData(); // UpdateTemplateData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTemplate(templateId, updateTemplateData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 
 **updateTemplateData** | [**UpdateTemplateData**](UpdateTemplateData.md)|  | 

### Return type

[**UpdateTemplateResponse**](UpdateTemplateResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

