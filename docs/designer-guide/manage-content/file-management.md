---
layout: post
title: File management in the Report Server | Syncfusion
description: Explains about file management in Report Server, it allows you to view versions, logs, add, update, rollback, download and delete files.
platform: report-platform
documentation: ug
---

# Report Server file management

You can upload files and store them as managed items in Report Server data base. Uploading any files without the `.rdl` extension, are published to the Report Server as a resource and linked or added to the reports. When you upload a file, it is always placed in the `Files` page. Files are accessible to the user depending on the user’s permission.

This section explains about file management in Report Server, it allows you to view versions, logs, add, update, rollback, download and delete files in the Bold Reports On-Premise. The following image shows the list of options available to manage a file.
![Options available to manage files](/static/assets/on-premise/images/manage-content/manage-files/manage-files.png)

## Add files

Files can be added into the Report Server only when you have `Create All Files` permission.

### Steps to add a file

1. Click on the `[+]` icon from the toolbar that appear at right top of the page and click the `Upload` button in the menu and select `File` to add a file.
    ![Create a file menu option](/static/assets/on-premise/images/manage-content/manage-files/create-file.png)

2. Enter the name and description of the file and upload the file in the `Upload File` dialog box. Any file can be uploaded into the Report Server and the file can be linked/added to the reports.
    ![Add a file to Report Server](/static/assets/on-premise/images/manage-content/manage-files/add-file.png)

3. Click on the `Add` option, the file will be added to the Report Server and it can be used in any one of the reports.

    > `Read Write Delete Download` permission for the `Specific File` will be added for the user who created the file.

## Update files

You can changes the name, description and the physical file in the update file dialog box.
![Update or modify the file name and description](/static/assets/on-premise/images/manage-content/manage-files/update-file.png)

## Share files

You can share the files to other users by providing the access permissions. This section explains on how to share files with other users in the Report Server.

> Only the user who created the file can share the file with other Report Server users.

### Steps to share a files

1. Navigate to `Files` page. Click on the `Actions` button in the files grid context menu and select `Manage Permissions` option.
    ![Manage files permission](/static/assets/on-premise/images/manage-content/manage-files/file-management-options.png)

2. Select the access permission from the `Select Access` dropdown and select the users or groups to share the files.
    ![Select access permission, users or groups to a file](/static/assets/on-premise/images/manage-content/manage-files/share-file.png)

3. After selecting the access and users or groups, click on the `Add Permission` button.
    ![Add permission button option](/static/assets/on-premise/images/manage-content/manage-files/add-file-permission.png)

### Remove file access permission

The user who created the file can remove the shared file permissions using the `Remove` option in the `Actions` column of the each permissions.
![Remove shared file access permission](/static/assets/on-premise/images/manage-content/manage-files/remove-file-permission.png)

## Download files

Click the `Actions` button in the files grid context menu and select `Download` to download the file compressed in a `.zip` format.
![Download file](/static/assets/on-premise/images/manage-content/manage-files/download-file.png)

## Version history

Versions and logs for each file are maintained in the Report Server for every changes made in the file. Click the `Actions` button in the grid context menu and click `Version History` option.
![Version History Option](/static/assets/on-premise/images/manage-content/manage-files/versions-history-option.png)

### Versions

For each change in the file, a new version will be created. All versions can be individually opened.
![Versions](/static/assets/on-premise/images/manage-content/manage-files/versions.png)

### File logs

For each change in the file including changes in the event, user and date.
![File logs](/static/assets/on-premise/images/manage-content/manage-files/file-logs.png)

## Delete files

The user who has the delete permission can delete files from the Report Server when they are no longer required. Click the `Actions` button in the files grid context menu and select `Delete` option to delete the file.
![Delete a file from Report Server](/static/assets/on-premise/images/manage-content/manage-files/delete-file.png)

## REST API Reference

The following table illustrates the list of available APIs related to files in Bold Reports On-Premise.

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
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_AddFile">AddFile</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /rest-api-reference/v1.0/files
        </td>
        <td>
            Adds a new file to the server. File details must be passed as input.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_UpdateFile">UpdateFile</a>
        </td>
        <td>
            PUT
        </td>
        <td>
            /rest-api-reference/v1.0/files
        </td>
        <td>
            Updates the file in the server. Updated file details must be passed as input.
        </td>
    </tr>  
        <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/ItemsV5_GetItems">GetFiles</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /rest-api-reference/v1.0/items
        </td>
        <td>
            Returns the list of files for current user. ItemType should be File.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetItemLocation">GetFileLocation</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /rest-api-reference/v1.0/items/{itemId}/location
        </td>
        <td>
            Returns the item location of the specified file. Specific File ID should be passed in path parameter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_IsItemNameExists">IsFileNameExists</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /rest-api-reference/v1.0/items/is-name-exists
        </td>
        <td>
            Returns an item existence whether the given file name already exists or not in server. File name and ItemType as File should be passed in request body.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetItemDetail">GetFileDetail</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /rest-api-reference/v1.0/items/{id}
        </td>
        <td>
            Returns the specified file details from the server. File item ID should be passed in path parameter.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_DeleteItem">DeleteFile</a>
        </td>
        <td>
            DELETE
        </td>
        <td>
            /rest-api-reference/v1.0/items/{id}
        </td>
        <td>
            Deletes the specified file from the server. File item ID should be passed in path parameter.
        </td>
    </tr>
</table>
