---
title: List Report Item | Web ReportDesigner | Bold Reports
description: This section describes about list report item and its properties to design a report using list in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, list, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# List

List report item can be used to create free-form layouts. You can arrange report items to create a form with text boxes, images, and other data regions placed anywhere within the list. It acts as a container to place multiple report items side by side to design a free-form layout. A simple list design has a single cell in a row associated with the detail group and the cell contains a `Rectangle` report item.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/initial-list-design.png)

By default, no group expression is defined on List. When no group expression is defined, List repeats for each row in the datasource. When a group expression is defined on a List, the List repeats for each group in the datasource.

> Like tables and matrices, list report items are implemented as a Tablix data region.

## Add report items in list

To add report items in list cell, drag report items from itempanel or data fields from the `Data` panel to the cell. By default, the cell contains a rectangle that acts as a container.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/list/drag-and-drop-report-item-to-list.png)

Now, the report item will be dropped in the list container as shown in the below snap.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/list/drag-and-drop-report-item-to-list-design.png)

> When you right click in the list cell, the menu that appears is respect with the cell. If you insert a report item into the cell using the `Insert` option from cell context menu, the rectangle report item in the cell will be replaced by a new report item. So, to insert items inside the list cell, drag and drop the required report item into the cell containing rectangle.

In the following snap a simple design is created using the list to display product details.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/list/initial-design.png)

On report preview, the List repeats for each row in the datasource.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/list/list-reportitem-design-preview.png)

## Properties

Refer the [Properties panel](./../../compose-report/properties-panel/) section before proceeding with the below properties.

### Data

![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/data-category-property.png)

#### Dataset

This property is used to assign the dataset to the list. The available datasets in the report will be listed in the `Dataset` property dropdown. You can choose the desired dataset from the drop-down.

> Each list report item can only show data from one dataset.

![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/dataset-drop-down-view.png)

> Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section to add dataset to your report.

#### Filter

Filters is used to filter the data in the list. To open the `Filter` dialog, click on the `Set Filters...` button. Now, the filter dialog will be opened like below.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png)

Refer [Filter Data](./../../compose-report/filter-data/) section to add/remove filters in the filter dialog.

#### Sort

To sort the numeric or string field in the list, sorting can be used. In list, the sorting can be applied to the whole data region or for each group, including the details group. To open the sort dialog, click on the `Set Sorts...` button. Now, the sort dialog will be opened like below.

![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png)

Refer [Sort Data](./../../compose-report/sort-data/) section to add/remove sort expressions in the sort dialog.

### Appearance

The border style, color, width and background color properties are used to style the list and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

#### Border

Border properties are used to add or customize the border around a list item to visually separate it in the report design. To set border properties to the list item using properties panel refer [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Background color

Using the background color property you can color the list background. To set background color using properties panel refer [Background color](./../../compose-report/common-properties/#background-color) section.

### Position

Position property is used to set the width, height, left and top position of the list in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.

### Visibility

Visibility property is used to conditionally show or hide the list report item on report preview or export action. To set visibility of tablix item using properties panel refer [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

<span style="font-weight:bold">Custom Attributes</span>

This property can be used to set the values for list report item custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for list report item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.

## Set expression

An expression can be set to few properties of the list report item to process the property values based on expressions. To set expressions to the list report item properties, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the list report item contains nested properties. To open and handle nested properties, refer [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Design RDL report using list

Refer [Design ssrs RDL report using list](./../../report-items/list/design-ssrs-rdl-report-using-list/) section to learn how to design a simple list in your report.