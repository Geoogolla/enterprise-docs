---
layout: post
title:  Reset a User Password – Admin Utility | Bold Reports
description: Learn how to use the command line interface to reset the current password of any user in Bold Reports Enterprise using their email address or user name.
platform: Report-platform
documentation: ug
---

# Reset Password

You can reset the current password of any user using their email address or username with this command. Please follow these steps:

* Open the command prompt and change the directory to the Admin Utility location.

   ```sh
   cd C:\BoldServices\utilities\adminutils
   ```

   ![command](/static/assets/on-premise/images/tenant-management/admin-utility/cmdforutils-1.png)

* After changing the directory, please run the below command to reset password.

   ```sh
   Syncfusion.Server.Commands.Utility.exe reset -u 'user email or username here' -p 'new password here'
   ```

   ![reset-command](/static/assets/on-premise/images/tenant-management/admin-utility/resetcmd-1.png)

* Once the password has been reset successfully, the user can login with the updated password.
