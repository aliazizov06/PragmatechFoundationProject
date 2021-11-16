adlar=['Ali','Mehdi','Senan','Mirbaba','Ulvi','Seyyad','Turyan']

# Butun adlari ekrana cap eden metod yazin adlariGoster()
def adlariGoster():
    for ad in adlar:
        print(ad)
    return ad
adlariGoster()

# Listin cut yerde duran elementlerini gosteren metod yazin cutYerdekiler()
def cutYerdekiler():
    i=2
    while i<len(adlar):
        print(f"Cut yerde duran adlar: {adlar[i]}")
        i+=2
cutYerdekiler()

# Listi elifba sirasina gore siralayan metod yazin listiSirala()
def listiSirala():
    adlar.sort()
    return adlar
print(listiSirala())
    
# Daxilində e herfi olan adları ekrana cap edən metod yazin
def isLetterIn():
    for elem in adlar:
        for e in elem:
            if e=='e':
                print(f"Icinde 'e' herfi olan adlar: {elem}")
isLetterIn()

# Son hərfi i olan adlari ekrana cap eden metod yazin
def isLetterLast():
    for a in adlar:
        if a[-1]=='i':
            print(f"Son herfi 'i' olan adlar: {a}")
isLetterLast()

# Hərf sayi eyni olan nece ad oldugunu ekrana cap edin
