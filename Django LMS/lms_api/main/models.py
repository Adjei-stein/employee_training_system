from django.db import models
from datetime import datetime

# Create your models here.

class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.EmailField()
    date_created = models.DateTimeField(default=datetime.now)

class CourseCategory(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date_created = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name_plural = 'Course Categories'

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    mandatory = models.BooleanField(default=False, editable=True)
    date_created = models.DateTimeField(default=datetime.now)