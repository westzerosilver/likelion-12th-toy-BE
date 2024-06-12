from django.forms import ModelForm, forms
from django.forms.widgets import Textarea

from feedApp2.models import Feed
from feedApp2.widgets import PreviewFileWidget


class FeedCreationForm(ModelForm):
    class Meta:
        model = Feed
        fields = ['image', 'content']
        labels = {
            'image' : '사진을 선택하세요',
            'content': '문구를 입력하세요',
        }
        widgets = {
            'content': Textarea(attrs={'rows': 8, 'cols': 30}),
            # 'image' : PreviewFileWidget,
        }