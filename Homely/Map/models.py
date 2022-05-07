from django.db import models

# Create your models here.

class Locations(models.Model):
    id = models.AutoField(primary_key=True)
    lat = models.FloatField(blank = True, null=True)
    lon = models.FloatField(blank = True, null=True)