# DocSpring.EmailActionCustomization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Whether the account email action sends for this template. It also needs to be on itself (`enabled`). | 
**customized** | [**[EmailActionSetting]**](EmailActionSetting.md) | The settings this template changes. The others follow the account email action. | 
**consecutive_failures** | **Number** | How many of this template's emails in a row have failed because of a setting it changes. | 
**failing_since** | **Date** | When the current run of those failures started. | 
**last_failure_at** | **Date** | When one of those emails last failed. | 
**last_failure_message** | **String** | Why it failed. | 
**disabled_at** | **Date** | When DocSpring turned the email action off for this template, such as when an address the template added bounced. | 
**disabled_reason** | **String** | Why DocSpring turned it off for this template. | 
**created_at** | **Date** | When the template first changed the email action. | 
**updated_at** | **Date** | When the template's changes last changed. | 


