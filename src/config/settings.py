from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent
  
SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = True

WSGI_APPLICATION = 'config.wsgi.application'

ALLOWED_HOSTS = ['*'] 

INSTALLED_APPS = [
    'main',
    'about_me',
    'works',
    'contact',
    'telegram_bot',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sitemaps',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware', 
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # 'DIRS': ['templates', BASE_DIR],
        'DIRS': [BASE_DIR / 'templates', BASE_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3'
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    },
}  

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField' 
# 'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'codexamp_petryk',
#         'USER': 'codexamp_sasha',
#         'PASSWORD': 'petryk341aler2',
#         'POSRT': '3306',
#         'HOST': 'localhost'
#     }

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'
# LANGUAGE_CODE = 'ua'

LOCALE_PATHS = ( os.path.join(BASE_DIR, 'locale'), )

LANGUAGES = [
    ('ru', 'RU'), 
    ('uk', 'UA'),
    ('en', 'EN')
]

TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True   


STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_DIRS = [BASE_DIR / 'static_files']

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')  