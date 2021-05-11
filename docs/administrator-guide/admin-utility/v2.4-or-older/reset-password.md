---
layout: post
title:  Resetting User Password – Admin Utility for v2.4 | Bold BI Docs
description: Learn how to use the command line interface to reset the password of any user in Bold BI Embedded of v2.4 or earlier using their email address.
platform: bold-bi
documentation: ug
---

# Reset Password for Bold BI version 2.4 or older

You can reset the current password of any user using their email address with this command. Please follow these steps:
   
1. Open the command prompt and change the directory to the admin utility location. 
~~~
cd C:\Bold BI\Utilities\AdminUtils
~~~
![command](/static/assets/on-premise/images/tenant-management/admin-utility/displaycmd.png)
 
2. After changing the directory, please run the following command to reset the password.  
~~~
AdminUtils.exe reset -u 'user email here' -p 'new password here'
~~~  
![reset-command](/static/assets/on-premise/images/tenant-management/admin-utility/resetcmd.png) 

3. Once, the password has been successfully reset, the user can login with the new password.
