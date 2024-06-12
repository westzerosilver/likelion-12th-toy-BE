from django.shortcuts import render
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.generic import CreateView, DeleteView

from commentApp2.forms import CommentCreationForm2
from commentApp2.models import Comment2
from commentApp2.templates.decorators import comment_ownership_required
from feedApp2.models import Feed


# Create your views here.
class CommentCreateView2(CreateView) :
    model = Comment2
    form_class = CommentCreationForm2
    template_name = 'commentApp2/create.html'
    # fields = ['comment_content']

    def form_valid(self, form):
        temp_comment = form.save(commit=False)
        temp_comment.feed = Feed.objects.get(pk=self.request.POST['feed_pk'])
        temp_comment.writer = self.request.user
        print(form)
        print(self.request.user)
        print(temp_comment)
        print(Feed.objects.get(pk=self.request.POST['feed_pk']))

        temp_comment.save()

        return super().form_valid(form)

    def get_success_url(self):

        return reverse('feedApp2:feed')


@method_decorator(comment_ownership_required, 'get')
@method_decorator(comment_ownership_required, 'post')
class CommentDeleteView2(DeleteView):
    model = Comment2
    context_object_name = 'comment2'
    template_name = 'commentApp2/delete.html'

    def get_success_url(self):
        return reverse('feedApp2:feed')