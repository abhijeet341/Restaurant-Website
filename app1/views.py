from django.shortcuts import render
from django.http import HttpResponse
from .models import Veg, NonVeg
# Create your views here.
# Model name and View function should be different to escape from error message.
def index(request):
    ctx={'active_link':'index'}
    return render(request,'app1/index.html',ctx)
def veg(request):
    vegs=Veg.objects.all()
    ctx={'vegs':vegs, 'active_link':'veg'}
    return render(request,'app1/veg.html',ctx)
def nonveg(request):
    nonvegs=NonVeg.objects.all()
    ctx={'nonvegs':nonvegs,'active_link':'nonveg'}
    return render(request,'app1/nonveg.html',ctx)