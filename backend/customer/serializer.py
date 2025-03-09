from .models import Customer , Sizes
from rest_framework import serializers


class SizesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sizes
        fields =  ['main_width' , 'pants_width' , 'shoulder_width' , "stein_width" , 'stein_radius' , 'side_hight' , 'throat_radius' , 'pants_radius' , 'stein_model' , 'collar_model']


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ['id' , "user_name" , "last_name" , "phone"]


class PostSeizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sizes
        fields = ["customer_size" , 'main_width' , 'pants_width' , 'shoulder_width' , "stein_width" , 'stein_radius' , 'side_hight' , 'throat_radius' , 'pants_radius' , 'stein_model' , 'collar_model']


class SizeWithCustomerSerializer(serializers.ModelSerializer):
    
    sizes = SizesSerializer()
    
    class Meta:
        model = Customer
        fields =  ['id' , "user_name" , "last_name" , "phone" , "sizes"]