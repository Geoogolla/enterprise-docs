---
layout: post
title: SSO with OpenID Connect support in UMS | Bold Reports
description: Learn how to configure User Management Server with an OpenID based identity provider for Single Sign-on authentication using OpenID Connect.
platform: report-platform
documentation: ug
---

# OpenID Connect support in User Management Server

The User Management Server can be configured to support OpenID Connect for Single Sign-On (SSO), allowing users to log in directly to User Management Server after authenticating using OpenID Connect.

## Configure OpenID Connect provider

1. An account with an OpenID provider.

2. Register the User Management Server in the OpenID Connect provider.

## Steps to configure OpenID in User Management Server

1. Log in to the Bold ID with an admin credential.

2. In the left side menu, click `Settings`, then `Authentication`, and finally `OpenID Connect`.

    ![Authentication settings](/static/assets/on-premise/images/tenant-management/site-management/authentication/openid-auth-page.png)

3. Provide the following details in the `OpenID Connect` settings page of User Management Server.

    <table>

    <tr>
    <td>Provider Name</td>
    <td>It represents the name of the authentication provider that will be displayed in the login page.</td>
    </tr>

    <tr>
    <td>Provider Logo</td>
    <td>It represents the logo of the authentication provider that will be displayed in the login page.</td>
    </tr>

    <tr>
    <td>Authority</td>
    <td>It is the instance created for the user in the provider.</td>
    </tr>

    <tr>
    <td>Client ID</td>
    <td>It is an unique identifier provided to each of the applications while registering in the providers.</td>
    </tr>

    <tr>
    <td>Client Secret</td>
    <td>It is a secret key that is used to authorize the applications.</td>
    </tr>

    <tr>
    <td>Identifier</td>
    <td>It is the property name that holds the email address of the user in the deserialized ID token.</td>
    </tr>

    </table>  

    ![OpenId settings](/static/assets/on-premise/images/tenant-management/site-management/authentication/openid-auth-configuration.png)

If you need to import the OpenID Connect groups, you must configure the group details while saving the OpenID authentication settings.  

![OpenId Group setting](/static/assets/on-premise/images/tenant-management/site-management/authentication/openId-group-settings.png)

The following list of OpenID Connect providers explain how to connect with the User Management Server.

* [Auth0](../../../../authentication/single-sign-on/openid-connect/auth0/)
* [Okta](../../../../authentication/single-sign-on/openid-connect/okta/)
* [OneLogin](../../../../authentication/single-sign-on/openid-connect/onelogin/)

## Set OpenID Connect as default authentication

OpenID Connect can be set as default authentication when [OpenID Connect settings](#steps-to-configure-openid-in-user-management-server) is enabled.

Follow these steps to configure default authentication:

1. In settings page, click `Authentication` tab and select `General`.

2. Check the **Enable Default Authentication** option and select the **OpenID Connect** as default authentication provider, as shown in the following screenshot.  

   ![Enable OpenID Default Authentication](/static/assets/on-premise/images/tenant-management/site-management/authentication/openid-default-authentication.png)

## Disabling OpenID connect settings

Unchecking the Enable Default Authentication option and then clicking `Save` will disable the [OpenID Connect default authentication](#set-openid-connect-as-default-authentication).  

![Disable Default Authentication](/static/assets/on-premise/images/tenant-management/site-management/authentication/disable-openid-settings.png)
