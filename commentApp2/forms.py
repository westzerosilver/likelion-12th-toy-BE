
from django.forms import ModelForm
from django.forms.widgets import Textarea

from commentApp2.models import Comment2


class CommentCreationForm2(ModelForm):
    class Meta:
        model = Comment2
        fields = ['content']

        labels = {
            'content': "",
        }
        widgets = {
            'content': Textarea(attrs={'rows': 2, 'cols': 50})
        }
