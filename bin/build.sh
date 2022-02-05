#!/bin/bash



if [ ! -f "./bin/.env" ]; then 
    cat ./bin/.env.template > bin/.env1
fi

while read line; do
    export $line;
done < ./bin/.env

docker-compose -f ./bin/docker-compose.yml build
