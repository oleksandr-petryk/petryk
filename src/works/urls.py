from django.urls import path
from . import views

urlpatterns = [
    path('', views.works, name = 'works'),
    path('detail/<str:slug>/', views.work_detail, name = 'work_detail'),
]