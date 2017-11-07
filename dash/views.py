# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'dash/index.html')

def mse_tests(request):
    return render(request, 'dash/mse_tests.html')
