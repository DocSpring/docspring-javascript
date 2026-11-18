# DocSpring.SupportMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The message's ID. | 
**author** | [**SupportMessageAuthor**](SupportMessageAuthor.md) | `reporter`: your side. `team`: a person at DocSpring. `system`: DocSpring itself. | 
**body** | **String** | The message, as plain text. | 
**created_at** | **Date** | When the message was sent. | 
**first_read_at** | **Date** | When one of the team's messages was first returned by the API. It shows that the message was fetched, not that a person read it. Null for your own messages. | 


