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

### Create Google Cloud SQL data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options.

Specify the data source name without special characters in the **Name** field.

![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/google-cloud-sql-properties.png)

Select a database engine you want to use with the given Google Cloud SQL Server from the Database Engine combo box.

#### Google Cloud SQL supported database engine in Bold Reports

* MySQL
* PostgreSQL

![Database Engine](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/database-engine.png)

Then enter the valid connection string and authentication type to connect with specified data source.

![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/basic-connection.png)

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/execute-schema.png)

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/data-list.png)

#### Authentication types

You can set database credentials, prompted credentials, or use no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/authentication.png)

**Authentication** - A user name and password must be supplied to access the database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/authentication-type.png)

Enable the **Save Password** option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who access the report must enter a user name and password on preview action to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/prompt.png)

**None** - Choose the authentication type as `None`, when the authentication details or any other arguments required to connect with the data source are provided in connection string.