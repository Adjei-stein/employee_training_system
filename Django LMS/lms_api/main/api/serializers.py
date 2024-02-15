from rest_framework import serializers
from main.models import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'username']

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.username = validated_data.get('username', instance.username)
        instance.save()
        return instance

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'gender', 'date_of_birth', 'phone_number', 'citizenship', 'region', 'city', 'educational_level']

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