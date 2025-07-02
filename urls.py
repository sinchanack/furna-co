from django.urls import path
from .views import index, cart, wishlist

urlpatterns = [
    path('', index, name='index'),
    path('cart/', cart, name='cart'),
    path('wishlist/', wishlist, name='wishlist'),
]
