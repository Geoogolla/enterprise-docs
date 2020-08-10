---
layout: post
title: Update report data sources | Report Server | Syncfusion
description: Explains about how to update the shared data sources of a report used in an RDL in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Update Report Data Sources in the Report Server

This section explains how to update report data sources of the Report in Bold Reports On-Premise.

## Steps to update Data Source(s) of a report

To update the shared Data Source(s) for particular Report, choose the `Update Data Source(s)` context menu item of the Report.

![Choose Update Data Source(s)](/static/assets/on-premise/images/manage-content/manage-reports/update-data-source.png)

> The Update Data Source(s) option only available for the Report which has the shared data source. Also, the user needs to have permission to edit the Report.

In the Update Data Source(s) dialog, the combination of Reports and categories already chosen are selected as default.

![Update data source dialog](/static/assets/on-premise/images/manage-content/manage-reports/update-data-source-dialog.png)

Data Sources already used in the Report along with the available Data Sources in the Server to choose are shown in the dialog box.

![Shared data source list](/static/assets/on-premise/images/manage-content/manage-reports/shared-data-source-list.png)

## Add new Data Source

New Data Source can be added in two ways,

1. By searching for the Data Source names in the drop down. It suggests adding new Data Source, if the searched Data Source is not on the list. On clicking the (New Data Source) option opens the new Data Source dialog box.

    ![add new Data source dropdown](/static/assets/on-premise/images/manage-content/manage-reports/add-new-data-source-dropdown.png)

2. Click the plus `(+)` icon to open the new Data Source dialog box.

    ![add new Data source](/static/assets/on-premise/images/manage-content/manage-reports/add-new-data-source.png)

Fill in the form with name and description of the data source, the data source type, connection string and the connection detail on how to connect the specified data source.

![add new Data source dialog](/static/assets/on-premise/images/manage-content/manage-reports/add-new-data-source-dialog.png)

The newly added Data Source is automatically selected for the specific Data Source Name.

![add new Data source dialog](/static/assets/on-premise/images/manage-content/manage-reports/new-data-source-selection.png)

On clicking the update button, the shared Data Sources are updated for the specific report. Here, Data Source `AdventureWorks` uses `Northwind` data source.

![Shared data source list](/static/assets/on-premise/images/manage-content/manage-reports/shared-data-source-update.png)

Once you have updated the Data Source the success message will appear in the footer of the dialog box.

![Data source update success](/static/assets/on-premise/images/manage-content/manage-reports/data-source-update-success.png)
