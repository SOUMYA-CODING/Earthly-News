from django.contrib import admin
from .models import User, Category, Article, Comment, Like


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'published', 'created_at')
    list_filter = ('category', 'published')
    search_fields = ('title', 'category__name')


class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'article', 'created_at')
    list_filter = ('article',)
    search_fields = ('user__username', 'article__title')


class LikeAdmin(admin.ModelAdmin):
    list_display = ('user', 'article')
    list_filter = ('article',)
    search_fields = ('user__username', 'article__title')


admin.site.register(User)
admin.site.register(Category)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Like, LikeAdmin)
