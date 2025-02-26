# DocSpring.SubmissionDataRequestShow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**email** | **String** |  | 
**name** | **String** |  | 
**order** | **Number** |  | 
**sortOrder** | **Number** |  | 
**fields** | **[String]** |  | 
**metadata** | **Object** |  | 
**state** | **String** |  | 
**viewedAt** | **String** |  | 
**completedAt** | **String** |  | 
**data** | **Object** |  | 
**authType** | **String** |  | 
**authSecondFactorType** | **String** |  | 
**authProvider** | **String** |  | 
**authSessionStartedAt** | **String** |  | 
**authSessionIdHash** | **String** |  | 
**authUserIdHash** | **String** |  | 
**authUsernameHash** | **String** |  | 
**authPhoneNumberHash** | **String** |  | 
**ipAddress** | **String** |  | 
**userAgent** | **String** |  | 
**submissionId** | **String** |  | 



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




