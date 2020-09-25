---
layout: post
title: Configure Single Sign-On Setting | Bold Reports On-Premise
description: Configuring Single Sign-On settings to perform Single Sign-On between  Bold Reports On-Premise or Azure Active Directory.
platform: report-platform
documentation: ug
---

# Single Sign-On (SSO) - Azure ADFS settings

> For the  Bold Reports On-Premise version `v1.1.13` and higher, SSO settings will be in Syncfusion User Management Server. To know more details click [here](https://help.syncfusion.com/user-management-server/site-settings/authentication/authentication-settings#azure-ad-sso)

You can configure the Report Server to allow users to login using Single Sign-On. Follow the given steps to configure the  Bold Reports On-Premise to perform the Single Sign-On with Azure Active Directory:

1. To change the `Single Sign-On Settings`, click the Settings option in the Report Server left panel.
2. Navigate to the **SSO** tab.
3. Click the **Enable SSO** check box as shown in following image.
![Single Sign-On Settings](/static/assets/on-premise/images/authentication/single-sign-on/sso-settings.png)

## Metadata URI

The URL for the federation metadata document that is used by the application for authentication through Microsoft Azure AD. For Example, `http://myFederationServer/federationmetadata/2007-06/federationmetadata.xml`

![Federation Metadata document URI](/static/assets/on-premise/images/authentication/single-sign-on/metadata-uri.png)

## Authority

The URL for the authority that issues the authorization token. For Example, `http://myFederationServer/adfs`.

![Authority URL](/static/assets/on-premise/images/authentication/single-sign-on/authority.png)

## Designer client ID

The client ID of the Report Designer application, which you have created in your Azure Active Directory.

![Report Designer Client Id](/static/assets/on-premise/images/authentication/single-sign-on/designer-client.png)

## Tenant name

The default `Domain Name` of your Active Directory.

![Tenant Name](/static/assets/on-premise/images/authentication/single-sign-on/tenant-name.png)

## Mobile app client ID

The client ID of the Syncfusion Reports mobile application, which you have created in your Azure Active Directory.
![Mobile App Client Id](/static/assets/on-premise/images/authentication/single-sign-on/mobile-app-client.png)

## Relying party ID

A URI that identifies the relying party of the security token service. This is the default URL of your  Bold Reports On-Premise application.

> This URL should be entered as the URL of Sign-On URL, App ID URI, reply URL of your server application, and redirect URI of your native client application in the Azure Active Directory.

![Report Server sign on URL](/static/assets/on-premise/images/authentication/single-sign-on/report-server-sign-on-url.png)

![SSO APP ID URI and Reply URL](/static/assets/on-premise/images/authentication/single-sign-on/app-id-and-reply-url.png)

![Report Designer redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/report-designer-redirect-uri.png)

## Enable or disable Single Sign-On

You can enable or disable the Single Sign-On anytime using the `Enable SSO` option.
![Enable or disable Single Sign-On](/static/assets/on-premise/images/authentication/single-sign-on/enable-sso.png)