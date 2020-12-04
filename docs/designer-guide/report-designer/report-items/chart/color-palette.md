---
title: Chart Color Palette | Web ReportDesigner | Bold Reports
description: This section describes how to customize the color aplette in Chart Report Item with the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Chart series color palette

Color palette property cab be used to customize the chart series color. You can change the color palette for a chart series by selecting default set of color combinations or defining a custom palette.

## Use built-in color palette options

You can switch between the built-in set of color combination options available in `Color Palette` dropdown.

![Built in Color Palettes](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/built-in-color-palette.png)

## Define custom color palette

You can set custom colors to the chart series by defining your own palette. To define custom colors, follow these steps:

1. Select `Custom` option from the `Color Palette` dropdown.

![Custom color palette option](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/custom-option.png)

2. Now, the `Custom Colors` field will start displaying under the color pallette drop-down.

![Custom color palette field](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/custom-colors-field.png)

3. Click on the edit icon for the `Custom Colors` property.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/edit-icon.png)

4. Now, you will be navigated to the **Custom Colors** panel.

![Custom colors panel](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/custom-colors-panel.png)

5. Click on the ADD icon in the top-right corner. A new field with option to set color will be added in the panel.

![Add icon](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/add-icon.png)

6. Set the desired color in the color field.

![Choose color](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/choose-color.png)

7. Click on the **Update**.

You can also set color based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel. Click on the square icon in the right side of the each field to open expression menu,
![Expression menu](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/expression-menu.png)

Repeat the above steps to create multiple colors sets or edit existing color sets. For example, I have added three colors in custom colors panel and it will be applied to the chart series based on the number of chart Y Value fields.

![Multiple colors](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/multiple-colors.png)

### Delete color set

To delete the existing color set, click on the edit icon for the `Custom Colors` property. Now, the available color sets will be listed **Chart Custom Colors** panel. Click on the `Delete` icon in the right corner of required color set and click on the **Update**.

![Delete binding expression](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/delete-custom-colors.png)