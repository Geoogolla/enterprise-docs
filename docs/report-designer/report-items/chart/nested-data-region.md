---
title: Chart Nested data regions | Report Designer | Bold Reports
description: This section describes about nested data regions and the steps design a report with cart as nested data regions in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, list, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, nested data regions, tablix
---

# Chart Nested Data Regions

The data region such as a chart can be placed inside the another data region such as a tablix, to link more than one data region to the same dataset. This will provide different views of the same data. In the below steps, sales of each sub-category products for each product category group and order year is designed using chart and matrix data region.

## Create dataset

To present data in the matrix format, create a dataset and bind data to the matrix data region. In this designing section, the following dataset query is used for dataset creation.

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

> Refer [Create Data](/on-premise/report-designer/manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

## Add table to the report

1. The table report item is listed in the item panel under the `Data Regions` category.
![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/item-panel-view.png)
2. Drag and drop the table report item into the design area from the item panel.
![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-table.png)
3. Assign dataset to the `Dataset` property of table report item.
![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/assign-data.png)

### Add parent row group

1. Select the tablix data region in the design area, now the `Grouping Panel` will be enabled in the design view.
![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/enable-grouping-panel.png)
2. To add a  group, go to `Row Groups` pane in grouping panel and open the context menu on the `Details` group field.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/open-group-menu.png)
3. From the context menu, click on `Parent Group...` option under `Add Group` category.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/select-parent-group.png)
4. Once you click on the `Parent Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png)
5. Choose `Product Category` field in the `Group by` drop-down list and  click on the `OK` button
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/assign-field-for-parent-group.png)

### Add parent column group

1. Now, select second column first cell and right click. In the cell menu, click on the `Parent Group` under the `Column Group` category.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/parent-column-group-menu.png)
2. Now, the matrix design will look like below.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/create-column-group.png)
3. Once you click on the `Parent Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png)
4. Choose `Order Year` field in the `Group by` drop-down list and  click on the `OK` button
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/choose-column-parent-group.png)

### Delete rows and columns

1. Select the second row and right-click in the row gripper. Choose `Delete Rows` option.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/delete-unused-row.png)
2. Select the cells of last two column and right-click in the cell. Choose `Delete Columns` option.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/delete-unused-column.png)

Now, the matrix design will look like below.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-parent-group-output.png)

### Delete details group

1. To delete a `Details` group , click on the icon in the right corner of the `Details` group member field in the grouping panel.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/delete-details-group-menu.png)
2. Click on `Delete Group` option in the menu. Now, the `Delete Group` confirmation dialog will be launched.
3. Choose `Delete group only` option and click on the `OK` button.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/delete-group-confirmation.png)

Now, the matrix design will look like below.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/delete-details-group-output.png)

## Add chart into the matrix

1. Drag and drop a rectangle and place inside the second row, last cell.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-rectangle.png)
   > Use rectangles to control the sizing of inserted chart item.
2. Now, drag a `Exploded-pie` chart from the item panel and place inside the rectangle.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-chart-into-cell.png)
3. The chart will be placed inside rectangle within table cell as below,
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-chart-design.png)
4. Resize the chart and matrix design as required.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/resize-table-design.png)

## Assign data to chart

Select the chart report item in table cell. Now, the chart properties will be listed in the properties panel. Then, click on the `DATA` tab.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/open-chart-properties.png)

Based on the dataset assigned for parent matrix report item, the dataset field will be listed in the `DATA` assign panel. The numeric columns and numeric expressions are listed under the `Measures` section; other type of columns and dimension expressions are listed under the `Dimensions` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/data-assign-panel.png)

Now, drag and drop `Sales` field from `Measures` section and drop it in the `Y Values` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-y-value.png)

Then, drag and drop `SubCat` field from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop into the `Column(s)` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-column-field.png)

## Format matrix

In the below design background color and font styles are changed in matrix cells to improvise the report design.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/format-matrix-report.png)

> Refer the [Cell Properties](/on-premise/report-designer/report-items/tablix/cell-properties/#cell-properties) to style the matrix cell.

## Format chart

Select the chart in the table cell. Now, the chart properties will be listed in the properties panel.

Enable the chart data label checkbox,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/enable-data-label.png)

Disable the show legend checkbox,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/show-legend.png)

Disable the chart title property,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/chart-title.png)

Now, set the data label text value as `#AXISLABEL` in the `Label` property.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/data-label-value.png)

Refer [Show Data Label](/on-premise/report-designer/report-items/chart/data-label/) section to customize data label in chart.

To set label position for pie chart, set `PieLabelStyle=Outside` as value in `UserDefined` property.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/set-label-position.png)

Set the series color using the `Color Palette` property.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/color-palette.png)

You can further customize the appearance of the chart using the chart properties in properties panel.

## Final design

Resize the tablix data region to the required size in the design area. Now, the final design will look like below,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/final-design.png)

## Report preview

To see the report preview, click on the **Preview** button in the top-right corner of the report header.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/final-design-preview.png)