from django.urls import path

from likeApp2.views import LikeFeedView

app_name = 'likeApp2'

urlpatterns = [
    path('feed/like/<int:pk>', LikeFeedView.as_view(), name='feed_like')
]