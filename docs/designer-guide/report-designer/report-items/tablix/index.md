---
title: Tablix Report Item | Web ReportDesigner | Bold Reports
description: This section describes about tablix report item and its properties to design a report using tablix in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Tablix

Tablix report item is used to display paginated report data from a dataset in cells that are organized into rows and columns. It is the combination of `Table`, `Matrix`, and `List` report items `(Table + Matrix + List = Tablix)`. The `Tablix` report items are listed under `Data Regions` category in the item panel.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/item-panel-initial-view.png)

> Matrix report item is not provided as separate report item. The table report item can be used to create a matrix layout.

The following section explains about these report items.

## Table

Table can be used to display data in tabular format. A simple table design contains a table header row, and a details row with three columns. Table can have only row groups.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/table-initial-design.png)

## Matrix

Matrix can be used to display summarized data. It can have row groups and column groups. A simple matrix design contains a row group, a column group, a corner cell, and a data cell.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/initial-matrix-design.png)

## List

List report item can be used to create free-form layouts. It acts as a container to place multiple report items side by side to design a free-form layout.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/initial-list-design.png)

## Tablix sections

Tablix data region can be classified into four sections:

* Corner cell - It is created when tablix data region has both row groups and column groups.
* Row group cells - Displays group instance values
* Column group cells - Displays group instance values
* Body cells - Displays detail and group data

 The following snap shows the areas for a tablix region with nested row groups and column groups

![Tablix areas](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-areas.png)

> The tablix body area always exists in the tablix data region. The other areas are optional.

### Groups and total

When you select a tablix cell, row and column grippers and group indicators inside the tablix data region will show the groups to which the respective cell belongs.

The following snap shows a matrix with both row and column groups, and a total row and a total column.

![Groups and total ](/static/assets/on-premise/images/report-designer/report-items/tablix/groups-and-total-sketch.png)

## Properties

Refer the [Properties panel](./../../compose-report/properties-panel/) section before proceeding with the below properties.

### Data

![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/data-category-property.png)

#### Dataset

This property is used to assign the dataset to the tablix. The available datasets in the report will be listed in the `Dataset` property dropdown. You can choose the desired dataset from the drop-down.

> Each tablix report item can only show data from one dataset.

![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/dataset-drop-down-view.png)

> Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section to add dataset to your report.

#### Filter

Filters is used to filter the data in the tablix. To open the `Filter` dialog, click on the `Set Filters...` button. Now, the filter dialog will be opened like below.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png)

Refer [Filter Data](./../../compose-report/filter-data/) section to add/remove filters in the filter dialog.

#### Sort

To sort the numeric or string field in the tablix, sorting can be used. In tablix, the sorting can be applied to the whole data region or for each group, including the details group. To open the sort dialog, click on the `Set Sorts...` button. Now, the sort dialog will be opened like below.

![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png)

Refer [Sort Data](./../../compose-report/sort-data/) section to add/remove sort expressions in the sort dialog.

### Appearance

The border style, color, width and background color properties are used to style the tablix and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

#### Border

Border properties are used to add or customize the border around a tablix item to visually separate it in the report design. To set border properties to the tablix item using properties panel refer [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Background color

Using the background color property you can color the tablix background. To set background color using properties panel refer [Background color](./../../compose-report/common-properties/#background-color) section.

### Page break

Page break property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply page break property for tablix report item.

![Tablix keep together](/static/assets/on-premise/images/report-designer/report-items/tablix/page-break.png)

#### Break location

The Break Location property specifies where the page break should occur. Choose the required `Break Location` type in the drop-down.
![Break location](/static/assets/on-premise/images/report-designer/report-items/tablix/break-location-types.png)

#### Page number reset

To restart the page numbering on each page, enable `Page Number Reset` property checkbox.
![Reset page number](/static/assets/on-premise/images/report-designer/report-items/tablix/page-number-reset.png)

#### Keep together

Enable this checkbox, to keep the entire tablix together on one page if possible.

![Keep together tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-together.png)

### Headers

Headers property can used to configure the tablix row and column headers behaviour when previewing the report.

![Tablix headers](/static/assets/on-premise/images/report-designer/report-items/tablix/headers.png)

<span style="font-weight:bold">Fixed Row</span>

Fixed row property can be used to freeze the row headers while scrolling the pages of a report.

<span style="font-weight:bold">Fixed Column</span>

Fixed column property can be used to freeze the column headers while scrolling the pages of a report.

<span style="font-weight:bold">Repeat Row</span>

Repeat row property can be used to show the row header on every single page of the report.

<span style="font-weight:bold">Repeat Column</span>

Repeat column property can be used to show the column header on every single page of the report.

### Position

Position property is used to set the width, height, left and top position of the tablix in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.

### Visibility

Visibility property is used to conditionally show or hide the tablix report item on report preview or export action. To set visibility of tablix item using properties panel refer [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

<span style="font-weight:bold">Custom Attributes</span>

This property can be used to set the values for tablix custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for table report item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.

## Set expression

An expression can be set to few properties of the tablix report item to process the property values based on expressions. To set expressions to the tablix report item properties, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the tablix report items contains nested properties. To open and handle nested properties, refer [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Design RDL report using table

Refer [Design ssrs RDL report using tablix](./../../report-items/tablix/design-ssrs-rdl-report-using-table/)  section to learn how to design a simple tablix in your report.