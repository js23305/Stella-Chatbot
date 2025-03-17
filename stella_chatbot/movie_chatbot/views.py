from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def chatbotui(request):

    template = loader.get_template('chat.html')

    context = {
        'title': 'Chatbot',
        'content': 'Welcome to the chatbot'
    }

    return HttpResponse(template.render(context, request))
    

def send_film_to_user(data):

    print(data.POST)

    message = "I'm not sure"
    
    match data.POST['genre']:
        case "Horror":
            message = "I recommend you watch The Conjuring"

        case "Romance":
            message = "I recommend you watch The Notebook"

        case "Comedy":
            message = "I recommend you watch Superbad"

        case "War":
            message = "I recommend you watch Saving Private Ryan"

        case "Western":
            message = "I recommend you watch The Good, the Bad and the Ugly"
        case _:
            print("The language doesn't matter, what matters is solving problems.")

    return JsonResponse({
        "message": message,
        "status_code": 200
    })
    

