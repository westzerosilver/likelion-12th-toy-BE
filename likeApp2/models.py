from django.contrib.auth.models import User
from django.db import models

from feedApp2.models import Feed
from fitproject import settings


# Create your models here.
class LikeRecord2(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='like_record2')
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE, related_name='like_record2')

    class Meta:
        unique_together = ('user', 'feed')