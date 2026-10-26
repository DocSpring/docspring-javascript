# DocSpring.CopyTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Default: the template's name followed by a number, such as "Contract (2)". For a published version, the name followed by the version, such as "Contract (v1.2.0)". | [optional] 
**parent_folder_id** | **String** | The folder to put the copy in. Null puts it at the root. Left out, the copy goes in the template's own folder. | [optional] 
**version** | **String** | Copy this published version (`1.2.0`, or `1` for the latest 1.x.x) instead of the draft. | [optional] 


