# DocSpring.CreateCombinedPdfRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_pdfs** | [**[CombinedPdfSourceInput]**](CombinedPdfSourceInput.md) | The PDFs to merge, in order. | 
**metadata** | **{String: Object}** | Your own data about the combined PDF, such as an ID from your app. | [optional] 
**password** | **String** | A password that the PDF needs to be opened with. It's never returned; `has_password` says if it's set. | [optional] 
**delete_custom_files** | **Boolean** | Delete the custom files in `source_pdfs` once the combined PDF has been generated (they're kept if it fails). Other combined PDFs can't use them after that. A test API token can't delete custom files. | [optional] 
**expires_in** | **Number** | Seconds after the PDF is generated until the combined PDF expires, up to 10 years (315360000). One that fails is kept for at least 48 hours. Without it, the combined PDF is kept until you delete it. | [optional] 


