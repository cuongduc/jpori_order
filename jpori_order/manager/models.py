from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import ugettext_lazy as _


class User(models.Model):

    class Meta:
        verbose_name = _("manager")
        verbose_name_plural = _("managers")