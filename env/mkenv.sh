#!/bin/bash

RED=`tput setaf 1`
GREEN=`tput setaf 2`
YELLOW=`tput setaf 3`
BLUE=`tput setaf 4`
PINK=`tput setaf 5`
CYAN=`tput setaf 6`
None=`tput sgr0`

domain_name=""
project_name=""
user_to_run_gunicorn=""
gunicorn_workers_count=3
base_dir="$(dirname "$PWD")"  



# Get neded variables

echo -n "${CYAN}[add]${None} Enter domain name, for example 'petryk.me': "
read domain_name 

echo -n "${CYAN}[add]${None} Enter project name, for example 'petryk': "
read project_name

echo -n "${CYAN}[add]${None} Enter user name, to run gunicorn: "
read user_to_run_gunicorn

echo -n "${CYAN}[add]${None} Enter count of workers for gunicorn: "
read gunicorn_workers_count 



# Create and activate virtualenviroment

virtualenv env
source env/bin/activate
pip install -r requirements.txt



# Create and fill servir files

mkdir nginx gunicorn
mkdir -p gunicorn/log

path_to_sock_file="/run/$project_name.sock"
 


## NGINX
echo "server {
    listen 80;
    server_name $domain_name;

    location = /favicon.ico { access_log off; log_not_found off; }

    location /static/ {
        root $base_dir/src;
    }  

    location / {
        include proxy_params;
        proxy_pass http://unix:$path_to_sock_file;
    }
}" >> nginx/$project_name

## Gunicorn
echo "[Unit]
Description=gunicorn socket

[Socket]
ListenStream=$path_to_sock_file

[Install]
WantedBy=sockets.target" >> gunicorn/$project_name.socket

echo "[Unit]
Description=gunicorn daemon
Requires=$project_name.socket
After=network.target

[Service]
User=$user_to_run_gunicorn
Group=$user_to_run_gunicorn
WorkingDirectory=$base_dir/src
ExecStart=$base_dir/env/env/bin/gunicorn --error-logfile $base_dir/env/gunicorn/log/error.log --access-logfile $base_dir/env/gunicorn/log/access.log --workers $gunicorn_workers_count  --bind unix:$path_to_sock_file config.wsgi:application  

[Install]
WantedBy=multi-user.target" >> gunicorn/$project_name.service



# Creating a symbolic link for server files

sudo ln -s $PWD/nginx/$project_name /etc/nginx/sites-enabled  

sudo ln -s $PWD/gunicorn/$project_name.socket /etc/systemd/system 
sudo ln -s $PWD/gunicorn/$project_name.service /etc/systemd/system 

sudo service nginx restart
sudo systemctl daemon-reload
sudo systemctl restart petryk