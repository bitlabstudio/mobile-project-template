# flake8: noqa
from .django_settings import *

try:
    from .local_settings import *
except ImportError:
    print('No local_settings.py found.')
