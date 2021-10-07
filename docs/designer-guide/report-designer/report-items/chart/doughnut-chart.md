---
title: Doughnut Chart | Report Designer | Bold Reports
description: Adding HTML5 JavaScript Doughnut Chart control into report and formatting with the Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Doughnut Chart

The **Doughnut Chart** allows you to showcase proportionality of each item to the total in the form of doughnut-slices. It works best to display data with a small number of categories.

## Add chart to the report

These types of charts are categorized under the `Proportion` category in the item panel.

Drag and drop the doughnut chart from the item panel into the design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/drag-chart-from-item-panel.png)

Now, the doughnut chart will be rendered in the design area and the chart properties will be listed in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/initial-view-of-doughnut-chart.png)

## Create data

To present data in the chart, create a dataset and bind data to the chart data region. In this designing section, the following json data is used for dataset creation.

```json
[
   {"Category":"Home","Amount":437},{"Category":"Home","Amount":242},{"Category":"Home","Amount":458},{"Category":"Home","Amount":181},
   {"Category":"Home","Amount":1338},{"Category":"Home","Amount":288},{"Category":"DailyLiving","Amount":238},
   {"Category":"DailyLiving","Amount":95},{"Category":"DailyLiving","Amount":154},{"Category":"Dues/subscriptions","Amount":490},
   {"Category":"Dues/subscriptions","Amount":15},{"Category":"Entertainment","Amount":9},{"Category":"Entertainment","Amount":1517},
   {"Category":"Financialobligations","Amount":208},{"Category":"Financialobligations","Amount":256},
   {"Category":"Health","Amount":317},{"Category":"Health","Amount":421},{"Category":"Personal","Amount":325},
   {"Category":"Personal","Amount":360},{"Category":"Personal","Amount":169},{"Category":"Transportation","Amount":339},
   {"Category":"Transportation","Amount":60},{"Category":"Transportation","Amount":39},{"Category":"Income","Amount":16322},
   {"Category":"Income","Amount":657},{"Category":"Income","Amount":4309},{"Category":"Home","Amount":242},
   {"Category":"Home","Amount":458},{"Category":"Home","Amount":181},{"Category":"Home","Amount":1338},
   {"Category":"Home","Amount":288},{"Category":"DailyLiving","Amount":238},{"Category":"DailyLiving","Amount":95},
   {"Category":"DailyLiving","Amount":154},{"Category":"Dues/subscriptions","Amount":490},
   {"Category":"Dues/subscriptions","Amount":15},{"Category":"Entertainment","Amount":9},{"Category":"Entertainment","Amount":1517},
   {"Category":"Financialobligations","Amount":208},{"Category":"Financialobligations","Amount":256},
   {"Category":"Health","Amount":317},{"Category":"Health","Amount":421},{"Category":"Personal","Amount":325},
   {"Category":"Personal","Amount":360},{"Category":"Personal","Amount":169},{"Category":"Transportation","Amount":339},
   {"Category":"Transportation","Amount":60},{"Category":"Transportation","Amount":39},{"Category":"Home","Amount":242},
   {"Category":"Home","Amount":458},{"Category":"Home","Amount":181},{"Category":"Home","Amount":1338},
   {"Category":"Home","Amount":288},{"Category":"DailyLiving","Amount":238},{"Category":"DailyLiving","Amount":95},
   {"Category":"DailyLiving","Amount":154},{"Category":"Dues/subscriptions","Amount":490},
   {"Category":"Dues/subscriptions","Amount":15},{"Category":"Entertainment","Amount":9},{"Category":"Entertainment","Amount":1517},
   {"Category":"Financialobligations","Amount":208},{"Category":"Financialobligations","Amount":256},
   {"Category":"Health","Amount":421},{"Category":"Health","Amount":325},{"Category":"Personal","Amount":430},
   {"Category":"Personal","Amount":169},{"Category":"Personal","Amount":378},{"Category":"Transportation","Amount":243},
   {"Category":"Transportation","Amount":87},{"Category":"Transportation","Amount":20},{"Category":"Income","Amount":18934},
   {"Category":"Income","Amount":561},{"Category":"Income","Amount":4831},{"Category":"Home","Amount":123},
   {"Category":"Home","Amount":563},{"Category":"Home","Amount":133},{"Category":"Home","Amount":1860},
   {"Category":"Home","Amount":250},{"Category":"DailyLiving","Amount":290},{"Category":"DailyLiving","Amount":71},
   {"Category":"DailyLiving","Amount":196},{"Category":"Dues/subscriptions","Amount":394},
   {"Category":"Dues/subscriptions","Amount":19,{"Category":"Entertainment","Amount":7},{"Category":"Entertainment","Amount":1040},
   {"Category":"Financialobligations","Amount":312},{"Category":"Financialobligations","Amount":208},
   {"Category":"Health","Amount":421},{"Category":"Health","Amount":325},{"Category":"Personal","Amount":430},
   {"Category":"Personal","Amount":169},{"Category":"Personal","Amount":378},{"Category":"Transportation","Amount":243},
   {"Category":"Transportation","Amount":87},{"Category":"Transportation","Amount":20},{"Category":"Home","Amount":123},
   {"Category":"Home","Amount":563},{"Category":"Home","Amount":133},{"Category":"Home","Amount":1860},
   {"Category":"Home","Amount":250},{"Category":"DailyLiving","Amount":290},{"Category":"DailyLiving","Amount":71},
   {"Category":"DailyLiving","Amount":196},{"Category":"Dues/subscriptions","Amount":394},
   {"Category":"Dues/subscriptions","Amount":19},{"Category":"Entertainment","Amount":7},{"Category":"Entertainment","Amount":1040},
   {"Category":"Financialobligations","Amount":312},{"Category":"Financialobligations","Amount":208},
   {"Category":"Health","Amount":421},{"Category":"Health","Amount":325},{"Category":"Personal","Amount":430},
   {"Category":"Personal","Amount":169},{"Category":"Personal","Amount":378},{"Category":"Transportation","Amount":243},
   {"Category":"Transportation","Amount":87},{"Category":"Transportation","Amount":20},{"Category":"Home","Amount":123},
   {"Category":"Home","Amount":467},{"Category":"Home","Amount":186},{"Category":"Home","Amount":1383},
   {"Category":"Home","Amount":292},{"Category":"DailyLiving","Amount":242},{"Category":"DailyLiving","Amount":97},
   {"Category":"DailyLiving","Amount":157},{"Category":"Dues/subscriptions","Amount":499},
   {"Category":"Dues/subscriptions","Amount":16},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1562},
   {"Category":"Financialobligations","Amount":217},{"Category":"Financialobligations","Amount":260},
   {"Category":"Health","Amount":325},{"Category":"Health","Amount":430},{"Category":"Personal","Amount":334},
   {"Category":"Personal","Amount":378},{"Category":"Personal","Amount":187},{"Category":"Transportation","Amount":348},
   {"Category":"Transportation","Amount":63},{"Category":"Transportation","Amount":41},{"Category":"Income","Amount":16546},
   {"Category":"Income","Amount":666},{"Category":"Income","Amount":4354},{"Category":"Home","Amount":253},
   {"Category":"Home","Amount":467},{"Category":"Home","Amount":186},{"Category":"Home","Amount":1383},
   {"Category":"Home","Amount":292},{"Category":"DailyLiving","Amount":242},{"Category":"DailyLiving","Amount":97},
   {"Category":"DailyLiving","Amount":157},{"Category":"Dues/subscriptions","Amount":499},
   {"Category":"Dues/subscriptions","Amount":16},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1562},
   {"Category":"Financialobligations","Amount":217},{"Category":"Financialobligations","Amount":260},
   {"Category":"Health","Amount":325},{"Category":"Health","Amount":430},{"Category":"Personal","Amount":334},
   {"Category":"Personal","Amount":378},{"Category":"Personal","Amount":187},{"Category":"Transportation","Amount":348},
   {"Category":"Transportation","Amount":63},{"Category":"Transportation","Amount":41},{"Category":"Home","Amount":253},
   {"Category":"Home","Amount":467},{"Category":"Home","Amount":186},{"Category":"Home","Amount":1383},
   {"Category":"Home","Amount":292},{"Category":"DailyLiving","Amount":242},{"Category":"DailyLiving","Amount":97},
   {"Category":"DailyLiving","Amount":157},{"Category":"Dues/subscriptions","Amount":499},
   {"Category":"Dues/subscriptions","Amount":16},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1562},
   {"Category":"Financialobligations","Amount":217},{"Category":"Financialobligations","Amount":260},
   {"Category":"Health","Amount":325},{"Category":"Health","Amount":430},{"Category":"Personal","Amount":439},
   {"Category":"Personal","Amount":187},{"Category":"Personal","Amount":396},{"Category":"Transportation","Amount":252},
   {"Category":"Transportation","Amount":89},{"Category":"Transportation","Amount":22},{"Category":"Income","Amount":19158},
   {"Category":"Income","Amount":570},{"Category":"Income","Amount":4876},{"Category":"Home","Amount":134},
   {"Category":"Home","Amount":572},{"Category":"Home","Amount":138},{"Category":"Home","Amount":1905},
   {"Category":"Home","Amount":254},{"Category":"DailyLiving","Amount":295},{"Category":"DailyLiving","Amount":73},
   {"Category":"DailyLiving","Amount":199},{"Category":"Dues/subscriptions","Amount":403},
   {"Category":"Dues/subscriptions","Amount":12},{"Category":"Entertainment","Amount":7},{"Category":"Entertainment","Amount":1085},
   {"Category":"Financialobligations","Amount":321},{"Category":"Financialobligations","Amount":212},
   {"Category":"Health","Amount":430},{"Category":"Health","Amount":334},{"Category":"Personal","Amount":439},
   {"Category":"Personal","Amount":187},{"Category":"Personal","Amount":396},{"Category":"Transportation","Amount":252},
   {"Category":"Transportation","Amount":89},{"Category":"Transportation","Amount":22},{"Category":"Home","Amount":134},
   {"Category":"Home","Amount":572},{"Category":"Home","Amount":138},{"Category":"Home","Amount":1905},
   {"Category":"Home","Amount":254},{"Category":"DailyLiving","Amount":295},{"Category":"DailyLiving","Amount":73},
   {"Category":"DailyLiving","Amount":199},{"Category":"Dues/subscriptions","Amount":403},
   {"Category":"Dues/subscriptions","Amount":12},{"Category":"Entertainment","Amount":7},{"Category":"Entertainment","Amount":1085},
   {"Category":"Financialobligations","Amount":321},{"Category":"Financialobligations","Amount":212},
   {"Category":"Health","Amount":430},{"Category":"Health","Amount":334},{"Category":"Personal","Amount":439},
   {"Category":"Personal","Amount":187},{"Category":"Personal","Amount":396},{"Category":"Transportation","Amount":252},
   {"Category":"Transportation","Amount":89},{"Category":"Transportation","Amount":22},{"Category":"Home","Amount":134},
   {"Category":"Home","Amount":572},{"Category":"Home","Amount":138},{"Category":"Home","Amount":1905},
   {"Category":"Home","Amount":254},{"Category":"DailyLiving","Amount":295},{"Category":"DailyLiving","Amount":73},
   {"Category":"DailyLiving","Amount":161},{"Category":"Dues/subscriptions","Amount":308},
   {"Category":"Dues/subscriptions","Amount":16},{"Category":"Entertainment","Amount":5},
   {"Category":"Entertainment","Amount":1607},{"Category":"Financialobligations","Amount":225},
   {"Category":"Financialobligations","Amount":265},{"Category":"Health","Amount":334},{"Category":"Health","Amount":439},
   {"Category":"Personal","Amount":343},{"Category":"Personal","Amount":396},{"Category":"Personal","Amount":205},{"Category":"Transportation","Amount":357},{"Category":"Transportation","Amount":65},{"Category":"Transportation","Amount":43},
   {"Category":"Income","Amount":16770},{"Category":"Income","Amount":675},{"Category":"Income","Amount":4399},
   {"Category":"Home","Amount":265},{"Category":"Home","Amount":476},{"Category":"Home","Amount":190},
   {"Category":"Home","Amount":1428},{"Category":"Home","Amount":296},{"Category":"DailyLiving","Amount":247},
   {"Category":"DailyLiving","Amount":99},{"Category":"DailyLiving","Amount":161},{"Category":"Dues/subscriptions","Amount":308},
   {"Category":"Dues/subscriptions","Amount":16},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1607},
   {"Category":"Financialobligations","Amount":225},{"Category":"Financialobligations","Amount":265},
   {"Category":"Health","Amount":334},{"Category":"Health","Amount":439},{"Category":"Personal","Amount":343},
   {"Category":"Personal","Amount":396},{"Category":"Personal","Amount":205},{"Category":"Transportation","Amount":357},
   {"Category":"Transportation","Amount":65},{"Category":"Transportation","Amount":43},{"Category":"Home","Amount":265},
   {"Category":"Home","Amount":476},{"Category":"Home","Amount":190},{"Category":"Home","Amount":1428},
   {"Category":"Home","Amount":296},{"Category":"DailyLiving","Amount":247},{"Category":"DailyLiving","Amount":99},
   {"Category":"DailyLiving","Amount":161},{"Category":"Dues/subscriptions","Amount":308},
   {"Category":"Dues/subscriptions","Amount":16},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1607},
   {"Category":"Financialobligations","Amount":225},{"Category":"Financialobligations","Amount":265},
   {"Category":"Health","Amount":334},{"Category":"Health","Amount":439},{"Category":"Personal","Amount":343},
   {"Category":"Personal","Amount":396},{"Category":"Personal","Amount":205},{"Category":"Transportation","Amount":357},
   {"Category":"Transportation","Amount":65},{"Category":"Transportation","Amount":43},{"Category":"Income","Amount":19382},
   {"Category":"Income","Amount":579},{"Category":"Income","Amount":4921},{"Category":"Home","Amount":145},
   {"Category":"Home","Amount":581},{"Category":"Home","Amount":142},{"Category":"Home","Amount":1950},
   {"Category":"Home","Amount":257},{"Category":"DailyLiving","Amount":299},{"Category":"DailyLiving","Amount":75},
   {"Category":"DailyLiving","Amount":123},{"Category":"Dues/subscriptions","Amount":412},
   {"Category":"Dues/subscriptions","Amount":12},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1129},
   {"Category":"Financialobligations","Amount":330},{"Category":"Financialobligations","Amount":217},
   {"Category":"Health","Amount":439},{"Category":"Health","Amount":343},{"Category":"Personal","Amount":448},
   {"Category":"Personal","Amount":205},{"Category":"Personal","Amount":414},{"Category":"Transportation","Amount":261},{"Category":"Transportation","Amount":91},{"Category":"Transportation","Amount":24},{"Category":"Home","Amount":145},
   {"Category":"Home","Amount":581},{"Category":"Home","Amount":142},{"Category":"Home","Amount":1950},
   {"Category":"Home","Amount":257},{"Category":"DailyLiving","Amount":299},{"Category":"DailyLiving","Amount":75},
   {"Category":"DailyLiving","Amount":123},{"Category":"Dues/subscriptions","Amount":412},
   {"Category":"Dues/subscriptions","Amount":12},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1129},
   {"Category":"Financialobligations","Amount":330},{"Category":"Financialobligations","Amount":217},
   {"Category":"Health","Amount":439},{"Category":"Health","Amount":343},{"Category":"Personal","Amount":448},
   {"Category":"Personal","Amount":205},{"Category":"Personal","Amount":414},{"Category":"Transportation","Amount":261},
   {"Category":"Transportation","Amount":91},{"Category":"Transportation","Amount":24},{"Category":"Home","Amount":145},
   {"Category":"Home","Amount":581},{"Category":"Home","Amount":142},{"Category":"Home","Amount":1950},
   {"Category":"Home","Amount":257},{"Category":"DailyLiving","Amount":299},{"Category":"DailyLiving","Amount":75},
   {"Category":"DailyLiving","Amount":123},{"Category":"Dues/subscriptions","Amount":412},
   {"Category":"Dues/subscriptions","Amount":12},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1129},
   {"Category":"Financialobligations","Amount":330},{"Category":"Financialobligations","Amount":269},
   {"Category":"Health","Amount":343},{"Category":"Health","Amount":448},{"Category":"Personal","Amount":352},
   {"Category":"Personal","Amount":414},{"Category":"Personal","Amount":223},{"Category":"Transportation","Amount":366},
   {"Category":"Transportation","Amount":67},{"Category":"Transportation","Amount":45},{"Category":"Income","Amount":16995},
   {"Category":"Income","Amount":684},{"Category":"Income","Amount":4443},{"Category":"Home","Amount":276},
   {"Category":"Home","Amount":485},{"Category":"Home","Amount":195},{"Category":"Home","Amount":1472},
   {"Category":"Home","Amount":299},{"Category":"DailyLiving","Amount":251},{"Category":"DailyLiving","Amount":52},
   {"Category":"DailyLiving","Amount":165},{"Category":"Dues/subscriptions","Amount":317},
   {"Category":"Dues/subscriptions","Amount":16},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1652},
   {"Category":"Financialobligations","Amount":234},{"Category":"Financialobligations","Amount":269},
   {"Category":"Health","Amount":343},{"Category":"Health","Amount":448},{"Category":"Personal","Amount":352},
   {"Category":"Personal","Amount":414},{"Category":"Personal","Amount":223},{"Category":"Transportation","Amount":366},
   {"Category":"Transportation","Amount":67},{"Category":"Transportation","Amount":45},{"Category":"Home","Amount":276},
   {"Category":"Home","Amount":485},{"Category":"Home","Amount":195},{"Category":"Home","Amount":1472},
   {"Category":"Home","Amount":299},{"Category":"DailyLiving","Amount":251},{"Category":"DailyLiving","Amount":52},
   {"Category":"DailyLiving","Amount":165},{"Category":"Dues/subscriptions","Amount":317},
   {"Category":"Dues/subscriptions","Amount":16},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1652},
   {"Category":"Financialobligations","Amount":234},{"Category":"Financialobligations","Amount":269},
   {"Category":"Health","Amount":343},{"Category":"Health","Amount":448},{"Category":"Personal","Amount":352},
   {"Category":"Personal","Amount":414},{"Category":"Personal","Amount":223},{"Category":"Transportation","Amount":366},
   {"Category":"Transportation","Amount":67},{"Category":"Transportation","Amount":45},{"Category":"Home","Amount":276},
   {"Category":"Home","Amount":485},{"Category":"Home","Amount":195},{"Category":"Home","Amount":1472},
   {"Category":"Home","Amount":299},{"Category":"DailyLiving","Amount":251},{"Category":"DailyLiving","Amount":78},
   {"Category":"DailyLiving","Amount":126},{"Category":"Dues/subscriptions","Amount":421},
   {"Category":"Dues/subscriptions","Amount":13},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1174},
   {"Category":"Financialobligations","Amount":339},{"Category":"Financialobligations","Amount":221},
   {"Category":"Health","Amount":448},{"Category":"Health","Amount":352},{"Category":"Personal","Amount":457},
   {"Category":"Personal","Amount":223},{"Category":"Personal","Amount":432},{"Category":"Transportation","Amount":270},
   {"Category":"Transportation","Amount":93},{"Category":"Transportation","Amount":25},{"Category":"Income","Amount":19607},
   {"Category":"Income","Amount":588},{"Category":"Income","Amount":4966},{"Category":"Home","Amount":157},
   {"Category":"Home","Amount":590},{"Category":"Home","Amount":147},{"Category":"Home","Amount":1995},
   {"Category":"Home","Amount":261},{"Category":"DailyLiving","Amount":204},{"Category":"DailyLiving","Amount":78},
   {"Category":"DailyLiving","Amount":126},{"Category":"Dues/subscriptions","Amount":421},
   {"Category":"Dues/subscriptions","Amount":13},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1174},
   {"Category":"Financialobligations","Amount":339},{"Category":"Financialobligations","Amount":221},
   {"Category":"Health","Amount":448},{"Category":"Health","Amount":352},{"Category":"Personal","Amount":457},
   {"Category":"Personal","Amount":223},{"Category":"Personal","Amount":432},{"Category":"Transportation","Amount":270},
   {"Category":"Transportation","Amount":93},{"Category":"Transportation","Amount":25},{"Category":"Home","Amount":157},
   {"Category":"Home","Amount":590},{"Category":"Home","Amount":147},{"Category":"Home","Amount":1995},
   {"Category":"Home","Amount":261},{"Category":"DailyLiving","Amount":204},{"Category":"DailyLiving","Amount":78},
   {"Category":"DailyLiving","Amount":126},{"Category":"Dues/subscriptions","Amount":421},
   {"Category":"Dues/subscriptions","Amount":13},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1174},
   {"Category":"Financialobligations","Amount":339},{"Category":"Financialobligations","Amount":221},
   {"Category":"Health","Amount":448},{"Category":"Health","Amount":352},{"Category":"Personal","Amount":457},
   {"Category":"Personal","Amount":223},{"Category":"Personal","Amount":432},{"Category":"Transportation","Amount":270},
   {"Category":"Transportation","Amount":93},{"Category":"Transportation","Amount":46},{"Category":"Income","Amount":17219},
   {"Category":"Income","Amount":693},{"Category":"Income","Amount":4488},{"Category":"Home","Amount":287},
   {"Category":"Home","Amount":494},{"Category":"Home","Amount":199},{"Category":"Home","Amount":1517},
   {"Category":"Home","Amount":223},{"Category":"DailyLiving","Amount":256},{"Category":"DailyLiving","Amount":54},
   {"Category":"DailyLiving","Amount":168},{"Category":"Dues/subscriptions","Amount":325},
   {"Category":"Dues/subscriptions","Amount":17},{"Category":"Entertainment","Amount":5},
   {"Category":"Entertainment","Amount":1697},{"Category":"Financialobligations","Amount":243},
   {"Category":"Financialobligations","Amount":274},{"Category":"Health","Amount":352},{"Category":"Health","Amount":457},
   {"Category":"Personal","Amount":361},{"Category":"Personal","Amount":432},{"Category":"Personal","Amount":241},
   {"Category":"Transportation","Amount":375},{"Category":"Transportation","Amount":69},{"Category":"Transportation","Amount":46},
   {"Category":"Home","Amount":287},{"Category":"Home","Amount":494},{"Category":"Home","Amount":199},
   {"Category":"Home","Amount":1517},{"Category":"Home","Amount":223},{"Category":"DailyLiving","Amount":256},
   {"Category":"DailyLiving","Amount":54},{"Category":"DailyLiving","Amount":168},{"Category":"Dues/subscriptions","Amount":325},
   {"Category":"Dues/subscriptions","Amount":17},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1697},
   {"Category":"Financialobligations","Amount":243},{"Category":"Financialobligations","Amount":274},
   {"Category":"Health","Amount":352},{"Category":"Health","Amount":457},{"Category":"Personal","Amount":361},
   {"Category":"Personal","Amount":432},{"Category":"Personal","Amount":241},{"Category":"Transportation","Amount":375},
   {"Category":"Transportation","Amount":69},{"Category":"Transportation","Amount":46},{"Category":"Home","Amount":287},
   {"Category":"Home","Amount":494},{"Category":"Home","Amount":199},{"Category":"Home","Amount":1517},
   {"Category":"Home","Amount":223},{"Category":"DailyLiving","Amount":256},{"Category":"DailyLiving","Amount":54},
   {"Category":"DailyLiving","Amount":168},{"Category":"Dues/subscriptions","Amount":325},
   {"Category":"Dues/subscriptions","Amount":17},{"Category":"Entertainment","Amount":5},{"Category":"Entertainment","Amount":1697},
   {"Category":"Financialobligations","Amount":348},{"Category":"Financialobligations","Amount":226},
   {"Category":"Health","Amount":457},{"Category":"Health","Amount":361},{"Category":"Personal","Amount":466},
   {"Category":"Personal","Amount":241},{"Category":"Personal","Amount":450},{"Category":"Transportation","Amount":279},
   {"Category":"Transportation","Amount":96},{"Category":"Transportation","Amount":27},{"Category":"Income","Amount":19831},
   {"Category":"Income","Amount":597},{"Category":"Income","Amount":4011},{"Category":"Home","Amount":168},
   {"Category":"Home","Amount":599},{"Category":"Home","Amount":151},{"Category":"Home","Amount":1040},
   {"Category":"Home","Amount":265},{"Category":"DailyLiving","Amount":208},{"Category":"DailyLiving","Amount":80},
   {"Category":"DailyLiving","Amount":130},{"Category":"Dues/subscriptions","Amount":430},
   {"Category":"Dues/subscriptions","Amount":13},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1219},
   {"Category":"Financialobligations","Amount":348},{"Category":"Financialobligations","Amount":226},
   {"Category":"Health","Amount":457},{"Category":"Health","Amount":361},{"Category":"Personal","Amount":466},
   {"Category":"Personal","Amount":241},{"Category":"Personal","Amount":450},{"Category":"Transportation","Amount":279},
   {"Category":"Transportation","Amount":96},{"Category":"Transportation","Amount":27},{"Category":"Home","Amount":168},
   {"Category":"Home","Amount":599},{"Category":"Home","Amount":151},{"Category":"Home","Amount":1040},
   {"Category":"Home","Amount":265},{"Category":"DailyLiving","Amount":208},{"Category":"DailyLiving","Amount":80},
   {"Category":"DailyLiving","Amount":130},{"Category":"Dues/subscriptions","Amount":430},
   {"Category":"Dues/subscriptions","Amount":13},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1219},
   {"Category":"Financialobligations","Amount":348},{"Category":"Financialobligations","Amount":226},
   {"Category":"Health","Amount":457},{"Category":"Health","Amount":361},{"Category":"Personal","Amount":466},
   {"Category":"Personal","Amount":241},{"Category":"Personal","Amount":450},{"Category":"Transportation","Amount":279},
   {"Category":"Transportation","Amount":96},{"Category":"Transportation","Amount":27},{"Category":"Home","Amount":168},
   {"Category":"Home","Amount":599},{"Category":"Home","Amount":151},{"Category":"Home","Amount":1040},
   {"Category":"Home","Amount":265},{"Category":"DailyLiving","Amount":260},{"Category":"DailyLiving","Amount":56},
   {"Category":"DailyLiving","Amount":172},{"Category":"Dues/subscriptions","Amount":334},
   {"Category":"Dues/subscriptions","Amount":17},{"Category":"Entertainment","Amount":6},{"Category":"Entertainment","Amount":1742},
   {"Category":"Financialobligations","Amount":252},{"Category":"Financialobligations","Amount":278},
   {"Category":"Health","Amount":361},{"Category":"Health","Amount":466},{"Category":"Personal","Amount":370},
   {"Category":"Personal","Amount":450},{"Category":"Personal","Amount":259},{"Category":"Transportation","Amount":384},
   {"Category":"Transportation","Amount":72},{"Category":"Transportation","Amount":48},{"Category":"Income","Amount":17443},
   {"Category":"Income","Amount":502},{"Category":"Income","Amount":4533},{"Category":"Home","Amount":298},
   {"Category":"Home","Amount":503},{"Category":"Home","Amount":104},{"Category":"Home","Amount":1562},
   {"Category":"Home","Amount":226},{"Category":"DailyLiving","Amount":260},{"Category":"DailyLiving","Amount":56},
   {"Category":"DailyLiving","Amount":172},{"Category":"Dues/subscriptions","Amount":334},
   {"Category":"Dues/subscriptions","Amount":17},{"Category":"Entertainment","Amount":6},{"Category":"Entertainment","Amount":1742},
   {"Category":"Financialobligations","Amount":252},{"Category":"Financialobligations","Amount":278},
   {"Category":"Health","Amount":361},{"Category":"Health","Amount":466},{"Category":"Personal","Amount":370},
   {"Category":"Personal","Amount":450},{"Category":"Personal","Amount":259},{"Category":"Transportation","Amount":384},
   {"Category":"Transportation","Amount":72},{"Category":"Transportation","Amount":48},{"Category":"Home","Amount":298},
   {"Category":"Home","Amount":503},{"Category":"Home","Amount":104},{"Category":"Home","Amount":1562},
   {"Category":"Home","Amount":226},{"Category":"DailyLiving","Amount":260},{"Category":"DailyLiving","Amount":56},
   {"Category":"DailyLiving","Amount":172},{"Category":"Dues/subscriptions","Amount":334},
   {"Category":"Dues/subscriptions","Amount":17},{"Category":"Entertainment","Amount":6},{"Category":"Entertainment","Amount":1742},
   {"Category":"Financialobligations","Amount":252},{"Category":"Financialobligations","Amount":278},
   {"Category":"Health","Amount":361},{"Category":"Health","Amount":466},{"Category":"Personal","Amount":370},
   {"Category":"Personal","Amount":450},{"Category":"Personal","Amount":468},{"Category":"Transportation","Amount":288},
   {"Category":"Transportation","Amount":98},{"Category":"Transportation","Amount":29},{"Category":"Income","Amount":15055},
   {"Category":"Income","Amount":606},{"Category":"Income","Amount":4055},{"Category":"Home","Amount":179},
   {"Category":"Home","Amount":408},{"Category":"Home","Amount":156},{"Category":"Home","Amount":1085},
   {"Category":"Home","Amount":268},{"Category":"DailyLiving","Amount":212},{"Category":"DailyLiving","Amount":82},
   {"Category":"DailyLiving","Amount":133},{"Category":"Dues/subscriptions","Amount":439},
   {"Category":"Dues/subscriptions","Amount":13},{"Category":"Entertainment","Amount":8},
   {"Category":"Entertainment","Amount":1264},{"Category":"Financialobligations","Amount":357},
   {"Category":"Financialobligations","Amount":230},{"Category":"Health","Amount":466},{"Category":"Health","Amount":370},
   {"Category":"Personal","Amount":475},{"Category":"Personal","Amount":259},{"Category":"Personal","Amount":468},
   {"Category":"Transportation","Amount":288},{"Category":"Transportation","Amount":98},{"Category":"Transportation","Amount":29},
   {"Category":"Home","Amount":179},{"Category":"Home","Amount":408},{"Category":"Home","Amount":156},
   {"Category":"Home","Amount":1085},{"Category":"Home","Amount":268},{"Category":"DailyLiving","Amount":212},
   {"Category":"DailyLiving","Amount":82},{"Category":"DailyLiving","Amount":133},{"Category":"Dues/subscriptions","Amount":439},
   {"Category":"Dues/subscriptions","Amount":13},{"Category":"Entertainment","Amount":8},{"Category":"Entertainment","Amount":1264},
   {"Category":"Financialobligations","Amount":357},{"Category":"Financialobligations","Amount":230},
   {"Category":"Health","Amount":466},{"Category":"Health","Amount":370},{"Category":"Personal","Amount":475},
   {"Category":"Personal","Amount":259},{"Category":"Personal","Amount":468},{"Category":"Transportation","Amount":288},
   {"Category":"Transportation","Amount":98},{"Category":"Transportation","Amount":29},{"Category":"Home","Amount":179},
   {"Category":"Home","Amount":408},{"Category":"Home","Amount":156},{"Category":"Home","Amount":1085},
   {"Category":"Home","Amount":268},{"Category":"DailyLiving","Amount":212},{"Category":"DailyLiving","Amount":82},
   {"Category":"DailyLiving","Amount":133},{"Category":"Dues/subscriptions","Amount":439}
   ]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section for more information. Here, we are going to create a dataset using [JSON inline data](./../../../manage-data/data-connectors/json-data-source/#inline-data) to design the report.

## Assign data

The **Doughnut chart** needs a minimum of one value element and one column element to showcase. The measure or expression field that you want to analyze can be dropped into the `Y Value(s)` section. The dimension for which you want to categorize the measure can be dropped into the `Column` section. To categorize based on a series, drop the respective dimension into the `Row(s)` section.

To configure data into a doughnut chart, follow these steps:

1. To bind data to a chart report item placed in the design area, focus on that report item.

2. Click the `Properties` icon in the configuration panel, the property pane opens. Now, switch to the `DATA` tab.

   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/chart-properties-pane.png)

3. The available data in the report will be listed in the dropdown, choose a data in the dropdown list.

   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/data-assign-drop-down.png)

4. The numeric columns and numeric expressions are listed under the `Measures` section; other types of columns and dimension        expressions are listed under the `Dimensions` section.

   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/measures-dimensions-category.png)

5. **Drag and Drop Measure Element**:

   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Value(s)` section.

   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/add-y-values-field.png)

   Now, the report item design will look like below:

   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/y-value-chart-design-view.png)

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted below) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/aggregation-settings-icon.png)

   You can set the aggregation type by which you can compute the selected column.

   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/aggregation-settings-menu.png)

7. **Drag and Drop Dimension Element**:

   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in the `Y Value(s)` section, and drop it into the `Column` section.

   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/add-field-to-column-section.png)

   Now, the report item design will look like below:

   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/column-field-design-preview.png)

8. **Grouping**:

   You can also group the added column element with another column by adding the respective dimension element into the Row(s) section.

9. **Formatting Column and Row(s) sections**:

   You can also [Filter](./../../../compose-report/filter-data/), [Sort](./../../../compose-report/sort-data/), or [Group](./../../../compose-report/group-data/) the Column or Row(s) sections using expressions.

## Format Doughnut Chart

You can format the doughnut chart for better illustration of the view that you require, through the settings available in the  `Properties` tab.

To format a doughnut chart, follow the below steps:

1. Drag and drop the doughnut chart into the design area and resize it to the required size.
2. Configure the data to the doughnut chart.
3. Focus on the doughnut chart and click the `Properties` icon in the configuration panel, the property pane opens.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/open-chart-properties.png)

You can see the list of properties available for the widget with the default value.

### Name

The **Name** property can be used to provide a unique name for the chart item in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/name-property.png)

### Basic Settings

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/basic-settings.png)

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of the legend in the chart and also customize the legend text appearance. To set/reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

You can add multiple series to the chart and the available series will be listed in the `Choose Series` dropdown. To customize the series appearance, choose the required series name from the dropdown.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/multi-series-list-in-drop-down.png)

We can edit the selected series by clicking the edit button.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/edit-series.png)

In this case, we have enabled the `Enable SmartLabel`.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/enable-smart-label.png)

In `Data Label Settings`, we have enabled the `Show Data Label` and set the Label as `#PERCENT` and then the `UseValueAsLabel` is disabled.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/data-label-settings.png)

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The border style, color, width, and background color properties can be used to style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/appearance-property.png)

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/appearance-design.png)

### Chart Area

The **Chart Area** properties such as border width, color, and background color can be used to customize the area of the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/chart-area-sketch.png)

These properties are listed under the `Chart Area` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/chart-area-category.png)

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/chart-area-design.png)

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart.

### Title

The chart title can be customized by editing the `Title Text` property of the chart.

To show/hide the chart title, toggle the `Show Chart Title` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/chart-title.png)

Using these properties, the font color, font text, font style, border, background, and position of the title can be customized in the chart design.

### No Data

The **No Data** property is used to display static text when a dataset results with empty or zero rows at runtime.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/no-data.png)

To set/reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Page break

The **page break** property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply the page break property to the chart report item.

1. The **Break Location** property specifies where the page break should occur. Choose any `Break Location` type in the dropdown.

   ![Break location](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/break-location-types.png)

2. To restart the page numbering on each page, enable the `Page Number Reset` property checkbox.

   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/page-break-property.png)

### Data Element

The **data element** can be used to control the visibility of a report item when exporting the report in XML format. The data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/data-element-properties.png)

#### Name

You can assign a custom name to the chart element using the `Name` field. The chart report item will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/data-element-name-properties.png)

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

On exporting the report, the visibility of the chart can be controlled using the **Output** property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the chart report item
* **NoOutput** - Does not export the chart report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/output-property.png)

### Miscellaneous

#### Page name

The **page name** property is used to name the first worksheet of the Excel workbook, when exporting the report to excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/page-name.png)

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Document Map

A **document map** is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure the document map in the report design.

You can set static or dynamic text as the value for the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Bookmark

Bookmark links allow users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table, chart, or to the unique group values displayed in a tablix, which can direct the users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Custom attributes

This property can be used to set the values for chart custom properties. To create and assign values to custom properties using the properties panel, refer to the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

The **Tooltip** property can be used to display informative text or values when the user hovers over the report item in the report preview. To set a tooltip for a chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

## Preview report

1. To see the report preview, click on the **Preview** button in the top-right corner of the report header.

   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/preview-icon.png)

2. Now, the report preview can be visualized as below.

   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/doughnut-chart/report-preview-page.png)

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/doughnut.rdl).