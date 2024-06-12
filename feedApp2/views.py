# import APIView
import random

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.generic import ListView, CreateView, TemplateView, DetailView
from django.views.generic.edit import FormMixin

from commentApp2.forms import CommentCreationForm2
from feedApp2.forms import FeedCreationForm
from feedApp2.models import Feed


# Create your views here.

class FeedListView(ListView, FormMixin):
    model = Feed
    context_object_name = 'feed_list'
    form_class = CommentCreationForm2
    template_name = 'feedApp2/feed.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        feeds = list(Feed.objects.all())
        random_feeds = random.sample(feeds, 2) if len(feeds) > 2 else feeds
        context['random_feeds'] = random_feeds
        return context


@method_decorator(login_required, 'get')
@method_decorator(login_required, 'post')
class FeedCreateView(CreateView):
    model = Feed
    form_class = FeedCreationForm
    template_name = 'feedApp2/create.html'


    def form_valid(self, form):
        temp_feed = form.save(commit=False)
        temp_feed.writer = self.request.user
        print(self.request)
        temp_feed.save()

        return super().form_valid(form)

    def get_success_url(self):
        return reverse('feedApp2:feed')

