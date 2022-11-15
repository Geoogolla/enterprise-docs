---
layout: post
title: Architecture Diagram for Bold Reports On-Premise Edition
description: This section explains the architecture diagram for Bold Reports On-Premise Edition provided to create, manage, and share the interactive business reports.
platform: report-platform
documentation: ug
keywords: boldreports
canonical: ''
---

# Architecture Diagram for Bold Reports

This section explains the architecture diagram for Bold Reports On-Premise Edition.

## Overview of Bold Reports

The Bold Reports is an online solution for analyzing data on the web using interactive reports with key metrics and tracking your business easily.

It is an end-to-end solution for creating, managing, and sharing interactive business reports that include a powerful report designer for composing easily.

## Architecture Diagram for Bold Reports

This topic provides users responsible for supporting bold reports in their organization with an advanced description of the architecture of bold reports.

The architecture of Bold Reports is a multi-tenant solution. Each tenant has deployed with its own database and resource, which ensures the data isolation of one tenant from others.

The diagram below describes the components of a Bold Reports installation and how Bold Reports works on the server.

![Architecture Diagram](/static/assets/on-premise/images/architecture/architecture-diagram.png)

The Bold Reports is provided with a single installation process. After installing the bold reports on a server, you will have access to all of the Bold Reports functionality.

The Bold Reports application has two types of functional systems:

* Bold ID - It manages user identities and sites.
* Bold Reports Server- It manages reports, data sources, datasets, schedules, and user permissions.
Storage Options

### Bold ID Application

Bold ID Application is an identity provider for Bold Platform products. The [tenant](./../administrator-guide/manage-tenants/) details and the user details are maintained in the Bold ID application. Login and logout have been processed in this application. The Bold ID Application is a core application of the multi-tenant solution that manages the tenant and its user identity.

Tenant and user details are stored in the **Tenant Catalog**, and login details are stored in the **Identity Service**. Each tenant has deployed with its own database and resources, which ensures the data isolation of one tenant from others.

If we called the Bold ID (UMS site) URL, the request was sent to the **Report Server**, which is the central hub of the Bold Reports. Then it will move to the Identity Service to check whether it is logged in or not. After checking, it will read or update tenant details stored in the **Tenant Catalog** and return them to the **Report Server**.

> IDP and first Reports tenant can share the same database, but you cannot share the same database between the two tenant applications.

### Bold Reports Application

Bold Reports Enterprise Reporting has comes with multi-tenancy, which allows administrators to deploy multiple tenants and manage their reports. Each tenant has its own database for managing its reports and resources, so they are isolated from each other tenant under a single Bold Reports deployment.

Again, the connection has been established from the **Report Server** to the tenant. Then it will contact the respective tenant using DB, and it will retrieve the data from the tenant and sent it to the **Report Server**.

After getting the tenant DB details, we can connect the **Data Viewer Service** using a live connection to retrieve the data and create or view the report.

To create a new report, refer [here](../designer-guide/report-designer/design-rdl-report-in-web-report-designer/)