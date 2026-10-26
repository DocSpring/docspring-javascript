# DocSpring.SubmissionAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The upload's ID. | 
**integration_id** | **String** | The ID of the account integration it used. | 
**state** | [**SubmissionActionState**](SubmissionActionState.md) | `pending` until the upload has run, then `processed`. `failed`: your storage rejected it. `error`: it failed in DocSpring. | 
**action_type** | [**SubmissionActionType**](SubmissionActionType.md) | The kind of storage, such as `aws_s3_upload` for an S3 bucket. | 
**result_data** | **{String: Object}** | Where the PDF was uploaded, such as the S3 bucket and key. | 
**error_message** | **String** | Why the upload failed, when `state` is `failed` or `error`. | 


