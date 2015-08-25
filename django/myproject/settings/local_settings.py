import os

from .django_settings import BASE_DIR

BASE_URL = 'http://localhost:8000'
DEBUG = True
TEMPLATE_DEBUG = True
ALLOWED_HOSTS = []
ENVIRONMENT = 'local'
LIVERELOAD = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'theartling_marketplace',
        'USER': 'theartling_marketplace',
        'PASSWORD': 'theartling_marketplace',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

ADMINS = (
    ('Martin', 'mbrochh@gmail.com'),
)
MANAGERS = ADMINS
MEDIA_ROOT = os.path.join(BASE_DIR, '../../../myproject_media')
MEDIA_URL = '/media/'
STATIC_ROOT = os.path.join(BASE_DIR, '../../../myproject_static')
STATIC_URL = '/static/'
LOCAL_PG_ADMIN_ROLE = 'martin'
LOCAL_PG_USE_LOCALHOST = True
SECRET_KEY = 'Foobar'
