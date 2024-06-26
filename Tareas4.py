# 1.Escribir una función que reciba una lista de números enteros y devuelva la suma de todos los números pares en la lista
def suma_pares(lista):
    suma = 0
    for n in lista:
        if n % 2 == 0: #el número es par
            suma += n
    return suma
def lista_de_enteros():
    while True:      
        entrada = input("Escriba su lista de números enteros separados por espacios (o 'no' para salir): ")
        if entrada.lower() == 'no': #el usuario ingresa 'no' y no muestra nada
            return None
        try:
            if ' ' not in entrada:  #no hay espacios en la entrada, hay un solo número
                raise ValueError("Debe ingresar al menos dos números separados por espacios") #un error específico que va a except
            lista = [int(x) for x in entrada.split()]  #convierte a entero y separa los números ingresados
            return lista
        except ValueError as e:  #te dice el error específico
            print(f"Error: {e}. Intente de nuevo.")
while True: 
    lista = lista_de_enteros()
    if lista is None:
        print("Programa terminado.") #si da none, se acaba el programa
        break
    resultado = suma_pares(lista)
    print(f"La suma de los números pares ingresados es: {resultado}")

# 2.Escribe una función que determine si dos cadenas son anagramas (contienen los mismos caracteres en diferente orden)

def son_anagramas(listita, listota):
    if len(listita) != len(listota):
        return False
    listita_ordenada = [sorted(palabra.lower()) for palabra in listita]
    listota_ordenada = [sorted(palabra.lower()) for palabra in listota]

    return sorted(listita_ordenada) == sorted(listota_ordenada)

listita = ["Hinca", "Florencia", "Camion"]
listota = ["Necrofila", "China", "Monica"]

if son_anagramas(listita, listota):
    print("Las listas contienen anagramas.")
else:
    print("Las listas no contienen anagramas.")

# 3.Escribe una función que determine si una cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda)

cadena_de_texto = ("Amad a la Dama")
cadena_de_texto = cadena_de_texto.lower().replace(" ", "") #pasa la cadena de texto a minúsculas y les quita el espacio

def es_palindromo(cadena_de_texto):
    reverso = ''.join(reversed(cadena_de_texto)) #al invertir la cadena la une sin espacios
    if reverso == cadena_de_texto: #compara si el reverso es igual a la cadena original en minúsculas sin espacios
        return True
    else:
        return False
    
resultado = es_palindromo(cadena_de_texto) #el resultado se definirá por la función anterior aplicada a la cadena
print(f"{cadena_de_texto} ¿Es un palíndromo?: {resultado}")


