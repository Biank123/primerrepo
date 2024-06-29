#programa de menú interactivo

Menú = ["Menú vegetariano", "Menú vegano", "Menú carnívoro", "Menú para niños", "Salir"]

while True:
    print("Seleccione un menú o 'salir': ")
    for n, opcion in enumerate(Menú, start=1):
        print(f"{n}. {opcion}")

    seleccion = input()
    if seleccion.lower() == 'salir':
        print("¡Hasta luego!")
        break
    try:
        seleccion = int(seleccion)
        if seleccion <= 4 and seleccion >= 1:
            print(f"Usted ha seleccionado la opción {seleccion}, el {Menú[seleccion - 1]}")
            break
        elif seleccion == 5:
            print("¡Hasta luego!")
            break
        else:
            print("Debe ingresar un número válido o 'Salir'.") 
    except ValueError:
        print("Debe ingresar un número válido o 'Salir'.")