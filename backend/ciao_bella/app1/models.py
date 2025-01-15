from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Profile (models.Model):
    user = models.OneToOneField(User,related_name='profile', on_delete=models.CASCADE)
    # email = models.EmailField()
    # name = models.CharField(max_length=25)
    phone = models.CharField(max_length=15)
    lat=models.CharField(max_length=10)
    lng=models.CharField(max_length=10)
    price=models.IntegerField()
    photo=models.URLField()
    def __str__(self):
        return self.user.username
    def set_user(self,user):
        self.user=user

class Dog (models.Model):
    customer=models.ForeignKey(Profile, related_name='dog',on_delete=models.CASCADE)
    name = models.CharField(max_length=25)
    gender = models.CharField(max_length=25)
    breed = models.CharField(max_length=25)
    dob = models.DateField()
    photo=models.URLField()
    def __str__(self):
        return self.name