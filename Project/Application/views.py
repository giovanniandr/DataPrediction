from django.shortcuts import render

# Create your views here.

def index(request):
    #Returning a render of index.html
    return render(request, 'index.html')

def analysis(request):
    #Returning a render of analysis.html
    return render(request, 'analysis.html')