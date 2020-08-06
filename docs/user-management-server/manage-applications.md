---
title: Managing Applications | User Management Server | Syncfusion 
description: Learn how to add, edit, delete, view an application and regenerate client secret in the Bold User Management Server.
platform: report-platform
documentation: ug
---

# How to manage applications in User Management Server

This section explains how to add, edit, delete, view an application and regenerate client secret in the Bold User Management Server.

Start the user management server from the shortcuts available in the desktop.

## List applications

To view all the active applications, click the `Application Management` menu in the left side bar.
![UMS home page](/static/assets/on-premise/images/user-management-server/manage-applications/ums-home-page.png)

It will direct to the applications listing page.

![List Applications](/static/assets/on-premise/images/user-management-server/manage-applications/listapplication.png)

## Add New Application

To add new application, click the `Add Application` button at the top right corner in the applications listing page.

The `Add Application` dialog will be shown and fill the following details in the form.

1. Application name - represents the name of the application.
2. Application type - represents the syncfusion products. Choose `Report Server` option.
3. Application URL - represents the application's IP address or domain name.
4. Allow access to all users - This option provides application access to all the existing users and future users added to the server.

![Add Application](/static/assets/on-premise/images/user-management-server/manage-applications/addapplicationdialog.png)

Now, click the `Save` button to create the new application.

## View Application

To view the application details, click the corresponding application name in the applications grid. It will direct to the application details page.

![View Application](/static/assets/on-premise/images/user-management-server/manage-applications/viewapplication.png)

The following details are available in the application details page,

1. Application name - represents the name of the application.
2. Application type - represents the syncfusion products. Choose `Report Server` option.
3. Application URL - represents the application's IP address or domain name.
4. Access to all users - represents whether the application access is granted to the entire users in the server.
5. Client id - used to login UMS from the applications. To view the details of corresponding application in UMS.
6. Client secret - used to login UMS from the applications.
7. Status - represents that the application is active.

> The value `Enabled` and `Disabled` of `Access to all users` represents that the application access is granted to the entire users and to specific users in the server respectively.

![View Application Details](/static/assets/on-premise/images/user-management-server/manage-applications/viewapplicationdetails.png)

## Edit Application

To modify the application details, choose the `Edit` option in the applications grid context menu.

![Edit Application](/static/assets/on-premise/images/user-management-server/manage-applications/editbutton.png)

The `Edit Application` dialog will be shown and modify the existing details.

![Edit Application Dialog](/static/assets/on-premise/images/user-management-server/manage-applications/editapplicationdialog.png)

Now, click the `Update` button to save the changes.

## Delete Application

To delete the application, choose `Delete` option in the applications grid context menu.

![Delete Application](/static/assets/on-premise/images/user-management-server/manage-applications/deletebutton.png)

A confirmation dialog will be shown and you can proceed with `Yes` to delete an application.

![Delete Application Dialog](/static/assets/on-premise/images/user-management-server/manage-applications/deleteapplicationdialog.png)

> Once an application is deleted, you cannot rollback this action.

## Regenerate Client Secret

You can regenerate the client secret of an application in the application detail page by clicking the application name for which it has to be regenerated. Click the `Regenerate client secret` button.

![Regenerate](/static/assets/on-premise/images/user-management-server/manage-applications/regeneratebutton.png)

A confirmation dialog will be shown and you can proceed with `Yes` to regenerate the client secret.

![Regenerate client secret](/static/assets/on-premise/images/user-management-server/manage-applications/regenerate.png)

> If client secret is regenerated, you have to update the new client secret in the corresponding application to login with UMS.