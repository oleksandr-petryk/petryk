#!/bin/bash
source /home/petryk/www/petryk/env/bin/activate   
exec gunicorn -c "/home/petryk/www/petryk/petryk/gunicorn_conf.py" petryk.wsgi 