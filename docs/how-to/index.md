---
title: Change Bold Reports URL in BoldReportsOn-PremiseEdition
description: This documentation explains how to change the Bold Reports URL in the Bold Reports On Premise Edition.
keywords: report-platform, reporting
---

# How to startup the Bold Reports On-Premise Edition using the newly added bindings from IIS

You can change the Bold Reports URL in Config.xml file of Report Server.

The following steps to change the Bold Reports URL:

1. Go to the deployed location and update the new binding values in following configuration files.

   >By default, Bold Reports will be deployed on C:\Bold Reports

   * Update the **`InternalAppReportUrl`** value in config file from below location.
   **`{Deployed Location}`**\IDP\UMS\Configuration\boldreports\Config.xml
   ![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)
   * Update the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file from below location.
   **`{Deployed Location}`**\Report Server\Configuration\Config.xml
   ![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)
2. Restart the site in IIS and browse the site. Configure the Bold Reports On-Premise Edition startup by referring this [link](/on-premise/application-startup/).