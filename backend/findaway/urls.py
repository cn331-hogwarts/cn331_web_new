from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from .views import UserLogin,UserRegister,UserView,UserLogout,person_viewset

router=routers.DefaultRouter()
router.register('person',person_viewset,basename='person')

urlpatterns = [
    path('', include(router.urls)),
    path('register/',UserRegister.as_view(), name='register'),
	path('login/', UserLogin.as_view(), name='login'),
	path('logout/', UserLogout.as_view(), name='logout'),
	path('user/',UserView.as_view(), name='user'),
]