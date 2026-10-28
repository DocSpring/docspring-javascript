# DocSpring.TemplateActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TemplateActorType**](TemplateActorType.md) | `user`: a user in your account, also when they make the change with an app they connected (an OAuth access token). `api`: an API token. `external_user`: someone using the embedded template editor, as identified by your app. | 
**user_id** | **String** | The user's ID, for `user`. | 
**external_id** | **String** | The ID your app gave the embedded editor's user, for `external_user`. | 
**name** | **String** | The user's name, or the name your app gave the embedded editor's user. | 
**email** | **String** | The email address your app gave the embedded editor's user, for `external_user`. | 


