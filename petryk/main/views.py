from django.shortcuts import render, redirect
from django.views.generic import View
from .models import MessageFromUser
from .forms import MessageFromUserForm

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
            'form': MessageFromUserForm()
        }
        return render(request, 'main/main.html', context)

    def post(self, request):
        form = MessageFromUserForm(request.POST)
        if form.is_valid():
            form.save() 
            
        return redirect("/")
