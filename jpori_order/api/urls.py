from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns
from customer.views import CustomerList, CustomerDetail

app_name = 'api'

urlpatterns = [
    url(r'^customers/$', CustomerList.as_view(), name='customer_index'),
    url(r'^customer/(?P<id>[a-zA-Z0-9]+)/$', CustomerDetail.as_view(), name='customer_show'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
