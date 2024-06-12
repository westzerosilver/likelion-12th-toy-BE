from django.contrib.auth.models import User
from django.http import HttpResponseForbidden

from commentApp2.models import Comment2


def comment_ownership_required(func) :
    def decorated(request, *args, **kwargs):
        comment2 = Comment2.objects.get(pk=kwargs['pk'])
        if not comment2.writer == request.user:
            return HttpResponseForbidden()
        return func(request, *args, **kwargs)

    return decorated