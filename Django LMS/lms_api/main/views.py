from django.shortcuts import render
from main.api.serializers import *
from rest_framework.views import APIView
from . import models
from rest_framework.response import Response
from rest_framework import status, generics, permissions
from django.shortcuts import get_object_or_404

# Create your views here.
"""class EmployeeList(APIView):
    def get(self, request):
        employees=models.Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)"""

class EmployeeList(generics.ListCreateAPIView):
    queryset = models.Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]

class EmployeeDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]

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