from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _
from core.models import TimeStampedModel


class Product(TimeStampedModel):
    id = models.CharField(max_length=10, unique=True, primary_key=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.CharField(max_length=255, null=True, blank=True)
    imei = models.CharField(max_length=20, null=False, blank=True, default="")
    product_group = models.CharField(max_length=20, null=False, blank=False)
    price = models.DecimalField(max_digits=12, decimal_places=2)

    class Meta:
        verbose_name = _("product")
        verbose_name_plural = _("products")