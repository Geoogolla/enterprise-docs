---
layout: post
title: Import-users from CSV | Report Server | Syncfusion
description: Describes step-by-step procedure to import large number of users from the CSV file into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Import users from CSV

You can add large number of users to Report Sever by importing users from a CSV file. To automate the process of adding large number of users, download the CSV template file and add the users to it, then import the file.

1. In the Report Server page, navigate to the user management page by clicking the `User Management` icon.
![Open user management page](/static/assets/on-premise/images/manage-users-and-groups/users/user-management.png)

2. Click the `New User` option shown at right of the panel.
3. From the drop-down list, click `Import from CSV` option.
![Select Import from CSV from New User drop down](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-csv/import-csv-option.png)

4. This will open the Import Users page.

## Download users CSV template file

To download the CSV user template, select the `Download Template` option from Import Users page as in the following image.
![Download CSV template option](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-csv/download-template.png)

## CSV template requirements

The first row in the CSV template represents the column heading. Bold Reports On-Premise assumes that the data from the second line in the file represents the user. The following columns are considered as mandatory in the downloaded CSV file.

* Username
* Email address
* Full Name
* Password - If the account activation configured with `Automatic`, then password field should be filled. Otherwise you can leave the password field as empty.

> Report Server has `Automatic` or `Email` based account activation.

## Add or import users from CSV template

1. Download CSV template.
2. Add users in the CSV file and save the CSV file.
![Add users into CSV template file](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-csv/add-users-to-csv.png)

3. Click the browse button, select template file and click upload.
![Upload users CSV template file](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-csv/upload-csv.png)

4. After uploading the file, the user details will be shown in the grid as in the following image.
    ![Uploaded user detail shown in grid](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-csv/csv-imported-grid-view.png)
    > If the account activation configured with `Email` activation, the activation mail will be send to the user's mail Id. Otherwise the user will be automatically activated.

5. After uploaded the users in Report Server, the results are displayed as follows.
![Import success message](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-csv/csv-import-success.png)
6. Click the `Import and Activate` to import the users to Report Server.