# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def dashjs(request):
    return render(request, 'dash/dashjs.html')

def shaka(request):
    return render(request, 'dash/shaka.html')

def mse_tests(request):
    return render(request, 'dash/mse_tests.html')
