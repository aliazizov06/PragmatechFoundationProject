telebeler=[
    {
    'ad':'Samir',
    'soyad':'Hemidov',
    'yas':30
    },
    {
    'ad':'Memmed',
    'soyad':'Salamov',
    'yas':20
    },
    {
    'ad':'Aliye',
    'soyad':'Qurbanova',
    'yas':16
    },
    {
    'ad':'Sahil',
    'soyad':'Qeniyev',
    'yas':45
    },
    {
    'ad':'Ehmed',
    'soyad':'Qeniyev',
    'yas':50
    }
]
#Butun adlari ekrana cap edin
for i in telebeler:
    print(i['ad'])
#Istifadecilerin yaslarinin cemini tapin
sum = 0
for i in telebeler:
    sum+=i['yas']
    print(sum)


#adi Ehmed olan istifadecinin butun melumatlarini ekrana cap edin