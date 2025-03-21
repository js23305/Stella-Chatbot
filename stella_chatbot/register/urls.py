from django.urls import path
from register.views import register, send_registration_is_successful

urlpatterns = [
    path('', register, name='register'),
    path('send_film_to_user/', send_registration_is_successful),


]