from django.urls import path
from . import views
urlpatterns = [
    path('movie_chatbot/', views.movie_chatbot, name='movie_chatbot'),

]