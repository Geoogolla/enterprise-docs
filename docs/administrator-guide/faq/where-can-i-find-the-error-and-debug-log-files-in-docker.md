---
layout: post
title: Log files location in Bold Reports Docker
description: This topic explains about where to find the error logs and debug files to identify the issues in the Bold Reports Docker.
platform: report-platform
documentation: ug
---

# Where can I find the error and debug log files in Docker

## Error logs

Error log files are generated when an exception occurs while configuring or interacting with the Bold Reports application.

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold Reports application.

## Log directories

For any configurations made in the Bold Reports, log files are generated in deployed locations under the various modules.

### Steps to get the log files from Docker using Command Prompt/Powershell

1. In the root directory type the below command.

   **cd /var/lib/docker/volumes**

2. Type **ls** command to get the list of all the files present inside the directory.

3. Type the below command to move into the logs directory.

   **cd {foldername}\_boldservices\_data/_data/logs**

   ![Logs](/static/assets/on-premise/images/faq/docker-folder.png)

   ![Logs Directory](/static/assets/on-premise/images/faq/docker-logs.png)

4. Type **ls** command to get all the files.

>Note: **foldername** is the folder which contains docker-compose.yml and docker.conf files.

5. You can find the logs folder in _data location and we need to zip the logs folder.

   ![Directory](/static/assets/on-premise/images/faq/logs-folder-docker.png)

6. Please install zip and curl by running the below commands,

   **apt-get install zip**

   **apt-get install curl**

7. Move into logs directory and Zip the logs folder by running the below command

   **zip -r {folder.zip} .**

   ![Zip Command](/static/assets/on-premise/images/faq/zip-command.png)

8. Now type **ls**, you can see zip folder created.

   ![Zip Folder](/static/assets/on-premise/images/faq/zipped-folder.png)

9. Upload the zip file through bashupload.com site by using below command.

   **curl bashupload.com  -T {zipped folder Name}**

   ![Crl Command](/static/assets/on-premise/images/faq/curl-docker.png)

10. Please copy and browse the link generated. Download the zip folder and share.

    ![URL](/static/assets/on-premise/images/faq/zip-url.png)

## Basic Commands

| Command          | Used For|
|------------------     |------------------------------------------------------------  |
| cd    |    Change the directory.               |
| pwd        |  Find the full path of current directory.     |
| ls or ls -l        | Used for list the files and folders of the current directory.|
| cat filename       | Open the file in the powershell.|
| nano filename       | Edit the file in the powershell.|