from django.contrib.sitemaps import Sitemap
from works.models import Work 

class SnippetWork(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return Work.objects.all()

    def lastmod(self, obj):
        return obj.publish_date
 
