---
layout: post
title: Set up To Install Bold Report in Linux Ubunthu for the Bold.
description: Set up To Install Bold Report in Linux Ubunthu for the Bold.Set up To Install Bold Report in Linux Ubunthu for the Bold.Set up To Install Bold Report in Linux Ubunthu for the Bold.

platform: report-platform
documentation: ug
---

# Bold Reports Installation and Deployment on Ubuntu

## Deployment prerequisites

1. Access to a Linux server with a standard user account with sudo privileges.

2. Install `Nginx`.

> sudo apt-get update  

> sudo apt-get install nginx

3. Install zip.

> sudo apt-get install zip

4. Install ``GDIPlus`` package using the following command.

> sudo apt-get install libgdiplus

5. Add an ``openssl conf`` path in the environment, if does not exist.

export OPENSSL_CONF=/etc/ssl/


## Configuring the Bold Reports application

1. Register and download the Bold Reports Linux package from here.

2. Download the Bold Reports Linux package by running the following command.

> sudo wget {Bold Reports Linux package link}

3. Extract the zip file.

> sudo unzip {Bold Reports Linux package zip file}

4. Change the directory to `BoldReports_EnterpriseReporting-Linux` by running the following command.

> cd BoldReports_EnterpriseReporting-Linux

5. Execute the following command to deploy Bold Reports in your Linux machine.

> sudo bash install-boldreports.sh -i {new} -u {user} -h {host URL} -n {true or false} 


* **i** : Installation type - Specifies either it is a new or upgrade installation.

* **u** : Specify the user or group that manages the service.

* **h** : Domain or IP address of the machine with http protocol.

* **n** : Setting this to “true” will automatically configure the Bold Reports with Nginx front-end server.

**IMPORTANT**: If you have any existing applications running in that Linux machine using Nginx, set “-n” value to false and configure the [Nginx manually](#manually-configure-nginx). Example for new installation,

> sudo bash install-boldreports.sh -i new -u www-data -h http://linux.example.com -n true

Once the installation completed, open the host URL in the browser and continue the application startup.

## Manually Configure Nginx

To configure Nginx as a reverse proxy to forward requests to the Bold Reports app, modify /etc/nginx/sites-available/default. Open it in a text editor, and add the following code.

<p>

       #server {
       #listen 80;
       #server_name example.com;
       #return 301 https://example.com$request_uri;
       #}

         server {
       listen        80 default_server;

       #server_name   example.com;

       #listen 443 ssl;
       #ssl on;
       #ssl_certificate /path/to/certificate/file/domain.crt;
       #ssl_certificate_key /path/to/key/file/domain.key;

       proxy_read_timeout 300;
       proxy_connect_timeout 300;
       proxy_send_timeout 300;
       send_timeout 300;
       client_max_body_size 200M;

       location / {
      root /var/www/bold-services/application/idp/web/wwwroot;
        proxy_pass         http://localhost:6500/;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        fastcgi_buffers    16 16k;
        fastcgi_buffer_size 32k;
    }
    location /api {
        proxy_pass         http://localhost:6501/api;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /ums {
        root               /var/www/bold-services/application/idp/ums/wwwroot;
        proxy_pass         http://localhost:6502/ums;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /ums/signalr/progresshub {
        proxy_pass         http://localhost:6502/ums/signalr/progresshub;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting {
    root /var/www/bold-services/application/reporting/web/wwwroot;
        proxy_pass         http://localhost:6550/reporting;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/messageHub {
        proxy_pass         http://localhost:6550/reporting/messageHub;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/api {
        proxy_pass         http://localhost:6551/reporting/api;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/jobs {
        proxy_pass         http://localhost:6552/reporting/jobs;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/reportservice/api {
        root               /var/www/bold-services/application/reporting/reportservice;
        proxy_pass         http://localhost:6553/api;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}

</p>

Once the Nginx configuration is established, run the `sudo nginx -t` to verify the syntax of the configuration files. If the configuration file test is successful, force the Nginx to pick up the changes by running the `sudo nginx -s` reload.

## Configure SSL

If you have an SSL certificate for your domain and need to configure the site with your SSL certificate, follow these steps or you can skip this.

1. Uncomment the following marked lines in the Nginx config file.

![Ssl Config](/static/assets/on-premise/images/installation/ssl-config.png)

2. Comment the following marked line in the Nginx config file.

![Config Mark](/static/assets/on-premise/images/installation/ssl-config-mark.png)

3. Replace the `example.com` with your domain name.

4. Define the path of the SSL certificate: `ssl_certificate /etc/ssl/domain.crt`.

5. Specify the directory where the SSL certificate key is located: `ssl_certificate_key /etc/ssl/domain.key`.

6. Save and run the sudo `nginx -t` to verify the syntax of the configuration file. If the configuration file test is successful, force the Nginx to pick up the changes by running the `sudo nginx -s` reload.

>**NOTE**: If you are configuring the application with SSL, you need to update the URLs in the product.
>json with `HTTPS` located in the `/var/www/bold-services/application/app_data/configuration`.

## Next steps

* `Install Optional Libraries`

* [Application Startup](../../../application-startup/)