from django.urls import path
from . import views

urlpatterns = [
    path('', views.First.as_view(), name = 'home'),
]