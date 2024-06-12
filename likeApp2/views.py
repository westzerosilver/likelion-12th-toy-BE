from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.utils.decorators import method_decorator
from django.views.generic import RedirectView
from django.urls import reverse

from feedApp2.models import Feed
from likeApp2.models import LikeRecord2


# Create your views here.
@method_decorator(login_required, 'get')
class LikeFeedView(RedirectView):

    def get_redirect_url(self, *args, **kwargs):
        # 요청받는 게시글로 다시 가도록 설정
        return reverse('feedApp2:feed')

    def get(self, *args, **kwargs):
        user = self.request.user
        feed = get_object_or_404(Feed, pk=kwargs['pk'])

        # 이 사람이 좋아요를 눌렀는지 확인하는 과정
        print("LikeRecord2.objects.filter(user=user, feed=feed).exists(): ",
              LikeRecord2.objects.filter(user=user, feed=feed).exists())
        print(user)
        print(feed.pk)
        if LikeRecord2.objects.filter(user=user, feed=feed).exists():
            # messages.add_message(self.request, messages.ERROR, '좋아요는 한 번만 가능합니다.')
            return HttpResponseRedirect(reverse('feedApp2:feed'))
        else:  # 좋아요를 누르지 않았다면 좋아요 새로 생성
            LikeRecord2(user=user, feed=feed).save()

        # 새로 생성된 좋아요 수 반영
        feed.like += 1
        feed.save()

        # messages.add_message(self.request, messages.SUCCESS, '좋아요가 반영되었습니다.')

        return super(LikeFeedView, self).get(self.request, *args, **kwargs)