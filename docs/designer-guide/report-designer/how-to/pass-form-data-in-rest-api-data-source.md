---
title: Pass form data in Rest API DataSource | Bold Reports
description: This section describes how to GET or POST form data using the Rest API data source in Bold Reports Designer.
---

# How to pass form data

This section explains how to GET or POST form data using the Rest API data source in Bold Reports.

## GET action

1. Specify the REST API URL in the `URL` field.
2. Choose the `Method` type as `GET`.
3. In `Header(s)`, specify the `Content-Type`, `Content-Length` of the form data.
![GET form data](/static/assets/on-premise/images/report-designer/how-to/pass-form-data/get-form-data.png)

## POST action

1. Specify the REST API URL in the `URL` field.
2. Choose the `Method` type as `POST`.
3. Choose `Parameters` in `Request Body`. Specify the key and values to post the data.
4. In `Header(s)`, specify the `Content-Type`, `Content-Length` of the form data.
![POST form data](/static/assets/on-premise/images/report-designer/how-to/pass-form-data/post-with-parameters.png)

> NOTE: For `POST` action with `Raw` data we have handled the `Content-Type` and `Content-Length` request headers based on the `Data Format` field value. So, it is not required to pass these headers explicitly in Header(s) list. This will lead to [Misused Header name](./../pass-form-data-in-rest-api-data-source/) error.
![Misused header name error](/static/assets/on-premise/images/report-designer/how-to/pass-form-data/misused-header-error.png)