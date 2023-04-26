---
title: Get the embed report with user impersonation in Bold Reports
description: This documentation explains how to get the embed the report with user impersonation for another application.
keywords: report-platform
---

# How to embed the report with user impersonation

We can get the embed report with user impersonation for another application.

Please follow the below steps to get the embed report with user impersonation
1. Please Login your user in your existing application.
2. The application authenticate the user by AWS congnito/Oauth/OpenId/Office365
3. Please get the API token for Admin user.
4. Now we need to request the API to get the embed report for the respective user by passing user details as a parameter
5. please refer the [Report Parameter](https://help.boldreports.com/embedded-reporting/javascript-reporting/report-viewer/report-parameters/#set-parameter-at-client) documentation to get the embed report with user impersonation
6. The Bold reports server handled the request and returned the report for respective user.

**Please find the below image for your reference,**

![User-impersonation](/static/assets/on-premise/images/how-to/user-impersonation.png)
