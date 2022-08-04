---
title: Connect to Google Cloud SQL Data Source | Bold Reports
description: Learn how to connect the multiple database by Google Cloud SQL using the SQL Query (C# API) in Bold Reports Designer.
---

# Connect to Google Cloud SQL data source

The Bold Reports allows you to connect multiple database through Google Cloud SQL using SQL Query (C# API).

## How to create Google Cloud SQL data source

To configure the Google Cloud SQL data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `Google Cloud SQL` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/connection-types.png)

> You can also create a data source from the home page by clicking the Data Sources menu from the left menu panel and create Data Source from the data sources page.

  ![Data Source Another Way](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/data-source-other-way.png)

### Create Google Cloud SQL data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Select a database engine you want to use with the given Google Cloud SQL Server from the Database Engine combo box.
3. Enter a valid Google Cloud SQL server or host name in the **Server Name** field.
4. Enter a valid Google Cloud SQL username in the **Username** text box.
5. Enter a valid Google Cloud SQL password in the **Password** text box.
6. Select a database that you want to query in the listed database associated with the given Google Cloud SQL server in the database combo box.
7. Click on `Connect` to connect the Bold Reports with the Google Cloud SQL server database.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/basic-options.png)

#### Google Cloud SQL supported database engine in Bold Reports

* MySQL
* PostgreSQL

![Database Engine](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/database-engine.png)

#### Data Preview

1. Click on the `Connect` to proceed with the query design pane. The query design pane will show the specified Google Cloud SQL data's structure in the left pane.
![Query Design Page](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/query-design-page.png)

2. Drag and drop the table from the left pane in the query design view page and execute.
![Execute Schema File](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/execute-schema-file.png)

3. You can use the `Code View` options by clicking code in the tools pane for passing the query to display data.
![Code View Options](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/code-view-options.png)

4. Click `Finish` to save the data source with a relevant name to design the report.