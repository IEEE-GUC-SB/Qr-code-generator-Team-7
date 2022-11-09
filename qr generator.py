# -*- coding: utf-8 -*-
"""
Created on Wed Nov  9 13:04:08 2022

@author: mohamed
"""

import qrcode
def gen(data,id):
    qr = qrcode.QRCode(version=3,error_correction=qrcode.constants.ERROR_CORRECT_L)
    data2 = data + "_" + str(id)
    qr = qrcode.make(data2)
    temp = data + ".png"
    qr.save(temp)

for i in range(10):
    # here we read the names and emails
   gen("Name_Email",i)
   #  the i will be the id
