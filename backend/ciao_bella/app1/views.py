from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from django.contrib.auth import authenticate
from .serializers import UserNewSerializer,ProfileSerializer
from rest_framework.permissions import IsAuthenticated 
from rest_framework.authentication import TokenAuthentication

class UserNew(generics.CreateAPIView):
    serializer_class = UserNewSerializer
    def create(self, request, *args, **kwargs): 
        serializer = self.get_serializer(data=request.data)  
        if serializer.is_valid(): 
            user = serializer.save() #ini serializer jalan, data masuk ke db di sini
            response_data = { 
                'user': UserNewSerializer(user).data,
                'message': "new user created"
                } 
            return Response(response_data, status=status.HTTP_201_CREATED) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class User(generics.GenericAPIView):
    serializer_class = UserNewSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        # email = request.data.get('email') 
        # password = request.data.get('password')
        # if not email or not password:
        #     return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid(): ## this only check required column
            print(request.data)
            login_data = serializer.login(validated_data=request.data) ### serializer jalan disini
            response_data = { 
                'user': UserNewSerializer(login_data['user']).data,
                'token': login_data['token'],
                'message': 'Signed in successfully.' 
                }
            return Response(response_data, status=status.HTTP_200_OK)
        # except ValidationError as e: 
        #     return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Profile(generics.GenericAPIView):
    authentication_classes = [TokenAuthentication] 
    permission_classes = [IsAuthenticated]

    serializer_class = ProfileSerializer

    def post(self,request, format=None):
        # print(request.auth.key)
        # data = request.data.copy()
        # data['token'] = request.auth.key
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            profile_data = serializer.add_profile(validated_data=request.data)
            response_data = { 
                'message': 'Profile Updated.' 
                }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Welcome(generics.GenericAPIView):
    authentication_classes = [TokenAuthentication] 
    permission_classes = [IsAuthenticated]
    def get(self,request):  ##harus pake self , request
        return Response({'msg': 'welcome'})