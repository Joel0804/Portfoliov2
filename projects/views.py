from django.shortcuts import render
from rest_framework import generics 
from .models import Project, Contact, Skill
from .serializer import ProjectSerializer, ContactSerializer, SkillSerializer
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

class ProjectListView(generics.ListAPIView): #listview only works with get
    queryset = Project.objects.all().order_by('order') 
    serializer_class = ProjectSerializer

class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    
class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    
    def perform_create(self, serializer):
        instance = serializer.save()
        send_mail(
            subject=f'New message from {instance.name}',
            message=f'Name: {instance.name}\nEmail: {instance.email}\n\nMessage:\n{instance.message}',
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
        )