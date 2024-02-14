# Generated by Django 4.2.7 on 2024-02-14 14:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0010_employee_citizenship_employee_city_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='date_created',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='email',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='firstname',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='lastname',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='password',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='username',
        ),
        migrations.AddField(
            model_name='employee',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='employee',
            name='id',
            field=models.AutoField(default=0, primary_key=True, serialize=False),
        ),
    ]
