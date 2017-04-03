from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _

from core.models import TimeStampedModel
from product.models import Product
from customer.models import Customer
from order.managers import OrderManager


class Order(TimeStampedModel):
    id = models.CharField(max_length=100, unique=True, primary_key=True)
    time = models.DateTimeField(null=False, blank=False)
    salesperson = models.CharField(max_length=100, null=False)
    creator = models.CharField(max_length=100, null=False)
    description = models.CharField(max_length=255, null=True, blank=False)
    total = models.DecimalField(max_digits=20, decimal_places=2)
    discount = models.DecimalField(max_digits=20, decimal_places=2)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)

    objects = OrderManager()

    def __str__(self):
        return "{}".format(self.id)

    class Meta:
        get_latest_by = "updated_at"
        ordering = ('updated_at',)
        verbose_name = _('order')
        verbose_name_plural = _('orders')


class OrderDetail(TimeStampedModel):
    product = models.ForeignKey(
        Product, related_name='product',
        on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False, default=0)
    price = models.DecimalField(max_digits=20, decimal_places=2, default=0.0)
    discount = models.DecimalField(max_digits=20, decimal_places=2, default=0.0)
    product_total = models.DecimalField(max_digits=20, decimal_places=2, default=0.0)
    order = models.ForeignKey(
        Order, related_name="details",
        on_delete=models.CASCADE)
    customer = models.ForeignKey(
        Customer, related_name="customer",
        on_delete=models.CASCADE)

    objects = models.Manager()

    def __str__(self):
        return "{}-{}:{}".format(self.id, self.product, self.quantity)

    class meta:
        verbose_name = _('order detail')
        verbose_name_plural = _('order details')
