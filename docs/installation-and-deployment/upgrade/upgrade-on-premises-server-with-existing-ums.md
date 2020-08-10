---
layout: post
title: Upgrade Report Server with existing UMS | Syncfusion
description: Describes step-by-step procedure to upgrade on-premises Report Server with existing UMS at any time manually.
platform: report-platform
documentation: ug
---

# Upgrade On-Premises Bold Reports On-Premise with existing User Management Server

This section explains how to upgrade Bold Reports On-Premise with existing User Management Server.

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
* Follow the installation steps from the [installation](/on-premise/installation-and-deployment/on-premises/on-premises-installation-and-deployment-with-existing-ums/) section.

The upgrade process will retain all the resources and settings from the previous installation. Report Server updates the database schema of your current version to the new version.

Please ensure the below steps if the Reports are not rendered properly.

1. Start the Report Server.
2. Click `Settings` option.
3. Ensure that the Site URL is updated properly as the hosted Bold Reports On-Premise URL.

   ![Site URL Changes](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/siteurl-changes.png)

## Configure Existing Report Server with Existing User Management Server

Latest version of User Management Server is mandatory to run latest Bold Reports On-Premise. To connect to the Bold Reports On-Premise with the User Management Server you must create a application on User Management Server.

### Create application in UMS

1. Start the user management server from the shortcuts available in the desktop. To view all the active applications, click the `Application Management` menu in the left side bar.
    ![UMS home page](/static/assets/on-premise/images/user-management-server/manage-applications/ums-home-page.png)

2. It will direct to the applications listing page.
    ![List Applications](/static/assets/on-premise/images/user-management-server/manage-applications/listapplication.png)

3. To add new application, click the `Add Application` button at the top right corner in the applications listing page.

4. The `Add Application` dialog will be shown and fill the following details in the form.

    * Application name - represents the name of the application.
    * Application type - represents the syncfusion products. Choose `Report Server` option.
    * Application URL - represents the application's IP address or domain name.
    * Allow access to all users - This option provides application access to all the existing users and future users added to the server.
    ![Add Application](/static/assets/on-premise/images/user-management-server/manage-applications/addapplicationdialog.png)

5. Now, click the `Save` button to create the new application.

6. To view the application details, click the corresponding application name in the applications grid. It will direct to the application details page.
    ![View Application](/static/assets/on-premise/images/user-management-server/manage-applications/viewapplication.png)

7. The following details are available in the application details page,

    * Application name - represents the name of the application.
    * Application type - represents the syncfusion products. Choose `Report Server` option.
    * Application URL - represents the application's IP address or domain name.
    * Access to all users - represents whether the application access is granted to the entire users in the server.
    * Client id - used to login UMS from the applications. To view the details of corresponding application in UMS.
    * Client secret - used to login UMS from the applications.
    * Status - represents that the application is active.

    > The value `Enabled` and `Disabled` of `Access to all users` represents that the application access is granted to the entire users and to specific users in the server respectively.

    ![View Application Details](/static/assets/on-premise/images/user-management-server/manage-applications/viewapplicationdetails.png)

### Configure UMS in Report Server

After successful creation of an application in User Management Server. Start the Report Server. Enter the User Management Server URL, Client Id, Client Secret of the Report Server Application that is created on User Management Server.

![Report Server startup page](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/report-server-startup.png)

Application will check for any system settings conflict and users conflict while migrating Data from Report Server to User Management Server.

#### Resolve settings conflict

If both User Management Server and Report Server application having settings saved. Then application will ask for which settings to retain as like below,
Selected settings will be migrated from Report Server to User Management Server and existing settings of User Management Server will be removed.

![Duplicate setting page](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/duplicate-settings-page.png)

Click on the dropdown menu to retain database.

* `Use UMS` option will retain User Management Server database and ignore the client database.
* `Use client` option will retain client database and ignore the User Management Server database.
* `Keep both` option will generate a random digit and appends to the database.

> This page will not be shown, if there is no settings conflict.

#### Resolve users conflict

After resolving settings conflict if any, application will check for any user conflicts between User Management Server and Report Server.

If users conflict exists, it will be resolved manually. User conflict may arise with the below two possibilities,

1. Same Email address for user in User Management Server and Report Server

    If email address is same, you can able to retain either User Management Server user or Report Server user.

    ![Duplicate user page](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/user-email-duplication-page.png)

    Click on the dropdown menu besides the client user to choose which user you want to retain.

    * `Use UMS` option will retain User Management Server user and ignore the client user.
    * `Use client` option will retain client user and ignore the User Management Server user.

    ![EMail Duplicate options](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/email-duplication-options.png)

    Apply global option will apply the selected option for all users that are listed under email duplication.

    ![Apply all EMail duplicate options](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/apply-all-email-duplicates.png)

2. Same username for a user in User Management Server and Report Server

    If username is same, you can able to ignore client or edit User Management Server user or Report Server user.

    ![Username duplicate](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/username-duplicates.png)

    Click on the dropdown menu besides the client user to choose which user you want to ignore or edit.

    * `Ignore client` will ignore the client user.

    ![Username ignore client](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/username-ignore-client.png)

    * `Edit UMS` option will enable editing User Management Server username as like below,

    ![Username Edit UMS](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/username-edit-ums.png)

    * `Edit client` option will enable editing client username as like below,

    ![Username Edit client](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/username-edit-client.png)

    * `Keep both` option will generate a random digit and appends to the username.

    ![Username keep both](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/username-keep-both.png)

    > If `Edit UMS`, `Edit client`, `Keep both` options are selected, both User Management Server user and client user will be retained.

    Apply global option will apply the selected option for all users that are listed under username duplication.

    ![Apply all username Duplicate options](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/apply-all-username-duplicates.png)

    After resolving user duplicates, click `proceed` button. Resolved users will be migrated and it will be redirected to login page.

    ![Report Server login page](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/login-for-ums.png)