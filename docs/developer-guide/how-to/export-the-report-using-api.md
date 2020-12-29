---
title: How to export the Report using api in report server
description: This documentation explains about how to export the Report using API in the Bold Reports On-Premise Edition.
keywords: report-platform
---

# How to export the Report using API from postman

Users who have read access for reports can export the reports by providing the report details and export type (Microsoft Excel, PDF, HTML, PPT, CSV and Word) in the request body. The response will be in an array of bytes.

 1. Open the `Postman` application and create a new `POST` Http request.
 2. First we need to generate the [access token](../generate-access-token-for-bold-reports-server-using-api/).
 3. In Request URL provide your Report server URL and `reporting/api/site/{tenant-name}/v1.0/reports/export` for [export report](../../../rest-api-reference/v1.0/#operation/Items_ExportReport).
 4. In Headers section add `Authorization` and value is `bearer` and add the generated token.
  ![Authorization](/static/assets/on-premise/images/how-to/rest-api/authorization.png)
 5. Then Choose the `raw` in Body section and choose `Json(application/json)`.
 6. Pass the report id and export type values in JSON.
 7. Click the `Send` button and response will be in an array of bytes.
 ![Connection types](/static/assets/on-premise/images/how-to/rest-api/export.png)