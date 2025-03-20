from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def register(request):

    template = loader.get_template('register.html')

    context = {
        'title': 'register',
        'content': 'Welcome to the register form'
    }

    return HttpResponse(template.render(context, request))