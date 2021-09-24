---
layout: post
title: PostgreSQL Configuration for Bold Reports Enterprise Edition
description: Learn how to configure PostgreSQL Database storage option for BoldID and Bold Reports Server in Bold Reports
platform: report-platform
documentation: ug
---

# PostgreSQL Configuration

Bold Reports have PostgreSQL database support for storing the user identities and report details.

## PostgreSQL Database Configuration for Bold ID

This configuration stores the user identities and site details in PostgreSQL Server Database.

You can connect to the existing PostgreSQL Server instance by following the below steps.

1. Select the server type as `PostgreSQL` and provide the server details.

2. You can connect to the PostgreSQL Server with the below options.

    * Create new database.
    * Use an existing database.

3. Provide the database name and proceed further.

![PostgreSQL Server](/static/assets/on-premise/images/getting-started/application-startup-postgreSQL-server.png)

> **Important:** The Bold Reports server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Bold Reports Server, choose the `Enable SSL` option to support encrypted data transfer.

## PostgreSQL Database Configuration for Bold Reports Server Sites

This configuration stores the reports, users and their access permissions in PostgreSQL Server Database.

You can connect to the existing PostgreSQL Server instance by following the below steps.

1. Select the server type as `PostgreSQL` and provide the server details.

2. You can connect to the PostgreSQL Server with the below options.

    * Create new database.
    * Use an existing database.

3. Provide the database name and proceed further.

![PostgreSQL Server](/static/assets/on-premise/images/getting-started/application-startup-site-registration-postgreSQL-server.png)

> **Important:** The Bold Reports server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Bold Reports Server, choose the `Enable SSL` option to support encrypted data transfer.

## See also

* [**Storage Type for Bold ID**](../#storage-type-for-bold-id)
* [**Storage Type for Bold Reports Server**](../#storage-type-for-bold-reports-server)