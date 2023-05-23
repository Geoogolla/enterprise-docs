---
title: Get the embed report with user impersonation in Bold Reports
description: This documentation explains how to get the embed the report with user impersonation for another application.
keywords: report-platform
---

# How to embed the report with user impersonation

This section explains how to get the report of a particular user by passing the user's details as a parameter. We can maintain all the user reports on the Bold Reports server. If you want to get the respective user details, you can get them by using admin authentication token and user details as a parameter.

Please find the below flowchart for embed report with user impersonation

![User-impersonation-image](/static/assets/on-premise/images/how-to/user-impersonation-image.png)

Please follow the below steps to embed report with user impersonation from your existing application

1. If you want to get the embed report with user impersonation, then you need to integrate the Bold Reports Viewer. Please refer [here](https://help.boldreports.com/enterprise-reporting/developer-guide/embed-in-application/view-report-through-report-viewer/) to integrate Viewer.
2. Once you have done the viewer integration, you have to get the authentication token for the admin user of the Bold Report Server. You can use this token for all the users to embed report with user impersonation by passing user details as a parameter. Please refer [Report Parameter](https://help.boldreports.com/embedded-reporting/javascript-reporting/report-viewer/report-parameters/#set-parameter-at-client) documentation for the same.
3. For example, if you want to get the report of a user whose employee ID is 1234, you need to get the token of the admin user and then pass the employee ID of the user as a parameter in the API request. The bold reports server will then handle the request and return the report to the respective user.

   **Please find the below image for your reference**
![User-impersonation](/static/assets/on-premise/images/how-to/user-impersonation.png)
4. The Bold reports server handled the request and returned the report for respective user.