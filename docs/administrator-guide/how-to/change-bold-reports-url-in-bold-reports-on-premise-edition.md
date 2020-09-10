---
title: Change Bold Reports URL in BoldReportsOnPremiseEdition
description: This documentation explains how to change the Bold Reports URL in the Bold Reports On-Premise Edition.
keywords: report-platform, reporting
---

# How to map a domain name for Bold Report On-Premise Edition before startup

Before configuring the Bold Reports On-Premise Edition, you must change the Bold Reports URL in `Config.xml` file of Bold Reports On-Premise Edition.

The following steps to change the Bold Reports URL:

1. Go to the deployed location and update the new binding values in following configuration files.

   >By default, Bold Reports will be deployed on C:\Bold Reports

   * Update the **`InternalAppReportUrl`** value in config file from below location.
   **`{Deployed Location}`**\IDP\UMS\Configuration\boldreports\Config.xml
   ![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)
   * Update the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file from below location.
   **`{Deployed Location}`**\Report Server\Configuration\Config.xml
   ![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)
2. Restart the site in IIS and browse the site. Configure the Bold Reports On-Premise Edition startup by referring this [link](/administrator-guide/application-startup/)