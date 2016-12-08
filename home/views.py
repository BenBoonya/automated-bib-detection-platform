from django.shortcuts import render
from django.http import HttpResponse
from urllib.request import urlopen
import json
import codecs
import requests
from django.shortcuts import render_to_response
from django.contrib import messages
from time import gmtime, strftime
from django.template import RequestContext
import os

photos_url = 'http://staging.phuket.run/api/photos'
reader = codecs.getreader("utf-8")

response = urlopen(photos_url)
data = json.load(reader(response))
page_number = data['pages']
display_image_uri_list = []

def page(request, num=1):

    data = {
        'img_list': display_image_uri_list,
        'image_info_list' : get_url_list_by_page(num),
        'page' : int(num),
        'next_page' : int(num)+1,
        'previous_page' : int(num)-1
    }

    # if(request.POST):
    #     download_picture_from_url_list(get_url_list_by_page(4))

        #os.system("python scripts/test.py")

    return render(request, 'home/index.html',data)

def results(request):
    return render(request,'home/result.html')

def get_url_list_by_page(page_number):
    image_info_list = []
    response = urlopen(photos_url+'?page='+str(page_number))
    data = json.load(reader(response))
    counter = 1
    for obj in data['docs']:
        url = obj['view']['thumbnail']['url']
        image_info_list.append(
        {   'image_name': obj['fileName'],
            'image_url' : url,
            'value' : counter
        })
        counter = counter+1
    return(image_info_list)

def download_picture_from_url_list(url_list):
    current_date_time = strftime("%Y-%m-%d-%H:%M:%S", gmtime())
    create_folder(current_date_time)
    for info in url_list:
        uri = 'media/'+current_date_time+'/'+info['image_name']+'.jpg'
        display_image_uri_list.append(uri)
        f = open(uri,'wb')
        f.write(requests.get(info['image_url']).content)
        f.close

def create_folder(folder_name):
    if not os.path.exists('media/'+folder_name):
        os.makedirs('media/'+folder_name)
