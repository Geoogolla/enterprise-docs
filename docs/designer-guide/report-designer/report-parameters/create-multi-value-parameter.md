---
title: Create a multi value report parameter using Report Designer
description: Create a multi value report parameter using Bold Report Designer, to modify the existing parameter properties in the RDL reports.
keywords: multi value report parameter, report parameter, report-designer, parameters
---

# Create a multi value report parameter

Multi Value Parameter is used to dynamically filter the report data based on more than one value. This section describes the steps required to create a multi value report parameter in Bold Report Designer.

Refer [Create Parameter](/designer-guide/report-designer/report-parameters/add/#create-parameter) section for better understanding with the following steps.
![Create new parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-new-parameter.png)

1. Select **Allow multiple values**, to create a multi-value parameter.
   > A multi-value parameter cannot include `null` values.

   ![Create new parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/enable-allow-multiple-values-option.png)
2. Click on `Assign Value >>` to open parameter assign dialog.
![Parameter assign values dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png)
3. Select `Query Value` option under `Available Value` tab.
![Available value query value option](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-value-query-value-option.png)
4. Select the dataset and fields in the drop-down list and Click `OK`.
![Available values query value fields](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-values-query-value-fields.png)
5. Save the parameter.

## Filter a table data based on report parameter

Using the `ProductID` parameter, we can filter the `ProductID` field values at runtime like below.

1. Select the table report item in design area.
![Select the table report item](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/select-table-report-item.png)
2. Click on the `Properties` icon in the configuration panel, to open table properties.
![Open table properties](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/properties-icon-to-open-table-properties.png)
3. In `Table` properties, click on `Set Filters...` button.
![Table set filters button](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/table-set-filters-button.png)
4. Refer [Set filters](/designer-guide/report-designer/compose-report/filter-data/) section to create new filter expression.
5. Choose the `In` operator and assign the `ProductID` parameter in the **Value** field. Save the filter.
![Open expression menu in filter dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/add-filter-condition.png)
6. Click on the `Preview` button in the report header. Select the required values in drop-down list.
![Select multiple values to filter the records](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/select-multiple-value-in-parameter.png)
7. Click on the `View Report` button.
 ![Multi value parameter preview](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/multi-value-parameter-preview-output.png)