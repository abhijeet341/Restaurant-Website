from django.db import models

# Create your models here.
class Veg(models.Model):
    name=models.CharField(max_length=120)
    price=models.DecimalField(max_digits=6, decimal_places=2)
    pImage=models.URLField()

class NonVeg(models.Model):
    name=models.CharField(max_length=120)
    price=models.DecimalField(max_digits=6, decimal_places=2)
    nvImage=models.URLField()