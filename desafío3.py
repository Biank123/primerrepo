#Crear un código que sume todos los primos desde el 1 a 353

suma_primos = 0

def numero_primo(n):   #Define si el número es primo o no
    if n <= 1:
        return False
    for x in range(2, n//2 + 1):
        if n % x == 0:
            return False
    return True

for numero2 in range(1, 354):  #Para un número en el rango del 1 al 353, si es primo que lo sume
    if numero_primo(numero2):
        suma_primos += numero2 #suma_primos = numero2 + 1

print("La suma de todos los números primos desde 0 hasta 353 es:", suma_primos)

print("__________________________________________________________________________________")

#Código que permita ingresar 3 números, diga cuál es el mayor, orden de menor a mayor.


while True:
    try:
        # Ingresar los tres números:
        num1 = (input("Ingrese el primer número o escriba 'salir': "))
        if num1.lower() == 'salir':
            break
        num1 = float(num1)
        num2 = (input("Ingrese el segundo número o escriba 'salir': "))
        if num2.lower() == 'salir':
            break
        num2 = float(num2)
        num3 = (input("Ingrese el tercer número o escriba 'salir': "))
        if num3.lower() == 'salir':
            break
        num3 = float(num3)
        # Dice cuál es el número mayor:
        mayor = max(num1, num2, num3)
        print("El número mayor es: ", mayor)
        # Ordena los números de menor a mayor:
        numeros_ordenados = sorted([num1, num2, num3])
        print("Los números ordenados de menor a mayor son: ", numeros_ordenados)
        break  # Terminar el bucle
    except ValueError:   #Si se ingresa algo que no es un número entero:
        print("Debe ingresar números. Intente nuevamente: ")
        continue

print("__________________________________________________________________________________")

#Contar todas las palabras de una string muy larga:

mi_string = ("El absurdismo de Camus es una filosofía que reconoce la contradicción entre la búsqueda de sentido de los seres humanos "
             "y la indiferencia del universo. Camus no cree que haya un absurdo absoluto, sino que el absurdo surge de la comparación "
             "entre dos términos desproporcionados. Camus propone que el ser humano debe asumir su condición absurda y vivir de acuerdo "
             "a ella, sin evadir el problema ni buscar una solución ilusoria. xd")

print("La cantidad de palabras en el texto es de: ", len(mi_string))