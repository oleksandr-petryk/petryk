from django.shortcuts import render
from works.models import Work

from main.views import is_works

def works(request):
    context = {
        'works': Work.objects.order_by('-id'),
        'is_works': is_works(),
    }
    return render(request, 'works/works.html', context)

def work_detail(request, slug):
    context = {
        'work': Work.objects.get(slug=slug),
        'is_works': is_works(),
    }
    return render(request, 'works/work-detail.html', context)