from __future__ import unicode_literals

import os

from openpyxl import load_workbook

from order.models import Order, OrderDetail
from customer.models import Customer
from product.models import Product


FIELD_IDX = {
    'id': 2,
    'time': 3,
    'customer_id': 4,
    'customer_name': 5,
    'customer_phone': 6,
    'salesperson': 8,
    'creator': 9,
    'description': 22,
    'total': 23,
    'discount': 24,
    'product_id': 28,
    'product_name': 29,
    'product_imei': 30,
    'product_quantity': 33,
    'product_price': 34,
    'product_discount': 35,
    'product_total': 36,
}


def import_orders(excel_path=None):
    """

    """
    if not (os.path.exist(excel_path) and os.path.isfile(excel_path)):
        raise IOError("File not found.")
    else:
        file = open(excel_path, "rb+")
    return file

