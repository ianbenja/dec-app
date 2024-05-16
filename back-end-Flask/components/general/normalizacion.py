import numpy as np

#normalizacion de los PESOS
def normalizarPesos(vector):
    suma_total = np.sum(vector)

    # Crear el vector normalizado en memoria
    vector_normalizada = vector / suma_total
    return vector_normalizada

#normalizacion por EULER
def euler(tabla):
    # Calcular la raiz cuadrada de la suma de los cuadrados de cada columna
    raiz_suma_cuadrados_columnas = [np.sqrt(np.sum(np.square(columna))) for columna in np.array(tabla).T]

    # Crear la tabla nueva en memoria
    tabla_normalizada = [[celda / raiz_suma_cuadrados_columnas[j] for j, celda in enumerate(fila)] for fila in tabla]
    return tabla_normalizada

#normalizacion por SUMA
def suma(tabla):
    # Calcular la raiz cuadrada de la suma de los cuadrados de cada columna
    suma_columnas = [np.sum(columna) for columna in np.array(tabla).T]

    # Crear la tabla nueva en memoria
    tabla_normalizada = [[celda / suma_columnas[j] for j, celda in enumerate(fila)] for fila in tabla]
    return tabla_normalizada

#normalizacion por MAX
def max(tabla, criterios):    
    
    tabla_valores = np.array(tabla)
    max_valor = np.zeros(tabla_valores.shape[1]) 

    for col_id, columna in enumerate(tabla_valores.T):  # Transponemos la tabla para iterar sobre las columnas
            
            # Verificamos si el criterio de la columna es "MAX" o "MIN"
            if criterios[col_id] == 'MAX':
                # Obtenemos el maximo valor para criterio "MAX"
                valor = np.max(columna)

                # agregamos el maximo valor dentro del arrray
                max_valor[col_id] = valor

            elif criterios[col_id] == 'MIN':
                # Obtenemos el maximo valor para criterio "MAX"
                valor = np.max(columna)

                # agregamos el maximo valor dentro del arrray
                max_valor[col_id] = valor


    # Calcular la matriz resultante dividiendo cada valor de la tabla por el valor correspondiente en max_valor
    tabla_normalizada = tabla_valores / max_valor
    return tabla_normalizada