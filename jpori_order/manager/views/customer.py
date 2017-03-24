from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView

from customer.models import Customer


class CustomerListView(TemplateView):
    template_name = "customer/index.html"

    def get(self, request, *args, **kwargs):
        customers = Customer.objects.all()
        return render(request, self.template_name, {'customers': customers})
