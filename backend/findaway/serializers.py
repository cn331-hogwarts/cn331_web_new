from rest_framework import serializers
from . import models
class serializers_person(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=models.Person
        fields=['p_id','name','blood_group','mbti']