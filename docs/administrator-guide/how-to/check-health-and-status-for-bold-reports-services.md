---
layout: post
title: Health Check and Status Check in Bold Reports Services.
description: This documentation explains regarding the health check and the status check  of the bold reports services.
keywords: report-platform
documentation: ug
---

# Status and Health Check for Bold Reports Services

To maintain the optimal performance and reliability of the reports services, it is essential to regularly monitor and evaluate their health and status. By following the steps outlined below, you can effectively assess the well-being of the reports services.

## Status Check

To check the status of the reports services and ensure their smooth functioning, you can perform a Status Check. To begin, enter the following URL in a web browser

`https://{Domain_name}/status`

This URL is specifically designed to provide you with an overview of the current status of the reports services.

![Status Check](/static/assets/on-premise/images/how-to/status-check.png)

If you want to obtain a comprehensive assessment of the health of all the applications and sub applications, you can perform a **Health Check**.

## Health Check

The Health Check involves evaluating the individual services of the Bold Reports services. By accessing the specific URLs provided in the below table, you can assess the health and operational status of each component.

<table>
  <tr>
    <th>Services</th>
    <th>Application</th>
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