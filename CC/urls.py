from django.urls import path, include
from . import views

urlpatterns = [
    path('AllSongApi', views.AllSongApi.as_view(), name = 'AllSongApi'),
    path('track/<int:pk>', views.SongApi.as_view(), name = 'SongApi'),
]
