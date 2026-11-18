# DocSpring.SupportHelp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The help request's ID. | 
**state** | [**SupportHelpState**](SupportHelpState.md) | `pending` until there's an answer, then `completed`. `failed`: the question couldn't be answered just now. | 
**answered** | **Boolean** | Whether the documentation had an answer. Null while `state` is `pending`. | 
**answer** | **String** | The answer, as plain text. When `answered` is false, what the documentation doesn't cover. Null while `state` is `pending`. | 
**sources** | [**[SupportHelpSource]**](SupportHelpSource.md) | The documentation pages the answer came from. | 
**next** | **String** | What to do when the answer doesn't solve the problem, in a sentence for an AI agent to act on. | 


