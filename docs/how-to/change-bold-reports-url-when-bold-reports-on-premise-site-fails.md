---
title: Change Bold Reports URL when Bold Reports site fails
description: This documentation explains how to change the Bold Reports URL when Bold Reports On-Premise site fails.
keywords: report-platform, reporting
---

# How to resolve unavailable error with Bold Reports On-Premises Edition when it is occurred in reason of domain name change

If Bold Reports On-Premise site fails to launch, you have to change the Bold Reports URL in `Config.xml` file of Bold Reports On-Premise Edition.

The following steps to change the Bold Reports URL:

1. Go to the deployed location and update the new binding values in following configuration files.

   >By default, Bold Reports will be deployed on C:\Bold Reports
  
   * Update the **`InternalAppReportUrl`** value in config file from below location.
    **`{Deployed Location}`**IDP\App_Data\Configuration\Config.xml
   ![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)
   * Update the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file from below location.
   **`{Deployed Location}`**\Report Server\Configuration\Config.xml
   * If file exists in below location, change the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file
    **`{Deployed Location}`**\Report Server\App_Data\Configuration\Config.xml
   ![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)
2. Restart the site in IIS and browse the site.

3. Delete the site by clicking the "Delete" option from site listing page.
![Delete option in site](/static/assets/on-premise/images/how-to/delete-option-in-site.png)

4. Create a new site by following this [link](/on-premise/tenant-management/create-site/)