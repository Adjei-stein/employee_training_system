from django.shortcuts import render
from main.api.serializers import *
from rest_framework.views import APIView
from . import models
from rest_framework.response import Response
from rest_framework import status, generics, permissions
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse

# Create your views here.
"""class EmployeeList(APIView):
    def get(self, request):
        employees=models.Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)"""

""" def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Logout successful'})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405) """

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

class UserEnrolledCoursesList(generics.ListCreateAPIView):
    queryset = models.UserEnrolledCourses.objects.all()
    serializer_class = UserEnrolledCoursesSerialzer
    permission_classes = [permissions.IsAuthenticated]

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