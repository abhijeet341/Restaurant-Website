# This is created by me!
from django.urls import path
from . import views    # . means from the same folder

app_name='app1'

urlpatterns=[
    path('veg/',views.veg,name="vegs"),
    path('nonveg/',views.nonveg,name="nonvegs"),
]
