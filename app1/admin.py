from django.contrib import admin
from .models import Veg, NonVeg

# Register your models here.
class VegAdmin(admin.ModelAdmin):
    list_display=('name','price')
admin.site.register(Veg, VegAdmin)

class NonVegAdmin(admin.ModelAdmin):
    list_display=('name','price')
admin.site.register(NonVeg, NonVegAdmin)