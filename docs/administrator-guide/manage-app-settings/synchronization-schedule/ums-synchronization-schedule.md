---
layout: post
title: UMS Synchronization Schedule | Reports | Syncfusion
description: Scheduling the synchronization of users and groups from User Management Server with the users and groups in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# UMS Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from User Management Server with the users and groups in the Bold Reports On-Premise.

By default, UMS settings will be configured on User Directory Settings.
![Ums-Settings](/static/assets/on-premise/images/settings/ums-settings.png)

![Ums-Synchronization-Schedule](/static/assets/on-premise/images/settings/ums-synchronization-schedule.png)

Users and groups from User Management Server can be synchronized on schedule to get the latest details of them into the Report Server.

But, in User Management Server, if the application has `Disabled` the `Access to all Users`
![Access-to-all-users-dialog](/static/assets/on-premise/images/settings/access-to-all-users-disabled.png)

To synchronize that users and groups from User Management Server, We have to provide grant access to the users and groups in the application.
![Grant-Access](/static/assets/on-premise/images/settings/grant-access.png)

## Email Notifications

Once a scheduled recurrence of synchronization is completed, the users in the `System Administrator` group will be notified through email about the synchronization status.

> By default, we will get Email notification for one hour once.

## Enable/Disable Synchronization schedule

Synchronization schedule can be enabled or disabled anytime from the top check box.
