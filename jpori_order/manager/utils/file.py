from __future__ import unicode_literals

import os
from django.conf import settings
from django.core.files.base import ContentFile


def save_uploaded_file(file_obj, filename):
        """
        Save uploaded file to media folder to temporary use
        :param file_obj:
        :param filename:
        :return:
        """
        path = "{}/{}".format(settings.MEDIA_ROOT, filename)
        with open(path, 'wb+') as dest:
            file_content = ContentFile(file_obj.read())
            try:
                for chunk in file_content.chunks():
                    dest.write(chunk)
                dest.close()
                return path
            except:
                raise IOError("Cannot write uploaded file.")


def delete_temp_file(filepath):
    if os.path.exists(filepath) and os.path.isfile(filepath):
        os.remove(filepath)
