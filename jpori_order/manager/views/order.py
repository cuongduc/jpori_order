from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView

from order.models import Order


class OrderListView(TemplateView):
    template_name = "order/index.html"

    def get(self, request, *args, **kwargs):
        orders = Order.objects.all()
        return render(request, self.template_name, {'orders': orders})
