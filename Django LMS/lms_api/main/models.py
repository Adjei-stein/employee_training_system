from django.db import models
from datetime import datetime, time
from django.contrib.postgres.fields import ArrayField

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
    estimated_completion_time = models.TimeField(default=time(0, 0), editable=True)
    date_created = models.DateTimeField(default=datetime.now)
    mandatory_completion_date = models.DateField(default=datetime.now)

class MediaTypes(models.Model):
    media_title = models.CharField(max_length=200, null=True, editable=True)

class CourseChapter(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    chapter_title = models.CharField(max_length=100)
    chapter_number = models.IntegerField(null=True, editable=True)
    chapter_url = models.CharField(max_length=200)
    media_type = models.ForeignKey(MediaTypes, on_delete=models.CASCADE, editable=True)
    estimated_completion_time = models.TimeField(default=time(0, 0), editable=True)
    date_created = models.DateTimeField(default=datetime.now)

class UserEnrolledCourses(models.Model):
    user_id = models.ForeignKey(Employee, on_delete=models.CASCADE)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    chapters_completed = models.CharField(max_length=255, blank=True, null=True)
    date_created = models.DateTimeField(default=datetime.now)

class BookmarkedCourses(models.Model):
    user_id = models.ForeignKey(Employee, on_delete=models.CASCADE)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    chapters_completed = models.CharField(max_length=255, blank=True, null=True)
    date_created = models.DateTimeField(default=datetime.now)