from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import json
import requests

def register(request):

    template = loader.get_template('register.html')

    context = {
        'title': 'register',
        'content': 'Welcome to the register form'
    }

    return HttpResponse(template.render(context, request))

def sendRegistrartionIsSuccessful(data):
    register_account_url = f'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD32J9GR-rh7rQTev9qAvSwo-mgTXnrolk'

    userEmail = data.POST.get('registerEmail')
    userPassword = data.POST.get('registerPassword')
    payload = {
        "regsiterEmail": userEmail,
        "regsiterPassowrd": userPassword,
        "returnsecureToken": True
    }

    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(register_account_url, data=json.dumps(payload), headers=headers)

    print(response.json())

    if 'localId' in response.json():
        print('Success')

        
    else:
        print('Failed')

    return JsonResponse(response.json())



 


