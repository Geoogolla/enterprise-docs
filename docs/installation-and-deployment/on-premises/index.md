---
layout: post
title: Installation and deployment of BoldReportsOn-PremiseEdition
description: Explain how to install and deploy Bold Reports On-Premise Edition and how to host the Bold Reports On-Premise in IIS or IIS Express in your machine. 
platform: report-platform
documentation: ug
---

# Installation and deployment

This section explains how to install and deploy the Bold Reports On-Premise Edition.

## Installation

This topic explains the steps required to install the Bold Reports On-Premise.

To learn about the system requirements needed to deploy the Bold Reports On-Premise in your business environment, see [System Requirements](/on-premise/getting-started/#prerequisites).

Run the Bold Reports On-Premise Installer and sign-in with your registered e-mail address to unlock the setup.

![installation with registered e-mail](/static/assets/on-premise/images/getting-started/installation-sign-in.png)

You can check the license agreement of Bold Reports On-Premise Edition by clicking the `License Terms and Conditions`.

After you read the license agreement, click Next to choose your portal license. This step is skipped, if you have only one portal license.

![portal selection](/static/assets/on-premise/images/getting-started/portal-plans-selection.png)

After selecting the portal license, click Next to select the installation server type, location, and the port number to host the Bold Reports On-Premise.

You have provided the Bold Reports On-Premise Edition to be hosted into the following two web server types:

1. IIS Express
2. IIS

### IIS Express

![Installation Location and IIS Express](/static/assets/on-premise/images/getting-started/installation-IISExpress.png)

### IIS

Need to provide the port number and site name to host the Bold Reports On-Premise into the IIS.

![Installation Location, IIS Port Changes and Site Name](/static/assets/on-premise/images/getting-started/installation-IIS.png)

After installation process is completed, you can launch the application by clicking the Launch Application.

![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/installation-launchapplication.png)

#### Bold BI with Bold Reports On-Premise Edition Installation

If Bold BI is already installed in your machine and installing Bold Reports On-Premise Edition, it will ask confirmation for Common Login.

![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/common-login.png)

Click `yes`, it will have common login for `BoldBI` and `BoldReportsOn-PremiseEdition` products. In IIS, it will deploy as single site.
![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/common-login-in-IIS.png)

Click `No`, it will not have common login for `BoldBI` and `BoldReportsOn-PremiseEdition` products. In IIS, it will deploy two sites `BoldBIOnPremiseEdition` and `BoldReportsOnPremiseEdition`.

## How to change the binding in the Bold Reports On-premise

 The Following steps to change the application binding information.

1. Add new binding to Bold Reports On-Premise Edition on IIS as shown in the following image.
 **`Example: 192.168.1.3`**
![IIS Binding](/static/assets/on-premise/images/getting-started/add-binding.png)  
I>Don’t remove existing bindings

2. Update the new binding values in following configuration files in deployed location.
I>By default, Bold Reports will be deployed on `C:\Bold Reports`
   * Update the **`InternalAppReportUrl`** value in config file in below location  
**`{Deployed Location}`**\IDP\App_Data\Configuration\config.xml  
![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)
   * Update the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file in below location  
**`{Deployed Location}`**\Report Server\App_Data\Configuration\Config.xml  
![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)
3. Restart the site in IIS and browse the site with old binding URL.
4. Now navigate to the site settings page of the UMS application using the following old binding and update the new binding information as shown in the following image.
**`http://localhost:{port-no}/ums/administration`**  
![IDP Base URL](/static/assets/on-premise/images/getting-started/idp-base-url.png)
5. Now navigate to the site setting of your report server application using below old binding and update the new binding information as shown in image below.  
**`http://localhost:{port-no}/reporting/en-us/site/site1/administration`**  
![RS Base URL](/static/assets/on-premise/images/getting-started/rs-base-url.png)

6. Now, Bold Reports site can be browsed using the new binding.

> * To Configure the Bold Reports On-Premise Edition using newly added bindings in IIS, refer this [link](/on-premise/how-to/change-bold-reports-url-in-bold-reports-on-premise-edition/)
> * Bold Reports On-Premise Edition configuration completed using newly added bindings in IIS but unable to launch `BoldReportsOn-Premise` site, refer this [link](/on-premise/how-to/change-bold-reports-url-when-bold-reports-on-premise-site-fails/) to solve the problem and configure BoldReports site.

## See Also

* [**Application Startup**](/on-premise/application-startup/)