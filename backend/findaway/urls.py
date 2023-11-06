from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from . import views

router=routers.DefaultRouter()
router.register('person',views.person_viewset,basename='person')

urlpatterns = [
    path('', include(router.urls)),
    path('admin/',admin.site.urls),
]