# DocSpring.SubmissionDataRequestEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**submission_id** | **String** |  | 
**submission_data_request_id** | **String** |  | 
**event_type** | **String** |  | 
**message_type** | **String** |  | 
**message_recipient** | **String** |  | 
**occurred_at** | **String** |  | 



## Enum: EventTypeEnum


* `send_request` (value: `"send_request"`)

* `view_request` (value: `"view_request"`)

* `accepted_terms` (value: `"accepted_terms"`)

* `decline_request` (value: `"decline_request"`)

* `sign_request` (value: `"sign_request"`)

* `all_completed` (value: `"all_completed"`)





## Enum: MessageTypeEnum


* `email` (value: `"email"`)

* `sms` (value: `"sms"`)

* `fax` (value: `"fax"`)

* `mail` (value: `"mail"`)

* `slack` (value: `"slack"`)

* `msteams` (value: `"msteams"`)

* `discord` (value: `"discord"`)

* `telegram` (value: `"telegram"`)

* `whatsapp` (value: `"whatsapp"`)




