from rest_framework import serializers
from . import models

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.song
        fields = ('artist.name', 'title', 'cover', 'album', 'genre', 'mp3')

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.album
        fields = ('artist.name', 'title', 'year', 'genre','language')
        