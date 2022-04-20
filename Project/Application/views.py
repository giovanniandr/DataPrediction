from django.shortcuts import render
import folium

# Create your views here.
def index(request):
    #Creating map
    m = folium.Map()
    m = m._repr_html_()
    context={
        'm': m,
    }

    #Returning a render of index.html
    return render(request, 'index.html', context)