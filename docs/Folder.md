# DocSpring.Folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The folder's ID. | 
**name** | **String** | The folder's name. It can't contain `/`, and is unique within its parent folder. | 
**path** | **String** | The path of the folder this folder is in, such as `/Contracts`. `/` for a folder at the root. | 
**parent_folder_id** | **String** | The ID of the folder this folder is in. Null for a folder at the root. | 
**created_at** | **Date** | When the folder was created. | 
**updated_at** | **Date** | When the folder was last updated. | 


