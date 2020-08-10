---
layout: post
title: Deploy as Virtual Machine in Microsoft Azure | Syncfusion
description: Learn how to create the Bold Reports On-Premise Azure Virtual Machine (VM) in the Microsoft Azure for deployment.
platform: report-platform
documentation: ug
---

# Deploy Report Server as VM with Microsoft Azure

This section shows how to create a Bold Reports On-Premise Azure VM in the Microsoft Azure.

## Preconfigured image via Azure marketplace

You can get the Report Server up and run in Azure based on a preconfigured Server image through the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syncfusion.report-server-vm). To achieve this, follow these steps:

1. Sign in to the [Azure portal](https://portal.azure.com/).
2. Click **New** in the upper left.
3. Search for `Bold Reports On-Premise`.
![Search Syncfusion Report Server in Azure portal](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/portal-search.png)
4. Select Report Server and click **Create**.
![Select Syncfusion Report Server](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/select-syncfusion-report-server.png)
![Click on create button option](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/create-option.png)

## Basics blade

The following are the basics blade requests administrative information for the virtual machine:

* **Name**: Enter a name for the virtual machine. The name must be 1-15 characters long and it should not have any special character.
* **User name**: Enter a user name that is used to create a local account on the VM. The local account is used to sign in to and manage the VM.
* **Password**: Enter strong password that is used to create a local account on the VM. The local account is used to sign in to and manage the VM. The password must be 8-123 characters long and meet three out of the four complexity requirements like one lower case character, one upper case character, one number, and one special character.
* **Subscription**: The subscription is optional. Learn more about subscription from[here](https://blogs.msdn.microsoft.com/arunrakwal/2012/04/09/create-windows-azure-subscription/).
* **Resource group**: Select an existing resource group or type the name for a new one. Learn more about resource groups from [here](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groups).
* **Location**: Select an Azure data center location, where you want the VM to run.
* After selecting the center location, click **Next** to continue to the next blade.
    ![Basic VM information](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/vm-basic-details.png)

## Size blade

The size blade identifies the configuration details of the VM, and lists various choices that include OS, number of processors, disk storage type, and estimated monthly usage costs.

* Choose a VM size and click **Select** to continue.
![Select the VM Size](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/vm-size-selection.png)

## Settings blade

The settings blade requests storage and network options. You can accept the default settings. Azure creates appropriate entries where they are needed. If you select a virtual machine size that supports it, try Azure Premium Storage by selecting Premium (SSD) in disk type.

### Storage

* **Storage**: Premium disks are Solid-state Drives (SSD) with consistent and low-latency performance. They provide the best balance between price and performance, and are ideal for I/O-intensive applications and production workloads. Standard disks (HDD) are magnetic drives and are preferable for applications where data is accessed infrequently. After making all the changes, click **OK**.
* **Use managed disks**: Enable this feature in Azure, will automatically manage the availability of disks to provide data redundancy and fault tolerance, without creating and managing storage accounts on your own. Managed disks may not be available in all regions. Learn more about managed disk from [here](https://docs.microsoft.com/en-us/azure/storage/storage-managed-disks-overview)
* **Storage account**: Disks for Azure virtual machines are created in storage accounts. Learn more about storage account from [here](https://docs.microsoft.com/en-us/azure/storage/storage-introduction).

### Network

* **Virtual network**: Virtual machines are logically isolated from each other in Azure. You can configure their IP address ranges, subnet's, route tables, gateways, and security settings like a traditional network in your data center. Virtual machines in the same virtual network can access each other by default.
* **Subnet**: A subnet is a range of IP addresses in your virtual network, which can be used to isolate virtual machines from each other or from the internet.
* **Public IP address**: Use a public IP address to communicate with the virtual machine from outside the virtual network.
* **Network security group (firewall)**: A network security group is a set of firewall rules that control traffic to and from the virtual machine.

### Extensions

* **Extensions**: Add new features like configuration management or antivirus protection to your virtual machine using extensions. Learn more about extension from [here](https://azure.microsoft.com/documentation/articles/virtual-machines-windows-extensions-features/).

### High availability

* **Availability set**: To provide redundancy to your application, group two or more virtual machines in an availability set. This configuration ensures that during a planned or unplanned maintenance event, at least one virtual machine will be available and meet the 99.95% Azure SLA. The availability set of a virtual machine cannot be changed after it is created.

### Monitoring

* **Boot diagnostics**: Captures serial console output and screenshots of the virtual machine running on a host to help diagnose startup issues.
* **Guest OS diagnostics**: Gets metrics at every minute for your virtual machine. You can use them to create alerts and gets information on your applications.
* **Diagnostics storage account**: Metrics are written to a storage account, so you can analyze them with your own tools. After updating all the changes, click **OK**.
![Configure optional settings](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/vm-settings.png)

## Summary blade

* On the summary page, click **OK** to start the Bold Reports On-Premise virtual machine deployment.
![Report Server VM details validation](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/vm-details.png)
![Deploying Syncfusion Report Server](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/vm-deploy.png)

## Connect to Bold Reports On-Premise virtual machine

After the deployment progress is completed, the Report Server VM can be connected through the Remote Desktop Connection (RDP). Follow these steps to connect to the virtual machine:

1. Click **Connect** in the virtual machine Overview window. A Remote Desktop Protocol (`.rdp`) file will be downloaded from the Azure portal.
![Connect to download RDP File](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/connect.png)

2. Open the `.rdp` file and click **Continue** for the unknown publisher warning.
![RDP warning](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/rdp-warning.png)

3. Enter the credentials that you have given while deploying the VM as follows and click **OK**.
![VM Credentials.png](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/vm-credentials.png)

4. On successful connection, the identity verification window will be shown. Click **OK** to accept the certificate problems and connect to the virtual machine.
![Verify the identity of the virtual machine](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/vm/certificate-warning.png)

## Run the Report Server

Desktop shortcuts to start and stop the Report Server can be found, after connecting to the virtual machine. By default, the Report Server is hosted in the 80 port in the IIS. Follow these steps to run the Report Server:

1. Open the Start Bold Reports On-Premise shortcut to run the Report Server. As the Report Server has not been configured yet, application startup page will be shown.
2. Refer to the given link to do the [application startup](/on-premise/application-startup/startup/).