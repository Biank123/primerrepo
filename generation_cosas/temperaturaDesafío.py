#Diseñar un código que tome temperaturas en c o f y las transforme de c a f
while True:
    temperatura = input("¿Cuál es la temperatura de hoy?: ")
    try:
        temperatura = float(temperatura)
        if temperatura > 100:
            print("Parece que hay un error en tu termómetro. ¡Ese es un número muy alto! Estarías muerto. Por favor, verifique...")
            continue
        elif temperatura < -100:
            print("Parece que hay un error en tu termómetro. ¡Ese es un número muy bajo! Estarías muerto. Por favor, verifique...")
            continue
    except ValueError:
        print("Inválido. Debe ingresar un número.")
        continue
    grados = input("Indique F para grados Fahrenheit y C para grados Celsius: ")
    while not (grados.lower() == 'c' or grados.lower() == 'f'):
        grados = input("Introduzca solamente 'C' o 'F': ")
    if grados.lower() == 'f':
        Convertir_temperatura_C = (temperatura - 32) * (5 / 9)
        print(f"Eso es igual a {round(Convertir_temperatura_C)} °C.")
        if temperatura <= 31:
            print("¡Está congelado, abrígate mucho y cuidado con la nieve!")
        elif 32 <= temperatura < 70:
            print("¡Hace frío hoy! ¿Llevas un paraguas o un abrigo?")
        elif 70 <= temperatura < 90:
            print("¡Es un lindo día para salir a pasear!")
        elif temperatura >= 90:
            print("¡Caen las palomas asadas del cielo! ¡Cuidado con derretirte!")
        break
    elif grados.lower() == 'c':
        Convertir_temperatura_F = (temperatura * 9 / 5) + 32
        print(f"Eso es igual a {round(Convertir_temperatura_F)} °F.")
        if temperatura < 0:
            print("¡Cuidado con congelarte ahí afuera!")
        elif 0 <= temperatura < 21:
            print("¡Es un día helado! ¿Llevas un paraguas o un abrigo?")
        elif 21 <= temperatura < 30:
            print("¡Es un lindo día para salir a pasear!")
        elif temperatura >= 30:
            print("¡Caen las palomas asadas del cielo! ¡Cuidado con derretirte!")
        break