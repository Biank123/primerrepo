#Un programa que calcule el n-ésimo número de fibonacci, por recursión

def fibonacci(n):
        if n <= 0:
            return 0
        elif n == 1:
            return 1
        else:
            return fibonacci(n - 1) + fibonacci(n - 2)
            
while True:
    entrada = input("Ingrese el número para calcular (o 'No' para salir): ").lower()
    if entrada == 'no':
        break
    try:
        n = int(entrada)
        if n < 0:
            print("Debe ingresar un número entero no negativo.")
        elif n >= 30:
           print("Error. El número debe ser menor a 30 para ser calculado eficientemente con método recursivo.")
        else:
            resultado = fibonacci(n)
            print(f"El resultado es: {resultado}.")
    except ValueError:
        print("Error. Debe ingresar un número o 'No'.")

