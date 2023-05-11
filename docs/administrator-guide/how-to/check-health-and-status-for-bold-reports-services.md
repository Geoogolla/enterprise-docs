---
layout: post
title: Health Check and Status Check in Bold Reports Services.
description: This documentation explains regarding the health check and the status check  of the bold reports services.
keywords: report-platform
documentation: ug
---

# Check the Health and Status of Bold Reports Services

Follow the below steps to check the health and status of the reports  services.

## Status Check

To check the status enter the following URL with your respective localhost
`https://{Domain_name}/status`

![Status Check](/static/assets/on-premise/images/how-to/status-check.png)

## Health Check

To check the health of the application enter the following URL

1. Identity Provider API - `http://{Domain_name}/api/health-check`

2. Report Designer Service - `http://{Domain_name}/reporting/reportservice/health-check`

3. Report Server - `http://{Domain_name}/reporting/health-check`

4. Reporting Server API - `http://{Domain_name}/reporting/api/health-check`

5. Windows Authentication - `http://{Domain_name}/windowsauthentication/health-check`