---
layout: post
title: Kerberos user authentication | Report Server | Syncfusion
description: Describes how to configure  Bold Reports On-Premise to use Kerberos for user authentication to login to Report Server.
platform: report-platform
documentation: ug
---

# Kerberos authentication settings

This section explains how to configure the  Bold Reports On-Premise to use Kerberos for user authentication. Refer to the following links for more details about Kerberos authentication protocol:

* [Kerberos Explained](https://msdn.microsoft.com/en-us/library/bb742516.aspx)
* [Microsoft Kerberos](https://msdn.microsoft.com/en-us/library/windows/desktop/aa378747)

1. To change the `Kerberos Authentication Settings`, click the Setting option in the Report Server left panel.
2. Navigate to the **User Directory** tab.
3. Click the **Kerberos Authentication** as shown in the following image.
![Kerberos Authentication Settings](/static/assets/on-premise/images/authentication/kerberos-authentication-settings.png)

## Configure Kerberos settings

To configure the Report Server to use Kerberos, input the machine name and host domain name. The Report Server will generate a `.bat` file that should be run in the Windows Server, where the Active Directory Domain Services role is installed.

    * Machine name: You can find the machine name using the following steps:
        1. Right-click **My computer** and select **Properties**.
        2. Find the machine name labeled as `Computer name` under `Computer name, domain, and workgroup settings`.

    * Host domain name: This is the DNS name of the Report Server. For example, example.com.

## Generate `SetSPN` batch file

To generate `SetSPN` batch file, follow these steps:

1. After setting the above mentioned property values, click **Generate and Download .bat File**. The Report Server will generate a `.bat` file for setting the SPN and will prompt you to download it.
![Kerberos Authentication Settings](/static/assets/on-premise/images/authentication/generate-settings-bat.png)

2. Save and run the generated `.bat` file in the Windows Server machine, where the Active Directory Domain Services role is installed.

Now, the service principal name will set automatically and allow the Report Server to authenticate users using Kerberos authentication.