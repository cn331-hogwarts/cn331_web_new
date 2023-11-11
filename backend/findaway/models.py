from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from django.contrib.auth.base_user import BaseUserManager
from django.db import models

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('An email is required.')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')

        return self.create_user(email, password, **extra_fields)

class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = AppUserManager()

    def __str__(self):
        return self.username


class Person(models.Model):
    bg= [("A","A"),("B","B"),("AB","AB"),("O","O")]
    top20_hobbies = [
    ("Reading", "Reading"),
    ("Painting", "Painting"),
    ("Cooking", "Cooking"),
    ("Hiking", "Hiking"),
    ("Gardening", "Gardening"),
    ("Photography", "Photography"),
    ("Playing Musical Instruments", "Playing Musical Instruments"),
    ("Dancing", "Dancing"),
    ("Traveling", "Traveling"),
    ("Fishing", "Fishing"),
    ("Knitting or Crocheting", "Knitting or Crocheting"),
    ("Playing Sports", "Playing Sports"),
    ("Bird Watching", "Bird Watching"),
    ("Yoga", "Yoga"),
    ("Playing Board Games", "Playing Board Games"),
    ("Writing", "Writing"),
    ("Collecting", "Collecting"),
    ("DIY (Do-It-Yourself) Projects", "DIY (Do-It-Yourself) Projects"),
    ("Meditation", "Meditation"),
    ("Camping", "Camping")
]
    mbti_types = [
    ("ISTJ", "ISTJ"),
    ("ISFJ", "ISFJ"),
    ("INFJ", "INFJ"),
    ("INTJ", "INTJ"),
    ("ISTP", "ISTP"),
    ("ISFP", "ISFP"),
    ("INFP", "INFP"),
    ("INTP", "INTP"),
    ("ESTP", "ESTP"),
    ("ESFP", "ESFP"),
    ("ENFP", "ENFP"),
    ("ENTP", "ENTP"),
    ("ESTJ", "ESTJ"),
    ("ESFJ", "ESFJ"),
    ("ENFJ", "ENFJ"),
    ("ENTJ", "ENTJ")
]
    zodiac_signs = [
    ("Aries", "Aries"),
    ("Taurus", "Taurus"),
    ("Gemini", "Gemini"),
    ("Cancer", "Cancer"),
    ("Leo", "Leo"),
    ("Virgo", "Virgo"),
    ("Libra", "Libra"),
    ("Scorpio", "Scorpio"),
    ("Sagittarius", "Sagittarius"),
    ("Capricorn", "Capricorn"),
    ("Aquarius", "Aquarius"),
    ("Pisces", "Pisces")
]
    p_id=models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=300,default=None)
    blood_group=models.CharField(max_length=100,default=None,choices=bg)
    #hobbies=models.CharField(max_length=200,default=None,choices=top20_hobbies)
    mbti=models.CharField(max_length=100,default=None,choices=mbti_types)
    #zodiac=models.CharField(max_length=100,default=None,choices=zodiac_signs)
    registed_day=models.DateField(auto_now_add=True)
    updates=models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.p_id
