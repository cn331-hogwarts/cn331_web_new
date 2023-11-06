from django.shortcuts import render
from rest_framework import viewsets
from . import models
from findaway.serializers import serializers_person

class person_viewset(viewsets.ModelViewSet):
    queryset=models.Person.objects.all()
    serializer_class=serializers_person