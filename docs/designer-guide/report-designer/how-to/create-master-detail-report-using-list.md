---
layout: post
title: How to create a master-detail report using the list
description: This documentation explains the step-by-step procedure to create master-detail report using list in Bold Reports Designer
platform: embedded-reporting-tools
documentation: ug
---

# How to create master detail report using a list in Report Designer

In some scenarios, your data source contains master-detail relationship and you prefer to create a single report to show the mater-detail result.

To achieve this, create a query that combines multiple tables and returns a single data set containing both master and detail records.

Let us look at the procedures to create a list report item with a detail group that displays the master-detail relationship.

1. As a first step, open the Bold Report Designer.
![Bold reports designer](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/bold-reports-designer.png '#width=400px')

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
5. Drag the table report item and configure the field as shown in the following image.
![Detail table design](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/list-detail-table.png '#width=550px')

6. Drag the list report item and set the dataset name to the `Dataset` property in the properties panel.
![Master table design](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/assign-dataset-list.png '#width=350px')

7. Add groups to the list to display the data as shown in the following image.
![Master table design](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/initail-list-design.png '#width=600px')

8. Cut the detail table from body and paste inside the list as shown in the following image.
![Master table design](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/final-list-design.png '#width=600px')

9. Click on the Preview at the top-right corner of the Report Designer toolbar to see the output result.
![Output](/static/assets/on-premise/images/report-designer/how-to/master-details-nested-item/output-list.png '#width=600px')