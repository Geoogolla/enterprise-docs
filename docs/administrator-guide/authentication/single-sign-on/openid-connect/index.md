---
layout: post
title: OpenID Connect in Bold Reports Enterprise Reporting
description: Describes step-by-step procedure to configure OpenId connect settings, so that the user can login to the Bold Reports application.
platform: report-platform
documentation: ug
---

# Single Sign-On(SSO) with OpenID Connect authentication

The Bold Reports application can be configured with OpenID Connect for Single Sign-On (SSO), so that the users can log in directly to Bold Reports application after authenticating using the OpenID Connect.

## Prerequisites

1. An account with an OpenID Connect provider.

2. Register the Bold Reports application in the OpenID Connect provider.

## Steps to configure OpenID Connect in Bold Reports

1. To configure the OpenID Connect connection details, click the settings option in the Report Server left-side panel.

2. Navigate to the Authentication tab and OpenID Connect as shown in the following image
![Authentication Settings](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/authentication-settings.png)

3. Provide the following details in the OpenID Connect settings of Bold Reports application.
<table>
<tr>
    <td>
        Provider Name
    </td>
    <td>
        It represents the name of the authentication provider to be displayed in the login page.
    </td>
</tr>
<tr>
    <td>
        Provider Logo
    </td>
    <td>
        It represents the logo of the authentication provider to be displayed in the login page.
    </td>
</tr>
<tr>
    <td>
        Authority
    </td>
    <td>
        It is the instance created for the user in the provider.
    </td>
</tr>
<tr>
    <td>
        Client ID
    </td>
    <td>
        It is an unique identifier provided to each of the applications while registering in the providers.
    </td>
</tr>
<tr>
    <td>
        Client Secret
    </td>
    <td>
        It is a secret key that is used to authorize the applications.
    </td>
</tr>
<tr>
    <td>
        Identifier
    </td>
    <td>
        It is the property name that holds the email address of the user in the deserialized ID token.
    </td>
</tr>
</table>

   ![OpenID Connect Authentication](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/openid-connect-authentication.png)

The previous mentioned similar steps are applicable to configure the OpenID Connect in User Management Server by logging into the URL `{Bold Reports URL}/ums/administration/authentication` with admin credential.

Following are the list of few OpenID Connect providers and that explains how to connect with the Bold Reports application.

* [Auth0](./../openid-connect/auth0/)
* [Okta](./../openid-connect/okta/)
* [OneLogin](./../openid-connect/onelogin/)

The OpenID Connect is provided in both the Bold Reports sites and User Management Server. OpenID Connect can be handled for each sites individually in the settings page by disabling the option as in the following screenshot.

![OpenId Global Authentication Control](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/openid-global-authentication-control.png)