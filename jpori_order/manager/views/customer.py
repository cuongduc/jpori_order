from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt

from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework import status
import django_excel as excel

from customer.models import Customer
from customer.serializers import CustomerSerializer
from manager.utils.excel import save_uploaded_file, import_customers, delete_temp_file


class CustomerListView(TemplateView):
    template_name = "customer/index.html"

    def get(self, request, *args, **kwargs):
        customers = Customer.objects.all().order_by('-updated_at')
        return render(request, self.template_name, {'customers': customers})


class CustomerUploadView(APIView):
    parser_classes = (FileUploadParser,)

    def post(self, request, filename, format=None):
        file_obj = request.data['file']
        path = save_uploaded_file(file_obj, filename)
        customers = import_customers(path)
        delete_temp_file(path)

        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data, status=204)

