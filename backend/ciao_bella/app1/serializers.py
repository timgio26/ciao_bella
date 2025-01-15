from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from django.contrib.auth.models import User
from .models import Profile

from rest_framework.authtoken.models import Token

class UserNewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['email','password'] ## model attribute
        extra_kwargs = { 'password': {'write_only': True}}  ### ini biar pas feedback gk ada info password
    def create(self, validated_data): ### harus pake create
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


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields = ['id','phone','lat','lng','price','photo']

    def add_profile(self,validated_data):
        token = self.context['request'].auth.key

        if token is None: 
            raise serializers.ValidationError({'error': 'Token is required.'}) 
        try: 
            user = Token.objects.get(key=token).user 
        except Token.DoesNotExist: 
            raise serializers.ValidationError({'error': 'Invalid token.'})
        

        profile = Profile(phone=validated_data['phone'],lat=validated_data['lat'],lng=validated_data['lng'],price=validated_data['price'],photo=validated_data['photo'])
        profile.set_user(user=user)
        profile.save()
        
        return profile