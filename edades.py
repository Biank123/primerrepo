try:
    edad = int(input("Ingrese su edad: ")) #int convierte el número ingresado con input en un entero
    if edad < 18:
        print("Usted es menor de edad.")
    else:
        print("Usted es mayor de edad.")
except ValueError:                         #en caso de que se ponga algo que no es un número, o sea, error de valor ingresado
    print("Debe ingresar su edad en números enteros.")

print("_________________________________________________________________________")

lista = [3,4,5,6,23,6,786,3,2,11,5,9]
lista_ordenada = sorted(lista) #sorted ordena los números de una lista
print(lista_ordenada)

lista2 = ["f", "a", "g", "b", "h", "c", "p"]
lista2_ordenada = sorted(lista2)    #sorted también sirve para caracteres que no son números
print(lista2_ordenada)