from django.shortcuts import render, get_object_or_404
from . import serializers
from . import models
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from django.views import generic

class AllSongApi(APIView):
    def get(self, requset, format = None):
        s = models.song.objects.all()
        serial = serializers.SongSerializer(s, many = True)
        return Response(serial.data)

class SongApi(APIView):
    @staticmethod
    def get_object(pk):
        try:
            return models.song.obejcts.get(pk = pk)
        except models.song.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

    def get(self, request, pk, format = None):
        s = self.get_object(pk)
        serial = serializers.SongSerializer(s)
        return Response(serial.data)

class MainPage(generic.ListView):
    model = models.song
    paginate_by = 20
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(MainPage, self).get_context_data(**kwargs)
        top = models.song.objects.all().order_by('date')
        context.update({
            'top' : top,
        })
        return context
    

class SongPage(generic.ListView):
    model = models.song
    template_name = 'track.html'

    def get_context_data(self, **kwargs):
        context = super(SongPage, self).get_context_data(**kwargs)
        song = get_object_or_404(models.song, pk = self.kwargs['songId'])
        context.update({
            'song':song,
            'album' : song.album,
        })
        return context