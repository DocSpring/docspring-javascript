# DocSpring.SignatureRequestEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The event's ID. | 
**submission_id** | **String** | The ID of the signature request's submission. | 
**signature_request_id** | **String** | The ID of the signature request. | 
**event_type** | [**SignatureRequestEventType**](SignatureRequestEventType.md) | What happened. | 
**message_type** | [**SignatureRequestMessageType**](SignatureRequestMessageType.md) | How you sent the request. Required for `send_request`. | 
**message_recipient** | **String** | Where you sent the request, such as an email address or a phone number. Required for `send_request`. | 
**occurred_at** | **Date** | When it happened. Default now. | 
**created_at** | **Date** | When the event was recorded. | 


