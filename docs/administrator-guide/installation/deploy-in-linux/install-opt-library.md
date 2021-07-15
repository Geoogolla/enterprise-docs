---
layout: post
title: Installing Client Libraries in Linux | Bold Reports
description: Learn  Set up To Install Optional Library in Linux Ubuntu for the Bold Reports Enterprise Edition. Learn  Set up To Install Optional Library in Linux Ubuntu for the Bold Reports Enterprise Edition.
platform: report-platform
documentation: ug
---

# Install Optional Libraries

## Client libraries

> **Important:** Bold Reports Enterprise Edition uses client libraries such as Oracle, PostgreSQL, and MySQL to connect with their respective SQL database variants. You need to read and accept client library license to install client libraries.

1. Go to client library location. `/var/www/bold-services/clientlibrary/`

2. Here, you can see the client library consent document `consent-to-deploy-client-libraries.txt`. Read client libraries `LICENSE` details and execute the following command to install client libraries.

    ```sh
    $sudo bash install-optional.libs.sh install-optional-libs {user} postgresql,mysql,oracle
    ```

## PhantomJS

> **Important:** PhantomJS is a headless WebKit scriptable with JavaScript. This is free software or open source, and it may contain MIT, BSD, LGPL, GPL, or other similar licenses that contain third-party code. This executable file is necessary to export the data visualization report items during report schedule.

1. Go to client library location. `/var/www/bold-services/clientlibrary/`

2. Here, you can see the PhantomJS library consent document `consent-to-deploy-phantomjs-webkit.txt`. Read the PhantomJS `LICENSE` details and execute the following command to install PhantomJS.

    ```sh
    $sudo bash install-optional.libs.sh install-optional-libs {user} phantomjs
    ```

> **Note:** PhantomJS needs some dependencies. If your distribution does not contain the dependencies, please install it. [https://phantomjs.org/download.html](https://phantomjs.org/download.html).

## Next step

* [Application Startup](./../../../application-startup/)