# DocSpring.ErrorDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | What's wrong: `required`, `unknown_property`, `type`, `enum`, `format`, a JSON Schema keyword such as `minLength`, or a DocSpring code. New codes can be added. | 
**message** | **String** | A human-readable explanation of the problem. | 
**pointer** | **String** | A JSON pointer to the value in the request body (RFC 6901). An empty string means the whole body. In a submission's `data_errors`, it points into the request that created the submission. | [optional] 
**parameter** | **String** | The query parameter or header the detail is about. | [optional] 
**submission_id** | **String** | For a batch item that failed validation, the ID of the submission recorded for it. | [optional] 


