---
title: Learn how to use Report Part in Bold Report Designer 
description: This section describes on how to create, publish and reuse Report Part in multiple reports
keywords: report parts, reportdesigner, bold reports, ssrs report parts, paginated reports, reusing report components, creating report templates, report widgets, ejReportDesigner
---

# Report Parts

Report Part helps users to create and publish report item templates that user may want to reuse across multiple reports. With this functionality, Report items such as tables, charts, maps, indicators, and other report items can be published and reused as report parts in different reports.

To demonstrate the usage of the Report Part feature, we created a new table called `Product_Details_Table` to display the product details.
![Product detail table](/static/assets/on-premise/images/report-designer/report-parts/product-details-table.png)

Consider this scenario, we need to use the Product Details table in various reports. However, creating this table for each report is a tedious process. To address this case, we are publishing the Product Details table as a report part and reusing it in multiple reports.

## Publishing the Product Details Table as a Report Part

1. Click on the `Publish Report Part` option from the dropdown in top-right corner of the report designer page.
![Publish as Report Part](/static/assets/on-premise/images/report-designer/report-parts/publish-as-part.png)

2. This action will open the `Publish Report Part` dialog.
![Publish report part dialog](/static/assets/on-premise/images/report-designer/report-parts/publish-report-part-dialog.png)

3. The report items present on the designer surface will be listed in the Report part dropdown.
![Report item list in Report part dialog](/static/assets/on-premise/images/report-designer/report-parts/report-item-list.png)

4. Select the `Product_Details_Table` report item from the dropdown, name the report part as `Product_Details_Table` in the `Name` field, add description if you want and click the `Publish` button to publish the `Product_Details_Table` report part.
![Publish report part](/static/assets/on-premise/images/report-designer/report-parts/publish-report-part.png)

> Note:
The Datasource, Dataset and the Query parameters associated with the widgets alone will be published along with the report part whereas Dataset bind with the scope of the expressions and Report parameters will not be published with the report part.

## Reusing the Published Report Part in other Reports

Create a new report and in that we will use the `Product_Details_Table` report part to demonstrate this feature.

1. Find the `Product_Details_Table` report part under the `Report Parts` tab in the left side of the Designer surface.
![Report part in item panel](/static/assets/on-premise/images/report-designer/report-parts/report-part-itempanel.png)

2. Drag and drop the `Product_Details_Table` report part into the Designer surface.
![Drag and drop report part](/static/assets/on-premise/images/report-designer/report-parts/drag-report-part.png)

3. Dataset and query parameters associated with the `Product_Details_Table` report part gets populated in this report.
![Dataset population](/static/assets/on-premise/images/report-designer/report-parts/dataset-population.png)

4. By using this `Product_Details_Table` report part, I have created a new report to showcase the Product Details.
![Report part use case report](/static/assets/on-premise/images/report-designer/report-parts/use-case-report.png)

## Refreshing the Report Parts

You are making changes in `Product_Details_Table` report part and have published it. If you want the updated changes to be reflected in the other reports that are using this `Product_Details_Table` report part, right click on the `Product_Details_Table` in your report and it will show you the `refresh` option.
![Refresh report part](/static/assets/on-premise/images/report-designer/report-parts/refresh-report-part.png)

Click on the refresh option, the updated changes in the `Product_Details_Table` report part will get reflected in your report.

> Download the above report design from [link](https://github.com/boldreports/resources/blob/master/docs/report-designer/design-report-part-use-case-report.rdl).