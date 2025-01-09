def getMinFlips(pwd):
    # Paso 1: Dividir la cadena en subcadenas de caracteres consecutivos iguales
    substrings = []
    current_substring = pwd[0]

    for i in range(1, len(pwd)):
        if pwd[i] == pwd[i-1]:
            current_substring += pwd[i]
            print(current_substring)
        else:
            substrings.append(current_substring)
            current_substring = pwd[i]
            print(current_substring)
        print(" ")
        print(substrings)
    
    print(" ")
    # Añadir la última subcadena
    substrings.append(current_substring)
    print(substrings)
    # Paso 2: Determinar las longitudes uniformes de las subcadenas
    # Este es un paso importante, ya que necesitamos asegurarnos de que todas las subcadenas tengan la misma longitud
    # En este ejemplo, tratamos con subcadenas que contienen solo '1's o solo '0's.

    # Paso 3: Calcular cuántos cambios son necesarios
    changes_needed = 0
    for i in range(1, len(substrings)):
        # Si la subcadena anterior y la siguiente son diferentes (de 0 a 1 o de 1 a 0)
        if substrings[i][0] != substrings[i-1][0]:
            changes_needed += 1

    return changes_needed


# Ejemplo de uso
pwd = "1110011000"
print(getMinFlips(pwd))
