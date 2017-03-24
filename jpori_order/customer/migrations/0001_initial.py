# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-23 13:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.CharField(max_length=15, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=255, unique=True)),
                ('address', models.CharField(max_length=500, null=True)),
                ('birthday', models.DateTimeField(null=True)),
                ('promotion_code', models.CharField(max_length=100, null=True)),
                ('is_serviced', models.BooleanField(default=False)),
                ('note', models.TextField(null=True)),
            ],
            options={
                'verbose_name': 'customer',
                'verbose_name_plural': 'customers',
            },
        ),
    ]
