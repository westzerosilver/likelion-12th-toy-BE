from django.shortcuts import render

# Create your views here.
def crewhome(request):
    return render(request, 'crewhome/crewhome.html')