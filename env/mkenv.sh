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

 
echo -n "${CYAN}[add]${None} Enter domain name for example 'petryk.me': "
read domain_name 

echo -n "${CYAN}[add]${None} Enter project name for example 'petryk': "
read project_name 
 
# virtualenv env
# source env/bin/activate

# pip install -r requirements.txt

# mkdir nginx gunicorn

# touch nginx/petryk

# echo 'server {\n\tlisten 8000;\n\tserver_name domain_name_replace;\n\n\tlocation / {\n\t\tinclude proxy_params;\n\t\tproxy_pass proxy_pass_replace;\n\t}\n}' >> nginx/petryk