---
layout: post
title: SQL Server Configuration for Bold Reports Enterprise Edition
description: Learn how to configure SQL Server Database storage options for BoldID and Bold Reports Server in Bold Reports
platform: report-platform
documentation: ug
---

# SQL Server Configuration

Bold Reports have SQL Server database support for storing the user identities and report details.

## SQL Server Database Configuration for Bold ID

This configuration stores the user identities and site details in SQL Server Database.

You can connect to the existing SQL Server instance by following the below steps.

1. Select the server type as `SQL Server` and provide the server details.

2. You can connect to the SQL Server with the below options.

    * Create new database.
    * Use an existing database.

3. Provide the database name and proceed further.

![SQL Server](/static/assets/on-premise/images/getting-started/application-startup-step1.png)

> **Important:** The Bold Reports server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Bold Reports Server, choose the `Enable SSL` option to support encrypted data transfer.

## SQL Server Database Configuration for Bold Reports Server Sites

This configuration stores the reports, users and their access permissions in SQL Server Database.

You can connect to the existing SQL Server instance by following the below steps.

1. Select the server type as `SQL Server` and provide the server details.

2. You can connect to the SQL Server with the below options.

    * Create new database.
    * Use an existing database.

3. Provide the database name and proceed further.  

![SQL Server](/static/assets/on-premise/images/getting-started/application-startup-site-registration.png)

> **Important:** The Bold Reports server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Bold Reports Server, choose the `Enable SSL` option to support encrypted data transfer.

## See also

* [**Storage Type for Bold ID**](../#storage-type-for-bold-id)
* [**Storage Type for Bold Reports Server**](../#storage-type-for-bold-reports-server)