from __future__ import unicode_literals

from rest_framework import serializers
from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'name', 'phone', 'address', 'birthday',
                  'promotion_code', 'is_serviced', 'note', 'updated_at')
