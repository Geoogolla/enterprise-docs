---
title: Design ssrs rdl report using subreport | Web Report Designer
description: Design ssrs rdl report using subreport report item, to insert one report inside the other report using web report designer.
keywords: ejReportDesigner, reportdesigner, subreport, reportitem, border
---

# Subreport

Subreport is used to embed another report inside the body of a main report. It allows to customize the subreport properties along report path, parameters.

## Properties

### Basic Settings

`Basic Settings` category contains `Report` and `Set Parameters` properties.

* `Report` property can be used to specify the report path of the subreport. Refer [Report Path](/designer-guide/report-designer/compose-report/link-data/#report-path) section to set report path to this property.

* `Set Parameters` property can be used to pass parameters from the main report to the subreport. Refer [Set Parameters](/report-designer/compose-report/link-data/#set-parameters) section to set parameters to the subreport.

![subreport item basic settings](/static/assets/on-premise/images/report-designer/report-items/subreport/basic-settings.png)

### Appearance

`Appearance` property can be used to improvise the style of subreport layout. Border style, color, width properties are displayed under the `Appearance` category.
![subreport appearance](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-appearence.png)

#### Border

Border properties are used to add or customize the border around a subreport item to visually separate items in the report design. To set border properties to the subreport item using properties panel refer [Border Properties](/designer-guide/report-designer/compose-report/common-properties/#border-properties) section.

### No Rows

No Rows property is used to display static text when dataset results with a empty or zero rows.

![subreport item norows property](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-property.png)

#### Font

##### Font Styles

To change font style of the no rows message, choose the required font style in the `Font Style` drop-down list. Following are the supported font styles:

* Default
* Normal
* Italic

![subreport item font style](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-font-style.png)

##### Font Family

Supported font family names are listed in the drop-down list, choose the required font family from the drop-down list to change the `Font Family` of the no rows message.

![subreport item font family](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-font-family.png)

##### Font Weight

To change the font weight of the no rows message, choose the required type of font weight property from the drop-down list.

![subreport item font weight](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-font-weight.png)

##### Font Color

To set font color for the no rows message, click on the color palette icon and choose the required color in the `Color Palette`.

![subreport item font color](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-font-color.png)

##### Font Size

Font size property allows you to increase the size of the text in the no rows message. You can increase the font size using the numeric drop-down highlighted in below snap.

![subreport item font size](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-font-size.png)

#### Text Decoration

Text decoration property sets the appearance of decorative lines on text.

* **None** - Produces no text decoration.
* **Underline** - Each line of text is underlined.
* **Overline** - Each line of text has a line above it.
* **Line-through** - Each line of text has a line through the middle.

![subreport item font size](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-text-decoration.png)

#### Format

Format property is used to format the given text in the no rows message. Refer [Format](/designer-guide/report-designer/compose-report/format-data/#format) section to represent the text in **Numbers**, **Currency**, **Date**, **Time**, **Scientific**, **Percentage** and **Custom** formats.

![subreport item font size](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-format.png)

#### Message

Provide the required text in the message textbox, the given message will be displayed to the user when dataset results with empty or zero rows.

#### Padding

`Padding` property is used to provide space around the no rows message content. Increase or decrease the values in numeric dropdown to set the left, right, top and bottom padding to the no rows message.

#### Line height

Line height property is used to increase space between lines in given message. Increase or decrease the values in numeric dropdown to set the line height for no rows message.

#### Text Align

The `Text align` property is used to set the horizontal alignment of a no rows message. The text can be aligned in left, right, or center position. Choose the required text align property from the drop-down list as shown below.

![subreport item text align](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-text-align.png)

#### Vertical Align

The `Vertical Align` property is used to set the vertical alignment of a no rows message. Choose the required vertical align property from the drop-down list as shown below.

![subreport item vertical align](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-vertical-align.png)

#### Writing Mode

Writing mode property represent the direction of the no rows message along `Horizontal`, `Vertical`, and `Rotate270`. Choose the required writing mode property from the drop-down.

**Horizontal**: Text will be horizontal, read left to right.

**Vertical**: Text will be vertical, read top to bottom.

**Rotate 270**: Text will be vertical, read bottom to top.

![subreport item writing mode](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-writing-mode.png)

### Position

Position property is used to set the width, height, left and top position of the subreport item in the report design. To handle these properties using properties panel refer [Position](/designer-guide/report-designer/compose-report/common-properties/#position) section.

![subreport item position](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-position.png)

### Visibility

Visibility property is used to conditionally show or hide the subreport report item on report preview or export action. To set visibility of subreport item using properties panel refer [Visibility](/designer-guide/report-designer/compose-report/common-properties/#visibility) section.

### Miscellaneous

<span style="font-weight:bold">Keep together</span>

Keep together property is used to display the subreport item in a single page, on report preview or export action. Enable the checkbox to keep the content in single page or it will span across multiple pages.

![subreport item keep together](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-keep-together.png)

<span style="font-weight:bold">Custom Attributes</span>

This property can be used to set the values for subreport custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](/designer-guide/report-designer/compose-report/common-properties/#custom-properties) section.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for sub-report item using properties panel refer [Tooltip](/designer-guide/report-designer/compose-report/common-properties/#tooltip) section.

## Set expression

Properties panel allows you to specify expressions that can include two or more data fields and various functions. To set expressions for the report or report item properties refer [Set Expression](/designer-guide/report-designer/compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the property value and expression, refer [Reset Expression](/designer-guide/report-designer/compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the subreport report contains nested properties. To open and handle nested properties, refer [Advanced Properties](/designer-guide/report-designer/compose-report/properties-panel/#advanced-properties) section.

## Design rdl report using subreport

Refer [Design rdl report using subreport](/designer-guide/report-designer/report-items/subreport/design-rdl-report-using-subreport/) section to learn how to link report, set parameters, to customize the subreport properties.