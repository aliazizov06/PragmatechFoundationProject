# Code 01
class A:
    def one(self):
        return self.two()
#ozunden sonra gelen funksiyani nece return ede bilir anlaya bilmedim
    def two(self):
        return 'A'

class B(A):
    def two(self):
        return 'B'

obj1 = A()
obj2 = B()
print(obj1.two(),obj2.two())


# Code 02
class test:
    def __init__(self, a="Hello world"):
        self.a=a
    def display(self):
        print(self.a)

obj=test()
obj.display()
#display metodu ekrana "Hello world" ifadesini cap edir
#obj de test class'ina beraber olduguna gore obj.display()
#ekrana "Hello world" ifadesini cap edir