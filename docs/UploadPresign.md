# DocSpring.UploadPresign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | The S3 URL to upload the file to. | 
**method** | [**UploadMethod**](UploadMethod.md) | The HTTP method for the upload. | 
**fields** | **{String: String}** | Form fields to send with the file. Send them all, as they are. `key` is the uploaded file's ID: pass it as `cache_id`. | 
**headers** | **{String: String}** | Headers to send with the upload. | 


