---
title: Create a multi value report parameter using Report Designer
description: Create a multi value report parameter using Bold Report Designer, to modify the existing parameter properties in the RDL reports.
keywords: multi value report parameter, report parameter, report-designer, parameters
---

# Create a multi value report parameter

Multi Value Parameter is used to dynamically filter the report data based on more than one value. This section describes the steps required to create a multi value report parameter in Bold Report Designer.

Refer [Create Parameter](./../../report-parameters/add/#create-parameter) section for better understanding with the following steps.<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-new-parameter.png" alt="Create new parameter">

1. Select **Allow multiple values**, to create a multi-value parameter.
   > A multi-value parameter cannot include `null` values.

   <img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/enable-allow-multiple-values-option.png" alt="Create new parameter">
2. Click on `Assign Value >>` to open parameter assign dialog.
<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png" alt="Parameter assign values dialog">
3. Select `Query Value` option under `Available Value` tab.
<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-value-query-value-option.png" alt="Available value query value option">
4. Select the dataset and fields in the drop-down list and Click `OK`.
<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-values-query-value-fields.png" alt="Available values query value fields">
5. Save the parameter.

## Filter a table data based on report parameter

Using the `ProductID` parameter, we can filter the `ProductID` field values at runtime like below.

1. Select the table report item in design area.
<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/select-table-report-item.png" alt="Select the table report item">
2. Click on the `Properties` icon in the configuration panel, to open table properties.
<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/properties-icon-to-open-table-properties.png" alt="Open table properties">
3. In `Table` properties, click on `Set Filters...` button.
<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/table-set-filters-button.png" alt="Table set filters button">
4. Refer [Set filters](./../../compose-report/filter-data/) section to create new filter expression.
5. Choose the `In` operator and assign the `ProductID` parameter in the **Value** field. Save the filter.
<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/add-filter-condition.png" alt="Open expression menu in filter dialog">
6. Click on the `Preview` button in the report header. Select the required values in drop-down list.
<img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/select-multiple-value-in-parameter.png" alt="Select multiple values to filter the records">
7. Click on the `View Report` button.
 <img style="width:540px" src="/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/multi-value-parameter-preview-output.png" alt="Multi value parameter preview">

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/report-parameters/create-multi-value-parameter.rdl).