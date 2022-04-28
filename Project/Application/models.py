import geocoder
from django.db import models

# Create your models here.
token='pk.eyJ1IjoiZ2lvdmFubmlhbmRyIiwiYSI6ImNsMWtucG02ZDAyNTIzaW8zeWg1aG5qbmwifQ.yOWlVopRvptHXp4Kp-3v4A'

class Address(models.Model):
    #This will be changed to get the location from the csv file
    address = models.TextField()
    lat = models.FloatField(blank=True, null=True)
    long = models.FloatField(blank=True, null=True)

def save(self, *args, **kwargs):
    g = geocoder.mapbox(self.address, key='TOKEN')
    g = g.latlng 
    self.lat = g[0]
    selt.long = g[1]
    return super (Address, self).save(*args, **kwargs)