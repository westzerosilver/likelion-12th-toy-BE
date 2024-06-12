# Generated by Django 5.0.3 on 2024-06-08 10:09

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Feed",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="feed/")),
                ("content", models.TextField(null=True)),
                ("created_at", models.DateField(auto_now_add=True, null=True)),
                ("like", models.IntegerField(default=0)),
                (
                    "writer",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="feed",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]