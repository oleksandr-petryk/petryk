from django.shortcuts import render, redirect
from django.views.generic import View
from .forms import MessageFromUserForm
from .models import MessageFromUser

from main.views import is_works

class Contact(View):
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
            'is_works': is_works(),
        }
        return render(request, 'contact/contact.html', context)

    def post(self, request):
        form = MessageFromUserForm(request.POST)
        if form.is_valid():
            form.save() 
            
        return redirect("/")
