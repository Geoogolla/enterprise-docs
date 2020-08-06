---
layout: post
title: On-premises Report Server with new UMS | Syncfusion
description: Describes on-premises install new Report Server with new UMS as an application or website in IIS or IIS Express.
platform: report-platform
documentation: ug
---

# Installation and deployment of Bold Reports On-Premise with the User Management Server

This section explains on how to install and deploy the Bold Reports On-Premise along with the User Management Server.

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
4. `Install Bold User Management Server` option will host the User Management Server in mentioned port number.

    > User Management Server is mandatory to run latest Bold Reports On-Premise

    ![Installation User Management Server IIS Express](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/installation-of-ums-in-iis-express.png)

5. To add UMS desktop shortcuts and UMS start menu shortcut, you can check the options in the **Additional Settings**. Otherwise, uncheck the options.

6. After you select the web server type, click on `Install` button.

7. After completing the installation, you can start the Report Server by clicking on `Launch Application` button.
    ![Start Report Server](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/start-report-server.png)

8. You can also start the Report Server from the shortcuts available in the desktop.

### IIS

1. Need to provide the Port number, Location and Site Name to host the Report Server and User Management Server into the IIS.
    ![Installation Location, IIS Port Changes and Site Name](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/installation-in-iss.png)

2. To add desktop shortcuts and start menu shortcut, you can check the options in the **Additional Settings**. Otherwise, uncheck the options.
3. **Change firewall settings to allow access to outside machines** option will allow the selected port of the Report Server in firewall to make it accessible outside the installed machine.
4. After you select the installation server type, click on `Next`.
5. `Install Bold User Management Server` option will host the User Management Server in mentioned port number.
  
    > User Management Server is mandatory to run latest Report Server.

    ![Installation User Management Server IIS](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/installation-of-ums-in-iis.png)
6. To add UMS desktop shortcuts and UMS start menu shortcut, you can check the options in the **Additional Settings**. Otherwise, uncheck the options.
7. **Change firewall settings to allow access to outside machines** option will allow the selected port of the Report Server in firewall to make it accessible outside the installed machine.
8. After you select the installation server type, click on `Install` button.

9. After completing the installation, you can start the Report Server by clicking on `Launch Application` button.
    ![Start Report Server](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/start-report-server.png)

10. You can also start the Report Server from the shortcuts available in the desktop.

    > Report Server does not support multiple versions installed on the same machine and it cannot be downgraded to the previous version.

## Configure new Report Server with new User Management Server

After successful installation of Report Server and User Management Server. Start the Report Server.

To configure Report Server, you must configure the User Management Server first.

![UMS configuration](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/create-sqlce-database-for-ums.png)

Configure User Management Server by providing Storage Options, Storage System and System Administrator details and click `Proceed` button.
After successful configuration of User Management Server, it will be redirected Report Server startup.

You can find the details on How to configure User Management Server [here](/on-premise/application-startup/startup/#configure-user-management-server)

>An application of type Report Server will be created automatically in User Management Server and System administrator group for Report server will be created in User Management Server.

`Use same database credentials` of UMS option will use the same database credentials of User Management Server except the database name.

![Use same database credentials](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/ums-configuration-successful.png)

Configure Report Server by providing Storage Options, Storage System. You can find the details on how to configure Report Server [here](/on-premise/application-startup/startup/#configure-report-server)

Choose option to startup with or without including the sample resources and click `Proceed` button.

![Include samples](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/include-sample-resource.png)

After successful configuration of Report Server, it will be redirected to login page.

>Report Server system administrator will be automatically added from User Management Server.

![Report Server login page](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/login-for-ums.png)

## Silent installation

You can install the Bold Reports On-Premise silently with the following steps:

1. Double click the downloaded Bold Reports setup.
2. Bold Reports silent setup will be extracted in Temp location like below (%temp%).
    ![Silent installation setup temp location](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/silent-installation-setup-location.png)

3. Copy the extracted Bold Reports silent setup to some other location and cancel the installation.
4. Now open the command prompt with administrative privileges mode and navigate to the Bold Reports silent setup copied location.
5. Pass the following arguments to setup and run.

**Arguments:**

**IIS Express**
`/Install silent /InstallPath:{InstallationPath} /pidkey:{unlock_key} /portno:{port_no} /servertype:IISExpress /isdesktopshortcut:{TRUE (or) FALSE} /isstartmenushortcut:{TRUE (or) FALSE} /Log “{LogFilePath\filename.log}”`

**Example:**
`C:\SilentSetup\SyncfusionBoldReportsOnPremiseEdition_1.1.14_1311.exe /Install silent /InstallPath:C:\Program Files (x86)\Bold Reports On-Premise Edition\Report Server /pidkey:@123456abcd54321 /portno:54321  /servertype:IISExpress /isdesktopshortcut:TRUE /isstartmenushortcut:FALSE /Log “C:\BoldReportsInstallLog\BoldReportsInstall.log”`

![Report Server silent installation](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/report-server-silent-installation.png)

**IIS**
`/Install silent /InstallPath:{InstallationPath} /pidkey:{unlock_key} /portno:{port_no} /servertype:IIS /sitename:"{site_name}" /isdesktopshortcut:{TRUE (or) FALSE} /isstartmenushortcut:{TRUE (or) FALSE} /issetfirewallrule:{True (or) False} /Log “{LogFilePath\filename.log}”`

**Example:**
`C:\SilentSetup\BoldReportsOnPremiseEdition_1.1.14_1311.exe /Install silent /InstallPath:C:\Program Files (x86)\Bold Reports On-Premise Edition\Report Server /pidkey:@123456abcd54321 /portno:54321 /servertype:IIS /sitename:"BoldReportsOnPremiseEdition" /isdesktopshortcut:TRUE /isstartmenushortcut:FALSE /issetfirewallrule:True /Log “C:\BoldReportsInstallLog\BoldReportsInstall.log”`

![Report Server silent installation IIS](/static/assets/on-premise/images/installation-and-deployment/on-premises/on-premises/report-server-silent-installation-iis.png)

Now, Bold Reports On-Premise has been installed in silent mode.

## Deployment

* Report Server web application opens in your default browser with the specified port number given during at the time of installation at `http://localhost:[Report_server_port_number]/`

* User Management Server web application opens in your default browser with the specified port number given during at the time of installation at `http://localhost:[user_management_server_port_number]/`.