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

Run the Bold Reports Enterprise Reporting on your machine.

![Exe Setup](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/exe-setup.png)

You can check the license agreement of the Bold Reports Enterprise edition by clicking the `License Terms and Conditions` and click `Next`.

![License Agreement](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/license-agreement.png)

## Hosting type

Installer will automatically detect the existing Bold BI hosting details and show them in the following web hosting type.

* IIS

![Bold ID IIS](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/boldid-iis.png)

## PhantomJS

> **IMPORTANT:** PhantomJS is a headless WebKit scriptable with JavaScript. This is free software or open source, and it may contain MIT, BSD, LGPL, GPL, or other similar licenses that contain third-party code. This executable file is necessary to achieve image and PDF export functionalities in the dashboard and widgets. Without this file, the image and PDF export options in the dashboard and widgets will no longer be available. If you choose to download PhantomJS, then you must accept all terms and conditions to use it with Syncfusion products.

Read and accept the license and third-party terms and conditions by checking the options `LICENSE` and `Third-party` for installing PhantomJS and click `Next`.

![Panthom JS](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/panthomjs.png)

> **NOTE**: If you have any problem with internet connection or do not have an internet connection, unselect the PhantomJS download option and continue to install. To manually install PhantomJS.

## Client libraries

> **IMPORTANT**: Bold Reports Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL, CDATA, MemSQL, and MariaDB to connect with their respective SQL database variants. Check the license of each library to give consent for installation. The selected client libraries alone will be shipped into the product.

![Client Libraries](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/client-libraries.png)

Read and accept the license to ship the selected client libraries and click `Install`.

After the installation process is completed, you can launch the application by clicking `Launch Application`.

![Launch Application](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/launch-application.png)

## Registering Bold Reports site

First, you need to activate the license on the UMS server and then register the site.

You cannot setup the Bold Reports application directly by clicking Launch Application when common login is selected. You have to manually create the site for Bold Reports from the site management page by opening the URL as follows.

`http://{hostname}/ums/sites?action=create-new-site`

Please setup the Bold Reports site by following the steps given [here](./../../../manage-tenants/create-site/).

## Application structure when common login selected

The following changes were made on IIS after proceeding with the common Bold ID.

Normally, Bold Reports are hosted in IIS with the site name as BoldReportsOnPremiseEdition, but after using the common login (Bold ID), the site name has been renamed as BoldAppsEnterpriseEdition, and Bold Reports will be hosted as sub-app as reporting under the BoldAppsEnterpriseEdition as shown below.

![IIS Reports](/static/assets/on-premise/images/installation/bold-reports-over-bold-bi/iis-reports.png)