from django.db import models
import geocoder

# Create your models here.
##Ignore this model as it is not perfect
token='pk.eyJ1IjoiZ2lvdmFubmlhbmRyIiwiYSI6ImNsMWtucG02ZDAyNTIzaW8zeWg1aG5qbmwifQ.yOWlVopRvptHXp4Kp-3v4A'

class Address(models.Model):
    address = models.TextField()
    lat = models.FloatField(blank = True, null=True)
    long = models.FloatField(blank = True, null=True)

def save(self, *args, **kwargs):
    g = geocoder.mapbox(self.address, key='TOKEN')
    g = g.latlng 
    self.lat = g[0]
    selt.long = g[1]
    return super (Address, self).save(*args, **kwargs)