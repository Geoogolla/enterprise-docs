---
layout: post
title: Backup database and resources | Report Server | Syncfusion
description: Describes step-by-step procedure to backup your resources and databases of the Bold Reports On-Premise using backup utility.
platform: report-platform
documentation: ug
---

# Database Backup

This section explains how to back up your resources and databases of the Report Server.

> This utility cannot be worked outside of the native folder.

The Report Server is shipped with a utility to take backup of resources, and it can be find in the following location.
`{Installed_location}\Syncfusion\Report Server\Utilities\ReportServerBackup`

![Backup utility folder location](/static/assets/on-premise/images/installation-and-deployment/backup/backup-utility-folder-location.png)

This utility can take both the resources and database backups for the following types of databases:

* SQL CE
* SQL Server

This utility can take only the resources backup for the following types of databases:

* MySQL
* Oracle
* PostgreSQL

## Embedded SQL CE (for testing purposes only)

Backup utility layout for the `Embedded SQL CE` database.
![Backup utility for SQL CE](/static/assets/on-premise/images/installation-and-deployment/backup/sql-ce-backup-utility.png)

On clicking the **Backup Resources and Database**, a backup is created and success message is displayed.
![SQL CE success message](/static/assets/on-premise/images/installation-and-deployment/backup/sql-ce-success-message.png)

The created backup is stored as a zip file in the installation folder.
![SQL CE backup folder](/static/assets/on-premise/images/installation-and-deployment/backup/backup-folder.png)

The created zip files' contents are as in the following.
![SQL CE backup content](/static/assets/on-premise/images/installation-and-deployment/backup/sql-ce-backup-content.png)

## SQL Server

Backup utility layout for the `SQL Server` database.
![Backup utility for SQL Server](/static/assets/on-premise/images/installation-and-deployment/backup/sql-server-backup-utility.png)

On clicking **Backup Resources and Database**, a backup is created and success message is displayed.
![SQL Server backup success](/static/assets/on-premise/images/installation-and-deployment/backup/sql-server-success-message.png)

The backup of resources is stored as a zip file in the installation folder.
![SQL Server backup folder](/static/assets/on-premise/images/installation-and-deployment/backup/backup-folder.png)

The created zip files' contents are as follows.
![SQL Server backup contents](/static/assets/on-premise/images/installation-and-deployment/backup/sql-server-backup-content.png)

The backup of database is stored as a `.bak` file in `C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER2012\MSSQL\Backup`

![SQL Server database backup location](/static/assets/on-premise/images/installation-and-deployment/backup/sql-server-database-backup-location.png)

## MySQL

Backup utility layout for the `MySQL` database.
![Backup utility for MySQL](/static/assets/on-premise/images/installation-and-deployment/backup/mysql-backup-utility.png)

On clicking **Backup Resources**, a backup is created and success message is displayed.
![Backup Utility MySQL Success](/static/assets/on-premise/images/installation-and-deployment/backup/mysql-success-message.png)

The backup of resources is stored as a zip file in the installation folder.
![Backup Utility MySQL Folder](/static/assets/on-premise/images/installation-and-deployment/backup/backup-folder.png)

The created zip files' contents are as follows.
![Backup Utility MySQL Content](/static/assets/on-premise/images/installation-and-deployment/backup/mysql-backup-content.png)

> Database backup can be taken by following the procedure given in the mentioned link in utility.

## Oracle

Backup utility layout for the `Oracle` database.
![Backup utility for Oracle](/static/assets/on-premise/images/installation-and-deployment/backup/oracle-backup-utility.png)

On clicking **Backup Resources**, a backup is created and success message is displayed.
![Oracle backup success](/static/assets/on-premise/images/installation-and-deployment/backup/oracle-success-message.png)

The backup of resources is stored as a zip file in the installation folder.
![Oracle backup folder](/static/assets/on-premise/images/installation-and-deployment/backup/backup-folder.png)

The created zip files' contents are as follows.
![Backup Utility Oracle Content](/static/assets/on-premise/images/installation-and-deployment/backup/oracle-backup-content.png)

> Database backup can be taken by following the procedure given in the mentioned link in utility.

## PostgreSQL

Backup utility layout for the `PostgreSQL` database.
![Backup Utility for PostgreSQL](/static/assets/on-premise/images/installation-and-deployment/backup/postgre-sql-backup-utility.png)

On clicking **Backup Resources**, a backup is created and success message is displayed.
![PostgreSQL backup success](/static/assets/on-premise/images/installation-and-deployment/backup/postgre-sql-success-message.png)

The backup of resources is stored as a zip file in the installation folder.
![PostgreSQL backup folder](/static/assets/on-premise/images/installation-and-deployment/backup/backup-folder.png)

The created zip files' contents are as follows.
![PostgreSQL backup content](/static/assets/on-premise/images/installation-and-deployment/backup/postgre-sql-backup-content.png)

> Database backup can be taken by following the procedure given in the mentioned link in utility.

## Help link

UG documentation help link is provided at the title bar of the utility for all the database types.
![Backup utility Help link](/static/assets/on-premise/images/installation-and-deployment/backup/help.png)