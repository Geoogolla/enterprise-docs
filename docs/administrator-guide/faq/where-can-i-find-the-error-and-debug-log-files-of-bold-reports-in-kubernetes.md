---
layout: post
title: Debug-Error Log files location in Bold Reports Kubernetes
description: This topic explains about where to find the error logs and debug files to identify the issues in the Bold Reports Kubernetes.
platform: report-platform
documentation: ug
---

# Where can I find the error and debug log files in Kubernetes

## Error logs

Error log files are generated when an exception occurs while configuring or interacting with the Bold Reports application.

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold Reports application.

## Log directories

For any configurations made in the Bold Reports, log files are generated in deployed locations under the various modules.

### Steps to get the log files from Kubernetes using Powershell/Command Prompt

1. Type the below command to get all the pods available in the cluster.

   **kubectl -\-kubeconfig=filename.config get pods -n namespace**
   ![Pods](/static/assets/on-premise/images/faq/pods.png)

2. To get the logs of a particular pod then use the below command.

   **kubectl -\-kubeconfig=filename.config logs podname -n namespace**
   ![Logs](/static/assets/on-premise/images/faq/pod-logs.png)

3. To get all the logs of the application, Use the below bash command to go into the directory.

   **kubectl -\-kubeconfig=filename.config exec -n namespace -it podname -\- bash**

   ![Bash Command](/static/assets/on-premise/images/faq/bash-logs.png)

4. Use **cd /application/app_data/logs** command and type **ls** command to list all the files inside the logs.

   ![App Logs](/static/assets/on-premise/images/faq/application-logs.png)

5. You can find the logs folder in app_data location and we need to zip the logs folder.

6. Please install zip and curl by running the below commands,

   **apt-get install zip**

   **apt-get install curl**

7. Navigate to the logs directory and Zip the logs folder by running the below command

   **zip -r {folder.zip} .**

   ![Zip Command](/static/assets/on-premise/images/faq/kubectl-zipcommand.png)

8. Now type **ls**, you can see the zip folder created.

   ![Zip Folder](/static/assets/on-premise/images/faq/kube-zip-folder.png)

9. Upload the zip file through bashupload.com site by using below command.

    **curl bashupload.com  -T {zipped folder Name}**

    ![Curl Command](/static/assets/on-premise/images/faq/kube-curl.png)

10. Please copy and browse the link generated. Download the zip folder and share.

    ![URL](/static/assets/on-premise/images/faq/kube-url.png)

>Note: Replace namespace with your namespace.
Replace filename.config with your config file name.
Replace podname with your podname which you need to get logs.

## Basic Commands

| Command          | Used For|
|------------------     |------------------------------------------------------------  |
| cd    |    Change the directory.               |
| pwd        |  Find the full path of current directory.     |
| ls or ls -l        | Used to list the files and folders of the current directory.|
| cat filename       | Open the file in the powershell.|
| nano filename       | Edit the file in the powershell.|