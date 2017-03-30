from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework import status

from order.models import Order


class OrderListView(TemplateView):
    template_name = "order/index.html"

    def get(self, request, *args, **kwargs):
        orders = Order.objects.all()
        return render(request, self.template_name, {'orders': orders})


class OrderUploadView(APIView):
    parser_classes = (FileUploadParser, )

    def post(self, request, filename, format=None):
        pass
