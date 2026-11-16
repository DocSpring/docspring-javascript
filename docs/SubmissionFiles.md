# DocSpring.SubmissionFiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pdf** | [**GeneratedFile**](GeneratedFile.md) | The submission's PDF. | [optional] 
**audit_trail** | [**GeneratedFile**](GeneratedFile.md) | The audit trail of a submission with signature requests: who signed, when and how. It's also added to the end of the PDF when the template's `merge_audit_trail_pdf` is on. | [optional] 
**signing_manifest** | [**GeneratedFile**](GeneratedFile.md) | The audit data behind the audit trail of a submission with signature requests, as JSON: the hashes of the document and the audit trail, and each signing event with the salt and hash that DocSpring's signing record holds for it. It has who signed, like the audit trail, and goes when the submission expires, so keep it with the PDF and the audit trail. | [optional] 
**preview** | [**GeneratedFile**](GeneratedFile.md) | The preview PDF from POST /submissions/{submission_id}/generate_preview, such as for a submission still waiting for its signature requests. | [optional] 
**docx** | [**GeneratedFile**](GeneratedFile.md) | The Word document of a Word template's submission, when the submission makes one (`output_formats`). | [optional] 
**odt** | [**GeneratedFile**](GeneratedFile.md) | The OpenDocument file (.odt, the format LibreOffice uses) of a Word template's submission, converted from its Word document, when the submission makes one (`output_formats`). | [optional] 
**png** | [**PageImages**](PageImages.md) |  | [optional] 


