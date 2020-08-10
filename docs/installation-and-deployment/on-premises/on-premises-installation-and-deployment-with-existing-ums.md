---
layout: post
title: On-premises Report Server with existing UMS | Syncfusion
description: Describes on-premises install new Report Server with existing UMS as an application or website in IIS or IIS Express.
platform: report-platform
documentation: ug
---

# Installation and deployment of Bold Reports On-Premise with existing the User Management Server

This section explains on how to install and deploy the Bold Reports On-Premise along with existing the User Management Server.

## Download Report Server

* You can download the Report Server setup [here](https://www.boldreports.com/pricing/on-premise).
* Licensed customers can download the report from the [downloads](https://www.boldreports.com/pricing/on-premise) section.

> The key to unlock the setup will be sent to your registered email address.

## Hardware and software requirements

Before installing the Reporting Server in your business environment, review the hardware and software requirements to install the [Reporting Server](/on-premise/system-requirements/).

## Install your Report Server

To install the Report Server, follow these steps:

1. Run the Report Server Installer and type the unlock key that has been sent to your registered e-mail address.
![Installation with product unlock key](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/installation-product-key.png)

2. You can check the License Agreement of Report Server by clicking on the `License Terms and Conditions`.
3. After you read the license agreement, click on Next to select the installation server type, location and the port number on where the Report server and User Management Server has to be hosted.

We have provided the Report Server and User Management Server to be hosted into the following two web server types

1. IIS Express
2. IIS

### IIS Express

1. You can provide the port number or leave with default port number given in the installer.
    ![Installation Location and IIS Port Changes](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/installation-in-iis-express.png)

2. To add desktop shortcuts and start menu shortcut, you can check the options in the **Additional Settings**. Otherwise, uncheck the options.
3. After you select the web server type, click on `Next`.
4. If you already installed User Management Server, `Install Bold User Management Server` option doesn't enable.
    ![Installation User Management Server IIS Express](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/installation-of-existing-ums-in-iis-express.png)

5. Click on `Install` button. After completing the installation, click on `Launch Application` button.
    ![Start Report Server](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/start-report-server.png)

6. You can also start the Report Server from the shortcuts available in the desktop.

### IIS

1. Need to provide the Port number, Location and Site Name to host the Report Server and User Management Server into the IIS.
    ![Installation Location, IIS Port Changes and Site Name](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/installation-in-iss.png)

2. To add desktop shortcuts and start menu shortcut, you can check the options in the **Additional Settings**. Otherwise, uncheck the options.
3. **Change firewall settings to allow access to outside machines** option will allow the selected port of the Report Server in firewall to make it accessible outside the installed machine.
4. After you select the installation server type, click on `Next`.
5. If you already installed User Management Server, `Install Bold User Management Server` option doesn't enable.
    ![Installation User Management Server IIS Express](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/installation-of-existing-ums-in-iis-express.png)

6. Click on `Install` button. After completing the installation, click on `Launch Application` button.
    ![Start Report Server](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/start-report-server.png)

7. You can also start the Report Server from the shortcuts available in the desktop.

    > Report Server does not support multiple versions installed on the same machine and it cannot be downgraded to the previous version.

## Configure new Report Server with existing User Management Server

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

![Report Server startup page](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/report-server-startup.png)

Configure Report Server by providing Storage Options, Storage System. You can find the details on how to configure Report Server [here](/on-premise/application-startup/startup/#configure-report-server)

Choose option to startup with or without including the sample resources and click `Proceed` button.

![Include samples](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/include-sample-resource.png)

Select the administrator users of Report server and click `Proceed` button.

![Admin selection Report Server](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/admin-selection-report-server.png)

After successful configuration of Report Server, it will be redirected to login page.

![Report Server login page](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/login-for-ums.png)