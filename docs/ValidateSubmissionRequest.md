# DocSpring.ValidateSubmissionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test** | **Boolean** | Test PDFs have a watermark and are free. Live PDFs use credits. Submissions made with a test API token are always test submissions. | [optional] 
**editable** | **Boolean** | `true` keeps the PDF's text and check fields fillable, and `false` flattens every field. Left out, the template decides: its `editable_submissions` setting, or each field's own Editable option. A response shows the template's setting when the request left this out. Can't be `true` with `signature_requests`. | [optional] 
**data** | **{String: Object}** | The values of the template's fields, by field name. Required for a PDF template, unless `signature_requests` collects the values. | [optional] 
**metadata** | **{String: Object}** | Your own data about the submission, such as an ID from your app. It isn't printed on the PDF. Two keys also change the PDF: `pdf_filename` names its file (`files.pdf.filename`, and its download), and `pdf_title` is its title in the PDF's document properties (and an HTML template's `&lt;title&gt;`, unless its HTML has one). Without `pdf_title`, the title is the template's name. In `pdf_filename`, a `.pdf` ending is removed, each run of characters other than letters, digits, `-`, `_` and `.` becomes one `_`, and the first 128 characters are kept, then `.pdf` is added. Without it, the file is named after the submission's ID (`sub_1234567890abcdef01.pdf`). | [optional] 
**password** | **String** | A password that the PDF needs to be opened with. It's never returned; `has_password` says if it's set. | [optional] 
**output_formats** | [**[OutputFormat]**](OutputFormat.md) | What the submission makes: `pdf`, and `png` (an image of each page of the PDF, up to 100 pages) when you ask for it. Default `["pdf"]`. POST /submissions/{submission_id}/generate_files adds `png` to a processed submission. | [optional] 
**expires_in** | **Number** | Seconds after the PDF is generated until the submission expires, up to 10 years (315360000). Default the template's expiration setting. A submission that isn't processed, such as one with invalid data, is kept for at least 48 hours. | [optional] 
**field_overrides** | [**{String: FieldOverride}**](FieldOverride.md) | Changes to field settings for this submission only, by field name, such as `{"name": {"required": false, "font_size": 9}}`. A setting that identifies the field (`id`, `name`, `type`), that only the template sets (such as `description`), or that doesn't apply to the field's type and display type (such as `check_character` on a field displayed as text) is a 422. With `signature_requests`, `editable: true` is a 422, and a `default` for a signature or initials field makes the submission `invalid_data`. | [optional] 
**html** | **String** | For an HTML template, HTML to use instead of the template's. | [optional] 
**css** | **String** | For an HTML template, SCSS (plain CSS works too) added after the template's styles, on the page and in its header and footer. It doesn't replace them: its rules come later, so they win over the template's rules of the same specificity. | [optional] 
**signature_requests** | [**[SignatureRequestInput]**](SignatureRequestInput.md) | The people who sign the PDF, and fill in their fields first. The PDF is generated once every signature request is completed. PDF templates only. Without `role`s, the first signature request is `Signer 1`, the second `Signer 2`, and so on. To leave a signer out, give every signature request its `role` and leave that one's out. Only the signers sign: a value for a signature or initials field in `data` makes the submission `invalid_data`. | [optional] 


