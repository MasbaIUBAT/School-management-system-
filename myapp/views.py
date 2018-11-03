from django.shortcuts import render
from .models import (
    Student,
    Teacher,
    StudentClass,
    Application
)


# Create your views here.
def dashboard_views(request):
    stu_obj = Student.objects.count()
    tec_obj = Teacher.objects.count()
    scl_obj = StudentClass.objects.count()
    app_obj = Application.objects.count()
    context = {
        'stu_obj' : stu_obj,
        'tec_obj' : tec_obj,
        'scl_obj' : scl_obj,
        'app_obj' : app_obj,
    }
    template_name= 'dashboard.html'
    return render(request, template_name, context)
