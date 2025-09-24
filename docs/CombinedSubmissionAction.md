# DocSpring.CombinedSubmissionAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**integration_id** | **String** |  | 
**state** | **String** |  | 
**action_type** | **String** |  | 
**action_category** | **String** |  | 
**result_data** | **Object** |  | 



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




