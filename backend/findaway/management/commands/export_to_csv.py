import csv
from findaway.models import User

def export_users_to_csv(file_path):
    users = User.objects.all()

    with open(file_path, 'w', newline='', encoding='utf-8') as csvfile:
        csv_writer = csv.writer(csvfile)
        csv_writer.writerow(['first_name', 'last_name', 'email', 'blood_group', 'mbti', 'Is_Staff', 'Is_Active', 'date_joined'])

        for user in users:
            csv_writer.writerow([
                user.first_name,
                user.last_name,
                user.email,
                user.blood_group,
                user.mbti,
                user.is_staff,
                user.is_active,
                user.date_joined
            ])