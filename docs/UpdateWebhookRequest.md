# DocSpring.UpdateWebhookRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the webhook, shown in the dashboard. | [optional] 
**url** | **String** | The endpoint that receives webhook POST requests. | [optional] 
**enabled** | **Boolean** | Whether DocSpring sends events to the webhook. Webhooks are disabled after repeated failures. | [optional] 
**event_types** | [**[WebhookEventType]**](WebhookEventType.md) | The events the webhook subscribes to. A webhook made in the dashboard can also subscribe to API token, account integration and user events, which are listed with their own names. | [optional] 
**mode** | [**WebhookMode**](WebhookMode.md) | Only send events for test or live submissions. Null sends both. | [optional] 
**api_token_ids** | **[String]** | Only send events from these API tokens. Combined with the other scope lists using OR. Applies to submission, signature request, combined PDF, submission batch and custom file events. | [optional] 
**template_ids** | **[String]** | Only send events for these templates. Combined with the other scope lists using OR. Applies to submission, signature request and template events. | [optional] 
**folder_ids** | **[String]** | Only send events for templates in these folders, including their subfolders. Combined with the other scope lists using OR. Applies to submission, signature request, template and folder events. | [optional] 
**include_submission_data** | **Boolean** | Include the submission's field data in the payload. When false, the submission's data and truncated_text, and each signature request's data, ip_address and user_agent, are null. | [optional] 
**strip_fields** | **[String]** | Dot-separated paths to remove from the event's data object. Form fields live under `data` (`data.ssn` removes the ssn field). A bare name removes a top-level key (`metadata` removes the whole metadata object). | [optional] 
**headers** | **{String: String}** | Headers to send with each request. | [optional] 


