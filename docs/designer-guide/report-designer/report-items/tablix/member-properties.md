---
title: Tablix member properties | Web ReportDesigner | Bold Reports
description: This section describes the types and properties of the tablix member along with its purpose in the Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, grouping pane
---

# Tablix member properties

The properties are listed under different categories in the properties panel based on the behaviour of each properties of tablix member.

## Static member properties

Click on the required static tablix member in the `Row Groups` or `Column Groups` pane, now the respective tablix member properties will be listed in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-static-member-properties.png)

### Miscellaneous

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/static-member-miscellaneous.png)

#### Fixed Data

Fixed data property is used to keep the row or column headers visible when scrolling the pages of a report in Bold Reports Report Viewer.

* To make row header visible when scrolling the pages of report, select the static header member in `Row Groups` pane and enable the `Fixed Data` property in the properties panel.

* To make column header visible when scrolling the pages of report, select the static header member in `Column Groups` pane and enable the `Fixed Data` property in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-fixed-data.png)

#### Keep Together

Keep together property can be used to display the entire tablix member and any nested members in a single page, on report preview or export action. Enable the checkbox to keep the content in single page or it will span across multiple pages.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-keep-together.png)

#### Keep with group

Keep with group property can be used to keep the row with the previous or following sibling group member.

* **None** - Select this option to indicate no preference for keeping this member with the members of the selected row group.
* **Before** -  Select this option to keep the respective member with the members of the previous group.
* **After** - Select this option to keep the respective member with the members of the following group.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-with-group-property.png)

#### Repeat on new page

Repeat on new page property can be used to display the static row or column headers on multiple pages in a report.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/repeat-on-new-page.png)

#### Visibility

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/visibility-property.png)

**Visibility** - Visibility property is used to conditionally show or hide the row or column when the report is initially run. To set visibility of static row or column using properties panel refer [Visibility](./../../../compose-report/common-properties/#visibility) section.**Toggle** - The toggle settings property can be used to allow the user interactively expand or collapse the report items or row and columns associated with the group to drill down to further detail within the same report. Some common reasons to use the toggle visibility feature are as follows:

* To hide columns or rows with details in table and matrix report items

* To completely hide a table or matrix item

* To hide other report items

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/toggle-property.png)

## Group member properties

Click on the required group tablix member in the `Row Groups` or `Column Groups` pane, now the respective tablix member properties will be listed in the properties panel.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-group-member-properties.png)

### Basic settings

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-basic-settings.png)

### Groups

You can edit the row or column group using this option. Select a row or column group, click on the `Set Groups...` button in the properties panel. Now, the `Grouping` dialog will be opened like below.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-dialog.png)

Now, modify the group `Name` or group expression in the group dialog and click `OK`.

#### Filters

Filters can be used to filter the data in the tablix. In tablix data region, filters can be applied independently for row groups, column groups, and adjacent groups. Select a group in the grouping panel, click on the `Set Filters...` button in the properties panel. Now, the filter dialog will be opened like below.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png)

To create a filter expression for the respective group member, refer the steps provided in [Filter Data](./../../../compose-report/filter-data/) section.

#### Sorts

To sort the numeric or string field in the tablix, sorting can be used. In tablix, the sorting can be applied to the whole data region or for each group, including the details group. Select a group in the grouping panel, click on the `Set Sorts...` button. Now, the sort dialog will be opened like below.

![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png)

To create a sort expression for the respective group member, refer the steps provided in [Sort Data](./../../../compose-report/sort-data/) section.

### Miscellaneous

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-miscelleneous.png)

#### Fixed Data

Fixed data property is used to keep the row or column group headers visible when scrolling the pages of a report in Bold Reports Report Viewer.

* To make row header visible when scrolling the pages of report, select the dynamic header member in `Row Groups` pane and enable the `Fixed Data` property in the properties panel.

* To make column header visible when scrolling the pages of report, select the dynamic header member in `Column Groups` pane and enable the `Fixed Data` property in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-fixed-data.png)

#### Keep Together

Keep together property can be used to display the entire tablix member and any nested members in a single page, on report preview or export action. Enable the checkbox to keep the content in single page or it will span across multiple pages.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-keep-together.png)

### Page break

The page break property is used to control the amount of information on each page when you preview the report. Follow the below steps to apply page break property for dynamic member.

1. Enable the `Enable Page Break` property checkbox.
![Page break property](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-page-break.png)
2. Choose any `Break Location` type in the drop-down.
![Break location](/static/assets/on-premise/images/report-designer/report-items/rectangle/break-location-types.png)
3. To reset page number on each page, enable `Page Number Reset` property checkbox.
![Reset page number](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-property.png)

#### Visibility

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/visibility-property.png)

**Visibility** - Visibility property is used to conditionally show or hide the row or column groups when the report is initially run. To set visibility of dynamic row or column members using properties panel refer [Visibility](./../../../compose-report/common-properties/#visibility) section.**Toggle** - The toggle settings property can be used to allow the user interactively expand or collapse the report items or row and columns associated with the group to drill down to further detail within the same report. Some common reasons to use the toggle visibility feature are as follows:

* To hide columns or rows with details in table and matrix report items

* To completely hide a table or matrix item

* To hide other report items

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/toggle-property.png)