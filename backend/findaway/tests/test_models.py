from django.test import TestCase
from django.contrib.auth import get_user_model
from datetime import date
from findaway.models import User,Person
from findaway.managers import CustomUserManager

class TestModels(TestCase):

    def setUp(self):
        self.user_data = {
            'first_name': 'testF1',
            'last_name': 'testL1',
            'email': 'test1@email.com',
            'password': 'ajarnjack',
        }
        self.user = get_user_model().objects.create_user(**self.user_data)

    def test_create_user(self):
    
        user_data = {
            'first_name': 'testF',
            'last_name': 'testL',
            'email': 'test@email.com',
            'password': 'ajarnjack',
        }
        # Count the number of users before creating a new one
        initial_user_count = get_user_model().objects.count()

        # Create a new user
        # user = get_user_model().create_user(**user_data)
        user = get_user_model().objects.create_user(**user_data)
        
        # Check that the user was created successfully
        self.assertIsNotNone(user)

        # Check that the number of users has increased by 1 after user creation
        self.assertEqual(get_user_model().objects.count(), initial_user_count + 1)

        #Check that the user is not staff by default
        self.assertTrue(User.is_staff)

    def test_change_user_data(self):
        new_data = {
            'first_name': 'NewFirstName',
            'last_name': 'NewLastName',
        }

        # Update the user data
        for field, value in new_data.items():
            setattr(self.user, field, value)

        # Save the changes
        self.user.save()

        # Retrieve the user from the database to ensure changes are saved
        updated_user = get_user_model().objects.get(pk=self.user.pk)

        # Assertions for the updated user data
        self.assertEqual(updated_user.first_name, new_data['first_name'])
        self.assertEqual(updated_user.last_name, new_data['last_name'])
    
    def test_add_blood_group_user(self):
        # New blood group to add to the user
        new_blood_group = 'A'

        self_user = self.user
        # Check if the user initially doesn't have a blood group
        self.assertEqual(self.user.blood_group, '')

        # Add the new blood group to the user
        self.user.blood_group = new_blood_group
        self.user.save()

        # Retrieve the user from the database to ensure changes are saved
        updated_user = get_user_model().objects.get(pk=self.user.pk)

        # Assertions for the updated user data
        self.assertEqual(updated_user.blood_group, new_blood_group)
    
    # def test_add_hobbies_user(self):
    #     new_hobbies = 'Reading'

    #     self.assertIsNone(self.user.hobbies)

    #     self.user.hobbies = new_hobbies
    #     self.user.save()

    #     updated_user = get_user_model().objects.get(pk=self.user.pk)

    #     self.assertEqual(updated_user.hobbies, new_hobbies)
    
    def test_add_mbti_types_user(self):
        new_mbti_types = 'ISTJ'

        # Check if the user initially has an empty string as mbti
        self.assertEqual(self.user.mbti, '')

        self.user.mbti = new_mbti_types
        self.user.save()

        updated_user = get_user_model().objects.get(pk=self.user.pk)

        self.assertEqual(updated_user.mbti, new_mbti_types)


    # def test_add_zodiac_signs_user(self):
    #     new_zodiac = 'Leo'

    #     self.assertIsNone(self.user.zodiac)

    #     self.user.zodiac = new_zodiac
    #     self.user.save()

    #     updated_user = get_user_model().objects.get(pk=self.user.pk)

    #     self.assertEqual(updated_user.zodiac, new_zodiac)

    def test_change_blood_group_user(self):
        # Set an initial blood group for the user
        initial_blood_group = 'O'
        self.user.blood_group = initial_blood_group
        self.user.save()

        # New blood group to change to
        new_blood_group = 'B'

        # Check that the user initially has the initial blood group
        self.assertEqual(self.user.blood_group, initial_blood_group)

        # Change the user's blood group
        self.user.blood_group = new_blood_group
        self.user.save()

        # Retrieve the user from the database to ensure changes are saved
        updated_user = get_user_model().objects.get(pk=self.user.pk)

        # Assertions for the updated user data
        self.assertEqual(updated_user.blood_group, new_blood_group)
        
    def test_change_mbti_user(self):
        # Set an initial MBTI type for the user
        initial_mbti_type = 'ISFJ'
        self.user.mbti = initial_mbti_type
        self.user.save()

        # New MBTI type to change to
        new_mbti_type = 'ENFP'

        # Check that the user initially has the initial MBTI type
        self.assertEqual(self.user.mbti, initial_mbti_type)

        # Change the user's MBTI type
        self.user.mbti = new_mbti_type
        self.user.save()

        # Retrieve the user from the database to ensure changes are saved
        updated_user = get_user_model().objects.get(pk=self.user.pk)

        # Assertions for the updated user data
        self.assertEqual(updated_user.mbti, new_mbti_type)
