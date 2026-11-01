# DocSpring.AddTemplateFieldsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**[FieldInput]**](FieldInput.md) | The fields to add. Settings left out have their defaults, except that a field with the name of other fields takes their shared settings. It can't set one of them to another value: PUT /templates/{template_id}/fields changes them for every field with the name. | 


