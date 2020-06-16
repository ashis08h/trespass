from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from .models import Quiz
# Create your views here.
def index(request):
	quiz=Quiz.objects.all()
	return render(request, 'index.html',{'quiz':quiz})
def quizz_related(request,pk):
	quiz_rel=Quiz.objects.filter(pk=pk)
	return render(request, 'quizz.html',{'quiz_rel':quiz_rel})
def loginpage(request):
	return render(request, 'login.html')
def add_quizz(request):
	quiz=Quiz.objects.all()
	if request.method == 'POST':
		name = request.POST.get('name')
		b=Quiz(name=name)
		b.save()
	return render(request, 'index.html',{'quiz':quiz})
def report(request):
	return render(request, 'report.html')
def login_check(request):
	if request.method == 'POST':
		username = request.POST.get('email')
		password = request.POST.get('password')
		if username != "" and password != "":
			user = authenticate(username=username, password=password)
			print(user)
			if user != None:
				login(request, user)
				return render(request, 'add_quiz.html')
	return render(request, 'login.html')
def mylogout(request):
	logout(request)
	return redirect('login_check')

	