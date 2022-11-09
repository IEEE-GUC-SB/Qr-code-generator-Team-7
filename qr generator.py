import requests,json
import pyimgur
# -*- coding: utf-8 -*-
"""
Created on Wed Nov  9 13:04:08 2022

@author: mohamed
"""
import qrcode
CLIENT_ID = '7aa8b838eb5897a'
im = pyimgur.Imgur(CLIENT_ID)
def gen(data,id):
    qr = qrcode.QRCode(version=3,error_correction=qrcode.constants.ERROR_CORRECT_L)
    data2 = data + "_" + str(id)
    qr = qrcode.make(data2)
    temp = str(id) + ".png"
    qr.save(temp)
    PATH = temp
    uploaded_img = im.upload_image(PATH,title="NODE")
    print("uploaded Link: ",uploaded_img.link)

for i in range(2):
    # here we read the names and emails
   gen("Name_Email",i)
   #  the i will be the id







