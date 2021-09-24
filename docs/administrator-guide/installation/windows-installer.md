---
layout: post
title: Set up To Install Bold Report in Windows for the Bold.
description: Learn how to install  Bold Reports Enterprise Edition and how to host the Bold Reports Enterprise in IIS or IIS Express in your machine. 
platform: report-platform
documentation: ug
---

# Installation and Deployment

This section explains how to install and deploy the Bold Reports solution.

## Unlock the setup

This topic explains the steps required to install Bold Reports Enterprise.

To see the system requirements for deploying Bold Reports Enterprise in a business environment, see System Requirements.

Run the Bold Reports Enterprise Installer.

![Set up](/static/assets/on-premise/images/installation/setup.png)

You can check the license agreement of Bold BI Enterprise edition by clicking the License Terms and Conditions.

## Hosting type

You have been provided Bold Reports Enterprise Edition to be hosted in the IIS web-server type.

## IIS

You need to provide the port number, location, and site name to host Bold BI Enterprise in the IIS.

![IIS](/static/assets/on-premise/images/installation/iis.png)

## PhantomJS

> **IMPORTANT:** PhantomJS is a headless WebKit scriptable with JavaScript. This is free software or open source, and it may contain MIT, BSD, LGPL, GPL, or other similar licenses that contain third-party code. This executable file is necessary to achieve an image and PDF export functionalities in the dashboard and widgets. Without this file, the image and PDF export options in the dashboard and widgets will no longer be available. If you choose to download PhantomJS, then you must accept all terms and conditions to use it with Syncfusion products.

Read and accept the license and third-party terms and conditions by checking the options``LICENSE`` and ``Third-party`` for install PhantomJS and click ``INSTALL``.

![Panthom](/static/assets/on-premise/images/installation/panthom.png)

> **NOTE**: If you have any problem with internet connection or do not have internet connection, unselect the PhantomJS download option and continue to install. To manually install the PhantomJS.

### Client libraries

> **IMPORTANT**: Bold BI Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL, Snowflake, and MongoDB to connect with their respective SQL database variants. Check license of each library to give consent for installation. The selected client libraries alone will be shipped into the product.

![Client](/static/assets/on-premise/images/installation/client.png)

Read and accept the license to ship the selected client libraries and click Next.

After the installation process is completed, you can launch the application by clicking Launch Application.

![Launch](/static/assets/on-premise/images/installation/launch.png)

If you did not install the client libraries during this installation, then after installed the Bold Reports setup, you can install it using ClientLibrary.msi setup. The following steps to install the client libraries.

1. Go to the location C:\Program Files (x86)\Bold Reports Enterprise Edition\Client Library. And double click the setup file named ClientLibrary.msi.

![Location](/static/assets/on-premise/images/installation/location.png)

1. Now, the client libraries dialog will open. Then, you can choose and install the required client libraries.

![install](/static/assets/on-premise/images/installation/install.png)

#### Bold BI with Bold Reports Enterprise Reporting Edition Installation

If Bold BI already installed in your machine and your installing Bold Reports Enterprise Reporting Edition, it will ask confirmation for Common Login.

![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/common-login.png)

Click on `yes`, it will have common login for `BoldBI` and `BoldReportsEnterprise Reporting Edition` products. In IIS, it will deploy as Single site.
![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/common-login-in-IIS.png)

Click on `No`, it will not have common login for `BoldBI` and `BoldReportsEnterprise Reporting Edition` products. In IIS, it will deploy two sites `BoldBIOnPremiseEdition` and `BoldReportsEnterprise Reporting Edition`.

>Bold Reports Azure App Service can be deployed in Azure by following the [link](../azure-app-service/).

## How to change the binding in the Bold Reports Enterprise Reporting

Please follow below steps to change the application binding information

1. Add new binding to Bold Reports Enterprise Reporting edition on IIS as shown in the image below.
 **`Example: example.com`**
![IIS Binding](/static/assets/on-premise/images/getting-started/add-binding.png)  
    >Don’t remove existing bindings.
2. Go to site settings page of the UMS application using below old binding and update the new binding information as shown in image below.
**`http://localhost:{port-no}/ums/administration`**  
![IDP Base URL](/static/assets/on-premise/images/getting-started/idp-base-url.png)
3. Then navigate to the site listing page of UMS application and click `Edit` on the deployed site as shown in image below.
**`http://localhost:{port-no}/ums/sites`**  
![RS Base URL](/static/assets/on-premise/images/getting-started/ums-url-edit.png)
4. Update the new binding information as shown in image below.![RS Base URL](/static/assets/on-premise/images/getting-started/ums-base-url.png)
5. Now, Bold Reports site can be browsed using the new binding.
6. Repeat the step 3 and 4 to change custom domain for deployed sites.
> * To Configure the Bold Reports Enterprise Reporting Edition by using newly added bindings in IIS, refer this [link](../../how-to/map-a-domain-name-to-bold-reports-site-before-startup/)

## See Also

* [**Application Startup**](../../application-startup/)