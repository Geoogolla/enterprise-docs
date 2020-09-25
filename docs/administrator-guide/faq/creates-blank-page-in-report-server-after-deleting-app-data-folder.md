---
title: Blank page appears after deleting App Data of Report Server
description: Explain how to resolve getting the blank page after deleting the App Data folder in the Bold Reports On-Premise.
keywords: report-platform, reporting, UMS
---

# Blank page appears after deleting App Data of Report Server and reconfigured

This occurs due to the Report Server trying to create a same group name at the time of server configuration. To resolve follow the below steps.
1. Go to **User Management** section in Bold User Management Server.
![User management section](/static/assets/on-premise/images/faq/user-management-section-in-ums.png)
2. Go to **Groups** section in **User Management** section.
3. Delete the Admin group of respective application.
![Delete Admin Group](/static/assets/on-premise/images/faq/how-to-delete-admin-group-in-ums.png)
