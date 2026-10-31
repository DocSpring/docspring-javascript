# DocSpring.GenerateSubmissionFilesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formats** | [**[GenerateFilesFormat]**](GenerateFilesFormat.md) | The formats to add to the submission's files: `pdf`, the PDF of a Word template's submission that didn't make one (converted from its Word document); `docx`, the Word document of a Word template's submission that didn't make one (made again from the submission's data and the template version it used); `odt`, the OpenDocument file of a Word template's submission that didn't make one (converted from its Word document); and `png`, an image of each page of the PDF (up to 100 pages), which makes the PDF first if the submission doesn't have one. A submission without a Word document makes it again for `pdf` and `odt`, without keeping it. A format the submission already has (or is making) is left as it is. | 


