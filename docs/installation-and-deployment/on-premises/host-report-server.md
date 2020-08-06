---
layout: post
title: Host as website or application for latest Report Server
description: Describes step-by-step procedure to host the Bold Reports On-Premise as website or an application in IIS and IIS Express.
platform: report-platform
documentation: ug
---

# Host Report Server

This section describes how to host the Report Server as an application or website in IIS and IIS Express.

## Host Report Server as website in IIS Express

1. Run the `ConfigureReportServerIISExpress.exe` program from the following installed location to host the Report Server in IIS Express.

    `{Installed_ Location}\Syncfusion\Report Server\Utilities\ReportServerIISExpress\ConfigureReportServerIISExpress.exe`

    ![Host Report Server as website in IIS Express](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/host-as-website-in-iis-express.png)

    > By default, it will show a random port number. An unused port can also be chosen to host in that port.

2. Click **Submit**. This program will host the application in IIS Express and the Report Server application will be launched in the browser.

## Host User Management Server as website in IIS Express

1. Run the program `ConfigureUserManagementServerIISExpress.exe` from the following installed location to host the user management server in IIS Express.

    `{Installed_ Location}\Syncfusion\UMS\Utilities\UserManagementServerIISExpress\ConfigureUserManagementServerIISExpress.exe`

    ![Host User Management Server as website in IIS Express](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/host-as-website-in-iis-express-for-ums.png)

    > By default, it will show a random port number. An unused port can also be chosen to host in that port.

2. Click Submit and this program will host the application in IIS Express and User Management Server application will be launched in browser.

## Host Report Server as website in IIS

To host Report Server as website in [IIS](https://en.wikipedia.org/wiki/Internet_Information_Services), use the following steps:

1. Run the `ReportServerIIS.exe` program from the following installed location to host the Report Server in IIS.

    `{Installed_ Location}\Syncfusion\Report Server\Utilities\ReportServerIIS\ConfigureReportServerIIS.exe`

    ![Host Report Server as website in IIS setup](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/host-report-server-in-iis-setup.png)

2. Type in an unused port for the Report Server as shown in the previous image. This program will host the application in IIS, and you can open the Report Server from the browse button in the IIS.

    ![Preview of Report Server hosted in IIS](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/iis-hosted-report-server-preview.png)

## Host User Management Server as website in IIS

User Management Server can also be hosted in [IIS](https://en.wikipedia.org/wiki/Internet_Information_Services) by following the below steps.

1. Run the program `ConfigureUserManagementServerIIS.exe` from the following installed location to host the user management server in IIS

    `{Installed_ Location}\Syncfusion\UMS\Utilities\UserManagementServerIIS\ConfigureUserManagementServerIIS.exe`

    ![Host User Management Server as website in IIS setup](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/host-report-server-in-iis-setup-for-ums.png)

2. Type in a unused port for the User Management Server as like in the above image. This program will host the application in IIS and the User Management Server can be opened from the browse button in the IIS.

    ![Host User Management Server as website in IIS](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/iis-hosted-ums-preview.png)

## Host Report Server as Application in IIS

Report Server can also be hosted as Application in [IIS](https://en.wikipedia.org/wiki/Internet_Information_Services) by following the below steps.

### Add Report Server as application

Right-click the website hosted in IIS and choose **Add Application** as shown in the following image.
![IIS Add Application menu](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/add-application-option.png)

Fill the following details as shown in the following image.

* Alias name
* Application pool
* Physical path

![Add application settings](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/add-application-settings.png)

### Application pool

Syncfusion recommends the identity `LocalSystem` for an Application Pool.
Report Server works without any problem when the identity is bound with the `LocalSystem`.
![Application Pool identity settings](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/application-pool-identity-settings.png)

### Convert the sub-folders as application

Convert the following folders as application:

1. `API`
2. `WindowsAuthentication`
3. `ReportService`

Right-click the folder and choose **Convert to Application** as shown in the following image.
![Convert the sub folder to sub Application](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/convert-to-application.png)

#### SSL for Report Server

To enable SSL for the Report Server application, you need a valid SSL certificate. Refer to [how to set up SSL on IIS](http://www.iis.net/learn/manage/configuring-security/how-to-set-up-ssl-on-iis) and install it to a website in IIS.

> To access the Report Server from a different machine, use the following URL: `http://machine_name:[port_number]` or `http://machine_ip_address:[port_number]`.

## Host User Management Server as Application in IIS

User Management Server can also be hosted as Application in [IIS](https://en.wikipedia.org/wiki/Internet_Information_Services) by following the below steps.

### Add User Management Server as application

Right click the Website hosted in IIS and choose `Add Application` as below figure.

![Host User Management Server as application in IIS - Add Application](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/add-ums-application.png)

And Fill the following details as below figure

1. Alias name
2. Application pool
3. Physical path

![Host User Management Server as application in IIS - Add Application](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/add-ums-application-settings.png)

### Application pool

Syncfusion recommends the identity `LocalSystem` for an Application Pool.
User Management Server works without any problem when the identity is bound with the `LocalSystem`.
![Application Pool identity settings](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/application-pool-identity-settings.png)

### Convert the sub folders as application

We have the following folders to be converted as application.

1. `API`
2. `WindowsAuthentication`

Right click the folder and choose `Convert to Application` as below figure

![Host User Management Server as application in IIS - Convert to sub Application](/static/assets/on-premise/images/installation-and-deployment/on-premises/hosting/convert-to-sub-application-for-ums.png)

#### SSL for User Management Server

To enable SSL for the User Management Server application, you will need a valid SSL certificate. Please check the below link on how to Obtain an SSL certificate and install it to a website in IIS.

<http://www.iis.net/learn/manage/configuring-security/how-to-set-up-ssl-on-iis>

> If you want to access User Management Server from a different machine to the one it's installed on, use the URL `http://machine_name:[user_management_server_port_number]` or `http://machine_ip_address:[user_management_server_port_number]`