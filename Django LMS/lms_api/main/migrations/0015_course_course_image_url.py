# Generated by Django 4.2.7 on 2024-02-22 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_coursematerialurl'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='course_image_url',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
