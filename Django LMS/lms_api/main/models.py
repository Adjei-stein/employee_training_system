from django.db import models
from datetime import datetime, time
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

# Create your models here.

class Employee(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]
    id = models.AutoField(primary_key=True, default=0)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    #username = models.CharField(max_length=200)
    #password = models.CharField(max_length=200)
    #email = models.EmailField()
    #firstname = models.CharField(max_length=30, blank=True, null=True)
    #lastname = models.CharField(max_length=30, blank=True, null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    citizenship = models.CharField(max_length=100, blank=True, null=True)
    region = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    educational_level = models.CharField(max_length=100, blank=True, null=True)
    profile_image = models.CharField(max_length=255, blank=True, null=True, editable=True)
    user_profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    #date_created = models.DateTimeField(default=datetime.now)

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
    course_image_url = models.CharField(max_length=255, blank=True, null=True, editable=True)
    course_instructor = models.CharField(max_length=100, blank=True, null=True, editable=True)

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
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    chapters_completed = models.CharField(max_length=255, blank=True, null=True)
    date_created = models.DateTimeField(default=datetime.now)

class BookmarkedCourses(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    chapters_completed = models.CharField(max_length=255, blank=True, null=True)
    date_created = models.DateTimeField(default=datetime.now)

class FrequentlyAskedQuestions(models.Model):
    question = models.CharField(max_length=500, blank=True, null=True)
    answer = models.TextField()
    date_created = models.DateTimeField(default=datetime.now)

class CourseMaterialURL(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    material_url = models.CharField(max_length=255, blank=False, null=False)

class SupportRequests(models.Model):
    title = models.CharField(max_length=250, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)