# Generated by Django 4.2.7 on 2024-02-22 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_course_course_image_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='course_image_url',
            field=models.CharField(max_length=255, null=True),
        ),
    ]