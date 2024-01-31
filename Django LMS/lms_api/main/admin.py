from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Course)
admin.site.register(models.CourseCategory)
admin.site.register(models.Employee)
admin.site.register(models.MediaTypes)
admin.site.register(models.CourseChapter)
admin.site.register(models.UserEnrolledCourses)
admin.site.register(models.BookmarkedCourses)
admin.site.register(models.FrequentlyAskedQuestions)