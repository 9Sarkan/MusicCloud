from django.contrib import admin
from . import models
from django.http import HttpResponse
from django.core import serializers

def export_as_json(ModelAdmin, request, queryset):
    response = HttpResponse(content_type= 'Application/Json')
    serializers.serialize('json', queryset, stream = response)
    return response

export_as_json.short_description = 'export seleced rows as json'.title()

@admin.register(models.song)
class SongAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'album')
    list_filter = ('artist',)
    actions = [export_as_json, ]

@admin.register(models.album)
class ArtistAdmin(admin.ModelAdmin):
    list_display = ('artist', 'title', 'year', 'genre', 'language')
    list_filter = ('artist', 'year', 'genre', 'language')
    actions = [export_as_json, ]

@admin.register(models.artist)
class ArtistAdmin(admin.ModelAdmin):
    list_display = ('name', )
    actions = [export_as_json, ]    

admin.site.register(models.genre)
admin.site.register(models.cover)
admin.site.register(models.ArtistImg)