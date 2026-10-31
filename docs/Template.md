# DocSpring.Template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The template's ID. | 
**name** | **String** | The template's name. | 
**description** | **String** | Shown under the template's name at the top of its hosted forms, and used as their meta description. Not shown on embedded forms or signature requests. | 
**template_type** | [**TemplateType**](TemplateType.md) | `pdf`: fields placed on an uploaded PDF. `html`: a PDF rendered from HTML and SCSS. `docx`: a Word document with tags where the data goes, which makes Word documents or PDFs. It can't be changed after the template is created. | 
**output_format** | [**OutputFormat**](OutputFormat.md) | What each submission makes unless its request sets `output_formats`: `docx` (a Word document), `odt` (an OpenDocument file, converted from the Word document) or `pdf`. A Word template's is chosen when it's created; PDF and HTML templates always make PDFs. A Word template that encrypts its PDFs makes PDFs, because Word documents and OpenDocument files can't be password-protected. | 
**ready** | **Boolean** | Whether the template can make documents. HTML templates are always ready. A PDF template is ready once DocSpring has stored its PDF, made an image of each page and finished looking for fields on each page, which can be after `document.state` becomes `processed`. A PDF template with no PDF (`document` is null) isn't ready. A Word template is ready once it has a Word document (a `document_url`'s has been downloaded). | 
**document** | [**TemplateDocument**](TemplateDocument.md) | The PDF of a PDF template, or the Word document of a Word template. Null for HTML templates, and for a PDF template that has no PDF yet. A template created from a `document_url` has one, with no file, while it's downloaded. | 
**parent_folder_id** | **String** | The ID of the folder the template is in. Null for a template at the root. Setting it moves the template and all of its published versions. | 
**path** | **String** | The path of the folder the template is in, such as `/Contracts`. `/` for a template at the root. | 
**latest_version** | **String** | The template's latest published version. Null if no version has been published. | 
**version_published_at** | **Date** | When this version was published. Null for the draft. | 
**locked** | **Boolean** | A locked template can't be changed or deleted until it's unlocked (`locked` can always be changed). | 
**last_changed_at** | **Date** | When the draft was last changed. | 
**created_at** | **Date** | When the template was created. | 
**updated_at** | **Date** | When the template was last updated. | 
**version** | **String** | The published version this is, such as `1.2.0`. Null for the draft. | 
**add_signature_request_submission_id_footers** | **Boolean** | Print the submission ID in the footer of each page of PDFs signed through signature requests. | 
**ai_field_naming_language** | [**AiFieldNamingLanguage**](AiFieldNamingLanguage.md) | The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. New templates take it from your account's template settings. Null for HTML templates. | 
**allow_additional_properties** | **Boolean** | Accept submission data with properties that aren't fields of the template. | 
**allow_skipping_optional_fields** | **Boolean** | Visual forms and signature request forms show the Continue button as soon as the required fields are filled in, without visiting each optional field. The `allowSkippingOptionalFields` embed option overrides it. | 
**default_form_mode** | [**TemplateFormMode**](TemplateFormMode.md) | The hosted form that /templates/{template_id}/form shows when its URL has no `mode` parameter: `web` (the web form), `visual` (the visual form, where fields are filled in on the PDF) or `dual` (both, in tabs). Only PDF templates have a visual form, so other templates accept only `web`. | 
**editable_submissions** | **Boolean** | Generate PDFs whose text and check fields stay fillable ("Generate Editable PDFs"). A submission's `editable` overrides it. | 
**embed_domains** | **[String]** | The sites that can embed the template's live signature requests and its embedded template editor: a host such as `app.example.com`, with an optional leading wildcard (`*.example.com`), port (`localhost:3000`) or scheme (`https://app.example.com`; without one, `http` and `https` both work). Browsers open a live signature request in a frame only on these sites (and DocSpring's), so with an empty list it can't be embedded anywhere; a test signature request can be embedded on any site. The embedded template editor loads only for a page on one of these sites (by its Referer or Origin header), and on any site when the list is empty. Forms embedded on a page (Visual Forms JS and the simple form) aren't restricted. | 
**embed_edit_allow_settings** | **Boolean** | Allow the embedded template editor to change sensitive template settings (webhooks, redirect URL, encryption, public access, expiration and so on). | 
**embed_edit_allow_versioning** | **Boolean** | Allow the embedded template editor to publish, restore, compare and delete published versions. | 
**embed_edit_allow_document_replacement** | **Boolean** | Allow the embedded template editor to replace the template's PDF. | 
**encrypt_pdfs** | **Boolean** | Encrypt generated PDFs with `encrypt_pdfs_password`. A Word template can only encrypt its PDFs when its `output_format` is `pdf`, because Word documents and OpenDocument files can't be password-protected. | 
**has_encrypt_pdfs_password** | **Boolean** | Whether `encrypt_pdfs_password` is set. | 
**expire_submissions** | **Boolean** | Delete each submission's data and PDF after `expire_after` `expiration_interval`. | 
**expire_after** | **Number** | How many `expiration_interval`s a submission's data and PDF are kept for, when `expire_submissions` is on. At most 5256000 (10 years in minutes). | 
**expiration_interval** | [**ExpirationInterval**](ExpirationInterval.md) | The unit of `expire_after`. | 
**merge_audit_trail_pdf** | **Boolean** | Add the audit trail to the end of PDFs signed through signature requests. | 
**parse_dates_using_template_date_format** | **Boolean** | Date fields also accept NN/NN/YYYY dates (with slashes, dashes or dots), read in the order of the template's default date format: month first for %m/%d/%Y, day first for %d/%m/%Y. When false, date fields only accept YYYY-MM-DD. Applies to PDF templates: an HTML or Word template's date fields only accept YYYY-MM-DD. Date fields that include a time take RFC 3339 date-times either way. | 
**public_submissions** | **Boolean** | Allow anyone with a submission's ID to download its PDF. | 
**public_web_form** | **Boolean** | Allow anyone to fill in the template's web form. | 
**redirect_url** | **String** | Where the web form sends people after they submit it. | 
**has_slack_webhook_url** | **Boolean** | Whether `slack_webhook_url` is set. | 
**last_changed_by** | [**TemplateActor**](TemplateActor.md) | Who last changed the draft: a user in your account, an API token, or someone using the embedded template editor. Null if no change has been recorded. | 
**defaults** | [**TemplateDefaults**](TemplateDefaults.md) |  | 
**field_dependencies** | [**[TemplateFieldDependency]**](TemplateFieldDependency.md) | Conditional logic: each rule shows or hides its target fields, or makes them required, depending on the values of other fields. | 
**field_groups** | [**[FieldGroup]**](FieldGroup.md) | The groups of the template's fields, with their settings. A field's name puts it in groups: `address/city` is in the group `address`, and `items/0/price` is in the list `items` and its items' group `items/~`. | 
**predefined_fields** | [**[PredefinedField]**](PredefinedField.md) | The field names that people using the embedded template editor choose from, each with the data type and settings a field gets when it's given that name. Setting it replaces the whole list; an empty list turns them off. | 
**predefined_fields_sample_data** | **{String: Object}** | Sample submission data that sets `predefined_fields`: each value becomes a predefined field, with a type that fits it (`string`, `number`, `boolean`, `date`, `email` or `url`) and `required_in_template` true. Nested objects and arrays become names with `/`, such as `customer/email`. Without `predefined_fields` in the same request, it replaces them; with them, it adds to them and sets the types of the ones it has values for. | 
**html** | **String** | The HTML of an HTML template, as a Liquid template. Null for PDF and Word templates. | 
**scss** | **String** | The SCSS of an HTML template. | 
**header_html** | **String** | The HTML printed at the top of each page of an HTML template. | 
**footer_html** | **String** | The HTML printed at the bottom of each page of an HTML template. | 
**html_engine_options** | [**HtmlEngineOptions**](HtmlEngineOptions.md) | How an HTML template's PDFs are printed. Null for PDF and Word templates. Setting it replaces the whole object: options left out use their defaults. | 
**html_escape_data** | **Boolean** | Whether an HTML template HTML-escapes the values it prints. When true, `{{ value }}` prints a value as text, so a `&lt;` or `&amp;` in it is printed as that character, and `{{ value | raw }}` prints a value as HTML. New HTML templates default to true. Templates created before October 2026, or with API v1, default to false, which prints every value as HTML. Null for PDF templates. | 
**embed_edit_token** | **String** | The token that opens the template in the embedded template editor. | 
**versions** | [**[TemplateVersion]**](TemplateVersion.md) | The template's published versions, newest first (up to 100). | 


