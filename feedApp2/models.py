from django.contrib.auth.models import User
from django.db import models
from fitproject import settings

# Create your models here.
class Feed(models.Model):

    writer = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='feed', null=True)

    image = models.ImageField(upload_to='feed/', null=False)
    content = models.TextField(null=True)

    created_at = models.DateField(auto_now_add=True, null=True)

    # 좋아요 관련 설정: 기본값을 0으로 설정
    like = models.IntegerField(default=0)

# models.py
class Image(models.Model):
    name = models.CharField(max_length=250)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.name