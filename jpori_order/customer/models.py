from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _

from core.models import TimeStampedModel


class Customer(TimeStampedModel):
    id = models.CharField(max_length=15, unique=True, primary_key=True)
    name = models.CharField(max_length=50, null=False, blank=False)
    phone = models.CharField(max_length=20, null=True, default="000-000")
    email = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=500, null=True, blank=False)
    birthday = models.DateField(null=True)
    promotion_code = models.CharField(max_length=100, null=True, blank=False)
    is_serviced = models.BooleanField(null=False, default=False)  # Khach hang da dc cham soc chua
    note = models.TextField(null=True)

    objects = models.Manager()

    def __str__(self):
        return "{}:{}".format(self.id, self.name)

    def get_address(self):
        if self.address is None:
            return ""
        return self.address

    def got_customer_service(self):
        return self.is_serviced

    class Meta:
        ordering = ["updated_at"]
        verbose_name = _("customer")
        verbose_name_plural = _("customers")


class CustomerException(Exception):
    pass
