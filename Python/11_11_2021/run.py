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
for j in telebeler:
    sum+=j['yas']
print(sum)

#adi Ehmed olan istifadecinin butun melumatlarini ekrana cap edin
for telebe in telebeler:
    if telebe['ad']=='Ehmed':
        print(telebe)

#findUser(userName) adli metod yaradin. daxil edilen ada əsasən o istifadecinin butun melumatlarini ekrana cap etsin
def findUser(userName):
    for user in telebeler:
        if userName==user['ad']:
            print(f"User information: {user}")
    return user
findUser('Memmed')
    
#İstifadecilerin yas ortalamasini tapin. Yasi ortalama yasdan boyuk olan istifadecilerin melumatlarini ekrana cap edin
sumOfAges = 0
for t in telebeler:
    sumOfAges+=t['yas']
sumOfAges/=len(telebeler)
if t['yas']>sumOfAges:
    print(f"Yasi ortalamadan boyuk olanlar: {t}")

#soyadlari eyni olan istifadecilerden yasi en boyuk olanin adini ekrana cap edin
