
from django.core.management.base import BaseCommand
from .export_to_csv import export_users_to_csv

class Command(BaseCommand):
    help = 'Export User data to a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('file_path', type=str, help='Path to the CSV file')

    def handle(self, *args, **options):
        file_path = options['file_path']
        export_users_to_csv(file_path)
        self.stdout.write(self.style.SUCCESS('Successfully exported User data to CSV'))


#python manage.py exportUsers /Users/kunkerdthaisong/cn331/cn331_web_new/backend/data.csv
