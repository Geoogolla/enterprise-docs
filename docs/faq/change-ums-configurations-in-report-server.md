---
title: Change UMS URL, Client Id and Client Secret in Report Server
description: This documentation explains how to change the UMS URL, Client Id and Client Secret in the Bold Reports On-Premise.
keywords: report-platform, reporting, UMS
---

# How to change UMS URL, Client Id and Client Secret in Report Server

You can change the UMS URL, Client Id and Client Secret in Config.xml file of Report Server.
Before adding credentials in config file, you can test the connections in the **Settings** -> **User Directory** settings page.

![Change User Management Server Connections in Report Server](/static/assets/on-premise/images/faq/change-ums-configurations-in-report-server.png)

For adding credentials follow below steps.

1. Go to installation folder and find the Report Server config files in below path locations,
    * C:\Syncfusion\Report Server\ReportServer.Web\Configuration\Config.xml
    * C:\Syncfusion\Report Server\ReportServer.Web\App_Data\Configuration\Config.xml
2. Open Config.xml files from above locations and find the `ClientId`, `ClientSecret` and `UmsUrl` nodes.
3. Update the nodes with valid credentials. Now login into Report Server, It will update the latest values from config file to Report Server Database if the connection is valid one.