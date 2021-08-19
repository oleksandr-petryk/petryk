from django.db import models

class Gallery(models.Model):
    img = models.ImageField(upload_to='about_me/gallery')
    publication_date = models.DateTimeField(auto_now_add=True)

    def get_filename(self):
        return str(self.img).split('/')[-1].split('.')[0]


    def __str__(self):
        return str(self.img).split('/')[-1]
