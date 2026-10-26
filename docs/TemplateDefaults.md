# DocSpring.TemplateDefaults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**typeface** | [**Typeface**](Typeface.md) | The font of text fields. | [optional] 
**font_size** | **Number** | The font size in points, a whole number. | [optional] 
**character_spacing** | **Number** | Extra space between characters, in points (0 to 50). | [optional] 
**color** | **String** | The text color, as 6 hex digits without `#`, such as `444444`. | [optional] 
**background_color** | **String** | The field's background color, as 6 hex digits. | [optional] 
**bold** | **Boolean** | Print text in bold. | [optional] 
**uppercase** | **Boolean** | Print text in capital letters. | [optional] 
**alignment** | [**TextAlignment**](TextAlignment.md) | How text is aligned in its field. `justify` lines up both edges of every line of multiline text except the last of each paragraph. | [optional] 
**opacity** | **Number** | The opacity of the field's content, from 0 (invisible) to 1. | [optional] 
**date_format** | **String** | How date fields are printed, as a strftime format such as `%m/%d/%Y`. | [optional] 
**date_time_format** | **String** | How date-time fields are printed, as a strftime format such as `%m/%d/%Y %H:%M:%S`. | [optional] 
**check_color** | **String** | The color of check marks, as 6 hex digits. | [optional] 
**check_character** | [**CheckCharacter**](CheckCharacter.md) | The character that a ticked check box prints. | [optional] 
**check_background_color** | **String** | The check box's background color, as 6 hex digits. | [optional] 
**required_field_background_color** | **String** | The background color that highlights required fields on visual forms and signature request forms, as 6 hex digits. PDFs don't print it. | [optional] 
**true_text** | **String** | The text a boolean field prints for `true`. | [optional] 
**false_text** | **String** | The text a boolean field prints for `false`. | [optional] 
**shape_fill_color** | **String** | The fill color of shapes, as 6 hex digits. | [optional] 
**shape_border_color** | **String** | The border color of shapes, as 6 hex digits. | [optional] 
**shape_border_width** | **Number** | The border width of shapes, in whole points (at least 1). | [optional] 


