from django.contrib.auth.models import User
from django.db import models

from feedApp2.models import Feed
from fitproject import settings


# Create your models here.
class Comment2(models.Model):
    feed = models.ForeignKey(Feed, on_delete=models.SET_NULL, null=True, related_name='comment2')
    writer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='comment2')

    content = models.TextField(null=False)

    created_at = models.DateTimeField(auto_now=True)
