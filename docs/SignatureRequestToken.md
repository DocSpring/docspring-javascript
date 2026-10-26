# DocSpring.SignatureRequestToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The token's ID. | 
**signature_request_id** | **String** | The ID of the signature request the token opens. | 
**type** | [**SignatureRequestTokenType**](SignatureRequestTokenType.md) | `api`: the link opens the signature request for 24 hours. `email`: 7 days. | 
**secret** | **String** | The token's secret. It's only returned when the token is created. | 
**signature_request_url** | **String** | A link that opens the signature request with this token. | 
**expires_at** | **Date** | When the link stops opening the signature request. | 
**created_at** | **Date** | When the token was created. | 


