---
layout: post
title: Upgrade existing App Service with existing UMS | Syncfusion
description: Explains how to upgrade the Bold Reports On-Premise Azure App Service with the existing UMS at any time manually.
platform: report-platform
documentation: ug
---

# Upgrade Report Server and User Management Server Azure App Services

This section explains how to upgrade Report Server and User Management Server Azure App Service.

Bold Reports On-Premise comes with a User Management Server which is a separate application for managing your users and the applications. To know more about User Management Server click [here](/on-premise/user-management-server/user-management-server-overview/).

## Upgrade Report Server Azure App Service

Follow the given steps to upgrade the Report Server App Service to the latest version:

1. Preparation for upgrade.
2. Stop Report Server Azure App Service.
3. Upgrade Report Server to the latest release version.
4. Start Report Server Azure App Service.
5. Run the Report Server and check the new features.

### Preparation for upgrade Report Server

* To upgrade the Report Server Azure App Service to latest version, access the [Azure portal](https://portal.azure.com) with Azure portal credentials and access rights to edit the Report Server App Service.
* Check the latest version release features [here](/release-notes/v{{site.releaseversion}}/).

### Stop Report Server Azure App Service

Before starting the upgrade/update process, stop the Report Server App Service. Follow these steps to stop the Report Server App Service:

1. Log in to [Azure portal](https://portal.azure.com).
2. Select App Services in Microsoft Azure Services.
3. Select Report Server Azure App Service.
4. In the **Overview** section, click **Stop**.
    ![Stop Report Server Azure App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/stop-app-service.png)

### Upgrade Report Server to the latest release version

Follow the below steps to configure the existing Azure blob storage details to the latest Report Server:

1. Log in to [Azure portal](https://portal.azure.com).
2. Select Report Server App Services.
3. Choose **Deployment Center** in the left panel of the Report Server App Service.
    ![App service deployment center](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/deployment-center.png)

4. Once the deployment center is clicked, click the **Disconnect**. Now the deployment panel will open.
    ![Choose deployment source](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/Disconnect.png)

5. Select the **External** in the source control tab and click **Continue**.
    ![Select external repository option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/source-control.png)

6. Select the **App Service Kudu build server** and click  **Continue**.
    ![Build provider](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/build-provider.png)

7. Now, fill the below details in the **Configure** tab  and click  **Continue**.
    * Repository URL - <https://github.com/syncfusion/enterpriseserver-Reportazure.git>
    * Branch - v{{site.releaseversion}}
    * Repository Type - Git

      ![Deployment option for external repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/repository-configure.png)

8. Next click on **Finish** option. The **Successfully set up deployment** notification will be shown in the notification blade.
    ![Finish deployment](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/finish-upgrade.png)

    ![Success notification of deployment option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/setup-success.png)

9. Select the **Sync** button in the deployment center blade.
    ![Synchronization of external repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/synchronization-external-repository.png)

10. Synchronization request submitted notification is shown in the notification blade and synchronization progress is shown in the deployment options blade.
    ![Synchronization status details](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/synchronization-progess.png)

11. Please wait until synchronization is completed.

#### Upgrade reporting assembly

Connect to your Report server APP using `File zilla` and remove the `Syncfusion.EJ.ReportViewer` assembly from the following locations.

1. Open the scheduler location in remote site `/site/wwwroot/App_Data/jobs/continous/ReportServerScheduler` and remove the assembly `Syncfusion.EJ.ReportViewer`.
![Remove reporting assembly from the Report Server Scheduler location](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/remove-classic-assembly-from-report-server-scheduler.png)

2. Open the API location in remote site `/site/wwwroot/API/bin` and and remove the assembly `Syncfusion.EJ.ReportViewer`.
![Remove reporting assembly from API bin location](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/remove-classic-assembly-from-api-bin.png)

3. Open the Report Server bin in remote site `/site/wwwroot/bin` and remove the assembly `Syncfusion.EJ.ReportViewer`.
![Remove reporting assembly from the Report Server bin location](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/remove-classic-assembly-from-bin.png)

### Start Report Server Azure App Service

After upgrading the Azure App Service, start the Report Server App Service. Follow these steps to start App Service:

1. Select App Services in **Microsoft Azure Services**.
2. Select Report Server Azure App Service.
3. In the **Overview** section, click **Start**.
![Stop Report Server Azure App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/start-app-service.png)

#### Restart WebJobs

After the Azure Blob storage details are configured in the Report Server application, you should restart the WebJobs. Follow the given steps to restart the WebJobs:

1. Select **WebJobs** in the left panel of the latest Report Server app service.
2. Select `ReportServerScheduler` WebJobs and click **Stop**.
![Stop Web job](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/stop-web-job.png)

3. After the status for `ReportServerScheduler` WebJobs is changed to stop, click **Start**.
![Start Web job](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/start-web-job.png)

### Run the Report Server and check the new features

After the Report Server upgrade process is completed, launch the Report Server from the Azure app service details blade or enter the Report Server URL in the browser.
![Launch Report Server app service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/launch-app-service.png)

## Upgrade User Management Server Azure App Service

Follow the given steps to upgrade the User Management Server App Service to the latest version:

1. Preparation for upgrade.
2. Stop User Management Server Azure App Service.
3. Upgrade User Management Server to the latest release version.
4. Start User Management Server Azure App Service.
5. Run the User Management Server and check the new features.

### Preparation for upgrade User Management Server

* To upgrade the User Management Server Azure App Service to latest version, access the [Azure portal](https://portal.azure.com) with Azure portal credentials and access rights to edit the User Management Server App Service.

### Stop User Management Server Azure App Service

Before starting the upgrade/update process, stop the User Management Server App Service. Follow these steps to stop the User Management Server App Service:

1. Log in to [Azure portal](https://portal.azure.com).
2. Select App Services in Microsoft Azure Services.
3. Select User Management Server Azure App Service.
4. In the **Overview** section, click **Stop**.
![Stop User Management Server Azure App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/stop-app-service.png)

### Upgrade User Management Server to the latest release version

Follow the below steps to configure the existing Azure blob storage details to the latest User Management Server:

1. Log in to [Azure portal](https://portal.azure.com).
2. Select User Management Server App Services.
3. Choose **Deployment Center** in the left panel of the User Management Server App Service.
    ![App service deployment center](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/deployment-center.png)

4. Once the deployment center is clicked, click the **Disconnect**. Now the deployment panel will open.
    ![Choose deployment source](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/Disconnect.png)

5. Select the **External** in the source control tab and click **Continue**.
    ![Select external repository option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/source-control.png)

6. Select the **App Service Kudu build server** and click  **Continue**.
    ![Build provider](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/build-provider.png)

7. Now, fill the below details in the **Configure** tab  and click  **Continue**.
    * Repository URL - <https://github.com/SyncfusionInstall/enterpriseserver-umsazure.git>
    * Branch - `v{{site.umsVersion}}`
    * Repository Type - Git

      ![Deployment option for external repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/repository-configure.png)

8. Next click on **Finish** option. The **Successfully set up deployment** notification will be shown in the notification blade.
    ![Finish deployment](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/finish-upgrade.png)

    ![Success notification of deployment option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/setup-success.png)

9. Select the **Sync** button in the deployment center blade.
    ![Synchronization of external repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/synchronization-external-repository.png)

10. Synchronization request submitted notification is shown in the notification blade and synchronization progress is shown in the deployment options blade.
    ![Synchronization status details](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/synchronization-progess.png)

11. Please wait until synchronization is completed.

### Start User Management Server Azure App Service

After upgrading the Azure App Service, start the User Management Server App Service. Follow these steps to start App Service:

1. Select App Services in **Microsoft Azure Services**.
2. Select User Management Server Azure App Service.
3. In the **Overview** section, click **Start**.
![Stop User Management Server Azure App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/start-app-service.png)

#### Restart WebJobs

After the Azure Blob storage details are configured in the User Management Server application, you should restart the WebJobs. Follow the given steps to restart the WebJobs:

1. Select **WebJobs** in the left panel of the latest User Management Server app service.
2. Select `UserManagementServerScheduler` WebJobs and click **Stop**.
![Stop Web job](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/stop-ums-web-job.png)

3. After the status for `UserManagementServerScheduler` WebJobs is changed to stop, click **Start**.
![Start Web job](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/start-ums-web-job.png)

### Run the User Management Server and check the new features

After the User Management Server upgrade process is completed, launch the User Management Server from the Azure app service details blade or enter the User Management Server URL in the browser.
![Launch User Management Server app service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/launch-app-service.png)

## Configure Existing Report Server with Existing User Management Server

After the successful upgrade of Report Server and User Management Server Azure on app service,connect the Bold Reports On-Premise with the User Management Server. To connect, you must create a application on User Management Server. You can find the details on how to add application in User Management Server [here](/on-premise/user-management-server/manage-applications/#add-new-application).

After the successful creation of an application in User Management Server. Start the Report Server Azure app. Enter the User Management Server URL, Client Id, Client Secret of the Report Server Application that is created on User Management Server.

![Report Server startup page](/static/assets/on-premise/images/installation-and-deployment/upgrade/on-premises-server/report-server-startup.png)

Click on the `Proceed` button. Application will check for any system settings conflict and users conflict while migrating Data from Report Server to User Management Server. To resolve conflicts on migrating Data click [here](/on-premise/installation-and-deployment/upgrade/upgrade-on-premises-server-with-existing-ums/#resolve-settings-conflict).

After resolving user duplicates, click `Proceed` button. Resolved users will be migrated and it will be redirected to login page.
