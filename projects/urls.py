from django.urls import path
from . import views

urlpatterns = [
    path('api/projects/', views.ProjectListView.as_view(), name='project'),
    path('api/skills/', views.SkillListView.as_view(), name='skill'),
    path('api/contacts/', views.ContactCreateView.as_view(), name='contact')
]
    