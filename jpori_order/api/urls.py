from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns
from customer.views import CustomerList, CustomerDetail
from manager.views.customer import CustomerUploadView
from manager.views.order import OrderUploadView


app_name = 'api'

urlpatterns = [
    url(r'^customers/$', CustomerList.as_view(), name='customer_index'),
    url(r'^customers/import/(?P<filename>[^/]+)$', CustomerUploadView.as_view(), name='customer_import'),
    url(r'^customer/(?P<id>[a-zA-Z0-9]+)/$', CustomerDetail.as_view(), name='customer_show'),
    url(r'^orders/import/(?P<filename>[^/]+)$', OrderUploadView.as_view(), name='order_import'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
