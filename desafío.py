#Desafío FizzBuzz
for numero in range (1,101):
    if numero == 24 or numero == 55:
       print(numero)
    elif numero %15 == 0:
      print("FizzBuzz")
    elif numero %5 == 0:
       print("Buzz")
    elif numero %3 == 0 :
       print("Fizz")
    else:
       print(numero)