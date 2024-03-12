from django.urls import path
from django.conf import settings
#from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from django.conf.urls.static import static

urlpatterns = [
    path('users', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetails.as_view()),
    path('user/update/<int:id>/', views.UserDetailsUpdateView.as_view()),
    path('employee/profile-image/<int:user_id>/', views.ProfileImageView.as_view()),
    path('password-change/', views.PasswordChangeAPIView.as_view(), name='password_change_api'),
    path('employees/', views.EmployeeList.as_view()),
    path('employee/<int:user_id>/', views.EmployeeDetails.as_view()),
    path('courses/category/', views.CourseCategoryList.as_view()),
    path('courses/', views.CoursesList.as_view()),
    path('courses/mandatory/', views.MandatoryCoursesList.as_view()),
    path('course/<int:pk>/', views.CourseDetails.as_view()),
    path('course/chapter/', views.CourseChapterList.as_view()),
    path('course/chapter/<int:course_id>', views.SpecificCourseChapters.as_view()),
    path('courses/enrolled/', views.UserEnrolledCoursesList.as_view()),
    path('courses/enrolled/<int:user_id_id>', views.UserEnrolledCoursesDetails.as_view()),
    path('courses/bookmarks/', views.BookmarkedCoursesList.as_view()),
    path('courses/bookmarked/<int:course_id_id>/<int:user_id_id>', views.BookmarkedCoursesRemoval.as_view()),
    path('faqs/', views.FrequentlyAskedQuestionsList.as_view()),
    path('login/', views.UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', views.LogoutAPIView.as_view(), name='logout'),
    path('course-material-url', views.CourseMaterialURLList.as_view()),
    path('download/<str:filename>/', views.download_file, name='download_file')
    #path('logout/', logout_view, name='logout'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#urlpatterns = format_suffix_patterns(urlpatterns)