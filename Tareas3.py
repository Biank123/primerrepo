#Reemplazar subcadenas. Dada la cadena "Hola mundo, hola universo", reemplaza todas las ocurrencias de "hola" por "Hola".

cadena = "Hola mundo, hola universo"
nuevo_texto = cadena.replace('hola', 'Hola')
print(nuevo_texto)

#Dividir cadenas. Dada la cadena "manzana,pera,plátano,uva", divídela en una lista de frutas.

Otra_cadena = "manzana,pera,plátano,uva"
cadena_separada = Otra_cadena.split(',')
cadena_espaciada = ' '.join(cadena_separada)
print(f"La lista es: {cadena_separada}")

#Eliminar espacios en blanco. Dada la cadena " Hola mundo ", elimina los espacios en blanco al inicio y al final.

cadena2 = " Hola mundo "
cadena2_limpia = cadena2.strip()
print(cadena2_limpia)

#Crear una función que tome una cadena de texto y realice lo siguiente: eliminar espacios en blanco al inicio y al final, 
#convertir la cadena en a minúsculas, reemplazar todas las ocurrencias de mundo por universo, dividir la cadena en palabras, 
#contar cuántas veces aparece la palabra universo en la lista resultante

cadenaTexto = (" En un mundo donde la tecnología domina cada aspecto de nuestra vida, es importante recordar que la verdadera esencia de la humanidad radica en la conexión con el mundo natural que nos rodea. Explorar el mundo a través de los ojos de un niño nos permite redescubrir la magia y la maravilla que a menudo pasamos por alto en nuestro día a día. Juntos, podemos crear un mundo mejor para las generaciones futuras, donde la igualdad, la compasión y el respeto por el mundo sean los pilares de nuestra sociedad. ")

cadena_sin_espacio = cadenaTexto.strip().lower() #elimina espacios y convierte a minúsculas
cadena_replace = cadenaTexto.replace('mundo', 'universo') #reemplaza mundo por universo
cadena_dividida = cadenaTexto.split()  #divide la cadena en cada palabra que contiene
cadena_universal = cadenaTexto.count('universo') #cuenta cuántas veces aparece la palabra universo en la cadena
print(cadena_sin_espacio)
print(cadena_replace) 
print(cadena_dividida)
print(cadena_universal)


#Normalización de texto. Crear una función que con un párrafo de texto haga: eliminar cualquier espacio adicional al inicio
#y al final, convertir todo el texto en minúsculas, reemplazar todos los signos de puntuación (.,;:?!) por espacios, dividir
#el texto en palabras, contar la frecuencia de cada palabra y devolver un diccionario con las palabras y sus frecuencias.
#tip: import string 

texto = ("La vida es un viaje lleno de sorpresas, desafíos y momentos inolvidables? Cada día nos ofrece la oportunidad de crecer... aprender y descubrir nuevas experiencias! A veces, el camino puede ser difícil... y lleno de obstáculos!!! Pero es importante recordar que cada desafío nos ayuda a fortalecernos??? y a alcanzar nuestras metas! No importa cuán difícil parezca el camino... Siempre hay una luz al final del túnel??? Aprovechemos cada momento. Vivamos con pasión y enfrentemos cada desafío con valentía y determinación! Así es como creamos recuerdos que perdurarán para siempre en nuestro corazón...")

import string #carga el módulo estándar llamado string. Este módulo proporciona varias constantes y funciones útiles para trabajar con cadenas de texto de manera eficiente

def contar_frecuencias(texto):
    # Eliminar signos de puntuación y convertir a minúsculas
    translator = str.maketrans('', '', string.punctuation) #Crea un traductor que elimina todos los caracteres de puntuación del texto.
    texto = texto.translate(translator).lower() #Aplica el traductor al texto para eliminar la puntuación y convertir todas las letras a minúsculas.
    
    # Dividir el texto en palabras
    palabras = texto.split()
    # Contar frecuencias de palabras usando un diccionario
    frecuencias = {} #se crea el diccionario vacío
    for palabra in palabras:
        if palabra in frecuencias: #si la palabra está en el diccionario, se le suma 1
            frecuencias[palabra] += 1
        else:
            frecuencias[palabra] = 1 #si la palabra no está en el diccionario, solo queda en 1
    
    return frecuencias
resultado = contar_frecuencias(texto)
print(resultado)


#Crear una función que tome una lista de correos electrónicos y haga: eliminar cualquier espacio en blanco al inicio y al final
#de cada correo , convertir todos los correos en minúsculas, verificar si cada correo tiene un formato válido (contiene @ y .) y
#devolver la lista de correos válidos




