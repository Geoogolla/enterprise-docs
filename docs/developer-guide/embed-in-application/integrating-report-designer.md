---
layout: post
title: Integrate Report Designer | Report Server | Syncfusion
description: Explains about how to integrate Bold Reporting Tools Report Designer into other application using the Bold Reports Server built-in API service.
control: report-platform
documentation: ug
---

# Integrate a Bold Reporting Tools Report Designer

Bold Report Server provides built-in restful API to integrate Bold Reporting Tools Report Designer into other applications. For this, set the `serviceAuthorizationToken`, `reportServerUrl` and `serviceUrl` property for Report Designer.

<table>
<tr>
<th>
Report Designer Property
</th>
<th>
Value
</th>
</tr>
<tr>
<td>
serviceAuthorizationToken
</td>
<td>
Pass the access token of the user. Get access token using the Bold Reports Server <a href="../../../rest-api-reference/v1.0/#operation/Authentication" target="_blank">Authentication API</a>

bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IL3NpdGU5MSJ9.d24190nn6i2UNz_8hX1mI0JZTNO9zPX1HYSlGClkUyw
</td>
</tr>
<tr>
<td>
reportServerUrl
</td>
<td>
Bold Reports On-Premise server URL.

<https://example.com/reporting/api/site/site1>
</td>
</tr>
<tr>
<td>
serviceUrl
</td>
<td>
Bold Reports On-Premise built-in service URL.

<https://example.com/reporting/reportservice/api/Designer>
</td>
</tr>
</table>

You can get more details of embedding with Bold Reporting Tools respective platforms as follows.

  [Angular](https://help.boldreports.com/angular/report-designer/server-integration/)

  [ASP.NET Core](https://help.boldreports.com/aspnet-core/report-designer/server-integration/)

  [ASP.NET MVC](https://help.boldreports.com/aspnet-mvc/report-designer/server-integration/)

  [ASP.NET Web Forms](https://help.boldreports.com/aspnet-web-forms/report-designer/server-integration/)

  [Javascript](https://help.boldreports.com/javascript/report-designer/server-integration/)