from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

phone_number_validator = RegexValidator(
    regex=r'^\d{10}$',
    message='Phone number must be a 10-digit number.'
)


class User(AbstractUser):
    phone_number = models.CharField(max_length=10, validators=[phone_number_validator])


class Category(models.Model):
    name = models.CharField(max_length=155)

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=255)
    highlight = models.TextField()
    body = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='articles/images/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_popular = models.BooleanField(default=False)
    published = models.CharField(max_length=10, choices=(('save', 'Published'), ('draft', 'Not Published')))
    likes = models.ManyToManyField(User, related_name='liked_articles')
    view_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.article.title}"


class Like(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='article_likes')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Like by {self.user.username} on {self.article.title}"