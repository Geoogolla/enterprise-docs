---
layout: post
title: Upgrade existing Report Server with new UMS | Syncfusion
description: Describes step-by-step procedure to upgrade on-premises Report Server with new UMS at any time manually.
platform: report-platform
documentation: ug
---

# Upgrade On-Premises Bold Reports On-Premise with new User Management Server

This section explains how to upgrade Bold Reports On-Premise with new User Management Server.

Syncfusion releases several major versions in a year. Each version includes new features, bug fixes and other improvements.

Bold Reports On-Premise comes with a User Management Server which is a separate application for managing your users and the applications. To know more about User Management Server click [here](/on-premise/user-management-server/user-management-server-overview/).

Bold Reports On-Premise can be upgraded to latest version at any time manually, and there are no automatic updates for Bold Reports On-Premise. Before upgrading, you can refer the features and enhancements from the [Release Notes](/release-notes/v{{site.releaseversion}}/).

## Upgrading Guidelines

Syncfusion recommends you to follow below guidelines while upgrading the Report Server from an older version to latest version.

* Save all the open settings and unsaved items.
* Ensure that no one is currently working with reports.
* Inform about the maintenance time to users.
* For SQL, MySQL, Oracle, and PostgreSQL databases, make sure that you have a valid network connection to the database while upgrading to the new version.
* Download the latest Bold Reports On-Premise [here](https://www.syncfusion.com/downloads/report).
* Follow the installation steps from the [installation](/on-premise/installation-and-deployment/on-premises/on-premises-installation-and-deployment-with-new-ums/) section.

The upgrade process will retain all the resources and settings from the previous installation. Report Server updates the database schema of your current version to the new version.

Please ensure the below steps if the Reports are not rendered properly.

1. Start the Report Server.
2. Click `Settings` option.
3. Ensure that the Site URL is updated properly as the hosted Bold Reports On-Premise URL.

   ![Site URL Changes](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/siteurl-changes.png)

## Configure Existing Report Server with new User Management Server

After successful upgrade of Report Server and installation of User Management Server. You must configure the User Management Server first to run the Report Server.

![UMS configuration](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/create-sqlce-database-for-ums.png)

Configure User Management Server by providing Storage Options, Storage System and System Administrator details and click `Proceed` button. You can find the details on how to configure User Management Server [here](/on-premise/application-startup/startup/#configure-user-management-server)

> Users and groups of Report Server will be automatically migrated to User Management Server.
> An application of type Report Server will be created automatically in User Management Server and by default, system administrators of Report Server will be the system administrators of User Management Server.

After successful configuration of Report Server, it will be redirected to `login` page.

![Report Server login page](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/login-for-ums.png)