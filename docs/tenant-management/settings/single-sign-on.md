---
layout: post
title: Configure SSO Settings | Report Server | Syncfusion
description: Learn how to configure SSO settings in Bold Reports On-Premise and perform Single Sign-On for users in Azure AD.
platform: Report-Platform
documentation: ug
---

# Configure SSO Settings in Bold Reports On-Premise

This section explains on how to configure SSO settings in Bold Reports On-Premise and perform Single Sign-On for users in Azure Active Directory.

## Steps to Configure SSO Settings in Bold Reports On-Premise

1. Login with the URL `{Bold Reports On-Premise URL}/ums/administration` using admin credential.

2. Click on `SSO` tab and check the `Enable SSO` option.
   ![SSO settings](/static/assets/on-premise/images/tenant-management/settings/sso-settings.png)

3. Save the following fields in UMS settings by referring the configuration [link](/on-premise/how-to/set-up-azure-active-directory/#configure-the-azure-active-directory-details-in-bold-reports-on-premise-to-perform-single-sign-on).

4. After the values are saved, the application will be `Restarted` to apply the settings.

### Login with Azure ADFS

After the Single Sign-On settings are saved and the Azure users are imported to the Bold Reports On-Premise, you can logout from the application. Now, the login page is provided with the additional button named `Microsoft ADFS`, which opens the external authentication provider login window, as follows.

 ![External Provider login page](/static/assets/on-premise/images/tenant-management/settings/login.png)

After sign in with the Azure username and password, you can log on to the Bold Reports On-Premise.

> To log on to the Bold Reports On-Premise with Azure ADFS, the particular user should be imported to the application. If the user is not imported, it redirects to the login page.