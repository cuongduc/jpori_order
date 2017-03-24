from django.conf.urls import url

from .views.index import IndexView
from .views.customer import CustomerListView
from .views.order import OrderListView


app_name = "manager"

urlpatterns = [
    url(r'^$', IndexView.as_view(), name="index"),
    url(r'^khach-hang/$', CustomerListView.as_view(), name="customer_index"),
    url(r'^hoa-don/$', OrderListView.as_view(), name="order_index"),
]
