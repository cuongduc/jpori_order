from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response

from product.models import Product
from manager.utils.file import save_uploaded_file
from manager.utils.file import delete_temp_file
from manager.utils.product import import_products

from product.serializers import ProductSerializer


class ProductListView(TemplateView):
    template_name = "product/index.html"

    def get(self, request, *args, **kwargs):
        products = Product.objects.all()
        return render(request, self.template_name, {"products": products})


class ProductUploadView(APIView):
    parser_classes = (FileUploadParser, )

    def post(self, request, filename, format=None):
        file_object = request.data['file']
        path = save_uploaded_file(file_object, filename)
        products = import_products(path)
        delete_temp_file(path)

        if (len(products) == 0 or products is None):
            return Response(
                data={
                    "message": "Đã có lỗi xảy ra khi nhập file Excel sản phẩm, xin vui lòng kiểm tra lại"},
                status=status.HTTP_400_BAD_REQUEST)

        serializer = ProductSerializer(products, many=True)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)
