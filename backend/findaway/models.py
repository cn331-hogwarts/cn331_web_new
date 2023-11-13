from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_("First Name"), max_length=100)
    last_name = models.CharField(_("Last Name"), max_length=100)
    email = models.EmailField(_("Email Address"), max_length=254, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined =  models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")

    def __str__(self):
        return self.email


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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name=models.CharField(max_length=300,default=None)
    blood_group=models.CharField(max_length=100,default=None,choices=bg)
    #hobbies=models.CharField(max_length=200,default=None,choices=top20_hobbies)
    mbti=models.CharField(max_length=100,default=None,choices=mbti_types)
    #zodiac=models.CharField(max_length=100,default=None,choices=zodiac_signs)
    registed_day=models.DateField(auto_now_add=True)
    updates=models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.p_id
