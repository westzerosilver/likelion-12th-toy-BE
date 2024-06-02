from django.db import models

class HelloWorld(models.Model):
    models.CharField(default='')
    models.CharField(null=True)
    text = models.CharField(max_length=255, null=False)
