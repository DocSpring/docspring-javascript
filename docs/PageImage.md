# DocSpring.PageImage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **Number** | The page number, from 1. | 
**width** | **Number** | The image's width in pixels. | 
**height** | **Number** | The image's height in pixels. | 
**download_url** | **String** | A temporary link to download the image. A submission's is null when your account turns off download links for submissions. | 
**permanent_url** | **String** | A link to download a submission's image that doesn't expire: it redirects to a new temporary link. It needs your API token or a signed-in session, except for a submission of a template that makes its submissions public. Null for a template's page images. | 
**filename** | **String** | The image's file name, such as `sub_123_page_1.png`. | 
**content_type** | **String** | The image's media type, `image/png` for a submission's pages or `image/jpeg` for a template's. | 
**size** | **Number** | The image's size in bytes. | 
**sha256** | **String** | The SHA-256 hash of the image. Null for a template's page images. | 


