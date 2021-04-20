---
title: Resolve misused header name error | Bold Reports Designer
description: This section describes how to resolve the misused header name error when performing get and post actions in Rest API data source.
---

# How to resolve misused header name error

This section explains how to resolve the misused header name error when creating Rest API data source in Bold Reports.

![Misused header name error](/static/assets/on-premise/images/report-designer/faq/resolve-misused-header-name-error/misused-header-error.png)

## When the error occurs

This error occurs when the user explicitly pass any of the following reserved headers in the `Header(s)` list: `Content-Type`, `Content-Length`, and `Accept`.

![Reserved headers](/static/assets/on-premise/images/report-designer/faq/resolve-misused-header-name-error/reserved-headers.png)

## Why the error occurs

In Bold Reports REST API data source connector, we have handled the `Content-Type`, `Content-Length`, and `Accept` request headers based on the `Data Format` field value. So, while passing the same values explicitly in `Headers` list causes the `Misused header name` error.

## How to overcome the error

1. Remove the following headers from the `Header(s)` list: `Content-Type`, `Content-Length`, and `Accept`.

2. Choose the content type in `Data Format` field.

    ![Data Format](/static/assets/on-premise/images/report-designer/faq/resolve-misused-header-name-error/data-format.png)