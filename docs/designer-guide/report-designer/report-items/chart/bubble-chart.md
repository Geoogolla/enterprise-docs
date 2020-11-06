---
title: Configuring and Formatting Bubble Chart | Web ReportDesigner
description: Adding HTML5 JavaScript Bubble Chart control into report and formatting with the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Bubble Chart

Bubble Chart allows you to compare large number of data points represented as bubbles and showcase the difference through its size. The bubble chart requires two values per data point. By default, bubble chart display data points as circles.

## Add chart to the report

These types of charts are categorized under the `Distribution` category in item panel.

Drag and drop bubble chart from the item panel into design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/drag-chart-from-item-panel.png)

Now, the bubble chart will be rendered in the design area and the chart properties will be listed in properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/initial-view-of-bubble-chart.png)

## Create data

To present data in the chart, create a dataset and bind data to the chart data region. In this designing section, the following dataset query is used for dataset creation.

```sql
SELECT PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
WHERE (SOH.OrderDate BETWEEN '1/1/2002' AND '12/31/2003')
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

## Assign data

Bubble chart requires 3 fields (x, y and size) to plot a point. Here, size is used to specify the size of each bubble segment.

To configure data into bubble chart follow the below steps:

To bind data to a chart report item placed in the design area, focus on that report item.

Click `Properties` icon in the configuration panel, the property pane opens. Now, switch to `DATA` tab.
   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/chart-properties-pane.png)

The available data in the report will be listed in the drop-down, choose a data in the drop-down list.
![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/data-assign-drop-down.png)

The numeric columns and numeric expressions are listed under the `Measures` section; other type of columns and dimension expressions are listed under the `Dimensions` section.
   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/measures-dimensions-category.png)

**Drag and Drop Measure Element**:
   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/add-y-values-field.png)

You can add multiple numeric columns in the `Y-value` section.

   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/add-multiple-series.png)

**Aggregate Options**:
   Click the `Settings` icon (highlighted below) to open the aggregation type drop-down list.
   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/aggregation-settings-icon.png)
   You can set the aggregation type by which you can compute the selected column.
   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/aggregation-settings-menu.png)

**Expression field** :

You can set the expression by which you want to visualize data in the bubble chart. Click the `Settings` icon (highlighted below) to open the aggregation type drop-down list.
   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/aggregation-settings-icon.png)

Then click on the `Expression` menu to open the expression editor.

![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/expression-menu.png)

In expression editor, provide the required expression and click `OK`.

![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/expression-editor.png)

Now, the label in `Y-Value` section for the respective field will be displayed with `<<Expr>>` tag.

![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/expression-indication.png)

**Drag and Drop Dimension Element**:
   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop into the `Column(s)` section.  
   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/add-field-to-column-section.png)

**Grouping**:
   You can group the added column element with another column, by adding the respective dimension element into Row(s) section.
   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/add-field-to-rows-section.png)

Now, the chart design will look like below.

![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/final-design.png)

**Size**:
The Bubble size can be defined by adding a value into the Size section
![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/add-field-to-xvalue-section.png)

## Format bubble chart

You can format the bubble chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To format bubble chart follow the below steps:

1. Drag and drop the bubble chart into design area and resize it to required size.
2. Configure the data to the bubble chart.
3. Focus on the bubble chart and click `Properties` icon in the configuration panel, the property pane opens.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/open-chart-properties.png)

You can see the list of properties available for the widget with default value.

### General Settings

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/name-property.png)

<span style="font-weight:bold">Name</span>

Name property can be used to provide an unique name to the chart item in the report.

### Basic Settings

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/basic-settings.png)

> Note: The properties under basic setting will be enabled in the chart properties panel, after assigning the data to the chart.

<span style="font-weight:bold">Show Legend</span>

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also you can customize the legend text appearance. To set/reset legend properties, refer [Show Legend](./../../../report-items/chart/legend/) property.

<span style="font-weight:bold">Choose Series</span>

You can add multiple series to the chart and the available series will be listed in the `Choose Series` drop-down. To customize the series appearance choose the required series name in the drop-down.

In the below snap, the chart has single series.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/chart-with-single-series.png)

So, only one series is listed in the drop-down,

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-series/single-series-list-in-drop-down.png)

If the chart has multiple series as below,

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/chart-with-multiple-series.png)

Now, both series will be listed in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-series/multi-series-list-in-drop-down.png)

<span style="font-weight:bold">Show Marker</span>

Data markers are used to provide information about the data point to the user. You can add a shape and label to adorn each data point. To set/reset marker properties, refer [Show Marker](./../../../report-items/chart/marker/) property. The marker properties will be applied to the selected series in the  `Choose Series` drop-down.

<span style="font-weight:bold">Show Data Label</span>

Data label can be added to a chart series by using the `Show Data Label` property. The labels appear at the top of the data point, by default. To set/reset data label properties, refer [Show Data Label](./../../../report-items/chart/data-label/) property. The data label properties will be applied to the selected series in the  `Choose Series` drop-down.

<span style="font-weight:bold">Enable Smart Label</span>

Smart labels manage overlapping of labels even when a large number of labels are placed in close vicinity. To set/reset data label properties, refer [Enable Smart Label](./../../../report-items/chart/smart-label/) property.![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/enable-smart-label.png)

> To apply smart label properties, enable `Data Label` for chart data region.

<span style="font-weight:bold">Series Border</span>

Series border properties can be used to customize the chart series border in the design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-series/series-border.png)

In the below design, border color, width and style properties are applied to the chart series.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/border-design.png)

> The series border properties will be applied to the selected series in the  `Choose Series` drop-down.

You can also set properties based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-series/border-expression-menu.png)

<span style="font-weight:bold">Series Color</span>

Series Color property can be used to customize the series colors in the chart area. If the chart has multiple series, you can differentiate the series using this property.

Choose first series in the `Choose Series` drop-down and choose color in `Series Color` property palette.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/series-color-first-series.png)

Now, the selected color will be applied to the `Sales1` series in the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/first-series-color-design.png)

Then, choose second series in the `Choose Series` drop-down and choose color in `Series Color` property palette.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/series-color-second-series.png)

Now, the selected color will be applied to the `Price1` series in the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/second-series-color-design.png)

> The series color properties will be applied to the selected series in the  `Choose Series` drop-down.

You can also apply series color based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

<span style="font-weight:bold">Link To</span>

You can configure **Hyperlink** or a **Report path** in the chart series to create an interactive report. Refer [Linking](./../../../compose-report/link-data/) section to set or reset link property for chart series.
![Link To property](/static/assets/on-premise/images/report-designer/report-items/chart/link-to-property.png)

### Appearance

The border style, color, width and background color properties can be used to style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/appearance-property.png)

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/appearance-design.png)

### Chart Area

Chart Area properties such as border width, color, and background color can be used to customize the area of the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/chart-area-sketch.png)

These properties are listed under `Chart Area` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-area.png)

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/chart-area-design.png)

### Title

The chart title can be customized by editing the `Title Text` property of the chart.

To show/hide the chart title, toggle the `Show Chart Title` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-title.png)

Using these properties the font color, font text, font style, border, background and position of the title can be customized in the chart design.

### Category Axis

Category axis displays the text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under `Category Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/category-axis.png)

To set/reset axis properties, refer [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

Numeric axis uses numerical scale and displays numbers as labels. To use the categorical axis, toggle the `Enable Axis` checkbox under `Value Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/value-axis.png)

To set/reset axis properties, refer [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid line

The Grid line properties can be set to category and value axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/grid-line.png)

<span style="font-weight:bold">Category Axis</span>

To show the grid line for category axis, enable the `Category Axis` checkbox.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/category-axis-grid-line.png)

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/category-grid-line-advanced-properties.png)

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/category-axis-minor-grid-lines.png)

<span style="font-weight:bold">Value Axis</span>

To show the grid line for value axis, enable the `Value Axis` checkbox.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/value-axis-grid-line.png)

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/value-grid-line-advanced-properties.png)

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/value-axis-minor-grid-lines.png)

### Page break

The page break property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply page break property for chart report item.

1. The Break Location property specifies where the page break should occur. Choose any `Break Location` type in the drop-down.
![Break location](/static/assets/on-premise/images/report-designer/report-items/rectangle/break-location-types.png)
2. To restart the page numbering on each page, enable `Page Number Reset` property checkbox.
![Reset page number](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-property.png)
3. The PageName property specifies a page id for the new page that the page break causes. You can specify a static text or dynamic expression to this property.

### Miscellaneous

<span style="font-weight:bold">Custom Attributes</span>

This property can be used to set the values for chart custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for chart item using properties panel refer [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

## Preview report

The final report design looks like below.
![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/preview-icon.png)
2. Now, the report preview can be visualized like below.
![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/bubble-chart/report-preview-page.png)