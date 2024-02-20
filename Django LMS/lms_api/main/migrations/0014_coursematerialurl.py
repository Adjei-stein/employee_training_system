# Generated by Django 4.2.7 on 2024-02-20 18:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_alter_bookmarkedcourses_user_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseMaterialURL',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('material_url', models.CharField(max_length=255)),
                ('course_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.course')),
            ],
        ),
    ]
