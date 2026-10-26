# DocSpring.TemplateFieldChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | [**[Field]**](Field.md) | The fields that `to_version` has and `from_version` doesn't. | 
**removed** | [**[Field]**](Field.md) | The fields that `from_version` has and `to_version` doesn't, as they were. | 
**changed** | [**[TemplateFieldChange]**](TemplateFieldChange.md) | The fields with changed settings. | 
**reordered** | [**[TemplateFieldMove]**](TemplateFieldMove.md) | The fields that moved in the template's field order (the order of its fields across all its pages, as the fields endpoint lists them): fields that swapped places, or the field that moved the furthest. The fields that a move pushed along aren't listed. | 


