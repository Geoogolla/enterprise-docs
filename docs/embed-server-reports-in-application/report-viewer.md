---
layout: post
title: Report Server reports | Report Server | Syncfusion
description: Explains about rendering  Bold Reports On-Premise deployed RDL reports using ReportViewer application with the help of embedded Report Service.
control: report-platform
documentation: ug
---

# Load  Bold Reports On-Premise reports

You can render the  Bold Reports On-Premise hosted reports in the Report Viewer easily without creating a Web API service.  Bold Reports On-Premise provides the built-in Web API service that helps you to display the server reports.

* The Report Viewer requires the `serviceAuthorizationToken` to connect and download the items from the  Bold Reports On-Premise. Create a token for the user by using the server RESTful API, the following code is used to generate the token.

    ```js
    <script type="text/javascript">
            $(function () {
                var dataValue = "";
                var apiRequest = new Object();
                apiRequest.password = "demo";
                apiRequest.userid = "guest";
                $.ajax({
                    type: "POST",
                    url: "https://on-premise-demo.boldreports.com/api/get-user-key",
                    data: apiRequest,
                    success: function (data) {
                        dataValue = data.Token;
                        var token = JSON.parse(dataValue);
                        // Report Viewer initialization.
                    }
                });
            });
    </script>

    ```

* Set the  Bold Reports On-Premise built-in service URL to the `reportServiceUrl` property. Assign the created token to `serviceAuthorizationToken` and `reportPath` to a report deployed on the server. You can use the following complete code in your HTML page.

    ```js
    <script type="text/javascript">
            $(function () {
                var dataValue = "";
                var apiRequest = new Object();
                apiRequest.password = "demo";
                apiRequest.userid = "guest";
                $.ajax({
                    type: "POST",
                    url: "https://on-premise-demo.boldreports.com/api/get-user-key",
                    data: apiRequest,
                    success: function (data) {
                        dataValue = data.Token;
                        var token = JSON.parse(dataValue);

                        $("#viewer").boldReportViewer(
                            {
                                reportServiceUrl: "https://on-premise-demo.boldreports.com/ReportService/api/Viewer",
                                serviceAuthorizationToken: token["token_type"] + " " + token["access_token"],
                                reportPath: '/Sample Reports/Company Sales'
                            });
                    }
                });
            });
    </script>
    ```

    > You can also load the report using Guid instead of report location. Set the Guid of the report in `reportPath` as like as `reportPath: ‘91f24bf1-e537-4488-b19f-b37f77481d00’`.

* Build and run the application. Preview and edit the result using the following.
