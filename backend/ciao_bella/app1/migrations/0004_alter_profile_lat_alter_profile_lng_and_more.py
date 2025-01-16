# Generated by Django 5.1.4 on 2025-01-15 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0003_alter_profile_lat_alter_profile_lng_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='lat',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='lng',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='phone',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='photo',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='price',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]