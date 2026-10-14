### 3.1.0 [October 15, 2026]

- Submissions and data requests can now be in the `declined` state, when a signer declines to sign. Data
  requests have a new `declined_at` timestamp.
- New API methods for webhooks: create_webhook, list_webhooks, get_webhook, update_webhook and delete_webhook.
- New API method: get_template_model_code, which generates typed model code for a template's submission data, so
  your app can catch mistakes before it calls the API.
- Templates:
  - Field dependencies: `field_dependencies` when you create or update a template, and `dependencies` on the fields
    you add with add_fields_to_template.
  - add_fields_to_template accepts the `initials` field type and an `editable` setting for each field.
  - Embedded template editor settings: `embed_edit_allow_document_replacement`, `embed_edit_allow_settings`,
    `embed_edit_allow_versioning` and `embed_edit_token`.
  - New `template_schema_version` attribute.
  - A template's `path` is never null.
  - Individual template `defaults` can be null (for example `fontSize` after it's cleared in the template editor).
  - `last_changed_by_type` can be `external_user` (a change made in the embedded template editor), with
    `last_changed_by_external_id`, `last_changed_by_external_name` and `last_changed_by_external_email`.
  - Template versions say who published them with `published_by_type`, `published_by_user_id`,
    `published_by_name`, `published_by_email` and `published_by_external_id`. These replace `published_by_id`,
    which the API no longer returns.
  - The JSON schema from get_template_schema includes `$id`, `allOf` and `dependencies`.
- copy_template accepts a template `version`, and `parent_folder_id` is now optional. move_template_to_folder also
  accepts a `version`.
- Pass a null `parent_folder_id` to move_template_to_folder or move_folder_to_folder to move it to the root folder.
- Submissions and submission actions include an `error_message` when processing fails.
- combine_pdfs: `delete_custom_files` now deletes the custom files once the merged PDF is processed (it used to be
  ignored). `test` has no effect and is deprecated.
- The package metadata declares the MIT license, like the LICENSE file (it said Unlicense).
- The `host` option and `DOCSPRING_HOST` can end with `/api/v1/` or have spaces around them (a trailing slash
  after `/api/v1` sent requests to paths with `//`).

### 3.0.0 [September 24, 2025]

- All our API clients are now 100% end-to-end tested against our real server.

### 2.1.0 [March 22, 2025]

- Added support for Template Versioning parameters:
  - Optional version parameter in submission requests (e.g., 1.2.3, draft, latest)
  - New API methods: publish_template_version, restore_template_version
  - Updated copy_template and delete_template methods to accept template version strings

### 2.0.0 [February 23, 2025]

- **BREAKING CHANGE**: Updated default host to our new synchronous API subdomain: sync.api.docspring.com. (EU customers should use sync.api-eu.docspring.com). Removed all custom polling code from library since this logic is now handled by the API service running on our sync subdomain
- Fixed User-Agent header: docspring-javascript-x.x.x

### 1.5.0 [August 30, 2023]

- Added Delete Template API endpoint

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
