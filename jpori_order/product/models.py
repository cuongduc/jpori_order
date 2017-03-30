from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _
from core.models import TimeStampedModel


class Product(TimeStampedModel):
    id = models.CharField(max_length=10, unique=True, primary_key=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.CharField(max_length=255, null=True, blank=True)
    product_group = models.CharField(max_length=20, null=False, blank=False)
    product_type = models.CharField(max_length=50, null=False, blank=False)
    buying_price = models.DecimalField(max_digits=12, decimal_places=2)
    selling_price = models.DecimalField(max_digits=12, decimal_places=2)
    notes = models.CharField(max_length=255, null=True, blank=False)

    objects = models.Manager()

    def __str__(self):
        return "{}-{}".format(self.id, self.name)

    class Meta:
        verbose_name = _("product")
        verbose_name_plural = _("products")


class ProductInstance(TimeStampedModel):
    imei = models.CharField(max_length=20, primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    objects = models.Manager()

    def __str__(self):
        return "{}".format(self.imei)

    class Meta:
        verbose_name = _("product instance")
        verbose_name_plural = _("product instances")
