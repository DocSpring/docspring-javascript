# DocSpring.TemplateDiff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template_id** | **String** | The template's ID. | 
**from_version** | **String** | The earlier version, such as `1.1.0`. Null when no version was published before `to_version`: it's compared with a new template, so all of its fields are added. | 
**to_version** | **String** | The later version, such as `1.2.0`. Null for the draft. | 
**summary** | [**TemplateDiffSummary**](TemplateDiffSummary.md) | How many changes of each kind there are. | 
**fields** | [**TemplateFieldChanges**](TemplateFieldChanges.md) | The fields that changed. | 
**changed_settings** | **[String]** | The names of the template's settings that changed, as they're named on the Template (`name`, `html`, `defaults`, `expire_after`, ...). Values aren't included, and secrets like `encrypt_pdfs_password` are named when they change. | 
**document_changed** | **Boolean** | The template's PDF was replaced (or added, when there's no `from_version`). | 


