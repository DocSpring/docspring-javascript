# DocSpring.SubmissionAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The upload's ID. | 
**integration_id** | **String** | The ID of the account integration it used. | 
**email_action_id** | **String** | The ID of the email action that sent the email. Null for an upload, or once the email action is deleted. | 
**state** | [**SubmissionActionState**](SubmissionActionState.md) | `pending` until the upload or email has run, then `processed`. `failed`: your storage or the email service rejected it. `error`: it failed in DocSpring. | 
**action_type** | [**SubmissionActionType**](SubmissionActionType.md) | The kind of storage, such as `aws_s3_upload` for an S3 bucket, or `email` for an email action's email. | 
**result_data** | **{String: Object}** | Where the PDF was uploaded, such as the S3 bucket and key. For an email: its `subject`, `recipients`, each with its `address`, `kind` (`to`, `cc` or `bcc`), `source`, `field` or `metadata` when the address came from one, and `status` (`sent`, `delivered`, `bounced`, `complained`, `skipped` and others), `sent_at`, `delivery`, and `files` (the files it sent: `pdf`, `docx`, `odt`). An email whose submission didn't meet the email action's `send_when` conditions has only `skipped`, `conditions_not_met`, and its state is `processed`. An email whose submission made none of the files the email action sends has `skipped`, `no_files` and the action's `file_formats`, and its state is `processed` too. When the submission's data is left out (a batch, or a webhook without submission data), the subject and the addresses that came from fields or metadata are null. | 
**error_message** | **String** | Why the upload failed, when `state` is `failed` or `error`. | 


