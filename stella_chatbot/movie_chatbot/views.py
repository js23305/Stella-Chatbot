from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.

def movie_chatbot(request):
    template = loader.get_template('chat.html')

    context = {
        'title': 'Chatbot',
        'content': 'Welcome to the chatbot'
    }

    return HttpResponse(template.render(context, request))
