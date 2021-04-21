---
title: Pass reserved request headers | Bold Reports Designer
description: This section describes how to pass reserved headers when creating Rest API data source in Bold Reports.
---

# How to pass reserved headers

This section explains how to pass reserved request headers while creating Rest API data source in Bold Reports.

## When the user can send reserved request headers

The user can pass reserved request headers such as `Content-Type`, `Content-Length`, and `Accept` in the `Header(s)` list for `POST` action only when passing the form data as `Parameter(s)` list.

![Post action with parameters](/static/assets/on-premise/images/report-designer/how-to/pass-reserved-headers-in-post-action/post-with-parameters.png)

## What happens if user passes reserved request headers with raw data

In Bold Reports REST API data source connector, for `GET` action and `POST` action with `raw` data we have handled the `Content-Type`, `Content-Length`, and `Accept` request headers based on the `Data Format` field value. So, it is not required to pass the reserved request headers explicitly in `Header(s)` list. If you pass the reserved headers explicitly will lead to below error.

![Misused header name error](/static/assets/on-premise/images/report-designer/how-to/pass-reserved-headers-in-post-action/misused-header-error.png)