from django.db import models

# Create your models here.
##Ignore this model as it is not perfect
token='pk.eyJ1IjoiZ2lvdmFubmlhbmRyIiwiYSI6ImNsMWtucG02ZDAyNTIzaW8zeWg1aG5qbmwifQ.yOWlVopRvptHXp4Kp-3v4A'

class Address(models.Model):
    neighbourhood = models.TextField()
    city = models.TextField()
    state = models.TextField()
    property = models.TextField()
    bathrooms = models.DecimalField(max_digits=10, decimal_places=2)
    bedrooms = models.DecimalField(max_digits=10, decimal_places=2)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    lat = models.FloatField(blank = True, null=True)
    long = models.FloatField(blank = True, null=True)

