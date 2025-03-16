from django.urls import path
from movie_chatbot.views import movie_chatbot

urlpatterns = [
    path('', movie_chatbot, name='movie_chatbot'),
    
]