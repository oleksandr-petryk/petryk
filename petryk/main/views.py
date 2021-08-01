from django.shortcuts import render, redirect
from django.views.generic import View
from django.conf import settings
from works.models import Work
from contact.forms import MessageFromUserForm
from contact.models import MessageFromUser
 
from django.utils import translation
# from django.utils.translation import gettext as _ 

def is_works():
    if Work.objects.all().count() != 0:
        return True
    
    else:
        return False

class First(View):
    def get(self, request):  
        context = { 
            'navigation': {
                'home': False,
                'skills': False,
                'works': False,
                'contact': False
            },
            'hide_footer': True,
            'form': MessageFromUserForm(),
            'works': Work.objects.order_by('-id')[:2],
            'is_works': is_works()
        }
        return render(request, 'main/main.html', context) 

    def post(self, request):
        form = MessageFromUserForm(request.POST)
        if form.is_valid():
            form.save() 
            
        return redirect("/")