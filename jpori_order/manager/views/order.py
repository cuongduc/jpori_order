from __future__ import unicode_literals

import pprint
from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework import status

from order.models import Order
from manager.utils.file import delete_temp_file
from manager.utils.file import save_uploaded_file

from order.serializers import OrderSerializer
from product.exceptions import ProductNotFound, ProductInstanceNotFound

pp = pprint.PrettyPrinter(indent=1)


class OrderListView(TemplateView):
    template_name = "order/index.html"

    def get(self, request, *args, **kwargs):
        orders = Order.objects.all()
        return render(request, self.template_name, {'orders': orders})


class OrderUploadView(APIView):
    parser_classes = (FileUploadParser, )

    def post(self, request, filename, format=None):
        file_object = request.data['file']
        path = save_uploaded_file(file_object, filename)
        message = ""
        try:
            orders = Order.objects.import_from_excel(path)
        except ProductNotFound as p:
            message = p.message
            orders = None
        except ProductInstanceNotFound as p:
            message = p.message
            orders = None

        delete_temp_file(path)

        if orders is None:
            return Response(
                data={
                    "message": message},
                status=status.HTTP_400_BAD_REQUEST)

        serializer = OrderSerializer(orders, many=True)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)
