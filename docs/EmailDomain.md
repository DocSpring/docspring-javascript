# DocSpring.EmailDomain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The email domain's ID. | 
**domain** | **String** | The domain name, such as `example.com` or `mail.example.com`. Email actions can send from any address at it. | 
**state** | [**EmailDomainState**](EmailDomainState.md) | `pending` until its DNS records are found, then `verified`. `failed`: its records weren't found within 3 days, or were removed. Verify it again after fixing them. | 
**dkim_state** | [**EmailDomainRecordState**](EmailDomainRecordState.md) | Whether the DKIM records were found. | 
**mail_from_state** | [**EmailDomainRecordState**](EmailDomainRecordState.md) | Whether the MAIL FROM records were found. They're optional: they let SPF pass for your domain too. | 
**dns_records** | [**[EmailDomainDnsRecord]**](EmailDomainDnsRecord.md) | The DNS records to add to the domain. Empty while DocSpring is still setting the domain up: verify it again in a few minutes to get them. | 
**dmarc_policy** | **String** | The policy (`p=`) of the domain's DMARC record, once it has been found. | 
**last_error** | **String** | Why the domain isn't verified yet, or what to fix. | 
**verified_at** | **Date** | When the domain was verified. | 
**checked_at** | **Date** | When DocSpring last checked the domain's DNS records. | 
**created_at** | **Date** | When the domain was added. | 


