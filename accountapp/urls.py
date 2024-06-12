from django.contrib.auth.views import LoginView
from django.urls import path
from accountapp.views import AccountCreateView

app_name="accountapp"
urlpatterns = [
    path('login/',LoginView.as_view(template_name='accountapp/login.html'), name='login'),

    path('create/',AccountCreateView.as_view(), name='create'),

]