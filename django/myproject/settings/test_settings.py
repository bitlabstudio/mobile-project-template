"""Settings to be used for running tests."""
import os
import logging

from theartling_marketplace.settings import *  # NOQA


logging.disable(logging.CRITICAL)


class DisableMigrations(object):
    def __contains__(self, item):
        return True

    def __getitem__(self, item):
        return "notmigrations"


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
TEST_RUNNER = 'django.test.runner.DiscoverRunner'
DEBUG = False
TEMPLATE_DEBUG = False
SANDBOX = True
TEST_RUN = True
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": ":memory:",
    }
}
PASSWORD_HASHERS = (
    'django.contrib.auth.hashers.MD5PasswordHasher',
)
STATIC_ROOT = os.path.join(BASE_DIR, '../../static_root')
MEDIA_ROOT = os.path.join(BASE_DIR, '../../media_root')
EMAIL_SUBJECT_PREFIX = '[theartling-marketplace test] '
EMAIL_BACKEND = 'django.core.mail.backends.locmem.EmailBackend'
SECRET_KEY = 'foobar'

BRAINTREE_PRODUCTION = False
BRAINTREE_MERCHANT_ID = ''
BRAINTREE_PUBLIC_KEY = ''
BRAINTREE_PRIVATE_KEY = ''

MIGRATION_MODULES = DisableMigrations()
