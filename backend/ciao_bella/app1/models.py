from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Profile (models.Model):
    user = models.OneToOneField(User,related_name='profile', on_delete=models.CASCADE)
    phone = models.CharField(max_length=15,null=True,blank=True)
    lat=models.CharField(max_length=10,null=True,blank=True)
    lng=models.CharField(max_length=10,null=True,blank=True)
    price=models.IntegerField(null=True,blank=True)
    photo=models.URLField(null=True,blank=True)
    def __str__(self):
        return self.user.username
    # def set_user(self,user):
    #     self.user=user

class Dog (models.Model):
    owner=models.ForeignKey(Profile, related_name='dog',on_delete=models.CASCADE)
    name = models.CharField(max_length=25,blank=True)
    gender = models.CharField(max_length=25,null=True,blank=True)
    breed = models.CharField(max_length=25,null=True,blank=True)
    dob = models.DateField(null=True,blank=True)
    photo=models.URLField(null=True,blank=True)
    def __str__(self):
        return self.name