from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Order(models.Model):
    
    class Meta:
        verbose_name = _('order')
        verbose_name_plural = _('orders')
