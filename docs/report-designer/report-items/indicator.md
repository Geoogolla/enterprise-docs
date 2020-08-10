---
title: Design RDL report using Indicator | Web Report Designer
description: Design RDL/RDLC report using indicator report item to visualize the state of data in the form of icons.
keywords: boldReportDesigner, reportdesigner, indicator, reportitem
---

# Indicator

Indicator report items are minimal representation of gauge used to visualize the state of a data. It is mostly used in `Tablix` to visually display the state of the cell data.

## Add an indicator to the report

1. The indicator report item is listed in the item panel under the `KPI` category.
![Indicator item in item panel](/static/assets/on-premise/images/report-designer/report-items/indicator/item-panel.png)
2. Drag and drop the indicator report item into the design area from the item panel.
![Drag and drop indicator report item into design area](/static/assets/on-premise/images/report-designer/report-items/indicator/item-drag.png)
3. After dropping the indicator item in the design area, the respective item properties will be listed in the properties panel.
![Indicator item with properties view](/static/assets/on-premise/images/report-designer/report-items/indicator/designer-area.png)

## Properties

Refer to the [Properties panel](/on-premise/report-designer/compose-report/properties-panel/) section before proceeding with the following properties.

### Basic settings

The border style, color, width, and background color properties are used to style the indicator and customize its appearance in the report design. These properties are listed under the `Basic settings` category in the properties panel.

#### Border

Border properties are used to add or customize the border around an indicator item to visually separate items in the report design. To set border properties to the indicator item using properties panel,  refer to the [Border Properties](/on-premise/report-designer/compose-report/common-properties/#border-properties) section.

#### Background color

Using the background color property, you can customize the indicator background color. To set background color using properties panel, refer to the [Background color](/on-premise/report-designer/compose-report/common-properties/#background-color) section.

### Position

The position property is used to set the width, height, left and top position of the indicator in the report design. To handle these properties using properties panel, refer to the [Position](/on-premise/report-designer/compose-report/common-properties/#position) section.

### Data

#### Dataset

This property is used to assign the dataset to the indicator report item. The available datasets in the report will be listed in the `Dataset` property dropdown. You can choose the desired dataset from the drop-down.

![Data category](/static/assets/on-premise/images/report-designer/report-items/indicator/dataset.png)

> Refer to the [Create Data](/on-premise/report-designer/manage-data/dataset/create-an-embedded-dataset/) section to add dataset to your report.

### Indicator value

This property is used to assign value for indicator states. You can also set the indicator value based on dynamic values using expressions.

![Indicator Numeric Value](/static/assets/on-premise/images/report-designer/report-items/indicator/numeric-value.png)

#### Measurement unit

You can select `Percentage` or `Numeric` from the dropdown for indicator value measurement. If You select `Percentage` option, `Minimum` and `Maximum` properties will be visible in the property panel.

![Indicator Percentage Value](/static/assets/on-premise/images/report-designer/report-items/indicator/percentage-value.png)

##### Minimum

The minimum property is used to assign minimum value to the indicator. You can also set the minimum property value based on dynamic values using expressions.

##### Maximum

The maximum property is used to assign maximum value to the indicator. You can also set the maximum property value based on dynamic values using expressions.

### Indicator types

This property is used to select different types of predefined indicator states from the dropdown.

![Indicator Type](/static/assets/on-premise/images/report-designer/report-items/indicator/types.png)

### Indicator states

This property is used to customize the states of indicator.

![Indicator States](/static/assets/on-premise/images/report-designer/report-items/indicator/states.png)

#### Customizing a state

* `Customizing an icon` - You can choose different icon for each state from the dropdown under `Icon` column.

* `Customizing a color` - You can choose different color for each state from the color picker under `Color` column.

* `Customizing start value` - You can assign start value for each state from the numeric textbox under `Start` column and also set the start value based on dynamic values using expressions.

* `Customizing end value` - You can assign end value for each state from the numeric textbox under `End` column and also set the end value based on dynamic values using expressions.

#### Adding a new state

You can add a new state by clicking the `Add icon`. The new state will be created with the following values

* Icon - Circle
* color - No Color
* Start - ''
* End - ''

![Adding indicator states](/static/assets/on-premise/images/report-designer/report-items/indicator/states-add.png)

#### Deleting a state

You can delete a state by clicking the `delete icon`.

![Deleting indicator states](/static/assets/on-premise/images/report-designer/report-items/indicator/states-delete.png)

### Visibility

The visibility property is used to conditionally show or hide the indicator report item on report preview or export action. To set visibility of indicator item using properties panel, refer to the [Visibility](/on-premise/report-designer/compose-report/common-properties/#visibility) section.

### Miscellaneous

<span style="font-weight:bold">Custom Attributes</span>

This property can be used to set the values for indicator custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](/on-premise/report-designer/compose-report/common-properties/#custom-properties) section.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for indicator report item using properties panel refer [Tooltip](/on-premise/report-designer/compose-report/common-properties/#tooltip) section.

## Set expression

An expression can be set to few properties of the indicator report item to process the property values based on expressions. To set expressions to the indicator report item properties, refer to the [Set Expression](/on-premise/report-designer/compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer to the [Reset Expression](/on-premise/report-designer/compose-report/properties-panel/#reset-expression) section.

## Advanced properties

A few properties of the indicator report contain nested properties. To open and handle the nested properties, refer to the [Advanced Properties](/on-premise/report-designer/compose-report/properties-panel/#advanced-properties) section.
