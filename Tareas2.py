#Un programa que sume los primeros 10 números naturales usando while
suma = 0
cuenta = 1
while cuenta <= 10:
    suma += cuenta
    print(f"Al sumar {suma - cuenta} + {cuenta}, da como resultado {suma}")
    cuenta += 1
print(f"La suma de los primeros 10 números naturales es: {suma}")

print("--------------------------------------------------------------")

#Un programa que genere un número aleatorio entre el 1 y el 100, y permita al usuario adivinar el número. 
#El programa debe seguir hasta que el usuario adivine el número correctamente.

import random
numero_misteriosoUhhh = random.randint(1, 100)

while True:
    intento = input("Adivina el número MUAJAJA: ")
    if not intento.isdigit():
        print("Por favor, ingresa un número entero.")
        continue
    intento = int(intento)
    if intento != numero_misteriosoUhhh:
        if intento < numero_misteriosoUhhh:
            print("Oh oh, demasiado bajo. Intenta otra vez.")
        else:
            print("Oh oh, demasiado alto. Intenta otra vez.")
    else:
        print(f"¡¡¡FELICIDADES!!! Adivinaste el número, es el {numero_misteriosoUhhh}")
        break

print("--------------------------------------------------------------")

#Un programa que permita al usuario introducir notas hasta que decida detenerse. Al final el programa debe calcular el promedio.


notas = []
while True:
    nota = input("Introduce una nota (o escribe 'parar' para terminar): ")
    if nota.lower() == 'parar':
        break
    try:
        nota = float(nota)
    except ValueError:
        print("Debe ingresar un número válido.")
        continue
    if 1.0 <= nota <= 7.0:
        notas.append(nota)
    else:
        print("Por favor, introduce una nota válida entre 1.0 y 7.0.")
    seguir = input("¿Hay más notas? (si/no): ")
    if seguir.lower() == 'no':
        break

if notas:
    promedio = sum(notas) / len(notas)
    print(f"El promedio de las notas es: {promedio}")
else:
    print("No se han ingresado notas.")

print("--------------------------------------------------------------")
