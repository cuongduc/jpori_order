from __future__ import unicode_literals

from rest_framework import serializers
from .models import Product, ProductInstance


class ProductInstanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductInstance
        fields = ('imei', 'product')


class ProductSerializer(serializers.ModelSerializer):
    imeis = ProductInstanceSerializer(many=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'product_group', 'product_type',
                  'selling_price', 'buying_price', 'updated_at', 'imeis')
        depth = 1
