from django.urls import path
#from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('employees/', views.EmployeeList.as_view()),
    path('employee/<int:pk>/', views.EmployeeDetails.as_view()),
    path('course-category/', views.CourseCategoryList.as_view()),
    path('courses/', views.CoursesList.as_view()),
    path('course/<int:pk>/', views.CourseDetails.as_view()),
    path('course/chapter/', views.CourseChapterList.as_view()),
    path('enrolled-courses', views.UserEnrolledCoursesList.as_view()),
    path('bookmarks/', views.BookmarkedCoursesList.as_view()),
]

#urlpatterns = format_suffix_patterns(urlpatterns)