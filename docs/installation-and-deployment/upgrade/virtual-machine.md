---
layout: post
title: Upgrade Report Server in virtual machine | Syncfusion
description: Learn how to upgrade the Bold Reports On-Premise in Azure virtual machine to the latest version at any time manually.
platform: report-platform
documentation: ug
---

# Upgrade to latest Bold Reports On-Premise version along with User Management Server

Bold Reports On-Premise version comes with a User Management Server, which is a separate application for managing your users and applications. To learn more about User Management Server, click [here](/on-premise/user-management-server/user-management-server-overview/).

## Upgrade to latest Bold Reports On-Premise

Follow these steps to upgrade the Report Server VM to the latest source from older versions:

1. Connect Report Server VM through a Remote Desktop Connection (RDP) by clicking **Connect** in the virtual machine window. A Remote Desktop Protocol `.rdp` file will be downloaded from the Azure portal.

    ![Connect](/static/assets/on-premise/images/installation-and-deployment/upgrade/vm/connect.png)

2. Open the `.rdp` file and click **Continue** for the unknown publisher warning.

    ![RDP Warning](/static/assets/on-premise/images/installation-and-deployment/upgrade/vm/rdp-warning.png)

3. Enter the credentials that you gave when deploying the VM as follows, and then click **OK**.

    ![VM Credentials.png](/static/assets/on-premise/images/installation-and-deployment/upgrade/vm/vm-credentials.png)

4. On successful connection, the identity verification window will be displayed as follows. Click **OK** to accept the certificate problems and connect to the virtual machine.

    ![verify the identity of the virtual machine](/static/assets/on-premise/images/installation-and-deployment/upgrade/vm/certificate-warning.png)

5. After connected to the virtual machine, follow the steps given [here](/on-premise/installation-and-deployment/upgrade/upgrade-on-premises-server-with-new-ums/) to upgrade the Report Server to latest version.