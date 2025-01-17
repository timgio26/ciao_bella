from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from django.contrib.auth.models import User
from .models import Profile,Dog

from rest_framework.authtoken.models import Token

class TokenValidationMixin: 
    def validate_token(self): 
        token = self.context['request'].auth.key 
        if token is None: 
            raise serializers.ValidationError({'error': 'Token is required.'}) 
        try: 
            user = Token.objects.get(key=token).user 
        except Token.DoesNotExist: 
            raise serializers.ValidationError({'error': 'Invalid token.'}) 
        return user

class UserNewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['email','password'] ## model attribute
        extra_kwargs = { 'password': {'write_only': True},'email':{'required':True}}  ### ini biar pas feedback gk ada info password
    def create(self, validated_data): ### harus pake create, ini builtin method
        if(User.objects.filter(email=validated_data['email'])):
            raise ValidationError(detail={'error': f'{validated_data['email']} already exists.'})
        user = User(email=validated_data['email'],username=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return user
    def login(self,validated_data):
        try:
            user =User.objects.get(email=validated_data['email'])
            if user.check_password(validated_data['password']):
                token, created = Token.objects.get_or_create(user=user)
                return {'user': user, 'token': token.key}
            else: 
                raise ValidationError({'error': 'Invalid credentials.'})
        except User.DoesNotExist: 
            raise ValidationError({'error': 'Invalid credentials.'})


class ProfileSerializer(serializers.ModelSerializer,TokenValidationMixin):
    class Meta:
        model=Profile
        fields = ['id','phone','lat','lng','price','photo']

    def add_profile(self,validated_data):

        user = self.validate_token() ## refactored 

        profile, created = Profile.objects.update_or_create(
            user=user,
            defaults=validated_data.dict()
            )
        profile.save()
        
        return profile

class DogSerializer(serializers.ModelSerializer,TokenValidationMixin):
    class Meta:
        model=Dog
        fields = ['id','name','gender','breed','dob','photo']

    def add_dog(self,validated_data):
        user = self.validate_token()


        if not validated_data.get('name'):
            raise ValidationError({'error': 'Dog name is required'})

        dog = Dog(
            owner=user.profile,
            name=validated_data.get('name'),
            breed=validated_data.get('breed'),
            gender=validated_data.get('gender'),
            dob=validated_data.get('dob'),
            photo=validated_data.get('photo')
            )
        dog.save()
        return dog

    def update_dog(self,validated_data):
        user = self.validate_token()
        if not validated_data.get('id'):
            # print('no id')
            raise ValidationError({'error': 'Dog id is required for update'})
        try:
            dog = Dog.objects.get(owner=user.profile,id=validated_data.get('id'))
        except Dog.DoesNotExist:
            raise ValidationError({'error': 'Dog not found.'})

        for field in ['name', 'gender', 'breed', 'dob', 'photo']: 
            if field in validated_data: 
                setattr(dog, field, validated_data[field])
        dog.save()
        return dog
    
    def delete_dog(self,validated_data):
        user = self.validate_token()
        if not validated_data.get('id'):
            raise ValidationError({'error': 'Dog id is required for update'})
        try:
            dog = Dog.objects.get(owner=user.profile,id=validated_data.get('id'))
        except Dog.DoesNotExist:
            raise ValidationError({'error': 'Dog not found.'})
        dog.delete()
        return dog

    def get_dog(self,request):
        user = self.validate_token() 
        dogs = Dog.objects.filter(owner=user.profile) 
        if not dogs.exists(): 
            raise serializers.ValidationError({'error': 'No dogs found.'}) 
        return dogs


        
