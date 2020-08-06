---
title: Silent Installation | User Management Server | Syncfusion 
description: Learn how to install Bold User Management Server from the installed location of BoldReports by silent installation.
platform: report-platform
documentation: ug
---

# Silent Installation of Bold User Management Server

While installing the `Bold Reports`, if Bold User Management Server installation step is skipped then we cannot install Bold User Management Server setup directly from the installed location of BoldReports.

This section explain about how to install Bold User Management Server in IIS/IIS express by silent installation.

## Silent Installation of Bold User Management Server in IIS Express

Open the command prompt with administrative privileges and run the Bold UMS silent setup with the following arguments.

**Arguments:**
`silentsetupLocation /Install silent /InstallPath:{InstallationPath} /portno:{port_no} /servertype:IISExpress /isdesktopshortcut:{TRUE (or) FALSE} /isstartmenushortcut:{TRUE (or) FALSE} /islaunchapplication:false /issetfirewallrule:False`

**Example:**
`C:\Program Files (x86)\Bold Reports On-Premise Edition\Report Server\ReportServer.Web\BoldUserManagementServer\Syncfusionboldusermanagementserver.exe /Install silent /InstallPath:C:\Program Files (x86)\Bold Reports On-Premise Edition\UMS\ /portno:1010 /servertype:IISExpress /isdesktopshortcut:TRUE /isstartmenushortcut:TRUE /islaunchapplication:false /issetfirewallrule:False`

![Bold UMS silent installation in IIS Express](/static/assets/on-premise/images/user-management-server/silent-installation-of-ums/bold-ums-installation-in-iisexpress.png)

## Silent Installation of Bold User Management Server in IIS

Open the command prompt with administrative privileges and run the Bold UMS silent setup with the following arguments.

**Arguments:**
`silentsetupLocation /Install silent /InstallPath:{InstallationPath} /portno:{port_no} /sitename:{site_name} /servertype:IIS /isdesktopshortcut:{TRUE (or) FALSE} /isstartmenushortcut:{TRUE (or) FALSE} /islaunchapplication:false /issetfirewallrule:True`

**Example:**
`C:\Program Files (x86)\Bold Reports On-Premise Edition\Report Server\ReportServer.Web\BoldUserManagementServer\Syncfusionboldusermanagementserver.exe /Install silent /InstallPath:E:\Program Files (x86)\Bold Reports On-Premise Edition\UMS\ /portno:2020 /sitename:BoldUserManagementServer /servertype:IIS /isdesktopshortcut:TRUE /isstartmenushortcut:TRUE /islaunchapplication:false /issetfirewallrule:True`

![Bold UMS silent installation in IIS](/static/assets/on-premise/images/user-management-server/silent-installation-of-ums/bold-ums-installation-in-iis.png)