
from django.contrib import admin
from django.urls import path,include
from findaway import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('user', views.UserViewSet, basename='user')


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/auth/", include('djoser.urls')),
    path("api/v1/auth/", include('djoser.urls.jwt')),
    path('updateUserInfo/',include(router.urls)),
]