#función que sume dos números introducidos
def variable (a,b): 
    resultado = a + b
    return resultado

print(f"la suma de los números es: ", sum((int(input("introduce un número: ")), int((input("introduce otro número: "))))))

print("__________________________________________________________________________________________________")

#función para saludar

def saludo(x):
    print(f"Hola {x}, mucho gusto")
    return saludo
saludo("Bianca")
saludo("Francisco")

print("__________________________________________________________________________________________________")

#función para determinar si los números son o no primos, si true es primo

def num_primo(n):
    for y in range (2, n):
        if (n % y) == 0:
            return False
    if n < 2:
        return False
    else:
        return True
print(num_primo(int(input("Introduce un número: "))))

print("__________________________________________________________________________________________________")