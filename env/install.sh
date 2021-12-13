#!/bin/bash


# Create .env file if it does not exist
if [ ! -f '.env' ]; then 

    DOMAIN_NAME=''
    USER_TO_RUN_GUNICORN=''
    GUNICORN_WORKERS_COUNT=3
    PORT=3002

    echo -n "Enter domain name: " 
    read DOMAIN_NAME

    echo -n "Enter username to run gunicorn: " 
    read USER_TO_RUN_GUNICORN

    echo -n "Enter gunicorn workers count: " 
    read GUNICORN_WORKERS_COUNT


echo "BASE_DIR='$( dirname  ${PWD})'

PROJECT_NAME='Petryk'

NEXT_PORT=${PORT}

DOMAIN_NAME='${DOMAIN_NAME}'

USER_TO_RUN_GUNICORN='${USER_TO_RUN_GUNICORN}'

DJANOG_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'

JWT_ACCESS_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'
JWT_REFRESH_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'

PATH_TO_FRONTEND='${BASE_DIR}/frontend'
" >| .env

else 
    echo "[-] .env file already exists"
fi



# Set and get needed variables
source ./.env 


# npm install 
cd ..
cd frontend
if [ ! -d 'node_modules' ]; then 
    npm install
else 
    echo "[-] node_modules directory already exists"
fi



# finaly
cd ..
cd env