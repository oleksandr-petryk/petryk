#!/bin/bash


BASE_DIR=${PWD}
echo $BASE_DIR

if [ -f ".env" ]; then
    source .env

    if [ ! -d "nginx" ]; then
        . ./configure-nginx.sh
    fi

    # Make symbol link for nginx config file
    if [ ! -f "/etc/nginx/sites-enabled/${PROJECT_NAME}.conf" ]; then
        ln -s ${BASE_DIR}/nginx/${PROJECT_NAME}.conf /etc/nginx/sites-enabled
    fi

    docker-compose build
    docker-compose up -d
else
    echo "You need to create .env file"
fi
