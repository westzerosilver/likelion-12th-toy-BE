from django.contrib import admin
from django.urls import path, include

from django.urls import path, include

from feedApp2.views import FeedListView, FeedCreateView

app_name = "feedApp2"     # 앱 이름 지정

urlpatterns = [
    path('list/', FeedListView.as_view(), name='feed'),       # 주소, 사용할 뷰, 라우트에 대한 이름 지정
    path('create/', FeedCreateView.as_view(), name='create'),
]