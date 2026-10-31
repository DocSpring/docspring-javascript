# DocSpring.SubmissionFiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pdf** | [**GeneratedFile**](GeneratedFile.md) | The submission's PDF. | [optional] 
**audit_trail** | [**GeneratedFile**](GeneratedFile.md) | The audit trail of a submission with signature requests: who signed, when and how. It's also added to the end of the PDF when the template's `merge_audit_trail_pdf` is on. | [optional] 
**preview** | [**GeneratedFile**](GeneratedFile.md) | The preview PDF from POST /submissions/{submission_id}/generate_preview, such as for a submission still waiting for its signature requests. | [optional] 
**docx** | [**GeneratedFile**](GeneratedFile.md) | The Word document of a Word template's submission, when the submission makes one (`output_formats`). | [optional] 
**odt** | [**GeneratedFile**](GeneratedFile.md) | The OpenDocument file (.odt, the format LibreOffice uses) of a Word template's submission, converted from its Word document, when the submission makes one (`output_formats`). | [optional] 
**png** | [**PageImages**](PageImages.md) |  | [optional] 


