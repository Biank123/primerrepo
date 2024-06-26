#Crear un menú interactivo

menus = {
    "Menú vegetariano": ["Falafel", "Hamburguesa de porotos negros con papas fritas", "Burrito con vegetales y huevo duro"],
    "Menú vegano": ["Lentejas", "Burrito de porotos negros con vegetales", "Hamburguesa de garbanzos con papas fritas"],
    "Menú carnívoro": ["Hamburguesa con papas fritas", "Pollo con papas fritas", "Burrito de carne mechada", "Cazuela de vacuno"],
    "Menú para niños": ["Papas fritas", "Pollo con papas fritas", "Salchichas", "Bebida con juguete de regalo"]
}
while True:
    print("Seleccione una opción: ")
    for n, opcion in enumerate(menus, start=1):
        print(f"{n}. {opcion}")
    seleccion_menu = input("Ingrese el número de opción o 'Salir' para salir: ")
    if seleccion_menu.lower() == 'salir':
        print("¡Hasta luego!")
        break
    try:
        seleccion_menu = int(seleccion_menu)
        menu_seleccionado = list(menus.keys())[seleccion_menu - 1]
        print(f"Usted ha seleccionado: {menu_seleccionado}")
        print("Contenido del menú:")
        for n2, plato in enumerate(menus[menu_seleccionado], start=1):
            print(f"{n2}. {plato}")
        seleccion_plato = input("Ingrese el número de plato que desea o 'Volver' para seleccionar otro menú: ")
        if seleccion_plato.lower() == 'volver':
            continue
        seleccion_plato = int(seleccion_plato)
        plato_seleccionado = menus[menu_seleccionado][seleccion_plato - 1]
        print(f"Usted ha seleccionado el plato: {plato_seleccionado}")
        print("¡Enseguida irá a su mesa!")
        break
    except (ValueError, IndexError):
        print("Opción no válida. Por favor, ingrese un número válido.")
print("---------------------------------------------------------------------------------------------------")

    