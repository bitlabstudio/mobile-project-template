from django.conf.urls import include, url
from django.contrib import admin

from .views import CurrentVersionView

urlpatterns = [
    # Examples:
    # url(r'^$', 'myproject.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^api/v1/version/$', CurrentVersionView.as_view()),
    url(r'^admin/', include(admin.site.urls)),
]
