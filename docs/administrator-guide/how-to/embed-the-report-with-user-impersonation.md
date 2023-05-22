---
title: Get the embed report with user impersonation in Bold Reports
description: This documentation explains how to get the embed the report with user impersonation for another application.
keywords: report-platform
---

# How to embed the report with user impersonation

This section explains how to get the report of a particular user from another application by passing the user's details as a parameter. We can maintain all the user reports of another application on the Bold Reports server. If you want to get the respective user details, you can get them by making an API request.

Please follow the below steps to get the embed report with user impersonation from your existing application
1. Login the user in your existing application
2. Your application authenticate the user by AWS congnito/Oauth/OpenId/Office365
3. Now we need to request the API to get the embed report for the respective user by passing user details as a parameter
4. Get the API token for Admin user of Bold Report Server. You can use this token to request API to get the embed report for all the user. Please refer the [Report Parameter](https://help.boldreports.com/embedded-reporting/javascript-reporting/report-viewer/report-parameters/#set-parameter-at-client) documentation to get the embed report with user impersonation
5. For example, if you want to get the report of a user whose employee ID is 1234, you need to get the token of the admin user and then pass the employee ID of the user as a parameter in the API request. The bold reports server will then handle the request and return the report to the respective user.

   **Please find the below image for your reference**
![User-impersonation](/static/assets/on-premise/images/how-to/user-impersonation.png)
6. The Bold reports server handled the request and returned the report for respective user

Please find the below flowchart for get the embed report with user impersonation

![User-impersonation-image](/static/assets/on-premise/images/how-to/user-impersonation-image.png)