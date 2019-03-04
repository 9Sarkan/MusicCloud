from rest_framework import serializers
from . import models

class CoverSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.cover
        fields = ('img', )

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.artist
        fields = ('name',)

class AlbumSerializer(serializers.ModelSerializer):
    artistN = ArtistSerializer(source = 'artist')
    class Meta:
        model = models.album
        fields = ('artistN', 'title', 'year', 'genre','language')

class SongSerializer(serializers.ModelSerializer):
    CurrentArtist = ArtistSerializer(source = 'artist')
    CurrentAlbum = AlbumSerializer(source = 'album')
    SCover = CoverSerializer(source = 'cover')
    class Meta:
        model = models.song
        fields = ('CurrentArtist', 'title', 'SCover', 'CurrentAlbum', 'genre', 'mp3')