---
layout: post
title: How to create a master-detail report using the table
description: This documentation explains the step-by-step procedure to create master-detail report using table in Bold Reports Designer
platform: embedded-reporting-tools
documentation: ug
---

# How to create a master detail report using the table in Report Designer

In some scenarios, your data source contains master-detail relationship and you prefer to create a single report to show the mater-detail result.

To achieve this, create a query that combines multiple tables and returns a single data set containing both master and detail records.

Let us look at the procedures to create a tablix report item with a row and detail group that displays the master-detail relationship.

1. As a first step, open the Bold Report Designer.
![Bold reports designer](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/bold-reports-designer.png '#width=450px')

2. Connect to the data source using this documentation [link](./../../manage-data/datasource/).

3. Connect to the dataset using this documentation [link](./../../manage-data/dataset/).

4. The `ProductCatalog` dataset is created using the following query.
![ProductCatalog dataset](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/datasource-connection.gif)

    ```csharp
      SELECT top 60 PS.Name AS ProdSubCat, PM.Name AS ProdModel, PC.Name AS ProdCat, PD.Description, PP.LargePhoto,P.Name AS ProdName,P.ProductNumber, P.Color, P.Size, P.Weight, P.StandardCost,P.Style,P.Class, P.ListPrice
      FROM  Production.Product P INNER JOIN
      Production.ProductSubcategory PS INNER JOIN
      Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID ON P.ProductSubcategoryID = PS.ProductSubcategoryID INNER JOIN
      Production.ProductProductPhoto PPP ON P.ProductID = PPP.ProductID INNER JOIN
      Production.ProductPhoto PP ON PPP.ProductPhotoID = PP.ProductPhotoID LEFT OUTER JOIN
      Production.ProductDescription PD INNER JOIN
      Production.ProductModel PM INNER JOIN
      Production.ProductModelProductDescriptionCulture PMPDCL ON PM.ProductModelID = PMPDCL.ProductModelID ON
      PD.ProductDescriptionID = PMPDCL.ProductDescriptionID ON P.ProductModelID = PM.ProductModelID
    WHERE (PMPDCL.CultureID = 'en')
    ```
5. Drag the table report item and configure the fields. Then, add groups in the tablix to display the data using this documentation [link](./../../report-items/tablix/add-or-delete-a-details-group-ssrs/).
![Master table design](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/initial-master-report-design.png '#width=550px')

6. Drag the another table report item and configure the field as shown in the following image.
![Detail table design](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/initial-master-detail-table.png '#width=500px')

   You can download the previously created report from here(
[Initial master-detail table design.](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Product-catalog-836330880.zip))

7. Right-click on the last row (`Description`) and select `Insert Row`, then click the `Inside Group-Below option`.

8. In the newly added row, select all the cells using `Ctrl Key + Mouse left click` combination.

9. After selection, right-click any selected cell, and then click `Merge Cells`.

10. Cut the detail table from body and paste inside the merged row.
![Insert detail record](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/insert-detail-record.gif)

11. Click on the Preview at the top-right corner of the Report Designer toolbar to see the output result.
![Output](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/outputvideo.gif)