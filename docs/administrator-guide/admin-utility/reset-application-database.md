---
layout: post
title:  Reset Application Database – Admin Utility | Bold Reports
description: Learn how to reset the application database of Bold Reports server application through the command line interface.
platform: Report-platform
documentation: ug
---

# Reset Application Database

You can reset the database of the Bold Reports application using this command. Follow the below steps:

* Open the command prompt and change the directory to the admin utility location.

   ```sh
   cd C:\BoldServices\utilities\adminutils
   ```

   ![command](/static/assets/on-premise/images/tenant-management/admin-utility/utilscmd-1.png)

* After changing the directory, run the following command to reset database.

   ```sh
   Syncfusion.Server.Commands.Utility.exe dbconfig -servername "localhost" -databasename "BoldReportsMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false
   ```

   > **IMPORTANT:**  command details:  
servername – SQL server hostname/IP  
databasename – SQL database name  
u – SQL server username  
p – SQL server password  
port - port number of SQL Server(Required PostgreSQL only)  
iswindowsauthentication – Is windows authentication required (this is optional)  
sslenabled – Is encrypted connection required (this is optional)

   ![reset-command](/static/assets/on-premise/images/tenant-management/admin-utility/reset-con-string-1.png)

* Once the database has been updated successfully, then restart the application in IIS.
