# DocSpring.TemplateFieldDependencyInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**TemplateFieldDependencyAction**](TemplateFieldDependencyAction.md) | What the rule does to its targets when its conditions are met. | 
**match** | [**TemplateFieldDependencyMatch**](TemplateFieldDependencyMatch.md) | Whether all of the conditions (the default) or any of them must be met. | [optional] 
**conditions** | [**[TemplateFieldDependencyConditionInput]**](TemplateFieldDependencyConditionInput.md) | The conditions on other fields' values. | 
**targets** | **[String]** | The names of the fields the rule shows or makes required. | 
**group** | **String** | Marks a rule made for a field group in the template editor. Its targets outside the group are removed when the template is saved, and the rule is removed once the group has no fields. | [optional] 


