# DocSpring.EmailDomainDnsRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purpose** | [**EmailDomainDnsRecordPurpose**](EmailDomainDnsRecordPurpose.md) | What the record is for. `dkim` signs the emails (required), `mail_from` lets SPF pass for your domain (recommended), and `dmarc` tells inboxes what to do with emails that fail these checks (required). | 
**type** | [**DnsRecordType**](DnsRecordType.md) | The record's type. | 
**name** | **String** | The record's name. Some DNS hosts add the domain to the end of a name by themselves. | 
**value** | **String** | The record's value. | 


