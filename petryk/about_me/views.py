from django.shortcuts import render
from .models import Gallery

from main.views import is_works

def about_me(request):
    context = {
        'gallery': Gallery.objects.order_by('-id')[:14],
        'is_works': is_works(),
    }
    return render(request, 'about_me/about_me.html', context)
