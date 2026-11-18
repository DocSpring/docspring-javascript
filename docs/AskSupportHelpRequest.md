# DocSpring.AskSupportHelpRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | **String** | What you want to know, in a sentence or two. For a follow-up question, include what was asked and answered before that matters to it: each request is answered by itself. | 
**tool** | **String** | The API operation, MCP tool or CLI command involved, if any. | [optional] 
**error** | **String** | The exact error text, if any. | [optional] 
**conversation** | [**[SupportHelpTurn]**](SupportHelpTurn.md) | For a chat: the questions and answers so far, oldest first, when `question` follows on from them. At most 40 turns: start a new conversation after that. | [optional] 


