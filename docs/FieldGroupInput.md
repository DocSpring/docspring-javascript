# DocSpring.FieldGroupInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The group's name: `address` for the field `address/city`. A list's item numbers are written as `~`, so the fields `items/0/price` and `items/1/price` are in the groups `items` and `items/~`, the list's items. | 
**title** | **String** | The group's title in the template's data schema and on forms. When it's empty, a title is made from the group's name. | [optional] 
**description** | **String** | Help text for the group, added to the template's data schema and shown on forms. | [optional] 
**metadata** | **String** | Text for your own use, added to the template's data schema as `x-metadata`. DocSpring doesn't use it. | [optional] 
**min_items** | **Number** | Lists only (`type` `array`): the fewest items submission data must have. Null for no minimum. | [optional] 
**max_items** | **Number** | HTML and Word templates' lists only: the most items submission data can have. Null for no limit. A PDF template's list takes as many items as its fields are numbered for, or more with `allow_additional_items`. | [optional] 
**allow_additional_items** | **Boolean** | PDF templates' lists only: submission data can have more items than the list's fields are numbered for. Default false. | [optional] 


