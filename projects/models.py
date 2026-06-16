from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    tech_used = models.CharField(max_length=200)
    github_url = models.URLField()
    live_url = models.URLField(max_length=250, blank=True, null=True) 
    image = models.ImageField(upload_to='projects/',blank=True, null=True)
    order = models.IntegerField(default=0)
    
    def __str__(self):
        return self.title 
    
class Skill(models.Model):
    name = models.CharField(max_length=50)
    
    class CategoryChoices(models.TextChoices):
        LANGUAGE = 'Language', 'Language'
        FRAMEWORK = 'Framework', 'Framework'
        TOOL = 'Tool', 'Tool'
    
    category = models.CharField(
        max_length=20,
        choices=CategoryChoices.choices,
        default=CategoryChoices.LANGUAGE,
    )

    def __str__(self):
        return self.name
    
class Contact(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    message = models.TextField()
    timestamp =  models.DateTimeField(auto_now_add=True) 
    
    def __str__(self):
        return f"{self.name} - {self.email}"