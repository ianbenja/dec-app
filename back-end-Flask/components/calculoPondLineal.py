from flask import Flask, jsonify
from general import normalizacion as Normalizar
import json
import numpy as np


pondLineal = Flask(__name__)

@pondLineal.route('/api/calculoPOND-LINEAL', methods=['GET'])
def calcular():
     # Aquí va tu lógica de cálculo en Python
     # Puedes recibir datos desde la solicitud POST y devolver resultados en JSON

     with open('datosPrueba.json', 'r') as f:
        datos = json.load(f)

        tablaValores = np.array(datos['valores'])
        crietriosCol = np.array(datos['tipos_criterios'])

        # copio los valores originales a la tabla que voy aplicar el criterio general
        tablaValoresCCA = tablaValores.copy()
        tablaValoresCCA = tablaValoresCCA.astype(float)

        #usamos el criterio pasado por el archivo .JSON
        criterio = datos['criterio_general']
        criteriosColMod = crietriosCol.copy()

        # Iteramos sobre las columnas de la tabla
        for col_id, columna in enumerate(tablaValoresCCA.T):  # Transponemos la tabla para iterar sobre las columnas
            # Verificamos si el criterio de la columna es "MIN"
            if criteriosColMod[col_id] != criterio:
                #cambiamos el criterio de la columna
                criteriosColMod[col_id] = criterio

                # Iteramos sobre las filas de la columna
                for fila_id, valor in enumerate(columna):
                    # Calculamos el valor recíproco de la celda
                    tablaValoresCCA[fila_id, col_id] = 1 / valor
        

        # normalicacion de tabla
        normalizacionAUsar = datos['normalizacion']

        if normalizacionAUsar == 'EULER':
            tablaNorm = Normalizar.euler(tablaValores)
        elif normalizacionAUsar == 'SUMA':
            tablaNorm = Normalizar.suma(tablaValores)
        elif normalizacionAUsar == 'MAX':
            criterios = np.array(datos['tipos_criterios'])
            tablaNorm = Normalizar.max(tablaValores, criterios)   

        # normalizo los pesos, si hace falta
        pesos = np.array(datos['pesos'])
        if np.sum(pesos) == 1:
            pesosNorm = pesos
        else:
            pesosNorm = Normalizar.normalizarPesos(pesos)
        
        # ponderizo cada celda de la tabla con los pesos      
        tablaNormyPond =  np.array(tablaNorm) * pesosNorm     

        # hago la suma de cada fila ya normalizada y ponderizada
        vectorSolucion = np.sum(tablaNormyPond, axis=1)

        #formo la tabla Normalizada
        tablaNormalizada = np.vstack([np.array(tablaNorm), pesosNorm])

        #formo la tabla Normalizada y Ponderada
        tablaNormalizadayPonderada = np.column_stack([tablaNormyPond, vectorSolucion])

        #ordeno la solucion con las alternativas
        if criterio == "MAX":
            valoresOrdenados = np.argsort(-vectorSolucion)
        elif criterio == "MIN":
            valoresOrdenados = np.argsort(vectorSolucion)

        colSolOrd = vectorSolucion[valoresOrdenados]
        alrternativas = np.array(datos['alternativas'])
        alrternativasOrd = alrternativas[valoresOrdenados]
        solucionOrdenada = np.column_stack([alrternativasOrd, colSolOrd])

        #para mostrarlo con .JSON, necesito convertirlo en lista de listas primero
        
        # Agregar el par clave-valor al archivo JSON
        datos['tipos_criterios_cambiado_por_general'] = criteriosColMod.tolist()
        datos['valores_reciprocos'] = tablaValoresCCA.tolist()
        datos['valores_normalizados'] = tablaNormalizada.tolist()
        datos['valores_normalizados_ponderados'] = tablaNormalizadayPonderada.tolist()
        datos['valores_solucion'] = solucionOrdenada.tolist()

        # Guardar la lista de datos actualizada en el archivo JSON
        with open('datosPrueba.json', 'w') as f:
           json.dump(datos, f) 

     return jsonify(datos)
   

if __name__ == '__main__':
    pondLineal.run(debug=True)
