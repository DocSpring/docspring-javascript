# DocSpring.SubmissionBatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The batch's ID. | 
**state** | [**SubmissionBatchState**](SubmissionBatchState.md) | `pending` while the PDFs are being generated, then `processed`. `error` as soon as a submission fails, while the others can still be pending: the batch has finished once `processed_at` is set. | 
**metadata** | **{String: Object}** | Your own data about the batch, such as an ID from your app. | 
**total_count** | **Number** | The number of submissions in the request. | 
**pending_count** | **Number** | The submissions whose PDFs haven't been generated yet. | 
**error_count** | **Number** | The submissions that were invalid or whose PDFs couldn't be generated. | 
**completion_percentage** | **Number** | The percentage of the batch's submissions that have finished, from 0 to 100. | 
**submissions** | [**[Submission]**](Submission.md) | The batch's submissions, in the order of the request. Their `data` is null unless you pass `include_data=true`. A batch that failed validation only has the submissions that were recorded as `invalid_data`. | 
**processed_at** | **Date** | When every submission had finished. | 
**created_at** | **Date** | When the batch was created. | 
**updated_at** | **Date** | When the batch was last updated. | 


