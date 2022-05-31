from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests

# Create your views here.

@api_view(['GET'])
def getCharacters(request):
    """
    Calls The One API's character endpoint
    """
    try:
        data = requests.get("https://the-one-api.dev/v2/character", headers={"Authorization":'Bearer 07hYS0M1Hj0whnZ-4r-y'})
        return Response(data.json())
    except Exception as ex:
        return Response("Could not get response")