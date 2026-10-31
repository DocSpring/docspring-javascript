# DocSpring.TemplatePreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The preview's ID. | 
**template_id** | **String** | The template's ID. | 
**version** | **String** | The published version that was rendered, such as `1.2.0`. Null for the draft. | 
**state** | [**TemplatePreviewState**](TemplatePreviewState.md) | `pending` while it renders (usually a few seconds), then `processed`, or `error` with an `error_message`. | 
**error_message** | **String** | Why the preview couldn't be rendered, such as an error in an HTML or Word template's Liquid, or a value in the data that a field can't print. | 
**page_count** | **Number** | How many pages the template printed, once it's processed. | 
**pages** | [**[PageImage]**](PageImage.md) | A PNG image of each page once it's processed, in order: `pages[0]` is page 1. A preview has no PDF. Their `download_url`s expire, so get the preview again when you need them. | 
**expires_at** | **Date** | When the preview and its images are deleted. | 


