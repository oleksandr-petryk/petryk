from django.views.generic.base import RedirectView
from django.views.generic.base import TemplateView
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.staticfiles.storage import staticfiles_storage
from django.conf.urls.static import static 
from django.contrib.sitemaps.views import sitemap
from .sitemaps import SnippetWork  

sitemaps = {
    'first': SnippetWork, 
}

urlpatterns = [
    path('favicon.ico', RedirectView.as_view(url=staticfiles_storage.url('base/img/favicon.ico'))),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
    path('robots.txt', TemplateView.as_view(template_name='base/robots.txt')),
    path('admin/', admin.site.urls),

    path('', include('main.urls')),
    path('about-me/', include('about_me.urls')),
    path('contact/', include('contact.urls')),
    path('works/', include('works.urls')),
]
 
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)