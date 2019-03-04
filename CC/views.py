from django.shortcuts import render
from . import serializers
from . import models
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

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


