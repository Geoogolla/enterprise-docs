---
layout: post
title: Open report with parameter | Report Server | Syncfusion
description: Explains about how to open report with parameter in the  Bold Reports On-Premise. Allows to pass query parameter to the report through page URL.
platform: report-Platform
documentation: ug
---

# Open report with parameter

This section explains on how to open Report with Parameter in the  Bold Reports On-Premise using query parameter from the report.

## Apply query parameter

The filter parameters can be passed in the Query String and the Reports will be filtered based on the query parameter.

![Reports with Report Parameter](/static/assets/on-premise/images/embed-server-reports-in-application/iframe/open-report-with-query-parameter.png)

## Parameter and its value of the Report

The parameter of the report will be the Name of the parameter given while creating the report.

![Add Parameter for the Report](/static/assets/on-premise/images/embed-server-reports-in-application/iframe/add-report-parameter.png)

![Save new Parameter for the Report](/static/assets/on-premise/images/embed-server-reports-in-application/iframe/save-report-parameter.png)

The values of the parameter can be taken from the Report Designer by following the below steps.

* Open the report with Report Designer.

* On the right side, you will find `Parameters` icon.

* You will find the list of parameters that the report has. Right click `the parameter action` for which you want the values and click `Edit` button.

![Parameter edit](/static/assets/on-premise/images/embed-server-reports-in-application/iframe/parameter-edit.png)

* Select `Available Values`, the item you chosen in the `Value field` must be the values of the respective parameter in the URL.

![value for parameters](/static/assets/on-premise/images/embed-server-reports-in-application/iframe/value-field-of-paramter.png)

## Apply multiple query parameters

If the report has multiple parameters, then more than one parameter can be passed in the Query string.

![Reports with multiple Parameter](/static/assets/on-premise/images/embed-server-reports-in-application/iframe/multiple-query-parameter.png)

## Apply multiple values to query parameters

The multiple values for the filter parameters can be passed in the Query string if `Allow multiple values` option is chosen in the Report Designer.

![Reports with multiple values](/static/assets/on-premise/images/embed-server-reports-in-application/iframe/multiple-values-in-designer.png)

![Reports with multiple values of Parameter](/static/assets/on-premise/images/embed-server-reports-in-application/iframe/multiple-values-of-parameter.png)

> Only the report parameters of `Text` data type allows the blank values.

## REST API Reference

The following table illustrates the list of available APIs related to reports with parameters in  Bold Reports On-Premise.

<table>
   <tr>
      <th>
         Action
      </th>
      <th>
         HTTP Method
      </th>
      <th>
         Endpoint
      </th>
      <th>
         Description
      </th>
   </tr>
   <tr>
      <td>
         <a href="https://help.boldreports.com/on-premise/rest-api-reference/v1.0/#operation/Items_GetReportParameters">GetReportParameters</a>
      </td>
      <td>
         GET
      </td>
      <td>
         /api/v1.0/reports/parameters/{reportId}
      </td>
      <td>
         Returns the report parameters. Should pass Report ID in request URL.
      </td>
  </tr>
</table>
