# DocSpring.CreateSubmissionBatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **{String: Object}** | Your own data about the batch, such as an ID from your app. | [optional] 
**template_id** | **String** | The template for each submission that doesn't name its own `template_id`. | [optional] 
**template_version** | **String** | The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published). | [optional] 
**test** | **Boolean** | The default `test` for each submission that doesn't set its own. | [optional] 
**submissions** | [**[SubmissionInput]**](SubmissionInput.md) | Up to 50 submissions. Each one takes the properties of POST /templates/{template_id}/submissions except `signature_requests`, plus `template_id` and `template_version` when it uses a different template from the batch. | 


