# DocSpring.SignatureRequestInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the person the request is for. | [optional] 
**email** | **String** | Their email address. | [optional] 
**fields** | **[String]** | The fields this person fills in. Each field can only be in one signature request, and a field that `data` fills in needs `prefilled_values_editable`. | 
**metadata** | **{String: Object}** | Your own data about the signature request, such as an ID from your app. | [optional] 
**role** | **String** | Which of the template's signers the person is: `Signer 1`, `Signer 2` and so on, up to `Signer 100`, until templates have roles of their own. Either every signature request has a `role` or none does, and each role can only have one. | [optional] 
**auth_type** | [**SignatureRequestAuthType**](SignatureRequestAuthType.md) | How your app authenticated the person before it showed them the signature request. | 
**auth_second_factor_type** | [**SignatureRequestAuthSecondFactorType**](SignatureRequestAuthSecondFactorType.md) | The second factor your app authenticated them with, if any. | [optional] 
**auth_provider** | **String** | The service that authenticated them, such as `google`. Required when `auth_type` is `oauth`. | [optional] 
**auth_session_started_at** | **Date** | When your app authenticated them. Set for you with `email_link`. | [optional] 
**auth_session_id_hash** | **String** | A hash of your app's session ID, for the audit trail. | [optional] 
**auth_user_id_hash** | **String** | Their user ID in your app, or a SHA-256 hash of a salt and the user ID. | [optional] 
**auth_username_hash** | **String** | Their username in your app, or a SHA-256 hash of a salt and the username. | [optional] 
**auth_phone_number_hash** | **String** | The phone number they authenticated with, or a SHA-256 hash of a salt and the phone number. | [optional] 
**ignore_unknown_fields** | **Boolean** | Leave out names in `fields` that the template doesn't have, for one field list that you send with several templates. Without it, an unknown name makes the submission `invalid_data`. | [optional] 
**prefilled_values_editable** | **Boolean** | Let the person change the values that `data` already has for fields in `fields`. Without it, those fields are a 422. | [optional] 


