# Generated by Django 2.1.7 on 2019-03-05 11:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CC', '0004_song_date'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='song',
            options={'ordering': ('date',)},
        ),
        migrations.AddField(
            model_name='album',
            name='StreamCount',
            field=models.IntegerField(default=1, verbose_name='Stream Count'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='song',
            name='StreamCount',
            field=models.IntegerField(default=1, verbose_name='Stream Count'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='cover',
            name='img',
            field=models.ImageField(upload_to='media/Covers/', verbose_name='Cover'),
        ),
        migrations.AlterField(
            model_name='genre',
            name='img',
            field=models.ImageField(upload_to='media/genreCover/', verbose_name='Cover of Genre'),
        ),
        migrations.AlterField(
            model_name='song',
            name='album',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tracks', to='CC.album'),
        ),
        migrations.AlterField(
            model_name='song',
            name='artist',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='CC.artist'),
        ),
        migrations.AlterField(
            model_name='song',
            name='mp3',
            field=models.FileField(help_text='Music mp3 file', upload_to='media/Sounds/', verbose_name='MP3'),
        ),
    ]