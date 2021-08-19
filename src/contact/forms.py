from django import forms
from .models import MessageFromUser
from django.utils.translation import gettext_lazy as _

class MessageFromUserForm(forms.ModelForm):
    class Meta:
        model = MessageFromUser
        fields = "__all__"
        widgets = {
            'name': forms.TextInput(attrs={"placeholder": _('Name')}),
            'email': forms.TextInput(attrs={"placeholder": _('Email')}),
            'message': forms.Textarea(attrs={"placeholder": _('Your message')}),
        }

 