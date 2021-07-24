from django import forms
from .models import MessageFromUser

class MessageFromUserForm(forms.ModelForm):
    class Meta:
        model = MessageFromUser
        fields = "__all__"
        widgets = {
            'name': forms.TextInput(attrs={"placeholder": 'Name'}),
            'email': forms.TextInput(attrs={"placeholder": 'Email'}),
            'message': forms.Textarea(attrs={"placeholder": 'Your message'}),
        }

 