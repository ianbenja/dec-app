from flask import Flask, jsonify
from general import normalizacion as Normalizar
import json
import numpy as np

def calcularDistancia(tabla, vectorIoAI, p):
    # Calcular la diferencia absoluta entre los elementos de cada fila de la tabla y los elementos correspondientes del vector
    dif_absoluta = np.abs(tabla - vectorIoAI)

    # Elevar la diferencia absoluta a la potencia 'p'
    tablaS = dif_absoluta ** p

    # Sumar los resultados de cada fila
    suma_fila = np.sum(tablaS, axis=1)

    tablaS = np.column_stack([tablaS, suma_fila])

    # Calcular la raíz 'p' de la suma
    resultadoS = np.power(suma_fila, 1 / p)
    return tablaS, resultadoS

topsis = Flask(__name__)

@topsis.route('/api/calculoTOPSIS', methods=['GET'])
def calcular():
     # Aquí va tu lógica de cálculo en Python
     # Puedes recibir datos desde la solicitud POST y devolver resultados en JSON

     with open('datosPrueba.json', 'r') as f:
        datos = json.load(f)

        tabla = datos['valores']
        tablaValores = tabla.copy()
        normalizacionAUsar = datos['normalizacion']

        if normalizacionAUsar == 'EULER':
            tablaNorm = Normalizar.euler(tablaValores)
        elif normalizacionAUsar == 'SUMA':
            tablaNorm = Normalizar.suma(tablaValores)
        elif normalizacionAUsar == 'MAX':
            criterios = np.array(datos['tipos_criterios'])
            tablaNorm = Normalizar.max(tablaValores, criterios)

        # normalizo los pesos
        pesos = np.array(datos['pesos'])
        if np.sum(pesos) == 1:
            pesosNorm = pesos
        else:
            pesosNorm = Normalizar.normalizarPesos(pesos)

        # ponderizo cada celda de la tabla con los pesos del .JSON       
        tablaNormyPond =  np.array(tablaNorm) * pesosNorm
        
        #busco la solucion Ideal y la Anti-Ideal de cada columna
        # (depende del criterio "MAX o MIN")
        criterios = datos['tipos_criterios']
        
        #inicio los vectores de refrencia de S- y S+ con el largo de la cantidad de columnas de la tabla
        referenciaSoluIdeal = np.zeros(tablaNormyPond.shape[1]) 
        referenciaSoluAntiIdeal = np.zeros(tablaNormyPond.shape[1])  


        # Iteramos sobre las columnas de la tabla
        for col_id, columna in enumerate(tablaNormyPond.T):  # Transponemos la tabla para iterar sobre las columnas
            
            # Verificamos si el criterio de la columna es "MAX" o "MIN"
            if criterios[col_id] == 'MAX':
                # Obtenemos la solucion ideal y anti ideal
                sIdeal = np.max(columna)
                sAntiIdeal = np.min(columna)

                # agregamos las solucion ideal y anti-ideal a los arreglos que correspondan
                referenciaSoluIdeal[col_id] = sIdeal
                referenciaSoluAntiIdeal[col_id] =  sAntiIdeal

            elif criterios[col_id] == 'MIN':
                # Obtenemos la solucion ideal y anti ideal
                sIdeal = np.min(columna)
                sAntiIdeal = np.max(columna)

                # agregamos las solucion ideal y anti-ideal a los arreglos que correspondan
                referenciaSoluIdeal[col_id] = sIdeal
                referenciaSoluAntiIdeal[col_id] =  sAntiIdeal



        valoresSolucionI, resultadoSolucionI = calcularDistancia(tablaNormyPond, referenciaSoluIdeal, datos['p'])
        valoresSolucionAI, resultadoSolucionAI = calcularDistancia(tablaNormyPond, referenciaSoluAntiIdeal, datos['p'])

        solucionGeneralC = resultadoSolucionAI / (resultadoSolucionI + resultadoSolucionAI)

        # para mostrarlo con .JSON, necesito convertirlo en lista de listas primero

        #formo la tabla Normalizada
        tablaNormalizada = np.vstack([np.array(tablaNorm), pesosNorm])
        
        #formo la tabla Normalizada y Ponderada
        tablaNormalizadayPonderada = np.vstack([tablaNormyPond, referenciaSoluIdeal, referenciaSoluAntiIdeal])

        #formo las tablas de solucion Ideal (S+) y Anti-Ideal (S-)
        tablaSolucionIdeal = np.column_stack([valoresSolucionI,resultadoSolucionI])
        tablaSolucionAntiIdeal = np.column_stack([valoresSolucionAI,resultadoSolucionAI])
        
        #ordeno la solucion con las alternativas
        valoresOrdenados = np.argsort(-solucionGeneralC)
        colSolOrd = solucionGeneralC[valoresOrdenados]
        alrternativas = np.array(datos['alternativas'])
        alrternativasOrd = alrternativas[valoresOrdenados]
        solucionOrdenada = np.column_stack([alrternativasOrd, colSolOrd])
        

        # Agregar el par clave-valor al archivo JSON
        datos['valores_normalizados'] = tablaNormalizada.tolist()      

        datos['valores_normalizados_ponderados'] = tablaNormalizadayPonderada.tolist()
        
        datos['valores_solucion_ideal'] = tablaSolucionIdeal.tolist()
        datos['valores_solucion_anti_ideal'] = tablaSolucionAntiIdeal.tolist()
        
        datos['valores_solucion_indice'] = solucionOrdenada.tolist()

        # Guardar la lista de datos actualizada en el archivo JSON
        with open('datosPrueba.json', 'w') as f:
           json.dump(datos, f) 

     return jsonify(datos)
   

if __name__ == '__main__':
    topsis.run(debug=True)
