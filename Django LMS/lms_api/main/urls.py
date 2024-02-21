from django.urls import path
#from rest_framework.urlpatterns import format_suffix_patterns
from . import views
#from .views import UserLoginAPIView

urlpatterns = [
    path('users', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetails.as_view()),
    path('employees/', views.EmployeeList.as_view()),
    path('employee/<int:user_id>/', views.EmployeeDetails.as_view()),
    path('courses/category/', views.CourseCategoryList.as_view()),
    path('courses/', views.CoursesList.as_view()),
    path('courses/mandatory/', views.MandatoryCoursesList.as_view()),
    path('course/<int:pk>/', views.CourseDetails.as_view()),
    path('course/chapter/', views.CourseChapterList.as_view()),
    path('courses/enrolled/', views.UserEnrolledCoursesList.as_view()),
    path('courses/bookmarks/', views.BookmarkedCoursesList.as_view()),
    path('courses/bookmarked/<int:course_id_id>/<int:user_id_id>', views.BookmarkedCoursesRemoval.as_view()),
    path('faqs/', views.FrequentlyAskedQuestionsList.as_view()),
    path('login/', views.UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', views.LogoutAPIView.as_view(), name='logout'),
    path('course-material-url', views.CourseMaterialURLList.as_view()),
    path('download/<str:filename>/', views.download_file, name='download_file')
    #path('logout/', logout_view, name='logout'),
]

#urlpatterns = format_suffix_patterns(urlpatterns)