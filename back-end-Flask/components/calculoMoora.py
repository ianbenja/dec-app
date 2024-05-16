from flask import Flask, jsonify
from general import normalizacion as Normalizar
import json
import numpy as np

moora = Flask(__name__)

@moora.route('/api/calculoMOORA', methods=['GET'])
def calcular():
    with open('datosPrueba.json', 'r') as f:
        datos = json.load(f)
    
        tabla = datos['valores']
        tablaValores = tabla.copy()
        
        #normalizo la tabla
        tablaNorm = Normalizar.euler(tablaValores)

        # normalizo los pesos
        pesos = np.array(datos['pesos'])
        if np.sum(pesos) == 1:
            pesosNorm = pesos
        else:
            pesosNorm = Normalizar.normalizarPesos(pesos)
        
        # hago la suma ponderizada de cada fila de la tabla con los pesos del .JSON       
        tablaNormyPond =  tablaNorm * pesosNorm
        

        
        # Inicializamos el vector para almacenar las sumas totales de cada fila
        vectorSolucion = np.zeros(tablaNormyPond.shape[0])

        # Iteramos sobre las filas de la tabla
        for i, fila in enumerate(tablaNormyPond):
            # Inicializamos la suma parcial para esta fila
            suma_fila = 0
            
            # Iteramos sobre los valores de la fila y los criterios de las columnas
            for valor, criterio in zip(fila, np.array(datos['tipos_criterios'])):
                if criterio == 'MAX':
                    # Si el criterio es MAX, sumamos el valor al total
                    suma_fila += valor
                elif criterio == 'MIN':
                    # Si el criterio es MIN, restamos el valor del total
                    suma_fila -= valor
            
            # Guardamos la suma total de esta fila en el vector
            vectorSolucion[i] = suma_fila

            #formo la tabla Normalizada
            tablaNormalizada = np.vstack([np.array(tablaNorm), pesosNorm])

            #formo la tabla Normalizada y Ponderada
            tablaNormalizadayPonderada = np.column_stack([tablaNormyPond, vectorSolucion])

            #ordeno la solucion con las alternativas
            valoresOrdenados = np.argsort(-vectorSolucion)
            colSolOrd = vectorSolucion[valoresOrdenados]
            alrternativas = np.array(datos['alternativas'])
            alrternativasOrd = alrternativas[valoresOrdenados]
            solucionOrdenada = np.column_stack([alrternativasOrd, colSolOrd])
            

            # Agregar el par clave-valor al archivo JSON
            datos['valores_normalizados'] = tablaNormalizada.tolist()
            datos['valores_normalizados_ponderados'] = tablaNormalizadayPonderada.tolist()
            datos['valores_solucion'] = solucionOrdenada.tolist()

            # Guardar la lista de datos actualizada en el archivo JSON
            with open('datosPrueba.json', 'w') as f:
                json.dump(datos, f) 
    
    return jsonify(datos)
    # Aquí va tu lógica de cálculo en Python
    # Puedes recibir datos desde la solicitud POST y devolver resultados en JSON
    # resultado = 42
    # return jsonify({'resultado': resultado})

if __name__ == '__main__':
    moora.run(debug=True)
