from rest_framework import serializers
from . import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model,authenticate
from django.core.exceptions import ValidationError

import djoser
from djoser.serializers import UserCreateSerializer


User = get_user_model()


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password']

class serializers_person(serializers.ModelSerializer):
    class Meta:
        model=models.Person
        fields=['user','name','blood_group','mbti']