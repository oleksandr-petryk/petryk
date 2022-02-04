#!/bin/bash


if [ ! -d 'nginx' ]; then
    # make dirs
    mkdir nginx

    # Fill Nginx config
echo "# Frontend of the Petryk website
server {
    listen 80;
    server_name ${DOMAIN_NAME};

    location / {
        proxy_set_header Host  \$host; 
        proxy_pass http://localhost:${FRONTEND_PORT};
    }
}
" >| "nginx/${PROJECT_NAME}.conf"
fi
