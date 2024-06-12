from django.urls import path

from crewhome import views

urlpatterns = [
    path('',views.crewhome,name='crewhome'),
]