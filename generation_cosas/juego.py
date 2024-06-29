#Crear un código que juegue piedra, papel o tijera con el usuario:

import random
def obtener_elección_usuario():
    elección = input("Ingrese 'piedra', 'papel' o 'tijera': ").lower()
    while elección not in ['piedra', 'papel', 'tijera']:
        print("Opción no válida, por favor, intente de nuevo.")
        elección = input("Ingrese 'piedra', 'papel' o 'tijera': ").lower()
    return elección
def obtener_elección_pc():
    opciones = ['piedra', 'papel', 'tijera']
    return random.choice(opciones).lower()
def determinar_ganador(elección_usuario, elección_pc):
    if elección_usuario == elección_pc:
        return "Empate"
    elif (elección_usuario == 'piedra' and elección_pc == 'tijera') or \
         (elección_usuario == 'papel' and elección_pc == 'piedra') or \
         (elección_usuario == 'tijera' and elección_pc == 'papel'):
        return "¡Ganaste!"
    else:
        return "Perdiste."
def juego():
    print("¡Juguemos piedra, papel o tijera!")
    while True:
        elección_usuario = obtener_elección_usuario()
        elección_pc = obtener_elección_pc()
        print(f"Tú elegiste {elección_usuario}")
        print(f"La computadora eligió {elección_pc}")
        resultado = determinar_ganador(elección_usuario, elección_pc)
        print(f"Resultado: {resultado}")
        
        jugar_otra_vez = input("¿Quieres jugar otra vez? (sí/no): ").lower()
        while jugar_otra_vez not in ['sí', 'si', 'no']:
            jugar_otra_vez = input("Respuesta no válida. ¿Quieres jugar otra vez? (sí/no): ").lower()
        if jugar_otra_vez == 'no':
            print("¡Gracias por jugar! Hasta la próxima.")
            break
if __name__ == "__main__":
    juego()