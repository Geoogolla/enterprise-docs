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

### Mapping the custom domain after the installation

Please follow the below steps to update the Custom domain after the installation

1. Add Custom domain to Bold Reports Enterprise Reporting edition on IIS as shown in the image below.
![IIS Binding](/static/assets/on-premise/images/getting-started/add-binding.png)

2. Navigate to sites page in tenant management application **`{your-current-domain}/ums/sites`** and Click on deployed site and go to settings page.
   ![Site listing page](/static/assets/on-premise/images/getting-started/site-listing-page.png)
   ![Site Setting page](/static/assets/on-premise/images/getting-started/site-setting-page.png)

3. And update the new Custom domain information in Site URL as shown below and save the settings,
   ![Site Setting Site URL](/static/assets/on-premise/images/getting-started/site-setting-site-url.png)

4. Repeat the step 2 to 3 for all deployed sites.

5. Navigate to the site settings page of the UMS application and update the new Custom domain information as shown in image below.
![UMS Site Setting](/static/assets/on-premise/images/getting-started/ums-site-settings.png)

6. Now, you can access sites using newly mapped domain.

#### Mapping the custom domain before startup Bold Reports Enterprise Reporting application

Please follow below steps to change the application binding information

1. Stop the Bold Reports Enterprise Reporting site in IIS.

2. Add Custom domain to Bold Reports Enterprise Reporting edition on IIS as shown in the image below.
![IIS Binding](/static/assets/on-premise/images/getting-started/add-binding.png)

3. Update the Custom domain value in below **product.json** file in deployed location. By default, Bold Reports will be deployed on `C:\BoldServices`
   * Update the Custom domain value in **product.json** file in below location

       **`{Deployed Location}`**\app_data\configuration\product.json
     ![Product JSON File](/static/assets/on-premise/images/getting-started/product-json.png)

4. Start the site in IIS and browse the site using the custom domain. Now, the Bold Reports Enterprise Reporting startup page is loaded on the browser.![Startup Page](/static/assets/on-premise/images/getting-started/startup-page.png)

## See Also

* [**Application Startup**](../../application-startup/)