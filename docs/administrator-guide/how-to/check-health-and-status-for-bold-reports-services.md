---
layout: post
title: To perform Status and Health Check in Bold Reports Services.
description: This documentation explains regarding the health check and the status check  of the bold reports services.
keywords: report-platform
documentation: ug
---

# Status and Health Check for Bold Reports Services

Health and status check of application services is a process of verifying the functionality and performance of application services. By regularly checking the health and status of application, you can identify and fix any issues that may affect the availability or performance of your applications. By following the steps outlined below, you can effectively assess the well-being of the reports services.

## To Perform Status Check

A comprehensive status check provides visibility into the operational state of all services within the application as the services are running or not and ensuring smooth operation. This level of monitoring simplifies the process of troubleshooting and ensures the state of the services. To check the status of the reports services and ensure their smooth functioning, please enter the following URL in a web browser

`https://{Domain_name}/status`

This URL is specifically designed to provide you with an overview of the current status of the reports services.

![Status Check](/static/assets/on-premise/images/how-to/status-check.png)

## To Perform Health Check

In certain environments, where status checks may not be sufficient, the utilization of health checks becomes imperative. Health checks provide a more comprehensive evaluation of the state of each services of an application. By accessing the specific URLs provided in the below table, you can assess the health and operational status of each component.

<table>
  <tr>
    <th>Services</th>
    <th>Main Application</th>
    <th>Sub Application</th>
  </tr>
  <tr>
    <td>Identity Provider Web</td>
    <td>https://{Domain_name}/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/health-check</td>
  </tr>
  <tr>
    <td>Identity Provider API</td>
    <td>https://{Domain_name}/api/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/api/health-check</td>
  </tr>
  <tr>
    <td>Tenant Management Web</td>
    <td>https://{Domain_name}/ums/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/ums/health-check</td>
  </tr>
   <tr>
    <td>Windows Authentication</td>
    <td>https://{Domain_name}/windowsauthentication/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/windowsauthentication/health-check</td>
  </tr>
  <tr>
    <td>Reporting Web</td>
    <td>https://{Domain_name}/reporting/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/reporting/health-check</td>
  </tr>
   <tr>
    <td>Reporting API</td>
    <td>https://{Domain_name}/reporting/api/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/reporting/api/health-check</td>
  </tr>
  <tr>
    <td>Reporting Jobs</td>
    <td>https://{Domain_name}/reporting/jobs/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/reporting/jobs/health-check</td>
  </tr>
  <tr>
    <td>Report Designer Service</td>
    <td>https://{Domain_name}/reporting/reportservice/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/reporting/reportservice/health-check</td>
 </tr> </table>

 **Main Application**: The main web application is the central and primary component of a web-based software system. It encompasses the core features, user interface, and functionality that users interact with.

 **Sub-Application**: A sub-application within the web application is a specialized module that provides additional or specific functionality to enhance the main application.