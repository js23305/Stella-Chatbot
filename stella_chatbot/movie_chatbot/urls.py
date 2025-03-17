from django.urls import path
from movie_chatbot.views import movie_chatbot, send_film_to_user
urlpatterns = [
    path('', movie_chatbot, name='movie_chatbot'),
    path('send_film_to_user/', send_film_to_user)

]