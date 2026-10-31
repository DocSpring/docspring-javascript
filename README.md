# DocSpring JavaScript SDK

The official JavaScript client for the [DocSpring API](https://docspring.com/docs/api/). DocSpring fills PDF
forms with your data, generates PDFs and Word documents from HTML and Word templates, combines PDFs and collects
e-signatures.

[Documentation](https://docspring.com/docs/) · [API reference](https://docspring.com/docs/api/) ·
[npm](https://www.npmjs.com/package/docspring) · [Changelog](https://github.com/DocSpring/docspring-javascript/blob/main/CHANGELOG.md)

The code in this repository is generated from DocSpring's OpenAPI spec ([About this SDK](#about-this-sdk)). Issues and
pull requests are welcome.

Version 4.3.0. 

## Install and configure

Add docspring to your package.json:

```bash
npm install docspring --save
```

Or with Yarn:

```bash
yarn add docspring
```

Configure authentication via environment variables:

```bash
export DOCSPRING_TOKEN_ID="API_TOKEN_ID"
export DOCSPRING_TOKEN_SECRET="API_TOKEN_SECRET"
```

You can also configure the region or host. The host takes priority over the region:

```bash
export DOCSPRING_REGION="US" # US or EU (defaults to US)
export DOCSPRING_HOST="docspring.yourcompany.com" # For on-premise deployments
```

Initialize the DocSpring client with no arguments:

```javascript
const DocSpring = require("docspring");
const apiInstance = new DocSpring.Client();
```

Or provide credentials directly:

```javascript
const DocSpring = require("docspring");
const apiInstance = new DocSpring.Client({
  apiTokenId: "API_TOKEN_ID",
  apiTokenSecret: "API_TOKEN_SECRET",
});
```

## Generate a PDF

Fill a template with data (use your template's ID in place of `tpl_1234567890abcdef01`):

```javascript
const templateId = 'tpl_1234567890abcdef01'
const body = {
  data: {
    first_name: 'John',
    last_name: 'Smith',
    phone_number: '+11234567890',
  },
  metadata: { user_id: 42 },
  test: true,
}

const result = await apiInstance.createSubmission(templateId, body)
console.log(result)
```

By default the call waits for the PDF, for up to 95 seconds, and the submission in the response has a link to
download it (`files.pdf.download_url`). Set `wait` to false to get a pending submission straight away.
[Sync vs. async processing](https://docspring.com/docs/api-guide/synchronous-requests/) covers the time limit, status
checks and webhooks.

## Methods

[docs/Client.md](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md) has each method's parameters and return type, and
[docs/](https://github.com/DocSpring/docspring-javascript/tree/main/docs) has the models. The [API reference](https://docspring.com/docs/api/) has
JavaScript code for every method.

| Method | Description |
| ------ | ----------- |
| [`addTemplateFields`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#addtemplatefields) | Add fields to a template |
| [`copyTemplate`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#copytemplate) | Copy a template |
| [`createCombinedPdf`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createcombinedpdf) | Combine PDFs |
| [`createCustomFileFromUpload`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createcustomfilefromupload) | Create a custom file from an upload |
| [`createFolder`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createfolder) | Create a folder |
| [`createSignatureRequestEvent`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createsignaturerequestevent) | Record a signature request event |
| [`createSignatureRequestToken`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createsignaturerequesttoken) | Create a signature request token |
| [`createSubmission`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createsubmission) | Generate a PDF |
| [`createSubmissionBatch`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createsubmissionbatch) | Generate PDFs in a batch |
| [`createTemplate`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createtemplate) | Create a template |
| [`createTemplatePreview`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createtemplatepreview) | Preview a template with data |
| [`createWebhook`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#createwebhook) | Create a webhook |
| [`deleteCustomFile`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#deletecustomfile) | Delete a custom file |
| [`deleteFolder`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#deletefolder) | Delete a folder |
| [`deleteTemplate`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#deletetemplate) | Delete a template |
| [`deleteWebhook`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#deletewebhook) | Delete a webhook |
| [`expireCombinedPdf`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#expirecombinedpdf) | Expire a combined PDF |
| [`expireSubmission`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#expiresubmission) | Expire a submission |
| [`generateSubmissionFiles`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#generatesubmissionfiles) | Generate more files |
| [`generateSubmissionPreview`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#generatesubmissionpreview) | Generate a preview PDF |
| [`getCombinedPdf`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#getcombinedpdf) | Get a combined PDF |
| [`getCustomFile`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#getcustomfile) | Get a custom file |
| [`getFolder`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#getfolder) | Get a folder |
| [`getPresignUrl`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#getpresignurl) | Get a presigned URL to upload a file |
| [`getSignatureRequest`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#getsignaturerequest) | Get a signature request |
| [`getSubmission`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#getsubmission) | Get a submission |
| [`getSubmissionBatch`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#getsubmissionbatch) | Get a batch |
| [`getTemplate`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#gettemplate) | Get a template |
| [`getTemplateDiff`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#gettemplatediff) | Compare a version of a template with the one before it |
| [`getTemplateModelCode`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#gettemplatemodelcode) | Generate typed code for a template's submission data |
| [`getTemplatePageImages`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#gettemplatepageimages) | Get images of a template's pages |
| [`getTemplatePreview`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#gettemplatepreview) | Get a template preview |
| [`getTemplateSchema`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#gettemplateschema) | Get the JSON Schema of a template's submission data |
| [`getWebhook`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#getwebhook) | Get a webhook |
| [`listCombinedPdfs`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#listcombinedpdfs) | List combined PDFs |
| [`listCustomFiles`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#listcustomfiles) | List custom files |
| [`listFolders`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#listfolders) | List folders |
| [`listSubmissions`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#listsubmissions) | List submissions |
| [`listTemplateFields`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#listtemplatefields) | List a template's fields |
| [`listTemplates`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#listtemplates) | List templates |
| [`listTemplateSubmissions`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#listtemplatesubmissions) | List a template's submissions |
| [`listWebhooks`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#listwebhooks) | List webhooks |
| [`moveFolder`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#movefolder) | Move a folder |
| [`moveTemplate`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#movetemplate) | Move a template to a folder |
| [`publishTemplateVersion`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#publishtemplateversion) | Publish a template version |
| [`removeTemplateFields`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#removetemplatefields) | Remove fields from a template |
| [`renameFolder`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#renamefolder) | Rename a folder |
| [`reorderTemplateFields`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#reordertemplatefields) | Reorder a template's fields |
| [`restoreTemplateVersion`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#restoretemplateversion) | Restore a template version |
| [`testAuthentication`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#testauthentication) | Test authentication |
| [`updateSignatureRequest`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#updatesignaturerequest) | Update a signature request |
| [`updateTemplate`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#updatetemplate) | Update a template |
| [`updateTemplateDocument`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#updatetemplatedocument) | Replace a template's document |
| [`updateTemplateFields`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#updatetemplatefields) | Update a template's fields |
| [`updateWebhook`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#updatewebhook) | Update a webhook |
| [`uploadTemplate`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#uploadtemplate) | Create a template from an uploaded PDF or Word document |
| [`uploadTemplateDocument`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#uploadtemplatedocument) | Replace a template's document with an uploaded file |
| [`validateSubmission`](https://github.com/DocSpring/docspring-javascript/blob/main/docs/Client.md#validatesubmission) | Check a submission without creating it |

## Errors

Each method returns a promise. For an error response it rejects with an object whose `status` is the HTTP status and `body` the parsed body.

The client checks each request against the API's request schemas before sending it. A request the API would reject fails with a `ValidationError` (exported by the package), whose `details` are objects with `code`, `message` and a `pointer` into the body (or a `parameter`). Turn the check off with `client.apiClient.validateRequests = false`.
The details are the ones the API's 422 response would have, so you get them without a round trip.

## API changes

DocSpring adds fields and enum values to API v2 without releasing a new API version. Changes that would break
existing code, such as removing or renaming a field, go in a new API version
([API changes](https://docspring.com/docs/api-guide/openapi-schema/#api-changes)). So this SDK keeps working with
responses that are newer than it is:

- The model object keeps a response field added to the API after this release as a property. The objects defined inside a model, such as a template's `document`, leave it out.
- An enum value added to the API after this release comes back as the API sent it: handle values you don't recognize.

Upgrade the SDK to read new fields and enum values. The [changelog](https://github.com/DocSpring/docspring-javascript/blob/main/CHANGELOG.md) lists
what each release adds.

## About this SDK

This SDK is generated from DocSpring's [OpenAPI spec](https://docspring.com/api-docs/v2/openapi.json) with
[DocSpring's fork of OpenAPI Generator](https://github.com/DocSpring/openapi-generator/tree/docspring/all_patches) 7.26.0.
The fork changes the JavaScript generator:

- Enum types have static constants (`SubmissionState.processed`). Stock OpenAPI Generator makes them instance fields.

On top of the generated code, we add:

- A client constructor that reads your credentials, region and host from the environment.
- A nested object that's null in a response is `null` (stock OpenAPI Generator makes it `undefined`).
- A rejected call's `response` is an object with the response's status, headers and body. Stock OpenAPI Generator attaches superagent's response, which holds the request's `Authorization` header, so logging the error printed the API token.
- `verifyWebhookSignature(payload, signatureHeader, secret)` checks a webhook request's `X-DocSpring-Signature` header, with a `{ tolerance, now }` options object.

Each release regenerates every file, so a change made only here would be lost in the next one. Issues and pull
requests are welcome all the same: [open an issue](https://github.com/DocSpring/docspring-javascript/issues) or a pull request, or email
[support@docspring.com](mailto:support@docspring.com), and we'll make the fix in the generator so that every release
keeps it. [AGENTS.md](https://github.com/DocSpring/docspring-javascript/blob/main/AGENTS.md) is a guide for AI coding agents that integrate this SDK.

## License

MIT. See [LICENSE](https://github.com/DocSpring/docspring-javascript/blob/main/LICENSE).
