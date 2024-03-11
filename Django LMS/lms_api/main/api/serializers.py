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

    # def update(self, instance, validated_data):
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.first_name = validated_data.get('first_name', instance.first_name)
    #     instance.last_name = validated_data.get('last_name', instance.last_name)
    #     instance.username = validated_data.get('username', instance.username)
    #     instance.save()
    #     return instance

class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['user_profile_image']

    """ def save(self, **kwargs):
        # Get the instance (Employee object) associated with the serializer
        instance = super().save(**kwargs)

        # Check if a profile image was provided in the request data
        if 'user_profile_image' in self.validated_data:
            # Get the uploaded image file
            image_file = self.validated_data['user_profile_image']

            # Set the file name to be the same as the existing profile image
            if instance.user_profile_image:
                image_file.name = instance.user_profile_image.name

            # Save the uploaded image file
            instance.user_profile_image.save(image_file.name, image_file, save=False)

        # Save the instance (Employee object) with the updated profile image
        instance.save()
        return instance """

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'gender', 'date_of_birth', 'phone_number', 'citizenship', 'region', 'city', 'educational_level', 'profile_image']

class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = ['id', 'title']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'description', 'title', 'category', 'mandatory', 'mandatory_completion_date', 'course_image_url', 'course_instructor']

class CourseChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseChapter
        fields = ['id', 'course_id', 'chapter_title', 'chapter_number', 'chapter_url', 'media_type', 'estimated_completion_time', 'date_created']

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

class CourseMaterialURLSerialzer(serializers.ModelSerializer):
    class Meta:
        model = CourseMaterialURL
        fields = ['id', 'course_id', 'material_url']