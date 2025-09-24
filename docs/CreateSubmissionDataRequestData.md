# DocSpring.CreateSubmissionDataRequestData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_phone_number_hash** | **String** |  | [optional] 
**auth_provider** | **String** |  | [optional] 
**auth_second_factor_type** | **String** |  | [optional] 
**auth_session_id_hash** | **String** |  | [optional] 
**auth_session_started_at** | **String** |  | [optional] 
**auth_type** | **String** |  | [optional] 
**auth_user_id_hash** | **String** |  | [optional] 
**auth_username_hash** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**fields** | **[String]** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**name** | **String** |  | [optional] 
**order** | **Number** |  | [optional] 
**skipped** | **Boolean** |  | [optional] 



## Enum: AuthSecondFactorTypeEnum


* `none` (value: `"none"`)

* `phone_number` (value: `"phone_number"`)

* `totp` (value: `"totp"`)

* `mobile_push` (value: `"mobile_push"`)

* `security_key` (value: `"security_key"`)

* `fingerprint` (value: `"fingerprint"`)





## Enum: AuthTypeEnum


* `none` (value: `"none"`)

* `password` (value: `"password"`)

* `oauth` (value: `"oauth"`)

* `email_link` (value: `"email_link"`)

* `phone_number` (value: `"phone_number"`)

* `ldap` (value: `"ldap"`)

* `saml` (value: `"saml"`)




