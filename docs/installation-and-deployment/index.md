---
layout: post
title: Installation and deployment of BoldReportsOnPremiseEdition
description: Explain how to install and deploy the Bold Reports On-Premise Edition and how to host the Bold Reports On-Premise in IIS or IIS Express in your machine.
platform: report-platform
documentation: ug
---

# Installation and Deployment

This section explains on how to install and deploy the Bold Reports On-Premise Edition.

## Installation

This topic details the steps required to install the Bold Reports On-Premise.

To learn about the system requirements needed to deploy the Bold Reports On-Premise in your business environment, see [System Requirements](/on-premise/getting-started/#prerequisites).

Run the Bold Reports On-Premise Installer and sign-in with your registered e-mail address to unlock the setup.

![installation with registered e-mail](/static/assets/on-premise/images/getting-started/installation-sign-in.png)

You can check the License Agreement of Bold Reports On-Premise Edition by clicking on the `License Terms and Conditions`.

After you read the license agreement, click on Next to choose your portal license. This step is skipped if you have only one portal license

![portal selection](/static/assets/on-premise/images/getting-started/portal-plans-selection.png)

After you selected the portal license, click on Next to select the installation server type, location and the port number to host the Bold Reports On-Premise.

We have provided the Bold Reports On-Premise Edition to be hosted into the following two web server types

1. IIS Express
2. IIS

### IIS Express

![Installation Location and IIS Express](/static/assets/on-premise/images/getting-started/installation-IISExpress.png)

### IIS

Need to provide the Port number and Site Name to host the Bold Reports On-Premise into the IIS.

![Installation Location, IIS Port Changes and Site Name](/static/assets/on-premise/images/getting-started/installation-IIS.png)

After installation process is completed, you can launch the application by clicking on Launch Application.

![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/installation-launchapplication.png)

## How to change the binding in the Bold Reports On-premise

Please follow below steps to change the application binding information

1. Add new binding to Bold Reports On-premise edition on IIS as shown in the image below.
 **`Example: 192.168.1.3`**
![IIS Binding](/static/assets/on-premise/images/getting-started/add-binding.png)  
I>Don’t remove existing bindings

2. Update the new binding values in below configuration files in deployed location.
I>By default, Bold Reports will be deployed on `C:\Bold Reports`
   * Update the **`InternalAppReportUrl`** value in config file in below location  
**`{Deployed Location}`**\IDP\App_Data\Configuration\config.xml  
![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)
   * Update the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file in below location  
**`{Deployed Location}`**\Report Server\App_Data\Configuration\Config.xml  
![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)
3. Restart the site in IIS and browse the site with old binding URL.
4. Now navigate to the site settings page of the UMS application using below old binding and update the new binding information as shown in image below.
**`http://localhost:{port-no}/ums/administration`**  
![IDP Base URL](/static/assets/on-premise/images/getting-started/idp-base-url.png)
5. Now navigate to the site setting of your report server application using below old binding and update the new binding information as shown in image below.  
**`http://localhost:{port-no}/reporting/en-us/site/site1/administration`**  
![RS Base URL](/static/assets/on-premise/images/getting-started/rs-base-url.png)

6. Now Bold Reports site can be browsed using the new binding.

## See Also

* [**Application Startup**](/on-premise/application-startup/)