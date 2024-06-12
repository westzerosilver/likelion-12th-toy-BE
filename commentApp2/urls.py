from django.urls import path

from commentApp2.views import CommentCreateView2, CommentDeleteView2

app_name = 'commentApp2'

urlpatterns = [
    path('create/', CommentCreateView2.as_view(), name='create'),
    path('delete/<int:pk>', CommentDeleteView2.as_view(), name='delete')
]
