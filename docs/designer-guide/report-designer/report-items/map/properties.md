---
title: Map Properties | Web ReportDesigner | Bold Reports
description: This section describes about each properties in map report item and procedure to use it with Bold Report Designer.
---

# Properties

Refer the [Properties panel](/designer-guide/report-designer/compose-report/properties-panel/) section before proceeding with the below properties.

## Basic Settings

![Data category](/static/assets/on-premise/images/report-designer/report-items/map/over-view/basic-settings.png)

### Shapes

A map layer can display either a build-in or custom shape data. The `Shapes` property will display the build-in and custom shapes that are available for the report.

![Map shapes](/static/assets/on-premise/images/report-designer/report-items/map/over-view/shapes.png)

To import custom shape files into Report Designer, refer [Import shape files](/designer-guide/report-designer/how-to/configure-map-shapes/) section. Choose the required shape data from the drop-down to render the respective map in design area.

### Dataset

This property is used to assign the dataset to the map. The available datasets in the report will be listed in the `Dataset` property dropdown. You can choose the desired dataset from the drop-down.

> Each map report item can only show data from one dataset.

![Data category](/static/assets/on-premise/images/report-designer/report-items/map/over-view/data-set.png)

> Refer [Create Data](/designer-guide/report-designer/manage-data/dataset/create-an-embedded-dataset/) section to add dataset to your report.

### Binding data

To display analytical data on the map surface, first we need to link the analytical and shape data. The shape data is the map itself, whereas the analytical data is the data set we created. The analytical data provides meaning to the shape data. To bind analytical and shape data, refer to the [Binding Data](/designer-guide/report-designer/report-items/map/binding-data/) section.

### Filter

Filters is used to filter the data in the map. To open the `Filter` dialog, click on the `Set Filters...` button. Now, the filter dialog will be opened like below.

![Filter Dialog](/static/assets/on-premise/images/report-designer/report-items/map/over-view/filters.png)

Refer [Filter Data](/designer-guide/report-designer/compose-report/filter-data/) section to add/remove filters in the filter dialog.

### Groups

You can group the map elements with analytical data using this option. To open the `Grouping` dialog, click on the `Set Groups...` button in the properties panel. Now, the `Grouping` dialog will be opened like below.

![Grouping Dialog](/static/assets/on-premise/images/report-designer/report-items/map/over-view/grouping.png)

Modify the group `Name` or add a group expression in the group dialog and click `OK`. Refer [Group Data](/designer-guide/report-designer/compose-report/group-data/) section to add/remove groups in the grouping dialog.

## Appearance

The border style, color, width, background color, and projection type properties are used to style the map and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Map Appearance](/static/assets/on-premise/images/report-designer/report-items/map/over-view/appearance.png)

### Border

Border properties are used to add or customize the border around a map item to visually separate it in the report design. To set border properties to the map item using properties panel refer [Border Properties](/designer-guide/report-designer/compose-report/common-properties/#border-properties) section.

### Background color

Using the background color property you can color the map background. To set background color using properties panel refer [Background color](/designer-guide/report-designer/compose-report/common-properties/#background-color) section.

### Projection type

A projection is a set of rules that draws geographical data in two dimensional view onto a planar surface by transforming longitude/latitude coordinates to 2D coordinates. This property must be specified when shape data is geographic.

![Map Projection Type](/static/assets/on-premise/images/report-designer/report-items/map/over-view/projection-type.png)

## Title

The map title can be customized by editing the `Text` property of the map. To show/hide the map title, toggle the `Enable Title` checkbox.

![Map Title](/static/assets/on-premise/images/report-designer/report-items/map/over-view/title.png)

You can customize the title text for map using this property. By default, the text will be displayed as `Map Title`. Specify the required title text in the title property textbox and it will be displayed as map title in map design.

![Map title text](/static/assets/on-premise/images/report-designer/report-items/map/over-view/title-in-design.png)

You can also apply title text based on dynamic values, by using the `Expressions`. Refer [Set Expressions](/designer-guide/report-designer/compose-report/properties-panel/#set-expression) and [Reset Expressions](/designer-guide/report-designer/compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

### Title font

You can customize the title text appearance through the properties provided in the `Advanced` menu of title property. Click on the square icon in the right side of the `Title` text field and click on `Advanced` option in the menu.

![Title advanced menu](/static/assets/on-premise/images/report-designer/report-items/map/over-view/advanced-title-menu.png)

Now, the title font properties will be displayed in the advanced options.

![Font properties](/static/assets/on-premise/images/report-designer/report-items/map/over-view/title-advanced-options.png)

You can also apply font properties based on dynamic values, by using the `Expressions`. Refer [Set Expressions](/designer-guide/report-designer/compose-report/properties-panel/#set-expression) and [Reset Expressions](/designer-guide/report-designer/compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

![Dynamic font values](/static/assets/on-premise/images/report-designer/report-items/map/over-view/title-font-expression.png)

### Position

The title position can be customized using the `Position` property.

![Map Title Position](/static/assets/on-premise/images/report-designer/report-items/map/over-view/title-position.png)

## Legend

A Legend is a text used to describe the data plotted. This property allows you to toggle the visibility of legend in map and to customize the legend text appearance. To set/reset legend properties, refer [Map Legend](/designer-guide/report-designer/report-items/map/legend/) section.

![Map Legend](/static/assets/on-premise/images/report-designer/report-items/map/over-view/legend.png)

## Spatial

![Map Spatial](/static/assets/on-premise/images/report-designer/report-items/map/over-view/spatial.png)

**Fields** : The match fields that are available in shape data are listed under `Fields` section. Click on the edit icon to view the fields,

![Field definitions](/static/assets/on-premise/images/report-designer/report-items/map/over-view/field-definitions.png)

You can edit the field name or data type and delete the fields based on the design requirements.

**Polygons** : Each data of map shapes/polygons defined in shape data file are listed under `Polygons` section. Click on the edit icon to view the polygons information,

![Polygons](/static/assets/on-premise/images/report-designer/report-items/map/over-view/polygons.png)

You can edit the polygon details and delete the polygons based on the design requirements. Hover on each polygons in the list and click on the edit icon,

![Edit polygons](/static/assets/on-premise/images/report-designer/report-items/map/over-view/polygon-edit.png)

Respective polygon properties will be displayed like below,

![Polygon properties](/static/assets/on-premise/images/report-designer/report-items/map/over-view/polygon-properties.png)

Edit the required properties and click on the `Save`.

## Shape settings

Each region in a map surface is called a map shape. We can set a label, tooltip, border, and background color for it. To set/reset shape properties, refer [Map Shape Settings](/designer-guide/report-designer/report-items/map/shape-settings/) section.

![Map Shape Settings](/static/assets/on-premise/images/report-designer/report-items/map/over-view/shape-settings.png)

## Shape color rule

The shape color rule properties can be used to define color options for each shape on the map surface. To set/reset shape color rule for map, refer [Shape Color Rule](/designer-guide/report-designer/report-items/map/shape-color-rule/) section.

![Map Shape Color Rule](/static/assets/on-premise/images/report-designer/report-items/map/over-view/shape-color-rule.png)

## Marker settings

A marker identifies a location on a map. By default, a marker uses a standard icons. We can set background color, border, style, size and tooltip for it. To set/reset marker properties refer [Map Marker Settings](/designer-guide/report-designer/report-items/map/marker-settings/).

![Map Marker Settings](/static/assets/on-premise/images/report-designer/report-items/map/over-view/marker-settings.png)

## Marker color rule

The marker color rule properties can be used to define color options for each marker on the map surface. To set/reset marker color rule for map, refer [Marker Color Rule](/designer-guide/report-designer/report-items/map/marker-color-rule/) section.

![Marker Color Rule](/static/assets/on-premise/images/report-designer/report-items/map/over-view/marker-color-rule.png)

## Marker rule

The marker rule properties can be used to define marker styles for each marker on the map surface. To set/reset marker color rule for map, refer [Marker Rule](/designer-guide/report-designer/report-items/map/marker-rule/) section.

![Marker Rule](/static/assets/on-premise/images/report-designer/report-items/map/over-view/marker-rule.png)

## Page break

Page break property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply page break property for map report item.

![Map page break](/static/assets/on-premise/images/report-designer/report-items/map/over-view/page-break.png)

### Break location

The Break Location property specifies where the page break should occur. Choose the required `Break Location` type in the drop-down.

![Break location](/static/assets/on-premise/images/report-designer/report-items/map/over-view/break-location-types.png)

### Page number reset

To restart the page numbering on each page, enable `Page Number Reset` property checkbox.

![Reset page number](/static/assets/on-premise/images/report-designer/report-items/map/over-view/page-number-reset.png)

### Page name

The page name property is used to name the first worksheet of the Excel workbook, when exporting the report to excel format.

![Reset page number](/static/assets/on-premise/images/report-designer/report-items/map/over-view/page-name.png)

## Position

Position property is used to set the width, height, left and top position of the map in the report design. To handle these properties using properties panel refer [Position](/designer-guide/report-designer/compose-report/common-properties/#position) section.

## Visibility

![Map Visibility](/static/assets/on-premise/images/report-designer/report-items/map/over-view/visibility.png)

**Visibility** - Visibility property is used to conditionally show or hide the map report item on report preview or export action. To set visibility of map item using properties panel refer [Visibility](/designer-guide/report-designer/compose-report/common-properties/#visibility) section.

**Toggle** - The toggle settings property can be used to interactively toggle the map report item visibility by another report item.

![Toggle Map Visibility](/static/assets/on-premise/images/report-designer/report-items/map/over-view/toggle-item.png)

## Miscellaneous

<span style="font-weight:bold">Custom Attributes</span>

This property can be used to set the values for map custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](/designer-guide/report-designer/compose-report/common-properties/#custom-properties) section.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for table report item using properties panel refer [Tooltip](/designer-guide/report-designer/compose-report/common-properties/#tooltip) section.

## Set expression

An expression can be set to few properties of the map report item to process the property values based on expressions. To set expressions to the map report item properties, refer [Set Expression](/designer-guide/report-designer/compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer [Reset Expression](/designer-guide/report-designer/compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the map report items contains nested properties. To open and handle nested properties, refer [Advanced Properties](/designer-guide/report-designer/compose-report/properties-panel/#advanced-properties) section.
