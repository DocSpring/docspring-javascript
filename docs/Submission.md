# DocSpring.Submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The submission's ID. | 
**template_id** | **String** | Null once the template has been permanently deleted. | 
**template_type** | [**TemplateType**](TemplateType.md) | The template's type: `pdf` or `html`. | 
**template_version** | **String** | The published version of the template the submission used. Null for the draft. | 
**batch_id** | **String** | The ID of the batch the submission was created in. | 
**source** | [**SubmissionSource**](SubmissionSource.md) | `api`: created with the API. `web`: a web form. `reprocess`: a copy of another submission, made to generate its PDF again. | 
**state** | [**SubmissionState**](SubmissionState.md) | `pending` until the PDF has been generated, then `processed`. `waiting_for_signature_requests` until every signature request is completed. `insufficient_credits`: waiting for credits; `error_message` says whether the PDF is generated once you add them. `account_suspended`: waiting for the account to be reactivated, for up to 30 days. Waiting ends in `error` if it's discarded or takes over 30 days. Every other state is final, with no PDF: `invalid_data` (the data doesn't match the template's fields: see `data_errors`), `declined` (a signature request was declined), and the states where generating the PDF failed, which have an `error_message`: `syntax_error` (a mistake in an HTML template's Liquid or SCSS), `image_download_failed` or `image_processing_failed` (an image in the data or the template couldn't be downloaded or read) and `error` (anything else). Older submissions can also be `license_revoked` or `accidental`. | 
**test** | **Boolean** | Test PDFs have a watermark and are free. Live PDFs use credits. Submissions made with a test API token are always test submissions. | 
**editable** | **Boolean** | `true` keeps the PDF's text and check fields fillable, and `false` flattens every field. Left out, the template decides: its `editable_submissions` setting, or each field's own Editable option. A response shows the template's setting when the request left this out. Can't be `true` with `signature_requests`. | 
**data** | **{String: Object}** | The submission's data, with the values entered in completed signature requests. Lists leave it out (null) unless you pass `include_data=true`. Empty once the submission has expired. | 
**data_errors** | [**[ErrorDetail]**](ErrorDetail.md) | Why the data doesn't match the template's fields, when `state` is `invalid_data`: the same details as the 422 response that recorded it, with pointers into the request that created the submission (`/data/name`). Cleared once the submission has expired. | 
**error_message** | **String** | Why the PDF couldn't be generated, when `state` is `error`. | 
**metadata** | **{String: Object}** | Your own data about the submission, such as an ID from your app. It isn't printed on the PDF. | 
**has_password** | **Boolean** | Whether the PDF needs a password to open (`password`). | 
**signature_requests** | [**[SignatureRequest]**](SignatureRequest.md) | The people asked to sign the submission (and fill in their fields), in order. | 
**actions** | [**[SubmissionAction]**](SubmissionAction.md) | The uploads of the submission's PDF to your storage (account integrations). | 
**truncated_text** | **{String: [String]}** | The text of each field that didn't fit in it, by field name. Left out (null) with `data`, and empty once the submission has expired. | 
**files** | [**SubmissionFiles**](SubmissionFiles.md) | The generated files: `pdf` once the submission has been processed, `audit_trail` once its signature requests are completed, and `preview` once a preview PDF has been generated. Empty once the submission has expired. | 
**preview_generated_at** | **Date** | When the preview PDF was generated. Null if there is no preview. | 
**expired** | **Boolean** | An expired submission's data, metadata, password and PDF have been deleted. | 
**expires_at** | **Date** | When the submission expires. Null if it's kept until you delete it. | 
**processed_at** | **Date** | When the PDF was generated. Null until then. | 
**created_at** | **Date** | When the submission was created. | 
**updated_at** | **Date** | When the submission was last updated. | 


