# Generated by Django 5.1.4 on 2025-01-15 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_remove_profile_email_remove_profile_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='lat',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='lng',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='phone',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='photo',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='price',
            field=models.IntegerField(null=True),
        ),
    ]
