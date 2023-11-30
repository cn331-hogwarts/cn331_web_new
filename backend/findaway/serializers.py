from rest_framework import serializers
from . import models
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from djoser.serializers import UserCreateSerializer

User = get_user_model()

class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name','password','blood_group', 'mbti','zodiac','hobbies']

class selectUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'blood_group', 'mbti','zodiac','hobbies']

    def update(self, instance, validated_data):
        instance.blood_group = validated_data.get('blood_group', instance.blood_group)
        instance.mbti = validated_data.get('mbti', instance.mbti)

        instance.zodiac = validated_data.get('zodiac', instance.zodiac)
        instance.hobbies = validated_data.get('hobbies', instance.hobbies)

        instance.save()
        return instance
    


