---
title: Manage users in UMS of Enterprise Reporting | Bold Reports
description: Learn here how to add, update, activate, delete users, grant access to the site and more in User Management Server of Enterprise Bold Reports.
platform: report-platform
documentation: ug
---

# Manage Users in UMS

This section explains how to add, update, activate and delete users.

Users can only be added/edited/deleted by those who are having UMS admin access.

## Add new users

New users can be added to UMS individually or in bulk by using CSV import.

### Add individual users

To add a new user in UMS, click `New User` and then `Add User` from the User Management page.

The `Add User` dialog will be shown as in the image below.

![Add User Dialog Proceed](/static/assets/on-premise/images/tenant-management/add-user-dialog-proceed.png)

![Add User Dialog](/static/assets/on-premise/images/tenant-management/add-user-dialog-save.png)

![Add User Dialog](/static/assets/on-premise/images/tenant-management/add-user-success-prompt.png)

> **NOTE:**  
> * If the account activation mode is Automatic, then the new user will be automatically activated.
> * If the activation type is Email, then the user will receive an email for activating their account. The user account will be activated after verifying the email. By default, the Account Activation Mode is Automatic.
> * Kindly refer to [Account settings](./../site-administration/account-settings/) page for more details.

**Automatic activation**|**Email activation**
-----|-----
1. Fill the form with a Username, Email address, First name, Last name and password and then click on `Add`.|1. Fill the form with a Username, Email address, First name and Last name and then click on `Add`.
2. Please refer to [this](#password-requirement) section for password requirement.|2. To activate the user, please check [Activate Users](#activate-users) section for more details.

### Import users from CSV

To automate the process of adding a large number of users to UMS, you can download the CSV template file and add the users in it and then import the file.

> **NOTE:**  The section will explain on how to import the users from CSV file which can be downloaded from below location in UMS.

#### Add users from CSV file

In UMS, click `Import from csv`.

![Import from CSV - Goto Import CSV users page](/static/assets/on-premise/images/tenant-management/goto-import-csv-users.png)

### CSV file Requirements

The first row in the CSV template represents the column heading. UMS assumes that the data from the second line in the file represents the user.

We have the following columns are considered as mandatory in the downloaded CSV file.

**Automatic Activation**|**Email Activation**
:-----:|:-----:
Username|Full Name
Full Name|Email
Password|-

Follow the below steps to add users using the CSV template

1. Download CSV template.

    ![Import from CSV - Download CSV template](/static/assets/on-premise/images/tenant-management/download-csv-template.png)

2. Add users in the CSV. Save the file and upload it.

    ![Import from CSV - Add users into CSV file](/static/assets/on-premise/images/tenant-management/csv-import-add-users.png)

3. Once the file is uploaded the user details will be shown in the grid like in the below image. Click `Import Users` to add the users.

    ![Import from CSV - User detail in grid](/static/assets/on-premise/images/tenant-management/csv-import-proceed.png)

4. After uploaded the users in UMS the results are displayed as below.

    ![Import from CSV - Success Message](/static/assets/on-premise/images/tenant-management/csv-import-success-prompt.png)

### Password Requirement

The password must meet the following requirements:

It must contain,

* At least 6 characters,
* 1 uppercase,
* 1 lowercase,
* 1 numeric,
* 1 special character.

![Password Requirement](/static/assets/on-premise/images/tenant-management/user-add-dialog-password-validation.png)

## Activate users

Once the user is added new account will be created for the user and an account activation email will be sent to the email address with an activation link to activate the Bold Reports account.

The activation link sent to the user will be valid only for 3 days and if the user have not activated within the 3 days, a new activation link can be sent to the user from the user edit page.

The account will be on inactive status till the user activates the account from the activation email.

## Edit users

User profile details can be edited by the users edit page as shown in the below image.

![Edit User](/static/assets/on-premise/images/tenant-management/edit-user-proceed.png)

Username, First Name, Last Name, Phone number and profile picture of the user can be edited.

![Edit User Profile](/static/assets/on-premise/images/tenant-management/edit-user.png)

## Change Password

If the users forgot their password, Administrators can able to reset the password for the users by using this option.

Please refer to [this](#password-requirement) section for password requirement.

![Change Password](/static/assets/on-premise/images/tenant-management/change-password.png)

## Delete users

Users can be deleted from the UMS when the user no longer requires the access. Users can be deleted from the user management page by the `System Administrator`.

![Delete user by Admin](/static/assets/on-premise/images/tenant-management/delete-user.png)

> **Note:**  Once the user gets deleted by the `System Administrator` his access will be revoked from the sites that he belongs to.

## Grant user access to multiple sites

You can select single or multiple users in user management and provide access to multiple sites.

![Grant User Access](/static/assets/on-premise/images/tenant-management/grant-user-access-proceed.png)

Select the sites you need to provide access to the selected users and then select `Grant Access` button to proceed.

![Grant Access Select Sites](/static/assets/on-premise/images/tenant-management/grant-access-select-site.png)

> **NOTE:**  If the selected user has already access to that site, the process will be skipped.

After the process completion, you can see a detailed report on it. You can also download the report in CSV format.

![Grant Access Select Sites](/static/assets/on-premise/images/tenant-management/grant-access-report.png)

You can revoke access to the site by referring [here](./../manage-sites/#revoke-access).
