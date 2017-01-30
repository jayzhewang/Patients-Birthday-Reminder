from django.conf import settings
from django.conf.urls import include, url
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.contrib import admin

import views

urlpatterns = [
    url(r'', TemplateView.as_view(template_name='index.html'), name='home'),
    url(r'', include('social.apps.django_app.urls', namespace='social')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
