from django.db import models
import datetime

def current_year():
    return datetime.date.today().year

class genre(models.Model):
    genre = models.CharField(primary_key = True, max_length = 30)
    img = models.ImageField(upload_to = 'genreCover/', verbose_name= 'Cover of Genre')

    def __str__(self):
        return self.genre

class artist(models.Model):
    name = models.CharField(max_length = 50)

    def __str__(self):
        return self.name

class ArtistImg(models.Model):
    artist = models.ForeignKey(artist, on_delete = models.CASCADE, related_name = 'artist')
    img = models.ImageField(upload_to = 'artist/', verbose_name='Image')

    def __str__(self):
        return "Photo : {}".format(self.artist.name)

class album(models.Model):
    artist = models.ForeignKey(artist, on_delete = models.SET_NULL, null = True)
    title = models.CharField(max_length = 100)
    year = models.IntegerField(default = current_year)
    language = models.CharField(max_length = 20)
    genre = models.ForeignKey(genre, on_delete = models.CASCADE)
    number = models.IntegerField(verbose_name = '#', help_text='Count of songs')

    def __str__(self):
        return "{0} - {1}".format(self.title, self.artist.name)

    class Meta:
        unique_together = (('artist', 'title'),)


class cover(models.Model):
    artist = models.ForeignKey(artist, on_delete = models.SET_NULL, null = True)
    img = models.ImageField(upload_to = 'Covers/', verbose_name= 'Cover')

    def __str__(self):
        return "Cover of : {}".format(self.artist.name)

class song(models.Model):
    artist = models.ForeignKey(artist, on_delete = models.SET_NULL, null = True, related_name = 'tracks')
    title = models.CharField(max_length = 40)
    cover = models.ForeignKey(cover, on_delete = models.SET_NULL, null = True)
    album = models.ForeignKey(album, on_delete = models.SET_NULL, blank = True, null = True)
    genre = models.ForeignKey(genre, on_delete = models.CASCADE)
    mp3 = models.FileField(upload_to = 'Sounds/', verbose_name= 'MP3', help_text = 'Music mp3 file')

    def __str__(self):
        return "{0} - {1}".format(self.title, self.artist.name)

    class Meta:
        unique_together = (('artist', 'title'),)

