from customer.models import Customer
from customer.serializers import CustomerSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CustomerList(APIView):
    """
    List all Customers or create new customer
    """
    def get(self, request, format=None):
        customers = Customer.objects.all().order_by('-updated_at')
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomerDetail(APIView):
    """
    Retrieve, update, delete a customer
    """
    def get_object(self, id):
        try:
            return Customer.objects.get(id=id)
        except Customer.DoesNotExist:
            raise Http404("Customer not found.")

    def get(self, request, id, format=None):
        customer = self.get_object(id)
        serializer = CustomerSerializer(customer)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        customer = self.get_object(id)
        serializer = CustomerSerializer(customer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        customer = self.get_object(id)
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)