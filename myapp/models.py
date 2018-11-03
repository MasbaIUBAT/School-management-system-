from django.db import models



# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=50)
    student_id = models.IntegerField()

    def __str__(self):
        return self.name


class Teacher(models.Model):
    name = models.CharField(max_length=50)
    teacher_id = models.IntegerField()

    def __str__(self):
        return self.name


class StudentClass(models.Model):
    name = models.CharField(max_length=50)
    class_id = models.IntegerField()

    def __str__(self):
        return self.name


class Application(models.Model):
    name = models.CharField(max_length=50)
    student_id = models.IntegerField()

    def __str__(self):
        return self.name
