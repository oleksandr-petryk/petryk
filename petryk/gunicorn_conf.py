command = '/home/petryk/www/petryk/env/bin/gunicorn'
pythonpath = '/home/petryk/www/petryk/petryk'

user = 'petryk'
group = 'petryk'

workers = 9
bind    = '127.0.0.1:8001'

limit_request_fields = 32000
limit_request_fiels_size = 0

raw_env = 'DJANGO_SETTINGS_MODULE=petryk.settings'