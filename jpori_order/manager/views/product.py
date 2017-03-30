from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser

from product.models import Product


class ProductListView(TemplateView):
    template_name = "product/index.html"

    def get(self, request, *args, **kwargs):
        products = Product.objects.all()
        return render(request, self.template_name, {"products": products})


class ProductUploadView(APIView):
    parser_classes = (FileUploadParser, )

    def post(self, request, filename, format=None):
        pass
