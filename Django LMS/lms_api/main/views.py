from django.shortcuts import render
from main.api.serializers import EmployeeSerializer
from rest_framework.views import APIView
from . import models
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class EmployeeList(APIView):
    def get(self, request):
        employees=models.Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)