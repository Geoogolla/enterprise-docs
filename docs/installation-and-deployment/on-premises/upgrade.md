---
layout: post
title: Upgrade steps for BoldReportsOn-PremiseEdition
description: Explains how to upgrade the Bold Reports On-Premise Edition to the latest version and migrate data using utility.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports On-Premise

This section explains how to upgrade Bold Reports Server from any version to 2.1.

Bold Reports releases several major versions in a year. Each version includes new features, bug fixes and other improvements.

Bold Report Server can be upgraded to version 2.1 at any time manually, and there are no automatic updates for Report Server. Before upgrading, you can refer the features and enhancements from the Release Notes.

## Steps to upgrade Bold Reports On-Premise

* Before installing the Bold Reports version 2.1 or higher, make sure to take Backup of the database files from the below location.

`C:\Bold Reports\Report Server\ReportServer.Web\App_Data`
`C:\Bold Reports\UMS\UMS.Web\App_Data`

* Once done, uninstall the current Bold Report Server.

* Install the latest Bold Report Server by following this [link](/on-premise/installation-and-deployment/on-premises/installation-and-deployment/) and configure the application using SQL Database by following this [link](/on-premise/application-startup/).

* Once configuration is done, you can migrate your old data to this application by following the [document](/on-premise/installation-and-deployment/on-premises/upgrade-from-classic-platform/data-migration/).