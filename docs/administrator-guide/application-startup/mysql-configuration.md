---
layout: post
title: MySQL Configuration for the Bold Reports Enterprise Edition
description: Learn how to configure MySQL Database storage option for BoldID and Bold Reports Server in Bold Reports
platform: report-platform
documentation: ug
---

# MySQL Configuration

Starting with the version v2.4.19, Bold Reports introduced MySQL database support for storing the user identities and report details.

## MySQL Database Configuration for Bold ID

This configuration stores the user identities and site details in MySQL Server Database.

You can connect to the existing MySQL Server instance by following the below steps.

1. Select the server type as `MySQL` and provide the name of the server.

2. Provide the Username and password of the server to be connected.

3. You can connect to the MySQL Server with the below options.

    * Create new database.
    * Use an existing database.

4. Provide the database name and proceed further.

![MySQL Server](/static/assets/on-premise/images/getting-started/application-startup-mySQL-server.png)

> **Important:** The Bold Reports server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Bold Reports Server, choose the `Enable SSL` option to support encrypted data transfer.

> **Note:** We do not have option to create database in MySQL from Azure App service.

## MySQL Database Configuration for Bold Reports Server Sites

This configuration stores the reports, users and their access permissions in MySQL Server Database.

You can connect to the existing MySQL Server instance by following the below steps.

1. Select the server type as `MySQL` and provide the name of the server.

2. Provide the Username and password of the server to be connected.

3. You can connect to the MySQL Server with the below options.

    * Create new database.
    * Use an existing database.

4. Provide the database name and proceed further.

![MySQL Server](/static/assets/on-premise/images/getting-started/application-startup-mySQL-bold-reports-server.png)

> **Important:** The Bold Reports server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Bold Reports Server, choose the `Enable SSL` option to support encrypted data transfer.

> **Note:** We do not have option to create database in MySQL from Azure App service.

## See also

* [**Storage Type for Bold ID**](../#storage-type-for-bold-id)
* [**Storage Type for Bold Reports Server**](../#storage-type-for-bold-reports-server)