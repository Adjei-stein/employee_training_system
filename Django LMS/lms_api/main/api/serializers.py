from rest_framework import serializers
from main.models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'username', 'password', 'email', 'date_created']
