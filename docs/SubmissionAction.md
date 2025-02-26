# DocSpring.SubmissionAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**integrationId** | **String** |  | 
**state** | **String** |  | 
**actionType** | **String** |  | 
**actionCategory** | **String** |  | 
**resultData** | **Object** |  | 



## Enum: StateEnum


* `pending` (value: `"pending"`)

* `processed` (value: `"processed"`)

* `failed` (value: `"failed"`)

* `error` (value: `"error"`)





## Enum: ActionTypeEnum


* `webhook` (value: `"webhook"`)

* `slack_webhook` (value: `"slack_webhook"`)

* `email` (value: `"email"`)

* `aws_s3_upload` (value: `"aws_s3_upload"`)





## Enum: ActionCategoryEnum


* `notification` (value: `"notification"`)

* `file_upload` (value: `"file_upload"`)




