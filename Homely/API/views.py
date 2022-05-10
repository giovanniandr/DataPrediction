from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Address
from .serializers import Serializer


# Create your views here.
class AddressView(APIView):

    def get(self, request):
        address = Address.objects.all()
        serializer = Serializer(address, many=True)
        return Response(serializer.data)
