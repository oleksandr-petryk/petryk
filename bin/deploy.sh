#!/bin/bash


# check exists .env file
if [ -f ".env" ]; then
    # export variables
    while read line; do
        export $line
    done < .env

    # create nginx directory if it is not exists
    if [ ! -d "nginx" ]; then
        . ./configure-nginx.sh
    fi

    # make symbol link for nginx config file if not exists
    if [ ! -f "/etc/nginx/sites-enabled/${PROJECT_NAME}.conf" ]; then
        ln -s ${PWD}/nginx/${PROJECT_NAME}.conf /etc/nginx/sites-enabled
    fi
    
    # build Next.js and run it
    docker-compose build
    docker-compose up -d
else
    echo "You need to create .env file"
fi
