# DocSpring.SubmissionDataRequestShow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**email** | **String** |  | 
**name** | **String** |  | 
**order** | **Number** |  | 
**sort_order** | **Number** |  | 
**fields** | **[String]** |  | 
**metadata** | **Object** |  | 
**state** | **String** |  | 
**viewed_at** | **String** |  | 
**completed_at** | **String** |  | 
**data** | **Object** |  | 
**auth_type** | **String** |  | 
**auth_second_factor_type** | **String** |  | 
**auth_provider** | **String** |  | 
**auth_session_started_at** | **String** |  | 
**auth_session_id_hash** | **String** |  | 
**auth_user_id_hash** | **String** |  | 
**auth_username_hash** | **String** |  | 
**auth_phone_number_hash** | **String** |  | 
**ip_address** | **String** |  | 
**user_agent** | **String** |  | 
**submission_id** | **String** |  | 



## Enum: StateEnum


* `pending` (value: `"pending"`)

* `completed` (value: `"completed"`)





## Enum: AuthTypeEnum


* `none` (value: `"none"`)

* `password` (value: `"password"`)

* `oauth` (value: `"oauth"`)

* `email_link` (value: `"email_link"`)

* `phone_number` (value: `"phone_number"`)

* `ldap` (value: `"ldap"`)

* `saml` (value: `"saml"`)





## Enum: AuthSecondFactorTypeEnum


* `none` (value: `"none"`)

* `phone_number` (value: `"phone_number"`)

* `totp` (value: `"totp"`)

* `mobile_push` (value: `"mobile_push"`)

* `security_key` (value: `"security_key"`)

* `fingerprint` (value: `"fingerprint"`)




