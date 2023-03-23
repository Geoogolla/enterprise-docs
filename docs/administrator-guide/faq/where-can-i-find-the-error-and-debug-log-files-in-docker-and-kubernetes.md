---
layout: post
title: Log files location in Bold Reports Kubernetes and Docker
description: This topic explains about where to find the error logs and debug files to identify the issues in the Bold Reports Kubernetes and Docker.
platform: report-platform
documentation: ug
---

# Where can i find the error and debug log files in Docker and Kubernetes

## Error logs

Error log files are generated when an exception occurs while configuring or interacting with the Bold Reports application.

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold Reports application.

## Log directories

For any configurations made in the Bold Reports, log files are generated in deployed locations under the various modules.

### Steps to get the log files from Docker using powershell

1. In powershell type **sudo su** command to go into the root directory.

2. In the root directory type the below command.

   **cd /var/lib/docker/volumes**

3. Type **ls** command to get the list of all the files present inside the directory.

4. Type the below command to move into the directory.

   **cd foldername\_boldservices\_data/_data/logs**

5. Type **ls** command to get all the files.

>Note: **foldername** is the folder which contains docker-compose.yml and docker.conf files.

## Logs for particular container

1. Use the below command to get the list of containers.

   **docker ps**

2. Use the below command to connect to a container that is already running and to access the files and folders.

   **docker exec -it container-name /bash**

3. Type **ls** command to get all the files.

### Steps to get the log files from Kubernetes using powershell

1. Type the below command to get all the pods available in the cluster.

   **kubectl -\-kubeconfig=filename.config get pods -n namespace**

2. To get the logs of a particular pod then use the below command.

   **kubectl -\-kubeconfig=filename.config logs podname -n namespace**

3. To get all the logs of the application, Use the below bash command.

   **kubectl -\-kubeconfig=filename.config exec -n namespace -it podname -\- bash**

4. Use **cd /application/app_data/logs** command and type **ls** command to list all the files inside the logs.

5. Type the below command to open the file in powershell.

   **cat filename**

6. If you need to edit or copy the content in the file then please use below command to install nano

   **apt-get install nano**

7. After installing nano type the below command to edit or copy the logs.

   **nano filename**

>Note: Replace namespace with your namespace.
Replace filename.config with your config file name.
Replace podname with your podname which you need to get logs.

## Basic Commands

| Command          | Used For|
|------------------     |------------------------------------------------------------  |
| cd    |    Change the directory.               |
| pwd        |  Find the full path of current directory.     |
| ls or ls -l        | Used for list the files and folders of the current directory.|
| cat filename       | Open the file in the powershell.|
| nano filename       | Edit the file in the powershell.|