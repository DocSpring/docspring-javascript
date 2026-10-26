# DocSpring.CreateTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The template's name. | [optional] 
**description** | **String** | Shown under the template's name at the top of its hosted forms, and used as their meta description. Not shown on embedded forms or signature requests. | [optional] 
**template_type** | [**TemplateType**](TemplateType.md) | `pdf`: fields placed on an uploaded PDF. `html`: a PDF rendered from HTML and SCSS. It can't be changed after the template is created. | 
**parent_folder_id** | **String** | The ID of the folder the template is in. Null for a template at the root. Setting it moves the template and all of its published versions. | [optional] 
**locked** | **Boolean** | A locked template can't be changed or deleted until it's unlocked (`locked` can always be changed). | [optional] 
**add_signature_request_submission_id_footers** | **Boolean** | Print the submission ID in the footer of each page of PDFs signed through signature requests. | [optional] 
**ai_field_naming_language** | [**AiFieldNamingLanguage**](AiFieldNamingLanguage.md) | The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. New templates take it from your account's template settings. Null for HTML templates. | [optional] 
**allow_additional_properties** | **Boolean** | Accept submission data with properties that aren't fields of the template. | [optional] 
**allow_skipping_optional_fields** | **Boolean** | Visual forms and signature request forms show the Continue button as soon as the required fields are filled in, without visiting each optional field. The `allowSkippingOptionalFields` embed option overrides it. | [optional] 
**default_form_mode** | [**TemplateFormMode**](TemplateFormMode.md) | The hosted form that /templates/{template_id}/form shows when its URL has no `mode` parameter: `web` (the web form), `visual` (the visual form, where fields are filled in on the PDF) or `dual` (both, in tabs). HTML templates have no visual form, so `web` is the only value they accept. | [optional] 
**editable_submissions** | **Boolean** | Generate PDFs whose text and check fields stay fillable ("Generate Editable PDFs"). A submission's `editable` overrides it. | [optional] 
**embed_domains** | **[String]** | The sites where the template's signature requests, forms and embedded template editor can be loaded: a host such as `app.example.com`, with an optional leading wildcard (`*.example.com`), port (`localhost:3000`) or scheme (`https://app.example.com`; without one, `http` and `https` both work). When it's empty, live signature requests don't load on any site, and the embedded template editor loads on every site. | [optional] 
**embed_edit_allow_settings** | **Boolean** | Allow the embedded template editor to change sensitive template settings (webhooks, redirect URL, encryption, public access, expiration and so on). | [optional] 
**embed_edit_allow_versioning** | **Boolean** | Allow the embedded template editor to publish, restore, compare and delete published versions. | [optional] 
**embed_edit_allow_document_replacement** | **Boolean** | Allow the embedded template editor to replace the template's PDF. | [optional] 
**encrypt_pdfs** | **Boolean** | Encrypt generated PDFs with `encrypt_pdfs_password`. | [optional] 
**encrypt_pdfs_password** | **String** | The password that opens encrypted PDFs. It's never returned; `has_encrypt_pdfs_password` says if it's set. | [optional] 
**expire_submissions** | **Boolean** | Delete each submission's data and PDF after `expire_after` `expiration_interval`. | [optional] 
**expire_after** | **Number** | How many `expiration_interval`s a submission's data and PDF are kept for, when `expire_submissions` is on. At most 5256000 (10 years in minutes). | [optional] 
**expiration_interval** | [**ExpirationInterval**](ExpirationInterval.md) | The unit of `expire_after`. | [optional] 
**merge_audit_trail_pdf** | **Boolean** | Add the audit trail to the end of PDFs signed through signature requests. | [optional] 
**parse_dates_using_template_date_format** | **Boolean** | Date fields also accept NN/NN/YYYY dates (with slashes, dashes or dots), read in the order of the template's default date format: month first for %m/%d/%Y, day first for %d/%m/%Y. When false, date fields only accept YYYY-MM-DD. Applies to PDF templates: an HTML template's date fields only accept YYYY-MM-DD. Date fields that include a time take RFC 3339 date-times either way. | [optional] 
**public_submissions** | **Boolean** | Allow anyone with a submission's ID to download its PDF. | [optional] 
**public_web_form** | **Boolean** | Allow anyone to fill in the template's web form. | [optional] 
**redirect_url** | **String** | Where the web form sends people after they submit it. | [optional] 
**slack_webhook_url** | **String** | A Slack incoming webhook URL that is notified about the template's submissions. It's never returned; `has_slack_webhook_url` says if it's set. | [optional] 
**defaults** | [**TemplateDefaultsInput**](TemplateDefaultsInput.md) | The default style of the template's fields. Setting it replaces the whole object. | [optional] 
**field_dependencies** | [**[TemplateFieldDependencyInput]**](TemplateFieldDependencyInput.md) | The template's conditional logic rules. Setting them replaces all of the rules. | [optional] 
**html** | **String** | The HTML of an HTML template, as a Liquid template. Null for PDF templates. | [optional] 
**scss** | **String** | The SCSS of an HTML template. | [optional] 
**header_html** | **String** | The HTML printed at the top of each page of an HTML template. | [optional] 
**footer_html** | **String** | The HTML printed at the bottom of each page of an HTML template. | [optional] 
**html_engine_options** | [**HtmlEngineOptionsInput**](HtmlEngineOptionsInput.md) | Null resets the options to their defaults. | [optional] 
**cache_id** | **String** | A PDF template's document: the `fields.key` of a file you uploaded with the presigned upload (GET /uploads/presign). Required for a PDF template. To upload the PDF with the request, use POST /templates/upload. | [optional] 
**filename** | **String** | The PDF's file name, for a `cache_id` (presigned uploads don't send one). | [optional] 
**detect_fields** | **Boolean** | Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up. | [optional] 
**field_source** | [**FieldSetupSource**](FieldSetupSource.md) | With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields. | [optional] 
**field_naming** | [**FieldSetupNaming**](FieldSetupNaming.md) | With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`. | [optional] 
**field_logic** | [**FieldSetupLogic**](FieldSetupLogic.md) | With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings. | [optional] 


