---
title: Create an embedded data source | Report Designer
description: Create an embedded data source connection to feed data to the report and to visualize the data using report items in Bold Report Designer 
keywords: create data, add datasource, report-designer, connect to data, embedded data sources, ssrs, reporting
---

# Create an embedded data source

This section guides you to create an embedded data source in Bold Report Designer. The embedded data source can only be used by the report in which it is embedded.

## Add a new data source

To bind data to a report item, a minimum of one data source is needed. A data source can be created through the below steps:

1. Click on the **Data** icon in the configuration panel.
   <img style="width:414px;height:345px" src="/assets/on-premise/images/report-designer/manage-data/datasource/data-icon-configuration-panel.png" alt="Data icon configuration panel">
2. In the `Data` panel, click on the `switcher` icon on the top-right corner.
   <img style="width:474px;height:466px" src="/assets/on-premise/images/report-designer/manage-data/datasource/data-panel-switcher-icon.png" alt="Data panel switcher icon">
3. Click the `Datasources` in context menu, to open `DATASOURCES` panel.
   <img style="width:491px;height:394px" src="/assets/on-premise/images/report-designer/manage-data/datasource/new-data-source-panel.PNG" alt="New data source panel">
4. In the `DATASOURCES` configuration panel, click on the `NEW DATASOURCE` button.
5. In the connection type panel, choose the data source type that you want to connect.
   > Here, `SQL` connection type is used for demonstration.

   <img style="width:513px;height:181px" src="/assets/on-premise/images/report-designer/manage-data/datasource/connection-types-panel.png" alt="Connection types panel">
6. In the new connection panel,
    * In **Name** field, specify the data source name without special characters.
    * In **Server Name** field, you need to select existing server in the local network from the drop-down list or specify the specific remote server name like `myserver.domain.com`.
    * In **Authentication Type** field, choose **Windows** or **SQL Server** authentication.
    * If you have chosen **SQL Server** authentication, specify the **username** and **password** of the server.
    * In **Database** field, choose or enter an existing valid database e.g. AdventureWorks.
   <img style="width:482px;height:430px" src="/assets/on-premise/images/report-designer/manage-data/datasource/save-new-data-source.png" alt="New connection panel">
7. Now, click on the `Save` button and the new embedded data source will be added in data source list pane like below.
   <img style="width:513px;height:454px" src="/assets/on-premise/images/report-designer/manage-data/datasource/data-source-list-view.png" alt="Data source list view">
8. The embedded data source is created in the report and it is ready to create/use the data.
