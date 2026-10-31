# DocSpring.UpdateTemplateDocumentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_id** | **String** | The `fields.key` of the new PDF or Word document (.docx or .odt), uploaded with the presigned upload (GET /uploads/presign). | [optional] 
**document_url** | **String** | An https:// link to the template's document, instead of `cache_id`: a PDF template's PDF (up to 100 MB) or a Word template's Word document (.docx or .odt, up to 50 MB). DocSpring downloads it after responding, following redirects to other https:// links: the template's `document.state` is `downloading` until then, and `converting` while an .odt is converted (sync.api hosts wait for both). If it can't be downloaded, the state is `download_failed` and `document.error_message` says why. | [optional] 
**document_base64** | **String** | The template's document (a PDF, or a Word template's Word document), encoded as base64 (a `data:` URI works too), instead of `cache_id`. Up to 7 MB before it's encoded: send a larger file with `cache_id` or `document_url`. | [optional] 
**filename** | **String** | The file's name, for a `cache_id` (presigned uploads don't send one) or `document_base64`. A `document_url`'s is the last part of its path unless you set it. | [optional] 
**reimport_fields** | **Boolean** | Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. Only for PDF templates: a Word template adds a field for each new tag. | [optional] 


