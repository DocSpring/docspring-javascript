# DocSpring.UpdateSignatureRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **{String: Object}** | Your own data about the signature request, such as an ID from your app. | [optional] 
**auth_type** | [**SignatureRequestAuthType**](SignatureRequestAuthType.md) | How your app authenticated the person before it showed them the signature request. | [optional] 
**auth_second_factor_type** | [**SignatureRequestAuthSecondFactorType**](SignatureRequestAuthSecondFactorType.md) | The second factor your app authenticated them with, if any. | [optional] 
**auth_provider** | **String** | The service that authenticated them, such as `google`. Required when `auth_type` is `oauth`. | [optional] 
**auth_session_started_at** | **Date** | When your app authenticated them. Set for you with `email_link`. | [optional] 
**auth_session_id_hash** | **String** | A hash of your app's session ID, for the audit trail. | [optional] 
**auth_user_id_hash** | **String** | Their user ID in your app, or a SHA-256 hash of a salt and the user ID. | [optional] 
**auth_username_hash** | **String** | Their username in your app, or a SHA-256 hash of a salt and the username. | [optional] 
**auth_phone_number_hash** | **String** | The phone number they authenticated with, or a SHA-256 hash of a salt and the phone number. | [optional] 


