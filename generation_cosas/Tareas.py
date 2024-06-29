# Ejercicio 1: Un programa que imprima si un número del 1 al 10 es par o impar
number1 = 0
for number1 in range(1,11):
    if number1 %2 == 0:
        print(f"El número {number1} es Par")
    elif number1 %2 == 1:
        print(f"El número {number1} es Impar")
    else:
        print(number1)


# Ejercicio 2: Un programa que calcule la suma de los primeros 10 números naturales

suma1 = 0
anterior = 0
for number2 in range(1, 11):
    suma1 = anterior + number2
    print(f"Al sumar {anterior} + {number2}, da como resultado {suma1}")
    anterior = suma1
    
# Ejercicio 3: Un programa que imprima la tabla de multiplicar del 5
number3 = 0
for number3 in range (1,21):
    print(f"5 x {number3} = {5 * number3}")



# Ejercicio x: Un programa en Python que encuentre el número más pequeño y el número más grande en una lista dada
mi_lista1 = [10, -2, 45, -66, 0, 42, -4, 33, -1]
mayor = mi_lista1[0]
menor = mi_lista1[0]
for n in mi_lista1:
    if n > mayor:
        mayor = n
    elif n < menor:
        menor = n
print(f"El mayor número es {mayor} y el menor es {menor}.")



# Ejercicio 4: Programa que cuente cuántas letras “a” hay en una palabra dada.
palabra = "mantequilla" 
cuenta = 0

for letra in palabra:
    if letra == "a":
        cuenta += 1

print(f"La palabra {palabra} tiene {cuenta} letra(s) 'a'.")


# Ejercicio 5: Un programa que encuentre el mayor número en una lista dada

Mi_lista2 = [10,2,45,66,783,42,4,33,1]
mayor_number = Mi_lista2[0]

for number in Mi_lista2:
    if number > mayor_number:
        mayor_number = number
print(f"El mayor número es: {mayor_number}")


# Ejercicio 6: Un programa que imprima todos los números del 1 al 30 que son divisibles por 3.

for number3 in range(1,31):
    if number3 %3 == 0:
        print(number3)


# Ejercicio 7: Un programa que cuente cuántos números positivos y cuántos números negativos hay en una lista dada.

mi_lista3 = [1,0,-3,56,-77,902,-345,5,23,-68,13,2]
positivos = 0
negativos = 0
for n in mi_lista3:
    if n > 0:
        positivos += 1
    elif n < 0:
        negativos += 1
print(f"Hay {positivos} números positivos y {negativos} números negativos en la lista.")


# Ejercicio y: Un programa en Python que encuentre la palabra más larga y la palabra más corta en una lista de palabras dada

mi_lista4 = ["manzana", "banana", "cereza", "uva", "sandía", "kiwi"]
palabra_larga = mi_lista4[0]
palabra_corta = mi_lista4[0]
for pal in mi_lista4:
    if len(pal) > len(palabra_larga):
        palabra_larga = pal
    elif len(pal) < len(palabra_corta):
        palabra_corta = pal
print(f"La palabra más larga es {palabra_larga} y la más corta es {palabra_corta}.")