from django.db import models

# Create your models here.
##Ignore this model as it is not perfect
token='pk.eyJ1IjoiZ2lvdmFubmlhbmRyIiwiYSI6ImNsMWtucG02ZDAyNTIzaW8zeWg1aG5qbmwifQ.yOWlVopRvptHXp4Kp-3v4A'

class Address(models.Model):
    Neighbourhood = models.TextField()
    City = models.TextField()
    State = models.TextField()
    Latitude = models.FloatField(blank = True, null=True)
    Longitude = models.FloatField(blank = True, null=True)
    PropertyType = models.TextField()
    Bathrooms = models.DecimalField(max_digits=10, decimal_places=2)
    Bedrooms = models.DecimalField(max_digits=10, decimal_places=2)
    Price = models.DecimalField(max_digits=10, decimal_places=2)

    

