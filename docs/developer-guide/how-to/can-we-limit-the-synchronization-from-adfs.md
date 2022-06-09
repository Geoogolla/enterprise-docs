---
title: Limit the synchronization from ADFS | Bold Reports
description: This documentation explains how to provide a way to limit the synchronization from ADFS in the Bold Reports On-Premise Edition.
keywords: report-platform
---

# Can we limit the synchronization from ADFS

No, we cannot limit the synchronization from ADFS based on count (like synchronizing 100 users). But, we can control whose details should be synchronized.

Using Azure AD group synchronization, we can control the synchronization of specific users. Bold Reports will list the Imported Database users that are already imported. Choose the users you want to synchronize and click on `Synchronize` at the top.

![Synchronize button](/static/assets/on-premise/images/how-to/can-we-limit-the-synchronization-from-adfs/synchronize-button-of-dbusers.png)

To learn more about synchronize users, refer [here](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/users/synchronize/synchronize-existing-database-users/#synchronize-users).

Using Azure AD group synchronization, we can control the synchronization of specific groups also. Bold Reports On-Premise will list the Azure Active Directory groups that are already imported. Choose the groups you want to synchronize and click on `Synchronize` at the top.

![Azure AD Group Synchronize button](/static/assets/on-premise/images/how-to/can-we-limit-the-synchronization-from-adfs/Azure-Group-Synchronize-button.png)

To learn more about synchronize groups, refer [here](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/groups/synchronize/synchronize-azure-active-directory-groups/#synchronize-groups).

With this group synchronization option, we can import fresh users from the Azure AD group to the Report server only when that user is not present on the Report Server. But if the user is already present on the Report Server, we are not synchronizing such user details.

After synchronization completes, the number of groups modified, deleted, and duplicated will be shown in the success message box below.

![Synchronization Azure Group Access window](/static/assets/on-premise/images/how-to/can-we-limit-the-synchronization-from-adfs/synchronize-azure-group-success-window.png)

To learn more about the procedure of synchronization, refer [here](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/groups/synchronize/synchronize-azure-active-directory-groups/#synchronization-procedure).