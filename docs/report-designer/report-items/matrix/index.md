---
title: Matrix Report Item | Web ReportDesigner | Bold Reports
description: This section describes about matrix report item and its properties to design a report using matrix in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Matrix

Matrix can be used to display summarized data. It allows to group and summarize data by both rows and columns. A simple matrix design contains a row group, a column group, a corner cell, and a data cell.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/initial-matrix-design.png)

## Properties

Refer the [Tablix Properties](/on-premise/report-designer/report-items/tablix/) section to set and edit properties value for matrix report item.

## Add matrix to the report

1. The table report item is listed in the item panel under the `Data Regions` category.
![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/item-panel-view.png)
2. Drag and drop the table report item into the design area from the item panel.
![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-table.png)

### Add row and column groups

1. Refer [Add parent group](/on-premise/report-designer/report-items/tablix/insert-or-delete-a-row-group-ssrs/#parent-row-group) section and add a parent row group to the table.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/add-row-group.png)
2. Now, select second column first cell and right click. In the cell menu, click on the `Parent Group` under the `Column Group` category. Refer [Parent column group](/on-premise/report-designer/report-items/tablix/insert-or-delete-a-column-group-ssrs/#parent-column-group) section and add a parent column group to the table.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/create-column-group.png)
3. When you add column group, a tablix corner cell will be create in the data region.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/corner-cell.png)
4. Delete the second row and add the label text in corner cell.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/add-lable-in-corner-cell.png)
5. Now, delete the `Details` group from the table using the grouping panel.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/delete-details-group.png)
In the delete confirmation dialog, choose `Delete group only` option and click on the `OK` button.

    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/delete-group-confirmation.png)
6. Refer [Delete Columns](/on-premise/report-designer/report-items/tablix/insert-or-delete-a-column-ssrs/#delete-a-column) section and delete the excess columns in the right side of the column group.

Now, the matrix design with a row group and column group will be look like below.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/basic-design.png)