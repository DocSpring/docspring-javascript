# DocSpring.ReplyToSupportTicketRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **String** | The message: an answer to the team's question, more detail, or whether their fix worked. Plain text. | 
**outcome** | [**SupportTicketReplyOutcome**](SupportTicketReplyOutcome.md) | `resolved`: the problem is fixed, so close the ticket. `still_broken`: it isn't, so reopen the ticket. Without it, the reply answers a ticket that was waiting for one and otherwise leaves the status as it is. | [optional] 


