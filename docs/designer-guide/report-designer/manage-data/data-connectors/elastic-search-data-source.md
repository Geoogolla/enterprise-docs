---
title: Connect to Elastic Search Data Source | Bold Reports
description: Learn how to connect to Elastic Search Data Source and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to Elastic Search data source

The Bold Reports allows you to connect with Elastic Search data source in reports.

## How to create Elastic Search data source

To configure the Elastic Search data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `Elastic Search` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/connection-types.png)

### Create Elastic Search data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Enter a valid Elastic Search server or host name in the **Server Name** field.
3. The Authentication type provided is determined by the configuration of the Elastic Search server.
   * None
   * Basic HTTP Authentication
4. If the Elastic Search server uses the **Basic HTTP Authentication** in the Authentication type, then, enter a valid Elastic Search username in the **Username** text box and enter a valid Elastic Search password in the **Password** text box.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/authentication-type.png)
5. Select a database that you want to query in the listed database associated with the given Elastic Search server in the database combo-box.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/basic-options.png)

#### Preview Report

After connecting the data source, the data design view page will be opened. On this page, the list of schemas and tables from the Elastic Search server will be shown in a `treeview` section.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/execute-schema.png)

Now, you can drag and drop the required table from the tree view list.

![Tree View List](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/tree-view-list.png)

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/data-list.png)