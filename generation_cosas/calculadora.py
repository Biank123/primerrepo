#Hacer una calculadora
import math
def calculadora():
    operaciones = ['Suma', 'Resta', 'Multiplicación', 'División', 'Potencia', 'División redondeada', 'Módulo','Raíz cuadrada', 'Seno', 'Coseno']

    while True:
        # Solicitar el primer número
        num1 = input("Introduzca el primer número: ")
        if not num1.replace('.', '', 1).isdigit(): 
            # Si no pasa que al eliminar el primer punto y reemplazarlo con nada una vez, me da un dígito (o sea, hay letras, otros puntos, etc)
            print("Debe introducir un número válido.")
            continue
        num1 = float(num1)

      # Solicitar el segundo número
        num2 = input("Introduzca el segundo número: ")
        if not num2.replace('.', '', 1).isdigit():
            print("Debe introducir un número válido.")
            continue
        num2 = float(num2)
    
   # Mostrar opciones de operación
        print("Seleccione una operación: ")
        for indice, opcion in enumerate(operaciones, start=1):
            print(f"{indice}. {opcion}")
            
      # Solicitar la operación
        operacion = input("Ingrese el número de la operación que desea realizar: ")
        if not operacion.isdigit() or int(operacion) < 1 or int(operacion) > len(operaciones):
            print("Debe introducir un número dentro del rango de opciones: ")
            continue

      # Realizar la operación
        operacion = int(operacion)
        if operaciones[operacion - 1] == 'Suma':
            resultado = num1 + num2
            print(f"La suma de {num1} y {num2} es igual a {resultado}")
        elif operaciones[operacion - 1] == 'Resta':
            resultado = num1 - num2
            print(f"La resta de {num1} y {num2} es igual a {resultado}")
        elif operaciones[operacion - 1] == 'Multiplicación':
            resultado = num1 * num2
            print(f"La multiplicación de {num1} y {num2} es igual a {resultado}")
        elif operaciones[operacion - 1] == 'División':
            if num2 == 0:
                print("No se puede dividir entre cero.")
            else:
                resultado = num1 / num2
                print(f"La división de {num1} y {num2} es igual a {resultado}")
        elif operaciones[operacion - 1] == 'Potencia':
            resultado = num1 ** num2
            print(f"La potencia de {num1} elevado a {num2} es igual a {resultado}")
        elif operaciones[operacion - 1] == 'División redondeada':  #Al ser división debe excluirse el 0
            if num2 == 0:
                print("No se puede dividir entre 0.")
            else:
                resultado = num1 // num2
                print(f"La división redondeada de {num1} y {num2} es igual a {resultado}")
        elif operaciones[operacion - 1] == 'Módulo': #Al ser división debe excluirse el 0
            if num2 == 0:
                print("No se puede dividir entre 0.")
            else:
                resultado = num1 % num2
                print(f"El resto de {num1} dividido en {num2} es igual a {resultado}")
        elif operaciones[operacion - 1] == 'Raíz cuadrada':
            resultado_num1 = math.sqrt(num1)
            resultado_num2 = math.sqrt(num2)
            print(f"La raíz cuadrada de {num1} es: {resultado_num1}")
            print(f"La raíz cuadrada de {num2} es: {resultado_num2}")
        elif operaciones[operacion - 1] == 'Seno': 
            unidad = input("Introduzca si unidad está en 'gr' como grados' o en 'rad' como radianes': ")
            if unidad.lower() == 'gr':
                resultado_num1 = math.sin(math.radians(num1))
                resultado_num2 = math.sin(math.radians(num2))
                print(f"El seno de {num1} es igual a {resultado_num1}")
                print(f"El seno de {num2} es igual a {resultado_num2}")
            elif unidad.lower() == 'rad':
                resultado_num1 = math.sin(num1)
                resultado_num2 = math.sin(num2)
                print(f"El seno de {num1} es igual a {resultado_num1}")
                print(f"El seno de {num2} es igual a {resultado_num2}")
            else:
                print("Unidad no reconocida. Debe ingresar 'gr' para grados o 'rad' para radianes: ")
                continue
        elif operaciones[operacion - 1] == 'Coseno': 
            unidad = input("Introduzca si unidad está en 'gr' como grados' o en 'rad' como radianes': ")
            if unidad.lower() == 'gr':
                resultado_num1 = math.cos(math.radians(num1))
                resultado_num2 = math.cos(math.radians(num2))
                print(f"El coseno de {num1} es igual a {resultado_num1}")
                print(f"El coseno de {num2} es igual a {resultado_num2}")
            elif unidad.lower() == 'rad':
                resultado_num1 = math.cos(num1)
                resultado_num2 = math.cos(num2)
                print(f"El coseno de {num1} es igual a {resultado_num1}")
                print(f"El coseno de {num2} es igual a {resultado_num2}")
            else:
                print("Unidad no reconocida. Debe ingresar 'gr' para grados o 'rad' para radianes: ")
   # Opción para salir
        while True:
            salir = input("¿Desea realizar otra operación? ('si' para continuar, 'no' para salir): ").lower()
            if salir == 'no':
                return  # Termina la calculadora si el usuario decide salir
            elif salir == 'si':
                break  # Se sale de este while y vuelve al bucle principal para solicitar el primer número nuevamente
            else:
                print("Debe introducir solo 'si' o 'no': ")
#Invocación de la función
calculadora()