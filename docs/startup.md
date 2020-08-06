---
layout: post
title: Configure and Startup to v4.1 | Report Server | Syncfusion
description: Startup and configuration of the Bold Reports On-Premise by adding storage options and registering a new user for the v4.1.
platform: report-platform
documentation: ug
---

# Configure User Management Server and Report Server

This section explains how to configure User Management Server and Report Server for the latest Bold Reports On-Premise.

## Configure User Management Server

User Management Server uses the database to store metadata and object definitions. This topic describes how to configure the Bold User Management Server database storage options and to register a new user.

### Storage options for UMS

User Management Server stores the user management data in the following databases:

* SQL CE
* SQL Server
* MySQL
* Oracle
* PostgreSQL

### Embedded SQL CE for UMS (For testing purposes only)

Installed along with User Management Server installer to easily set the environment up for testing purposes.
![Embedded SQL CE database](/static/assets/on-premise/images/application-startup/create-sqlce-database-for-ums.png)

> Since it is an Embedded database, you do not have an option to create a database from the Azure App Service.

### SQL Server for UMS

To connect with the existing SQL Server instance, use the following steps:

1. Select `New database` radio button to create a new `Bold User Management Server` database.
    ![Create new SQL Server database](/static/assets/on-premise/images/application-startup/create-sql-server-database-for-ums.png)

2. Select `Existing database` to use an existing database for `Bold User Management Server`.
3. Choose one of the database from the `Select a Database` drop-down for creating User Management Server tables in that database.
    ![Connect to SQL Server existing database](/static/assets/on-premise/images/application-startup/sql-server-existing-database-of-ums.png)

4. To avoid table name conflicts, add a prefix `SfUMS_` by default. You can change the prefix. If the prefix is empty, the default prefix `SfUMS_` is added.

    > The credentials that is given to connect to the SQL Server instance must have permissions to,
    * Create Database
    * Create Table
    * Insert
    * Update Table
    * Alter Table
    * Select
    * Drop Table
    * Drop Database

### MySQL for UMS

To connect with the existing MySQL instance, use the following steps:

1. Select `New database` radio button to create a new MySQL `Bold User Management Server` database.
    ![Create new MySQL database for Report Server](/static/assets/on-premise/images/application-startup/create-mysql-database-for-ums.png)

2. Select `Existing database` to use an existing database for `Bold User Management Server`.
3. Choose one of the database from the `Select a Database` drop-down for creating User Management Server tables in that database.
    ![Connect to MySQL existing database](/static/assets/on-premise/images/application-startup/mysql-existing-database-of-ums.png)

4. To avoid table name conflicts, add a prefix `SfUMS_` by default. You can change the prefix. If the prefix is empty, the default prefix `SfUMS_` is added.

    > The credentials that is given to connect to the MySQL instance must have privileges to the following:
    * Create
    * Delete
    * Insert
    * Update
    * Alter
    * Select
    * Drop
    * Show Databases

> User Management Server do not have an option to create database from the Azure App Service.

### Oracle for UMS

To connect with the existing Oracle instance, use the following steps:

1. Select `New database` radio button to create a new Oracle `Bold User Management Server` database.
    ![Create new Oracle database for Report Server](/static/assets/on-premise/images/application-startup/create-oracle-database-for-ums.png)

2. Select `Existing database` to use an existing database for `Bold User Management Server`.
3. Choose one of the database from the `Select a Database` drop-down for creating User Management Server tables in that database.
    ![Connect to Oracle existing database](/static/assets/on-premise/images/application-startup/oracle-existing-database-of-ums.png)

4. To avoid table name conflicts, add a prefix `SfUMS_` by default. You can change the prefix. If the prefix is empty, the default prefix `SfUMS_` is added.

    > The credentials that is given to connect to the Oracle instance must have permissions to,
    * Create Database
    * Create Role
    * Grant Role
    * Grant Permission
    * Drop Database

> User Management Server do not have an option to create database from Azure App Service.

### PostgreSQL for UMS

To connect with the existing PostgreSQL instance, use the following steps.

1. Select `New database` radio button to create a new PostgreSQL `Bold User Management Server` database.
    ![Create new PostgreSQL database for Report Server ](/static/assets/on-premise/images/application-startup/create-postgre-sql-database-for-ums.png)

2. Select `Existing database` to use an existing database for `Bold User Management Server`.
3. Choose one of the database from the `Select a Database` drop-down for creating User Management Server tables in that database.
    ![Connect to PostgreSQL existing database](/static/assets/on-premise/images/application-startup/postgre-sql-existing-database-of-ums.png)

4. To avoid table name conflicts, add a prefix `SfUMS_` by default. You can change the prefix. If the prefix is empty, the default prefix `SfUMS_` is added.

    > The credentials that is given to connect to the PostgreSQL instance must have permissions to,
    * Create Database
    * Create Table
    * Insert
    * Update Table
    * Alter Table
    * Select
    * Drop Table
    * Drop Database

### Storage system for UMS

You can choose a file or Azure Blob storage to store your reports, data sources, and other files.

#### File storage for UMS

By default, the storage system is file storage. It stores the reports and data sources that are uploaded to the User Management Server in the following location in the installed machine.

`%programdata%\Syncfusion\User Management Server\Resources`

![File storage option for User Management Server resources](/static/assets/on-premise/images/application-startup/file-storage-for-ums.png)

#### Azure Blob storage for UMS

To store the reports and data sources that are uploaded to the server in the Azure Blob storage location, provide the details shown in following image.
![Azure blob storage option for User Management Server resources](/static/assets/on-premise/images/application-startup/azure-blob-storage-for-ums.png)

Refer to [Azure deployment](/on-premise/installation-and-deployment/azure-deployment/app-service/arm-template/) for more details on configuration of the Azure Blob storage.

### Configure new user for UMS - System Administrator

To access the User Management Server, a new user should be created with the details mentioned in the following image.
![Configure or register Admin user](/static/assets/on-premise/images/application-startup/configure-and-create-admin-user.png)

While creating a new admin user account, a new group `System Administrator` is also created and it has the permission to perform the following operations:

* Create Reports
* Create Data Sources
* Create Files
* Create Schedules
* Create Users
* Create Groups
* Manage Permissions for users and groups

> By default, the created new user account will be assigned to this group.

## Configure Report Server

Report Server uses the database to store metadata and object definitions. This topic describes how to configure the  Bold Reports On-Premise database storage options and to register a new user.

### Storage options

Report Server stores the user management data in the following databases:

* SQL CE
* SQL Server
* MySQL
* Oracle
* PostgreSQL

### Embedded SQL CE (For testing purposes only)

Installed along with Report Server installer to easily set the environment up for testing purposes.
![Embedded SQL CE database](/static/assets/on-premise/images/application-startup/create-sqlce-database.png)

> Since it is an Embedded database, you do not have an option to create a database from the Azure App Service.

### SQL Server

To connect with the existing SQL Server instance, use the following steps:

1. Select `New database` radio button to create a new `Bold Reports On-Premise` database.
    ![Create new SQL Server database](/static/assets/on-premise/images/application-startup/create-sql-server-database.png)

2. Select `Existing database` to use an existing database for `Bold Reports On-Premise`.
3. Choose one of the database from the `Select a Database` drop-down for creating Report Server tables in that database.
    ![Connect to SQL Server existing database](/static/assets/on-premise/images/application-startup/sql-server-existing-database.png)

4. To avoid table name conflicts, add a prefix `SyncRS_` by default. You can change the prefix. If the prefix is empty, the default prefix `SyncRS_` is added.

    > The credentials that is given to connect to the SQL Server instance must have permissions to,
    * Create Database
    * Create Table
    * Insert
    * Update Table
    * Alter Table
    * Select
    * Drop Table
    * Drop Database

### MySQL

To connect with the existing MySQL instance, use the following steps:

1. Select `New database` radio button to Select `New database` radio button to create a new MySQL `Bold Reports On-Premise` database.
    ![Create new MySQL database for Report Server](/static/assets/on-premise/images/application-startup/create-mysql-database.png)

2. Select `Existing database` to Select `Existing database` to use an existing database for `Bold Reports On-Premise`.
3. Choose one of the database from the `Select a Database` drop-down for creating Report Server tables in that database.
    ![Connect to MySQL existing database](/static/assets/on-premise/images/application-startup/mysql-existing-database.png)

4. To avoid table name conflicts, add a prefix `SyncRS_` by default. You can change the prefix. If the prefix is empty, the default prefix `SyncRS_` is added.
    > The credentials that is given to connect to the MySQL instance must have privileges to the following:
    * Create
    * Delete
    * Insert
    * Update
    * Alter
    * Select
    * Drop
    * Show Databases

> Report Server do not have an option to create database from the Azure App Service.

### Oracle

To connect with the existing Oracle instance, use the following steps:

1. Select `New database` radio button to create a new Oracle `Bold Reports On-Premise` database.
    ![Create new Oracle database for Report Server](/static/assets/on-premise/images/application-startup/create-oracle-database.png)

2. Select `Existing database` to use an existing database for `Bold Reports On-Premise`.
3. Choose one of the database from the `Select a Database` drop-down for creating Report Server tables in that database.
    ![Connect to Oracle existing database](/static/assets/on-premise/images/application-startup/oracle-existing-database.png)

4. To avoid table name conflicts, add a prefix `SyncRS_` by default. You can change the prefix. If the prefix is empty, the default prefix `SyncRS_` is added.

    > The credentials that is given to connect to the Oracle instance must have permissions to,
    * Create Database
    * Create Role
    * Grant Role
    * Grant Permission
    * Drop Database

> Report Server do not have an option to create database from Azure App Service.

### PostgreSQL

To connect with the existing PostgreSQL instance, use the following steps.

1. Select `New database` radio button to create a new PostgreSQL `Bold Reports On-Premise` database.
    ![Create new PostgreSQL database for Report Server ](/static/assets/on-premise/images/application-startup/create-postgre-sql-database.png)

2. Select `Existing database` to use an existing database for `Bold Reports On-Premise`.
3. Choose one of the database from the `Select a Database` drop-down for creating Report Server tables in that database.
    ![Connect to PostgreSQL existing database](/static/assets/on-premise/images/application-startup/postgre-sql-existing-database.png)

4. To avoid table name conflicts, add a prefix `SyncRS_` by default. You can change the prefix. If the prefix is empty, the default prefix `SyncRS_` is added.

    > The credentials that is given to connect to the PostgreSQL instance must have permissions to,
    * Create Database
    * Create Table
    * Insert
    * Update Table
    * Alter Table
    * Select
    * Drop Table
    * Drop Database

### Storage system

You can choose a file or Azure Blob storage to store your reports, data sources, and other files.

#### File storage

By default, the storage system is file storage. It stores the reports and data sources that are uploaded to the Report Server in the following location in the installed machine.

`%programdata%\Syncfusion\Report Server\Resources`

![File storage option for Report Server resources](/static/assets/on-premise/images/application-startup/file-storage.png)

#### Azure Blob storage

To store the reports and data sources that are uploaded to the server in the Azure Blob storage location, provide the details shown in following image.
![Azure blob storage option for Report Server resources](/static/assets/on-premise/images/application-startup/azure-blob-storage.png)

Refer to [Azure deployment](/on-premise/installation-and-deployment/azure-deployment/app-service/arm-template-with-new-ums/) for more details on configuration of the Azure Blob storage.

### Include sample resources

To include build-in sample resources (reports, data sources, and data sets), click **Yes**; otherwise, click **NO**.
![Include Report Server sample resource](/static/assets/on-premise/images/application-startup/include-sample-resource.png)

### New User login

To access the User Management Server, a new user should be login by using User Management Server credentials.
![New User login](/static/assets/on-premise/images/application-startup/login-for-ums.png)

Click **Login** button. Or you can login by using windows authentication credentials.