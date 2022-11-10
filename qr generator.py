import pyimgur
import qrcode
import xlrd
from xlutils.copy import copy


CLIENT_ID = '7aa8b838eb5897a'
im = pyimgur.Imgur(CLIENT_ID)


def gen(data, id):
    qr = qrcode.QRCode(
        version=3, error_correction=qrcode.constants.ERROR_CORRECT_L)
    data2 = data + "\n" + "IEEE-"+str(id)
    qr = qrcode.make(data2)
    temp = str(id) + ".png"
    qr.save(temp)
    PATH = temp
    uploaded_img = im.upload_image(PATH, title="NODE")
    Link = uploaded_img.link
    write(Link,id)



def write(link,row):
    rb = xlrd.open_workbook('Book1.xls')
    wb = copy(rb)
    w_sheet = wb.get_sheet(0)
    w_sheet.write(row,2,link)
    wb.save('Book1.xls')
    



workbook = xlrd.open_workbook(r"Book1.xls")
sheet = workbook.sheet_by_index(0)
row_count = sheet.nrows
for cur_row in range(0, row_count):
    cell_name = sheet.cell(cur_row, 0)
    cell_email = sheet.cell(cur_row, 1)
    name = cell_name.value
    email=cell_email.value
    gen(name+"\n"+email,cur_row)


