from django.shortcuts import render
from rest_framework.response import Response
from .serializer import CustomerSerializer , SizesSerializer , PostSeizeSerializer , SizeWithCustomerSerializer
from .models import Customer , Sizes
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import get_list_or_404


@api_view()
def customer_list(request):
    queryset = Customer.objects.all().select_related('sizes')
    serializer = SizeWithCustomerSerializer(queryset , many=True)
    return Response(serializer.data)


@api_view(["DELETE" , "PUT"])
def put_and_delete_customer(request , id):
    customer = Customer.objects.get(id=id)
    # queryset = get_list_or_404(Customer , id=id)
    if request.method == 'DELETE':
        try:
            customer.delete()
            return Response({"message": "Customer deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Customer.DoesNotExist:
            return Response({"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND)
    elif request.method == "PUT":
        serializer = CustomerSerializer(customer , data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data , status=status.HTTP_200_OK)
        
    
    
@api_view()
def get_customer_by_id(request , id):
    customer = get_list_or_404(Customer , id=id)
    serializer = CustomerSerializer(customer , many=True)
    return Response(serializer.data , status=status.HTTP_200_OK)

    
@api_view(["POST"])
def create_customer(request):
    serializer = CustomerSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data , status=status.HTTP_201_CREATED)


# Sizes Functions


@api_view(["POST"])
def create_size_for_customer(request):
    serializer = PostSeizeSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data , status=status.HTTP_201_CREATED)


@api_view(["PUT"])
def update_customer_size(request , id):
    queryset = Sizes.objects.get(customer_size=id)
    serializer = SizesSerializer(queryset , data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view()
def get_size_by_id(request , id):
    queryset = get_list_or_404(Sizes , customer_size=id)
    serializer = SizesSerializer(queryset , many=True)
    return Response(serializer.data)
    