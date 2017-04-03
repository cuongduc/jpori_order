from __future__ import unicode_literals


class ProductNotFound(Exception):
    """Exception raised when a product with
       given attributes cannot be found.
    """
    def __init__(self, feature, message):
        self.feature = feature
        self.message = message


class ProductInstanceNotFound(Exception):
    """Exception raised when a product instance
        with given attributes cannot be found.
    """
    def __init__(self, feature, message):
        self.feature = feature
        self.message = message
