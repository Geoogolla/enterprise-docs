---
layout: post
title: Create DSN for Oracle | Report Server | Syncfusion
description: Describes how to create the ODBC Data Source Name for Oracle database to connect with the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# How to Create DSN for Oracle

This section explains on how to create DSN for Oracle.

An ODBC Data Source Name (DSN) stores information for establishing a connection to a database on a remote database server. A system DSN provides access to multiple users, rather than only the user who created it.

## Steps to create DSN for Oracle

### Open ODBC Data Source Administration Tool

Open `Control Panel` and select `System and Security`.

 ![Control Panel Home](/static/assets/on-premise/images/how-to/control-panel-home.png)

Select `Administrative Tools` from the list of options.

 ![Select Administrative Tools](/static/assets/on-premise/images/how-to/select-administrative-tools.png)

Select `ODBC Data Sources (32-bit)` from the list of options.

 ![Select ODBC Tool](/static/assets/on-premise/images/how-to/select-odbc-tool.png)

### Create DSN with Oracle ODBC Driver

In the `ODBC Datasource Administration (32-bit)` Tool navigate to `System` and click on `Add` to add a new DSN.

![Add new DSN](/static/assets/on-premise/images/how-to/add-new-dsn.png)

Select the Oracle Driver from the list of drivers and then click on `Finish`.

![Select ODBC Driver](/static/assets/on-premise/images/how-to/odbc-drivers.png)

Click Finish. An ODBC driver setup window opens. Fill the requested details in the tool.

![ODBC Configuration](/static/assets/on-premise/images/how-to/oracle-connection-details.png)

* Data Source Name – Type a name to display in the DSN field on the Report Server application for the Oracle database type.
* Description – Description of the DSN(Optional)
* TNS Service name – Select the TNS Service Name for the database your workspace repositories will be stored in. If no choices are shown, or if you are unsure which name to select, contact your DBA.
* User ID – Enter the database User ID.

N> While initializing application, the Username and Password given in the start up page will overwrite the Username and Password of the DSN.

The created DSN will be listed in the `ODBC Data Source Administration (32-bit)` tool.

![DSN list](/static/assets/on-premise/images/how-to/oracle-dsn-list.png)
