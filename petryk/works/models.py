from django.db import models
from django.urls import reverse
from string import ascii_letters 
from random import choice
 
class Work(models.Model):
    name = models.CharField(max_length=100)
    short_description = models.TextField('Short escription')
    description = models.TextField('Description')
    site_link = models.CharField(max_length=100)
    site_view = models.ImageField(upload_to='works/site-view/')
    development_time = models.CharField(max_length=100)
    cost = models.CharField(max_length=100)
    publish_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=11, default='', blank=True, )

    COMPLEXITY_CHOICES = (
        ('pet project', 'pet project'),
        ('lending', 'lending'),
        ('little company', 'little company'),
        ('middle-company', 'middle-company'),
        ('big-company', 'big-company'),
    )
    work_complexity = models.CharField('Work complexity', max_length=100, choices=COMPLEXITY_CHOICES)


    def generate_slug(self):
        slug_str = '' 

        if self.slug == '': 
            for i in range(0, Work._meta.get_field('slug').max_length):
                slug_str += choice(ascii_letters) 
            while True: 
                if Work.objects.filter(slug = slug_str).exists():  
                    for i in range(0, self.slug.max_length): 
                        slug_str += choice(ascii_letters)
            
                else: 
                    self.slug = slug_str
                    break

    def save(self, *args, **kwargs): 
        self.generate_slug()  

        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('work_detail', args=(self.slug,))
 
    def __str__(self):
        return self.name 