---
layout: post
title: Manage Users and activation | Report Server | Syncfusion
description: Administrator can add, edit, activate, deactivate, manage permissions, assign users to groups and delete users in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Manage users

The users belongs to the `System Administrator` group can perform the following operations:

* Add, edit, and delete users
* Activate or deactivate users
* Manage permissions
* Assign users to groups

This section explains how to perform the above operation in the Bold Reports On-Premise. To manage the users, click the `User Management` option in Report Server left-side panel and navigate to `Users` tab as in following image.
![Open User Management settings](/static/assets/on-premise/images/manage-users-and-groups/users/user-management.png)

## Add new users

The following steps are involved in adding new users to the Report Server:

1. In the `User Management` page, click `New User` and then `Create User` from menu list.
2. The `Add User` dialog will be shown as like in the following image.
![Add new user dialog page](/static/assets/on-premise/images/manage-users-and-groups/users/add-user.png)
3. Fill the form with Username, Email address, First name, Last name, and click `Add`.
4. New account will be created for the user.
5. An account activation email will be sent to the email address with activation link to activate the Report Server account.
    > The email setting must be enabled to send email notification. See [Email Settings](/on-premise/settings/email-settings/) for configuration details.

The activation link sent to the user is valid only for 3 days. If the user have not activated within the 3 days, a new activation link can be send to the user from the user edit page. See [Activate Users](#activate-users) for more details.

> The account will be in inactive status till the user activates the account using the activation email.

## Edit users

You can edit user profile details such as First Name, Last Name, Email address, Phone Number, and Profile Picture.
![Edit User details](/static/assets/on-premise/images/manage-users-and-groups/users/edit-user.png)

The login password for the user can be edited as shown in the following image.
![Edit user password](/static/assets/on-premise/images/manage-users-and-groups/users/edit-password.png)

## Delete users

Delete user from the Report Server when the user no longer requires the access. you can delete an user from the `User Management` page or from the profile edit page.

### From user management page

Select the user from users list grid and click the `Delete User` option.
![Delete user from user management page](/static/assets/on-premise/images/manage-users-and-groups/users/delete-user-1.png)

### From user edit page

Click an user from the users list grid and click `Delete User`.
![Delete user from user edit page](/static/assets/on-premise/images/manage-users-and-groups/users/delete-user-2.png)

## Activate users

1. From the Users list, click the user name and it opens the user profile details page.
2. Click the `Edit Profile` option.
3. Activate the inactive users by clicking the `Activate User` button in the user edit page.
![Activate user account](/static/assets/on-premise/images/manage-users-and-groups/users/activate-user.png)
4. This will send an account activation email to the user with an activation link to activate the account. The activation link will be valid only for 3 days.
5. If the user has not received the activation email or missed to activate the account within 3 days, then the `System Administrator` should resend the activation email to the user as in the following image.
![Resend Activation code to activate user account](/static/assets/on-premise/images/manage-users-and-groups/users/resend-user-activation-link.png)

## Deactivate users

Users can be deactivated at any time. Once deactivated, the user cannot log into the Report Server.

1. From the Users list page, click the user name, the user profile details page will open.
2. Click the `Edit Profile` option.
3. Choose inactive option from the status drop-down.
![Deactivate user account](/static/assets/on-premise/images/manage-users-and-groups/users/deactivate-user.png)

## Assign users to group

Users can be assigned to one or many groups from the user management page.

1. Select and user from `User Management` and click the `Assign Group` option.
![Assign group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users.png)
2. Select the group name to assign the user to an existing group. Then click **Add**.
![Assign existing group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users-1.png)
3. To create a new group, click the **New Group** option. Specify the group name and click **Add**.
    ![Assign new group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users-2.png)
    > All the users in the group will have the permissions of assigned group.

## Manage permissions

Check the [Manage Permissions](/on-premise/manage-permissions/) section to learn more about  managing permissions to users.