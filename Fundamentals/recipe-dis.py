import dis 

def func():
    a = 10
    b = 20
    c = a + b
    print (c)

dis.dis(func)