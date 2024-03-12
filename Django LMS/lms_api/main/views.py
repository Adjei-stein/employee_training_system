from django.shortcuts import render, HttpResponse
from main.api.serializers import *
from rest_framework.views import APIView
from . import models
from rest_framework.response import Response
from rest_framework import status, generics, permissions
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash
from django.http import JsonResponse
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import mimetypes
import os
import subprocess
from pathlib import Path

def download_file(request, filename):
    """Downloads a file from the static folder based on the provided filename.

    Args:
        request: The Django request object.
        filename: The name of the file to download.

    Returns:
        An HttpResponse object with the file content and appropriate headers for download,
        or an error response if the file is not found, unauthorized access is attempted,
        or other errors occur.
    """

    # Check if user is authenticated (if necessary)
    # Add authentication checks here based on your requirements

    # Extract filename and extension using pathlib
    filepath = Path(filename)
    filename = filepath.name  # Get only the filename without path
    extension = filepath.suffix  # Get the extension

    # Check if valid extension based on allowed files
    allowed_extensions = (".pdf", ".zip", ".jpg", ".png")
    if extension not in allowed_extensions:
        return render(request, 'error.html', {'error_message': 'Invalid file type'})

    # Construct the full path to the file, ensuring it stays within static folder
    static_url = os.path.join(os.path.dirname(__file__), '..', 'static')
    file_path = os.path.join(static_url, filename)

    # Check if the file exists within the allowed path
    if not os.path.commonpath([static_url, file_path]) == static_url:
        return render(request, 'error.html', {'error_message': 'Unauthorized access attempt'})

    # Try to open the file and read content (if allowed)
    try:
        with open(file_path, 'rb') as file_object:
            file_content = file_object.read()
    except Exception as e:
        return render(request, 'error.html', {'error_message': f"Error opening file: {e}"})

    # Determine content type based on extension
    content_type = mimetypes.types_map.get(extension, 'application/octet-stream')

    # Create an HttpResponse object and set its content, headers, etc.
    response = HttpResponse(file_content, content_type=content_type)
    response['Content-Disposition'] = f'attachment; filename="{filename}"'

    return response

class PasswordChangeAPIView(generics.UpdateAPIView):
    """
    API endpoint to change user's password.
    """
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        old_password = request.data.get('old_password')
        new_password = request.data.get('new_password1')
        confirm_new_password = request.data.get('new_password2')

        user = self.request.user

        # Check if old password matches
        if not user.check_password(old_password):
            return Response({'error': 'Old password is incorrect'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if new password matches its confirmation
        print("")
        if new_password != confirm_new_password:
            return Response({'error': 'New password and confirmation do not match'}, status=status.HTTP_400_BAD_REQUEST)

        # Change the password
        user.set_password(new_password)
        user.save()

        # Important: Update the session to avoid logout
        update_session_auth_hash(request, user)

        return Response({'message': 'Password changed successfully'}, status=status.HTTP_200_OK)

class UserLoginAPIView(generics.CreateAPIView):
    serializer_class = UserLoginSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        username = serializer.validated_data.get('username')
        password = serializer.validated_data.get('password')

        # Authenticate the user
        user = authenticate(username=username, password=password)

        if user:
            # Generate token for user
            token, created = Token.objects.get_or_create(user=user)

            return Response({'token': token.key, 'user_id': user.id}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
class LogoutAPIView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        try:
            # Retrieve the user's token
            token = Token.objects.get(user=request.user)
        except Token.DoesNotExist:
            return Response({"error": "Token not found"}, status=status.HTTP_404_NOT_FOUND)

        # Delete the token
        token.delete()
        return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)

class UserList(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserDetailsUpdateView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserUpdateSerializer
    lookup_field = 'id'

class ProfileImageView(generics.RetrieveUpdateAPIView):
    queryset = Employee.objects.all()
    serializer_class = ProfileImageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        try:
            user_id = self.kwargs['user_id']
            return Employee.objects.get(user_id=user_id)
        except Employee.DoesNotExist:
            return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, *args, **kwargs):
        instance = self.get_object()

        # Check if the employee has an existing profile picture
        if instance.user_profile_image:
            file_path = instance.user_profile_image.path
            print("file_path +++", file_path)
            if os.path.exists(file_path):
                try:
                    # Delete the file
                    os.remove(file_path)
                    # Optionally, you can log a message here to confirm successful deletion
                    print(f"Deleted profile image file: {file_path}")
                except Exception as e:
                    # Log the error if deletion fails
                    print(f"Error deleting profile image file: {e}")


        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class EmployeeList(generics.ListCreateAPIView):
    queryset = models.Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]


class EmployeeDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        queryset = self.get_queryset()
        user_id = self.kwargs['user_id']
        obj = get_object_or_404(queryset, user_id=user_id)
        self.check_object_permissions(self.request, obj)
        return obj

class CourseCategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
    permission_classes = [permissions.IsAuthenticated]

class CoursesList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticated]

class MandatoryCoursesList(generics.ListCreateAPIView):
    queryset = models.Course.objects.filter(mandatory=1)
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticated]

class CourseDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticated]

class CourseChapterList(generics.ListCreateAPIView):
    queryset = models.CourseChapter.objects.all()
    serializer_class = CourseChapterSerializer
    permission_classes = [permissions.IsAuthenticated]

class SpecificCourseChapters(generics.ListCreateAPIView):
    #queryset = models.CourseChapter.objects.all()
    serializer_class = CourseChapterSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        queryset = models.CourseChapter.objects.filter(course_id=course_id)
        return queryset

class UserEnrolledCoursesList(generics.ListCreateAPIView):
    queryset = models.UserEnrolledCourses.objects.all()
    serializer_class = UserEnrolledCoursesSerialzer
    permission_classes = [permissions.IsAuthenticated]

class UserEnrolledCoursesDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.UserEnrolledCourses.objects.all()
    serializer_class = UserEnrolledCoursesSerialzer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        queryset = self.get_queryset()
        user_id = self.kwargs['user_id_id']
        obj = get_object_or_404(queryset, user_id=user_id)
        self.check_object_permissions(self.request, obj)
        return obj

class BookmarkedCoursesList(generics.ListCreateAPIView):
    queryset = models.BookmarkedCourses.objects.all()
    serializer_class = BookmarkedCoursesSerialzer
    permission_classes = [permissions.IsAuthenticated]

""" class BookmarkedCoursesDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.BookmarkedCourses.objects.all()
    serializer_class = BookmarkedCoursesSerialzer
    permission_classes = [permissions.IsAuthenticated] """

class BookmarkedCoursesRemoval(generics.DestroyAPIView):
    queryset = models.BookmarkedCourses.objects.all()
    serializer_class = BookmarkedCoursesSerialzer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        queryset = self.get_queryset()
        user_id = self.kwargs['user_id_id']
        course_id = self.kwargs['course_id_id']
        obj = get_object_or_404(queryset, user_id=user_id, course_id=course_id)
        self.check_object_permissions(self.request, obj)
        return obj

class FrequentlyAskedQuestionsList(generics.ListCreateAPIView):
    queryset = models.FrequentlyAskedQuestions.objects.all()
    serializer_class = FrequentlyAskedQuestionsSerialzer
    permission_classes = [permissions.IsAuthenticated]

class CourseMaterialURLList(generics.ListCreateAPIView):
    queryset = models.CourseMaterialURL.objects.all()
    serializer_class = CourseMaterialURLSerialzer
    permission_classes = [permissions.IsAuthenticated]