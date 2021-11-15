def foo(name,surname,email='aliazizov@gmail.com'):
    print(f"{name} /// {surname} /// {email}")
    length = len(name+surname)
    print(length)
    return length
foo('Ali', 'Azizov')
foo('Ali', 'Azizov', 'ali@gmail.com')