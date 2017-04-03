from __future__ import unicode_literals

from rest_framework import serializers
from order.models import Order, OrderDetail
from product.serializers import ProductSerializer
from customer.serializers import CustomerSerializer


class OrderDetailSerializer(serializers.ModelSerializer):
    product = ProductSerializer(many=False, read_only=True)

    class Meta:
        model = OrderDetail
        fields = ('id', 'product_id', 'quantity', 'product_total',
                  'discount', 'product')
        depth = 1


class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(many=False, read_only=True)
    details = OrderDetailSerializer(many=True, read_only=False)

    class Meta:
        model = Order
        fields = ('id', 'time', 'salesperson', 'total',
                  'description', 'creator', 'discount',
                  'customer', 'details')
        depth = 2
