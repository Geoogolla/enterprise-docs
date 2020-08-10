---
title: Design SSRS Matrix Report | Report Designer | Bold Reports
description: This section describes steps to design a company sales report using matrix report item in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Design SSRS Matrix Report

This section describes the steps to design yearly sales report of a company using SSRS matrix report item.

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

## Add matrix to the report

1. The table report item is listed in the item panel under the `Data Regions` category.
![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/item-panel-view.png)
2. Drag and drop the table report item into the design area from the item panel.
![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-table.png)
3. Assign dataset to the `Dataset` property of table report item.
![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/matrix/assign-data.png)

### Add parent row group

1. Select the tablix data region in the design area, now the `Grouping Panel` will be enabled in the design view.
![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/matrix/enable-grouping-panel.png)
2. To add a  group, go to `Row Groups` pane in grouping panel and open the context menu on the `Details` group field.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/open-group-menu.png)
3. From the context menu, click on `Parent Group...` option under `Add Group` category.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/select-parent-group.png)
4. Once you click on the `Parent Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png)
5. Choose `Product Category` field in the `Group by` drop-down list and  click on the `OK` button
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/assign-field-for-parent-group.png)

### Add parent column group

1. Now, select second column first cell and right click. In the cell menu, click on the `Parent Group` under the `Column Group` category.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/parent-column-group-menu.png)
2. Now, the matrix design will look like below.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/create-column-group.png)
3. Once you click on the `Parent Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png)
4. Choose `Order Year` field in the `Group by` drop-down list and  click on the `OK` button
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/choose-column-parent-group.png)

### Delete rows and columns

1. Select the second row and right-click in the row gripper. Choose `Delete Rows` option.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/delete-unused-row.png)
2. Select the cells of last two column and right-click in the cell. Choose `Delete Columns` option.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/delete-unused-column.png)

Now, the matrix design will look like below.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/add-parent-group-output.png)

### Delete details group

1. To delete a `Details` group , click on the icon in the right corner of the `Details` group member field in the grouping panel.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/delete-details-group-menu.png)
2. Click on `Delete Group` option in the menu. Now, the `Delete Group` confirmation dialog will be launched.
3. Choose `Delete group only` option and click on the `OK` button.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/delete-group-confirmation.png)

Now, the matrix design will look like below.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/delete-details-group-output.png)

### Add child row group

1. In the `Row Groups` pane, open the group menu in `ProdCat1` group field.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/open-group-menu-to-add-child-group.png)
2. From the context menu, click on `Child Group...` option under `Add Group` category.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/child-row-group.png)
3. Once you click on the `Child Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png)
4. Here, `Sub Category` field is chosen as child row group in tablix data region. Click on the `OK` button
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/select-child-row-group.png)

Now, the matrix design will look like below.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/child-row-group-output.png)

### Add child column group

1. In the `Column Groups` pane, open the group menu in `OrderYear1` group field.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/open-group-menu-to-add-column-child-group.png)
2. From the context menu, click on `Child Group...` option under `Add Group` category.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/choose-child-group-option.png)
3. Once you click on the `Child Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png)
4. Here, `OrderQtr` field is chosen as child column group in tablix data region. Click on the `OK` button
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/choose-child-group-field.png)

Now, the matrix design will look like below.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/add-child-column-group-output.png)

## Calculate a summary

Now, a matrix report is created with row groups and column groups. To calculate the total sales amount for each product category, assign the `=Sum(Fields!Sales.Value)` expression to the last cell in third row of the matrix design as shown below.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/calculate-fields.png)

> To set expression in matrix cell, refer [Assign or edit expression into table cell](/on-premise/report-designer/report-items/tablix/assign-data-to-tablix-data-region/#assign-or-edit-expression-into-table-cell) section.

## Format data

By default, the summary data for the `Sales` field displays a general number. To format the `Sales` field to display the number as currency, set the format for `Sales` field cell using the `Format` property.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/format-data.png)

## Change width or height

The matrix report item expands horizontally as well as vertically. You can resize rows and columns to display the data without wrapping. To resize rows and column in matrix data region, refer [Resize tablix data region](/on-premise/report-designer/report-items/tablix/resize-tablix-data-region/). Here, the width of columns in matrix design is resized to minimum required width as shown below.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/resize-output.png)

## Merge matrix cells

After adding row and column groups, corner cells are created in the matrix design. You can use the corner cell to display any label content or data. The number of corner cell in a matrix design is based on the number of row and column groups in the matrix. In the above matrix design, it has four cells in its corner area. The cells are arranged in two rows and two columns. The four cells are not used in this report and it can be merged as one. To merge the corner cells, refer [Merge cells in corner area](/on-premise/report-designer/report-items/tablix/merge-cells-in-tablix-data-region/#corner-area)

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/merge-corner-cell.png)

## Format matrix design

In the below design background color and font styles are changed in matrix cells to improvise the report design.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/format-matrix-report.png)

> Refer the [Cell Properties](/on-premise/report-designer/report-items/tablix/cell-properties/#cell-properties) to style the matrix cell.

## Report preview

On report preview, the yearly sales report of a company will be displayed like below,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/matrix-design-preview.png)