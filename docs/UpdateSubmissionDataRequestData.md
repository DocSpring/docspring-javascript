# DocSpring.UpdateSubmissionDataRequestData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authPhoneNumberHash** | **String** |  | [optional] 
**authProvider** | **String** |  | [optional] 
**authSecondFactorType** | **String** |  | [optional] 
**authSessionIdHash** | **String** |  | [optional] 
**authSessionStartedAt** | **String** |  | [optional] 
**authType** | **String** |  | [optional] 
**authUserIdHash** | **String** |  | [optional] 
**authUsernameHash** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**fields** | **[String]** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**name** | **String** |  | [optional] 
**order** | **Number** |  | [optional] 


<a name="AuthSecondFactorTypeEnum"></a>
## Enum: AuthSecondFactorTypeEnum


* `none` (value: `"none"`)

* `phone_number` (value: `"phone_number"`)

* `totp` (value: `"totp"`)

* `mobile_push` (value: `"mobile_push"`)

* `security_key` (value: `"security_key"`)

* `fingerprint` (value: `"fingerprint"`)




<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum


* `none` (value: `"none"`)

* `password` (value: `"password"`)

* `oauth` (value: `"oauth"`)

* `email_link` (value: `"email_link"`)

* `phone_number` (value: `"phone_number"`)

* `ldap` (value: `"ldap"`)

* `saml` (value: `"saml"`)




