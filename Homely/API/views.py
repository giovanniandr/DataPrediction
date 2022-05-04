from django.shortcuts import render
from rest_framework import generics
from .serializers import Serializer
from .models import Address

# Create your views here.
class AddressView(generics.CreateAPIView):
    queryset = Address.objects.all()
    serializer_class = Serializer
