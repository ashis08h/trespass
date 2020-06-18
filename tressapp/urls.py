from django.contrib import admin
from django.urls import path
from tressapp import views

urlpatterns = [
	path('', views.index,name='index'),
    path('loginpage/',views.loginpage,name='loginpage'),
    path('login_check/',views.login_check,name='login_check'),
    path('mylogout/',views.mylogout,name='mylogout'),
    path('add_quizz/',views.add_quizz,name='add_quizz'),
    path('add_more/',views.add_more,name='add_more'),
    path('report/',views.report,name='report'),
    path('quizz_related/<int:pk>/',views.quizz_related,name='quizz_related'),

]
