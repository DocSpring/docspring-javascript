# DocSpring.TemplateDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **String** | The PDF's file name. Null until a `document_url` has been downloaded. | 
**md5** | **String** | The MD5 hash of the PDF. | 
**state** | [**TemplateDocumentState**](TemplateDocumentState.md) | `pending` while DocSpring processes the PDF, then `processed`. `password_required`, `malformed_pdf` and `unknown_error` mean the PDF couldn't be processed, and `error_message` says why: upload it again or upload another one. `downloading` while DocSpring downloads a `document_url`, then as for an upload. `download_failed` means it couldn't be downloaded, and `error_message` says why. A template keeps its PDF while a new one is downloaded, and when it couldn't be. | 
**error_message** | **String** | Why the PDF couldn't be processed or downloaded, and how to fix it. Null unless `state` is an error. | 
**field_reimport_state** | [**FieldReimportState**](FieldReimportState.md) | Whether the fields are being re-imported from this PDF (`reimport_fields` when the PDF was replaced): `requested` while DocSpring processes the PDF, then `imported`, or `no_fields` when the PDF had no fillable fields and the template kept its fields. `none` when no re-import was asked for, or when it couldn't run (the PDF couldn't be processed, or the template was locked or published while it was). | 
**page_count** | **Number** | 0 until the PDF has been processed. | 
**page_dimensions** | **[[Number]]** | Each page's width and height in PDF points. Null until the PDF has been processed. | 
**has_fillable_fields** | **Boolean** | Whether the PDF has fillable form fields. Null until DocSpring has read the PDF. | 
**page_processing_statuses** | [**[TemplatePageProcessingStatus]**](TemplatePageProcessingStatus.md) | How processing is going on each page, in page order: its image, and its fields when DocSpring sets them up (`detect_fields` when the template was created). `state` becomes `processed` once every page is done. Empty until DocSpring has read the PDF, and for PDFs uploaded before DocSpring recorded page statuses. | 
**field_logic_status** | [**TemplateFieldLogicStatus**](TemplateFieldLogicStatus.md) | AI field setup's last step, which reads the whole form once every page is done and can still rename fields and add conditional logic and required fields: `pending` or `processing` until it finishes, then `processed`, `failed` or `skipped`. Null until every page is done, and when there's no logic step to run (`field_logic` is `none`, or the PDF has no fields). | 
**download_url** | **String** | A temporary link to download the PDF. | 
**permanent_url** | **String** | A link to download the PDF that doesn't expire. Null until the PDF has been processed. | 


