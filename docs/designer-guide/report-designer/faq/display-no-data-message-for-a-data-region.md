---
title: Display no data message for a data region | Bold Reports
description: This section describes how to display no data message for a data region in the Bold Reports Designer application.
---

# Display no data message for a data region

This document describes how to display a message when no data exists in database or no row found for user selection in RDL report. It is always a good practice to show proper message when there is no data for user selection. To show proper message, you can set the custom message in `No Rows` property. No Rows is an option on a matrix, table, chart, sub-report, etc., that displays alternate text when the results of your query display no results.

## To set the NoRowsMessage property for a table, matrix, list, or subreport

Select the table, matrix, or list data region or subreport on the design surface. The `Properties` panel displays the properties for the selected item.

In the Properties panel, under `No Rows` category set the text that you want to display as a message in `Message` property field.

![No data for table](/static/assets/on-premise/images/report-designer/faq/display-no-data-message-for-a-data-region/no-data-for-table.png)

Alternatively, you can set the message text based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

![No rows message as expression](/static/assets/on-premise/images/report-designer/faq/display-no-data-message-for-a-data-region/message-as-expression-in-table.png)

During report preview the specified message will be displayed, if user specified value is not available in the database.

![No data for table](/static/assets/on-premise/images/report-designer/faq/display-no-data-message-for-a-data-region/no-data-for-table-preview.png)

## To set the NoDataMessage property for a chart

Select the chart on the design surface. The `Properties` panel displays the properties for the selected item.

In the Properties panel, under `No Data` category set the text that you want to display as a message in `Message` property field.

![No data for chart](/static/assets/on-premise/images/report-designer/faq/display-no-data-message-for-a-data-region/no-data-for-chart.png)

Alternatively, you can set the message text based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

![No data message as expression](/static/assets/on-premise/images/report-designer/faq/display-no-data-message-for-a-data-region/message-as-expression-in-chart.png)

During report preview the specified message will be displayed, if user specified value is not available in the database.

![No data for chart](/static/assets/on-premise/images/report-designer/faq/display-no-data-message-for-a-data-region/no-data-for-chart-preview.png)