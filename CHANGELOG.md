### 1.4.0 [March 22, 2022]

- Renamed "Template1" model to "FullTemplate" since it includes all properties

### 1.3.2 [November 28, 2021]

- Added 'password' parameter to Generate PDF and Combine PDF API endpoints. You can now encrypt each generated PDF with a unique password.

### 1.3.1 [November 19, 2020]

- Added "sort_order" property for Submission Data Requests

### 1.3.0 [September 26, 2020]

- Updated OpenAPI Generator to v3.3.0

### 1.2.1 [September 24, 2020]

- Fixed the "include_data=true" option for the "Get Submission" API endpoint. Added the "data" property to the Submission model so that this is parsed and returned correctly when requested

### 1.2.0 [September 21, 2020]

- Renamed some internal models for template creation API endpoints. (CreateTemplateData / CreateTemplateData1 renamed to CreateHtmlTemplateData and CreateTemplateFromUploadData)

### 1.1.0 [September 12, 2020]

- **BREAKING CHANGE**: Renamed createTemplate operation to createPDFTemplate
- Added createHTMLTemplate operation. (This uses the same API endpoint as createPDFTemplate, but the example shows how to set html, scss, etc. fields)
- Added updateTemplate operation, to update a PDF or HTML template

### 1.0.0 [May 20, 2019]

- Renamed FormAPI to DocSpring. (View the CHANGELOG in the original FormAPI API client for prior releases.)
