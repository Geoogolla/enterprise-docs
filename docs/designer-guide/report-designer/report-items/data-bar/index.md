---
title: Configuring and Formatting Data bar | Web ReportDesigner
description: Adding HTML5 JavaScript Data bar chart control into report and formatting with Bold Web Report Designer
keywords: ejReportDesigner, reportdesigner, data bar, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Data bar

Data bars are small, simple charts which can be used for showing trends and changes in data over time, especially over many periods.
They convey a lot of information in a little space, often used in table and matrices.

## Add data bar to the report

1. The data bar report item is listed in the item panel under the `KPI` category.
![Data bar item in item panel](/static/assets/on-premise/images/report-designer/report-items/data-bar/item-panel.png '#width=145px')
2. Drag and drop the data bar report item into the design area or inside tablix cell from the item panel.
![Drag and drop data bar report item into design area](/static/assets/on-premise/images/report-designer/report-items/data-bar/item-drag.png '#width=355px')
3. After dropping the data bar item in the design area or inside tablix cell, the respective item properties will be listed in the properties panel.
![Data bar item with properties view](/static/assets/on-premise/images/report-designer/report-items/data-bar/designer-area.png)

## Create data

To present data in the data bar, create a dataset and bind data to it. In this designing section, the following dataset query is used for dataset creation.

```sql
SELECT PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

## Assign data

Data bar needs a minimum of 1 value element to showcase data. The measure or expression field that you would like to analyze can be dropped into `Y Values` section. The dimension that you would like to categorize the measure, can be dropped onto `Columns` section. If you would like to categorize based on a series, then the respective dimension can be dropped onto `Rows` section in addition.

To configure data into data bar follow the below steps:

1. To bind data to a data bar report item, focus on that report item.
2. Click `Properties` icon in the configuration panel, the property pane opens. Now, switch to `DATA` tab.
   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/data-bar/chart-properties-pane.png '#width=425px')
3. The available data in the report will be listed in the drop-down, choose a data in the drop-down list.
   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/data-bar/data-assign-drop-down.png '#width=385px')
4. The numeric columns and numeric expressions are listed under the `Measures` section; other type of columns and dimension expressions are listed under the `Dimensions` section.
   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/data-bar/measures-dimensions-category.png '#width=385px')
5. **Drag and Drop Measure Element**:
   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/data-bar/add-y-values-field.png '#width=385px')
   Now, the report item design will look like below:
   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/data-bar/y-value-chart-design-view.png '#width=385px')
6. **Aggregate Options**:
   Click the `Settings` icon (highlighted below) to open the aggregation type drop-down list.
   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/data-bar/aggregation-settings-icon.png '#width=195px')
   You can set the aggregation type by which you can compute the selected column.
   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/data-bar/aggregation-settings-menu.png '#width=395px')
7. **Drag and Drop Dimension Element**:
   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop into the `Column(s)` section.  
   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/data-bar/add-field-to-column-section.png '#width=395px')
   Now, the report item design will look like below:
   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/data-bar/column-field-design-preview.png '#width=385px')
8. **Grouping**:
   You can group the added column element with another column, by adding the respective dimension element into Row(s) section.
   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/data-bar/add-field-to-rows-section.png '#width=395px')
   Now, the report item design will look like below.
   ![Preview of row value grouping](/static/assets/on-premise/images/report-designer/report-items/data-bar/row-field-design-preview.png '#width=385px')

## Properties

Refer to the [Properties panel](./../../compose-report/properties-panel/) section before proceeding with the following properties.

### Name

Name property can be used to provide an unique name to the data bar item in the report.

![Name property](/static/assets/on-premise/images/report-designer/report-items/data-bar/name-property.png '#width=375px')

### Basic Settings

![Chart Basic settings](/static/assets/on-premise/images/report-designer/report-items/data-bar/basic-settings.png '#width=375px')

### Choose Series

You can add multiple series to the chart and the available series will be listed in the `Choose Series` drop-down. To customize the series appearance choose the required series name in the drop-down.

![Choose series](/static/assets/on-premise/images/report-designer/report-items/data-bar/single-series-list-in-drop-down.png '#width=375px')

Refer [Series](../chart/series/) section, to customize each series using the properties panel.

### Appearance

The border style, color, width and background color properties can be used to style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart appearance](/static/assets/on-premise/images/report-designer/report-items/chart/appearance-property.png '#width=375px')

### Chart Area

Chart Area properties such as border width, color, and background color can be used to customize the area of the chart design. These properties are listed under `Chart Area` category.

![Chart Area](/static/assets/on-premise/images/report-designer/report-items/chart/chart-area.png '#width=375px')

### No Data

No Data property is used to display static text when dataset results with a empty or zero rows at run time.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/no-data/no-data.png '#width=355px')

To set/reset no data message properties, refer [No Data Message](../chart/no-data-message/) property section.

### Page break

The page break property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply page break property for data bar report item.

1. The Break Location property specifies where the page break should occur. Choose any `Break Location` type in the drop-down.
![Break location](/static/assets/on-premise/images/report-designer/report-items/rectangle/break-location-types.png '#width=355px')
2. To restart the page numbering on each page, enable `Page Number Reset` property checkbox.
![Reset page number](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-property.png '#width=355px')

### Position

Position property is used to set the width, height, left and top position of the data bar in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.![Chart postion](/static/assets/on-premise/images/report-designer/report-items/data-bar/position.png '#width=355px')

### Data Element

Data element can be used to control visibility of a report item when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=355px')

#### Name

You can assign a custom name for the databar element using the `Name` field. The databar will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=355px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

On exporting the report, the visibility of the databar can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the data bar report item
* **NoOutput** - Does not export the data bar report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=355px')

### Visibility

The visibility property is used to conditionally show or hide the data bar report item on report preview or export action. To set visibility of data bar item using properties panel, refer to the [Visibility](./../../compose-report/common-properties/#visibility) section.![Chart visibility](/static/assets/on-premise/images/report-designer/report-items/data-bar/visibility.png '#width=355px')

### Miscellaneous

#### Page name

The page name property is used to name the first worksheet of the Excel workbook, when exporting the report to excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/data-bar/page-name.png '#width=355px')

You can set the static or dynamic text as page name. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

#### Document Map

A document map is a navigational feature that displays a separate side pane with set of navigational links in hierarchical structure when you view a report. A user can click the content in the list, to navigate to the report page that displays that item. Refer [Document Map](./../../compose-report/document-map/) section to configure document map in the report design.

You can set the static or dynamic text as value for document map property. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

#### Bookmark

Bookmark links allows the users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table or chart or to the unique group values displayed in a tablix which can direct the users to specified locations in the report. The value of bookmark property can be your own strings or an expression. Refer [Bookmark](./../../compose-report/bookmark/) section to configure bookmark in the report design.

You can set the static or dynamic text as value for bookmark property. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

#### Custom attributes

This property can be used to set the values for chart custom properties. To assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for data bar report item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.

## Set expression

An expression can be set to few properties of the data bar report item to process the property values based on expressions. To set expressions to the data bar report item properties, refer to the [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer to the [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Advanced properties

A few properties of the data bar report item contains nested properties. To open and handle the nested properties, refer to the [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.