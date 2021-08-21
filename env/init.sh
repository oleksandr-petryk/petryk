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



echo "${RED}Put your secret keys, passwords to db, tokens, in .env.template${RED}"
cp .env.template .env



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

mkdir nginx systemd
mkdir -p systemd/log

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

## systemd / Gunicorn
echo "[Unit]
Description=gunicorn socket

[Socket]
ListenStream=$path_to_sock_file

[Install]
WantedBy=sockets.target" >> systemd/$project_name.socket

echo "[Unit]
Description=gunicorn daemon
Requires=$project_name.socket
After=network.target

[Service]
EnvironmentFile=$base_dir/env/.env
User=$user_to_run_gunicorn
Group=$user_to_run_gunicorn
WorkingDirectory=$base_dir/src
ExecStart=$base_dir/env/env/bin/gunicorn --error-logfile $base_dir/env/systemd/log/error.log --access-logfile $base_dir/env/systemd/log/access.log --workers $gunicorn_workers_count  --bind unix:$path_to_sock_file config.wsgi:application  

[Install]
WantedBy=multi-user.target" >> systemd/$project_name.service

## systemd / Telegram bot
echo "[Unit]
Description=Python bot service
Wants=network.target
After=syslog.target network-online.target

[Service]
EnvironmentFile=$base_dir/env/.env
Type=simple
ExecStart=$base_dir/src/start_bot.sh
Restart=on-failure
RestartSec=1
KillMode=process

[Install]
WantedBy=multi-user.target" >> systemd/$project_name\_bot.service



# Creating a symbolic link for server files

sudo ln -s $PWD/nginx/$project_name /etc/nginx/sites-enabled  

sudo ln -s $PWD/systemd/$project_name.socket /etc/systemd/system 
sudo ln -s $PWD/systemd/$project_name.service /etc/systemd/system 
sudo ln -s $PWD/systemd/$project_name\_bot.service /etc/systemd/system 

sudo service nginx restart
sudo systemctl daemon-reload
sudo systemctl enable petryk
sudo systemctl enable petryk_bot
sudo systemctl restart petryk
sudo systemctl restart petryk_bot