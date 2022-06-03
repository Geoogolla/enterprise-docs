---
layout: post
title:  Import users once for all sites in Bold Report Server
description: This documentation explains about the import users once for all sites in Bold Reports Report Server.
platform: report-platform
documentation: ug
---

# If the user is configured using Open ID connect to Site1 - will they have access to Site2

Yes, it is possible to give access to site2 if the user is configured using Open ID connect to site1.

If the user is automatically imported to site1 and the admin wants to provide access to site2, the admin can grant access from UMS to site2. To learn more about Grant Access, you can refer [here](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-tenants/manage-sites/#grant-access).

The following image shows the grant access permission to the new user.

![Grant Access](/static/assets/on-premise/images/faq/grant-access.png)

The user can then access Site2, and the reports based on the permissions shared with him on the Report Server. The following image shows how to manage permission to add the user.

![Manage Permission](/static/assets/on-premise/images/faq/manage-permission.png)

To learn more about Manage Permissions, you can refer [here](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-permissions/).

On the other hand, it is not required for the admin to grant access to site2. If the same Open ID is configured on site2, the user will automatically be imported and logged in to site2.