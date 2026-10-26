# DocSpring.UpdateTemplateFieldsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**[FieldInput]**](FieldInput.md) | The changes, each with the `id` of the field it changes. Settings left out keep their values. Changing a shared setting changes it for every field with the same name. Renaming a field moves it to the shared settings of its new name, and conditional logic and formulas that use the old name follow it when no other field has that name. | 


