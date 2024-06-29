
#Mezclar las funciones y que determinen si son anagramas y/o palíndromos
#que el usuario ingrese una palabra o frase y que el programa determine si son anagramas o palíndromos o ambas

def es_palindromo(cadena_de_texto):
    reverso = ''.join(reversed(cadena_de_texto)) 
    if reverso == cadena_de_texto: 
        return True
    else:
        return False
    
def es_anagrama(cadena_de_texto):
    palabras = cadena_de_texto.split()
    if len(palabras) < 2:
        return False
    palabras_ordenadas = [''.join(sorted(palabra.lower())) for palabra in palabras]
    return len(set(palabras_ordenadas)) == 1

while True:
    entrada = input("Ingrese una palabra o frase: ").strip() #eliminar los espacios en blanco iniciales y finales de una cadena de texto
    
    # si la entrada no está vacía
    if entrada:
        palindromo = es_palindromo(entrada)
        anagrama = es_anagrama(entrada)

        # resultados
        if palindromo and anagrama:
            print("La entrada es un palíndromo y contiene anagramas.")
        elif palindromo:
            print("La entrada es un palíndromo.")
        elif anagrama:
            print("La entrada contiene anagramas.")
        else:
            print("La entrada no es ni un palíndromo ni contiene anagramas.")
        break
    else:
        print("Debe ingresar una palabra o frase válida. Inténtelo de nuevo.") #la entrada está vacía