from django.urls import path
from .views import User,Welcome,UserNew,Profile

urlpatterns = [
    # path('user/', UserList.as_view()),
    # path('user/<int:pk>/', UserDetail.as_view()),
    path('welcome/', Welcome.as_view()),
    path('user/',User.as_view()),
    path('user/new/',UserNew.as_view()),
    path('user/profile/',Profile.as_view())
]