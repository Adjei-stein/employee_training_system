from rest_framework import serializers
from main.models import *

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'username', 'password', 'email', 'firstname', 'lastname', 'gender', 'date_of_birth', 'phone_number', 'citizenship', 'region', 'city', 'educational_level', 'date_created']

class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = ['id', 'title']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'description', 'title', 'category', 'mandatory', 'mandatory_completion_date']

class CourseChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseChapter
        fields = ['course_id', 'chapter_title', 'chapter_number', 'chapter_url', 'media_type', 'estimated_completion_time', 'date_created']

class UserEnrolledCoursesSerialzer(serializers.ModelSerializer):
    class Meta:
        model = UserEnrolledCourses
        fields = ['user_id', 'course_id', 'chapters_completed', 'date_created']

class BookmarkedCoursesSerialzer(serializers.ModelSerializer):
    class Meta:
        model = BookmarkedCourses
        fields = ['id', 'user_id', 'course_id', 'chapters_completed', 'date_created']

class FrequentlyAskedQuestionsSerialzer(serializers.ModelSerializer):
    class Meta:
        model = FrequentlyAskedQuestions
        fields = ['id', 'question', 'answer']