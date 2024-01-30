---
layout: post
title: Installing Bold Reports over Bold BI | Bold Reports
description: Read this guide to know how to install Bold Reports on top when Bold BI installed already in that report server.
platform: report-platform
documentation: ug
---

# Install Bold Reports over Bold BI

This section explains how to install and deploy the Bold Reports Enterprise Edition when Bold BI is already installed on the same machine.

## Installation

This topic explains the steps required to install the Bold Reports Enterprise Edition.

* Run the Bold Reports Enterprise Reporting on your machine.

    ![Exe Setup](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/exe-setup.png)

* You can check the license agreement for the Bold Reports Enterprise edition by clicking the `License Terms and Conditions` and clicking `Next`.

    ![License Agreement](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/license-agreement.png)

* Then a prompt will appear, asking whether you intend to proceed using the existing Bold ID for Bold Reports Enterprise Edition.

    ![Prompt Dialog](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/prompt-dialog.png)

## Proceed with installation without Common Login

If you select `No` to proceed the installation without common login, the Bold Reports Enterprise Reporting installation will be cancelled.
    ![Cancelled Process](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/cancelled-process.png)

## Proceed with installation with common login

If you select `Yes` to proceed with the installation using common login for both Bold BI products and Bold Reports, the installer will automatically detect the existing Bold Reports hosting details and display them in the following web hosting type. These details cannot be modified; simply verify them and click Next.
    ![Bold ID IIS](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/boldid-iis.png)

## PhantomJS

> **IMPORTANT:** PhantomJS is a headless WebKit scriptable with JavaScript. This is free software or open source, and it may contain MIT, BSD, LGPL, GPL, or other similar licenses that contain third-party code. This executable file is necessary to achieve image and PDF export functionalities in the dashboard and widgets. Without this file, the image and PDF export options in the dashboard and widgets will no longer be available. If you choose to download PhantomJS, then you must accept all terms and conditions to use it with Syncfusion products.

Read and accept the license and third-party terms and conditions by checking the options `LICENSE` and `Third-party` for installing PhantomJS and click `Next`.

![Panthom JS](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/panthomjs.png)

> **NOTE**: If you have any problem with internet connection or do not have an internet connection, unselect the PhantomJS download option and continue to install. To manually install PhantomJS.

* Then `client library prompt` will open. Bold Reports Enterprise Edition utilizes client libraries, including Oracle, PostgreSQL, MySQL, and MongoDB, to connect with their respective SQL database variants. Please check the license of each library and provide consent for installation. Only the selected client libraries will be shipped with the product. Read and accept the license to proceed with shipping the selected client libraries, and then click `Install`.
    ![Client Libraries](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/client-libraries.png)

* Once the installation is complete, you can launch the application by clicking `Launch Application` and proceed to set up your Bold Reports site.

    ![Launch Application](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/launch-application.png)

* It will open in your browser. Login with your username and password which is already registered on Bold BI.

    ![Login Page](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/login-page.png)

* After logging in, this page will open. Click on your profile and select `Manage Sites` (Admin Access).
    ![BI UMS](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/bi-ums.png)

* After that, the following page will open. Navigate to **Settings > Manage License > Enterprise Reporting**. Then click `Login to activate account` to register on the site.

    ![UMS Server](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/ums-server.png)

* After logging in, your subscription details will be displayed. Now you are ready to use the Bold Reports application.

    ![Subscription Details](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/subscription-details.png)

* After registering the site, you have to manually create the site for Bold Reports from the site management page by opening the URL as follows:
    `http://{hostname}/ums/sites?action=create-new-site`<br>
    Please set up the Bold Reports site by following the steps given [here](./../../../manage-tenants/create-site/).

## Application structure when common login selected

Bold Reports will be installed as a sub-application within the existing Bold BI Site, which is hosted on IIS. The following changes were made to IIS after using the common Bold ID. Normally, Bold BI is hosted with the site name `BoldBIEnterpriseEdition` in IIS, but after using the common login (Bold ID), the site name has been changed to `BoldAppsEnterpriseEdition`. Additionally, Bold Reports will be hosted as a sub-app called `reporting` under the `BoldAppsEnterpriseEdition` site.

![IIS Reports](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/iis-reports.png)

> **NOTE:** Bold ID is the common identity provider application in our Bold products that can be used to provide Single Sign-On (SSO) to both Bold Reports and Bold BI.