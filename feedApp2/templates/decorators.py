from django.contrib.auth.models import User
from django.http import HttpResponseForbidden

from feedApp2.models import Feed


def article_ownership_required(func) :
    def decorated(request, *args, **kwargs):
        article = Feed.objects.get(pk=kwargs['pk'])
        if not article.writer == request.user:
            return HttpResponseForbidden()
        return func(request, *args, **kwargs)

    return decorated