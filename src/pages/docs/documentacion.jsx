
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Image} from "@nextui-org/react";

import img01 from "../../assets/images/pageDoc/img-ejemplo-01.png";
import img02 from "../../assets/images/pageDoc/img-ejemplo-02.png";
import img03 from "../../assets/images/pageDoc/img-ejemplo-03.png";
import img04 from "../../assets/images/pageDoc/img-ejemplo-04.png";
import img05 from "../../assets/images/pageDoc/img-ejemplo-05.png";
import img06 from "../../assets/images/pageDoc/img-ejemplo-06.png";
import img07 from "../../assets/images/pageDoc/img-ejemplo-07.png";
import img08 from "../../assets/images/pageDoc/img-ejemplo-08.png";
import img09 from "../../assets/images/pageDoc/img-ejemplo-09.png";


const columnas = [
  {
    key: "name",
    label: "Alter. / Opc.",
  },
  {
    key: "ram",
    label: "RAM",
  },
  {
    key: "procesador",
    label: "Procesador",
  },
  {
    key: "camara",
    label: "Cámara",
  },
  {
    key: "bateria",
    label: "Batería",
  },
  {
    key: "precio",
    label: "Precio",
  },
  {
    key: "marca",
    label: "Marca",
  },
  {
    key: "almacenamiento",
    label: "Almacenamiento",
  },
  {
    key: "pantalla",
    label: "Pantalla",
  },
  {
    key: "so",
    label: "S.O.",
  },
  {
    key: "conectividad",
    label: "Conectividad",
  },
]

const alternativas = [
  {
    key: "1",
    name: "Celular A",
    ram: "8",
    procesador: "2.5",
    camara: "48",
    bateria: "4000",
    precio: "600",
    marca: "8",
    almacenamiento: "128",
    pantalla: "6.5",
    so: "9",
    conectividad: "5",              
  },
  {
    key: "2",
    name: "Celular B",
    ram: "6",
    procesador: "2.8",
    camara: "64",
    bateria: "4500",
    precio: "700",
    marca: "9",
    almacenamiento: "256",
    pantalla: "6.7",
    so: "8",
    conectividad: "6",              
  },
  {
    key: "3",
    name: "Celular C",
    ram: "12",
    procesador: "3.0",
    camara: "108",
    bateria: "5000",
    precio: "800",
    marca: "7",
    almacenamiento: "512",
    pantalla: "6.8",
    so: "10",
    conectividad: "7",              
  },
]

const pesos = [
  {
    key: "1",
    name: "Pesos",
    ram: "0.15",
    procesador: "0.15",
    camara: "0.10",
    bateria: "0.10",
    precio: "0.20",
    marca: "0.05",
    almacenamiento: "0.10",
    pantalla: "0.05",
    so: "0.05",
    conectividad: "0.05",              
  },
]


const Docs = () => {
  return (
    <>
      <div className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
        DOCUMENTACION
      </div>
      
      <div className="w-full flex flex-col gap-5">
        <div> </div><h1 className=" mt-8 text-2xl text-pink-600">Introducción</h1>
        <p>
          Esta plataforma está dedicada a la resolución de ejercicios utilizando los métodos MOORA, TOPSIS y Ponderación Lineal. Esta herramienta ha sido desarrollada como parte de nuestro proyecto para la asignatura "Decisiones en Escenarios Complejos", donde exploramos técnicas avanzadas de toma de decisiones multicriterio.
        </p>
        <p>
          En un mundo cada vez más interconectado y dinámico, la capacidad de tomar decisiones informadas y óptimas en escenarios complejos es crucial. Nuestra plataforma está diseñada para facilitar el aprendizaje y la aplicación de estos métodos, proporcionando un entorno intuitivo y accesible para resolver problemas que involucran múltiples criterios de evaluación.
        </p>

        <h1 className=" mt-8 text-2xl text-pink-600">Cómo Usar la Página</h1>
        <p>Nuestra plataforma está diseñada para ser intuitiva y fácil de navegar. A continuación, te explicamos cómo utilizar cada sección para resolver ejercicios de Ponderación Lineal, MOORA y TOPSIS.</p>
        <ul>
          <li>
            <strong className="text-indigo-500">Home:</strong> Esta opción te llevará a la página principal, donde encontrarás una introducción a la plataforma y una visión general de las funcionalidades disponibles.
          </li>

          <br />

          <li>
           <strong className="text-indigo-500">Ponderación Lineal:</strong> En esta sección, puedes resolver ejercicios utilizando el método de Ponderación Lineal.
            <ol style={{ paddingLeft: '1.0em' }}>
              <li> 1. Selecciona Ponderación Lineal en el menú.</li>
              <li> 2. Introduce los criterios y las alternativas y presiona confirmar.</li>
              <li> 3. Asigna un peso a cada criterio según su importancia. (se puede destildar la opción “cargar pesos de los criterios” para que todos los criterios sean 1.)</li>
              <li> 4. Indica en cada criterio si es maximización o minimización.</li>
              <li> 5. Selecciona el método de normalización que puede ser euclidiana, max y suma.
                <ul style={{ listStyleType: 'upper-roman', paddingLeft: '1.5em' }}>
                  <li><strong><u>Euclidina:</u></strong> Este método transforma las puntuaciones originales para que las comparaciones sean más equitativas. Cada puntuación se divide por la raíz cuadrada de la suma de los cuadrados de todas las puntuaciones del criterio.</li>
                  <li><strong><u>Max:</u></strong> En este método, cada puntuación se divide por la puntuación máxima obtenida en ese criterio, ajustando todas las puntuaciones a una escala de 0 a 1.</li>
                  <li><strong><u>Suma:</u></strong> Cada puntuación se divide por la suma total de todas las puntuaciones del criterio, de modo que las puntuaciones normalizadas sumen 1.</li>
                </ul>
              </li>
              <li>6. Haz clic en "Calcular" para obtener los resultados y ver cuál alternativa es la mejor según el método de Ponderación Lineal.</li>
              <li>7. Luego de que aparecen todos los resultados puedes seleccionar la opción para descargar el informe PDF si así lo deseas, esta opción se encuentra al final de la página.</li>
            </ol>
          </li>
          <li>
          <br />
            <strong className="text-indigo-500">MOORA:</strong> Utiliza el método MOORA para evaluar y comparar múltiples alternativas.
            <ol style={{ paddingLeft: '1.0em' }}>
              <li>1. Selecciona MOORA en el menú.</li>
              <li>2. Introduce los criterios y las alternativas.</li>
              <li>3. Asigna un peso a cada criterio según su importancia. (se puede destildar la opción “cargar pesos de los criterios” para que todos los criterios sean 1.)</li>
              <li>4. Indica en cada criterio si es maximización o minimización.</li>
              <li>5. Selecciona el método de normalización que puede ser euclidiana, max y suma.  Por tratarse del metodo MOORA, solo se puede normalizar por el método<i> "Euclidiana"</i>
                <ul style={{ listStyleType: 'upper-roman', paddingLeft: '1.5em' }}>
                  <li><strong><u>Euclidiana:</u></strong> Este método transforma las puntuaciones originales para que las comparaciones sean más equitativas. Cada puntuación se divide por la raíz cuadrada de la suma de los cuadrados de todas las puntuaciones del criterio.</li>
                </ul>
              </li>
              <li>6. Haz clic en "Calcular" para ver los resultados y determinar la mejor alternativa según el método MOORA.</li>
              <li>7. Luego de que aparecen todos los resultados puedes seleccionar la opción para descargar el informe PDF si así lo deseas, esta opción se encuentra al final de la página.</li>
            </ol>
          </li>
          <li>
            <br />
            <strong className="text-indigo-500">TOPSIS:</strong> Resuelve ejercicios utilizando el método TOPSIS, que compara cada opción con una solución ideal.
            <ol style={{ paddingLeft: '1.0em' }}>
              <li>1. Selecciona TOPSIS en el menú.</li>
              <li>2. Introduce los criterios y las alternativas.</li>
              <li>3. Asigna un peso a cada criterio según su importancia. (se puede destildar la opción “cargar pesos de los criterios” para que todos los criterios sean 1.)</li>
              <li>4. Indica en cada criterio si es maximización o minimización.</li>
              <li>5. Selecciona el método de normalización que puede ser euclidiana, max y suma.
                <ul style={{ listStyleType: 'upper-roman', paddingLeft: '1.5em' }}>
                  <li><strong><u>Euclidiana:</u></strong> Este método transforma las puntuaciones originales para que las comparaciones sean más equitativas. Cada puntuación se divide por la raíz cuadrada de la suma de los cuadrados de todas las puntuaciones del criterio.</li>
                  <li><strong><u>Max:</u></strong> En este método, cada puntuación se divide por la puntuación máxima obtenida en ese criterio, ajustando todas las puntuaciones a una escala de 0 a 1.</li>
                  <li><strong><u>Suma:</u></strong> Cada puntuación se divide por la suma total de todas las puntuaciones del criterio, de modo que las puntuaciones normalizadas sumen 1.</li>
                </ul>
              </li>
              <li>6. Haz clic en "Calcular" para ver los resultados y determinar la mejor alternativa según el método TOPSIS.</li>
              <li>7. Luego de que aparecen todos los resultados puedes seleccionar la opción para descargar el informe PDF si así lo deseas, esta opción se encuentra al final de la página.</li>
            </ol>
          </li>
        </ul>

        <h1 className=" mt-8 text-2xl text-pink-600">Ejemplo de Uso: Elección de un Celular para Comprar</h1>
        <p>En este ejemplo, vamos a utilizar los tres métodos disponibles en nuestra plataforma (Ponderación Lineal, MOORA y TOPSIS) para elegir el mejor celular para comprar. Los criterios que consideraremos son:</p>
        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5em' }}>
          <li>Memoria RAM</li>
          <li>Procesador</li>
          <li>Cámara</li>
          <li>Batería</li>
          <li>Precio</li>
          <li>Marca</li>
          <li>Almacenamiento</li>
          <li>Pantalla</li>
          <li>Sistema Operativo</li>
          <li>Conectividad</li>
        </ul>
        <p>Tenemos tres alternativas de celulares:</p>
        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5em' }}>
          <li>Celular A</li>
          <li>Celular B</li>
          <li>Celular C</li>
        </ul>
        <h1><i className="text-xl text-indigo-500">Paso 1: Introducir los Criterios y Alternativas</i></h1>
        <p><strong>Criterios:</strong></p>
        <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5em' }}>
          <li>Memoria RAM (en GB)</li>
          <li>Procesador (frecuencia en GHz)</li>
          <li>Cámara (resolución en MP)</li>
          <li>Batería (capacidad en mAh)</li>
          <li>Precio (en USD)</li>
          <li>Marca (puntuación de reputación)</li>
          <li>Almacenamiento (en GB)</li>
          <li>Pantalla (tamaño en pulgadas)</li>
          <li>Sistema Operativo (puntuación de popularidad)</li>
          <li>Conectividad (número de tecnologías soportadas)</li>
        </ul>
        <p><strong>Alternativas:</strong></p>
        <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5em' }}>
          <li>Celular A</li>
          <li>Celular B</li>
          <li>Celular C</li>
        </ul>
        <h1><i className="text-xl text-indigo-500">Paso 2: Asignar Pesos a los Criterios</i></h1>
        <p>Asignamos pesos a cada criterio según su importancia para el usuario. Supongamos que los pesos son:</p>
        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5em' }}>
          <li>Memoria RAM: 0.15</li>
          <li>Procesador: 0.15</li>
          <li>Cámara: 0.10</li>
          <li>Batería: 0.10</li>
          <li>Precio: 0.20</li>
          <li>Marca: 0.05</li>
          <li>Almacenamiento: 0.10</li>
          <li>Pantalla: 0.05</li>
          <li>Sistema Operativo: 0.05</li>
          <li>Conectividad: 0.05</li>
        </ul>
        <h1><i className="text-xl text-indigo-500">Paso 3: Elegir el Método entre Ponderación Lineal, TOPSIS y MOORA</i></h1>
        <p>Para el ejemplo que estamos desarrollando, elegiremos el método <strong><i>Ponderación Lineal</i></strong></p>
        <h1><i className="text-xl text-indigo-500">Paso 4: Ingresar la Cantidad de Criterios y Alternativas</i></h1>
        <p>En este caso son 3 alternativas y 10 criterios, luego presionar el botón confirmar.</p>
        <h1><i className="text-xl text-indigo-500">Paso 5: Ingresar las Puntuaciones de las Alternativas</i></h1>

        <div style={{ overflowX: 'auto' }}>
          <Table removeWrapper aria-label="Example table with dynamic content" className="w-full flex flex-col grap-5" css={{
            minWidth: '800px', // Establece el ancho mínimo para activar el scroll horizontal 
          }}>
              <TableHeader columns={columnas}>
              {(column) => <TableColumn className="text-xl items-center font-bold text-pink-600" key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={alternativas}>
              {(item) => (
                <TableRow key={item.key} className="items-center">
                  {(columnKey) => <TableCell className="text-xl items-center">{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
       
        <h1><i className="text-xl text-indigo-500">Paso 6: Seleccionar en cada Criterio si es Maximización y Minimización</i></h1>
        <p>para este ejemplo, se busacara <strong>MAXIMIZAR</strong> la mayoria de las caractresiticas del celular (memoria RAM, Almacenamiento, procesador, etc.), con excepcion del precio, que buscaremos <strong>MINIMIZAR</strong> el costo a la hora de elegir alguno de las alternativas.
        </p>
        <h1><i className="text-xl text-indigo-500">Paso 7: Ingresar los Pesos para Cada Criterio:</i></h1>
        
        <div style={{ overflowX: 'auto'}}>
        <Image 
          css={{ minWidth: '800px' }}
          isBlurred
          width={1024}
          src={img01}
          alt="NextUI Album Cover"
          className="m-5"
        />
        </div>
        <h1><i className="text-xl text-indigo-500">Paso 8: seleccionar el metodo de Normalizacion</i></h1>
        <Image
          isBlurred
          width={300}
          src={img02}
          alt="NextUI Album Cover"
          className="m-1"
        />
        
        <h1><i className="text-xl text-indigo-500">Paso 9: una vez ingresado el metodo de normalizacion seleccionar “calcular”</i></h1>
        <Image
          isBlurred
          width={300}
          src={img03}
          alt="NextUI Album Cover"
          className="m-5"
        />
        
        <h1><i className="text-xl text-indigo-500">Paso 10: Interpretar los Resultados</i></h1>
        <div style={{ overflowX: 'auto' }}>
        <Image
          css={{ minWidth: '800px'}}
          isBlurred
          width={1024}
          src={img04}
          alt="NextUI Album Cover"
          className="w-full m-5"
        />
        </div>
        <p>Después de realizar los cálculos con cada método, la plataforma mostrará cuál es la mejor alternativa (celular) basado en los criterios y pesos asignados.</p>
        <p>En general para todos los metodos, se mostrara las siguientes tablas:</p>
        <p><strong>Tabla Normalizada:</strong></p>
        <div style={{ overflowX: 'auto' }}>
        <Image
          isBlurred
          css={{ minWidth: '800px' }}
          width={1024}
          src={img05}
          alt="NextUI Album Cover"
          className="m-5"
        />
        </div>

        <p><strong>Tabla Ponderada:</strong></p>
        <div style={{ overflowX: 'auto' }}>
        <Image
          isBlurred
          css={{ minWidth: '800px' }}
          width={1024}
          src={img06}
          alt="NextUI Album Cover"
          className="m-5"
        />
        </div>

        <p><strong>Tabla Solucion:</strong></p>
        <div style={{ overflowX: 'auto' }}>
        <Image
          isBlurred
          
          css={{ minWidth: '800px' }}
          width={1024}
          src={img07}
          alt="NextUI Album Cover"
          className="m-5"
        />
        </div>

        <p><strong>Tabla Resultados:</strong></p>
        <div style={{ overflowX: 'auto' }}>
        <Image
          isBlurred
          css={{ minWidth: '800px' }}
          width={1024}
          src={img08}
          alt="NextUI Album Cover"
          className="m-5"
        />
        </div>
        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5em' }}>
          <li>Resultados para Ponderación Lineal: Celular con la mayor puntuación total.</li>
          <li>Resultados para MOORA: Celular con la mayor suma de razones ponderadas.</li>
          <li>Resultados para TOPSIS: Celular con el índice de cercanía más alto.</li>
        </ul>
        
        <h1><i className="text-xl text-indigo-500">Paso 11: Descargar el Informe en PDF</i></h1>
        <p>Luego de que aparecen todos los resultados, puedes seleccionar la opción para descargar el informe en PDF si así lo deseas. Esta opción se encuentra al final de la página.</p>
        <Image
          isBlurred
          width={300}
          src={img09}
          alt="NextUI Album Cover"
          className="m-5"
        />
        <p><strong>Conclusion:</strong></p>
        <p>Utilizando los métodos de Ponderación Lineal, MOORA y TOPSIS, puedes evaluar múltiples alternativas de celulares considerando diversos criterios importantes para tu decisión. Esta plataforma facilita la comparación y elección del mejor celular según tus necesidades y preferencias. ¡Prueba cada método para ver cuál se adapta mejor a tu proceso de decisión!</p>
        
        <h1 className=" mt-8 text-2xl text-pink-600">Preguntas Frecuentes (FAQ)</h1>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5em' }}>
          <li>¿Qué es la plataforma de "Decisiones en Escenarios Complejos"?
              <p>Nuestra plataforma es una herramienta educativa desarrollada como parte de un proyecto académico para la asignatura "Decisiones en Escenarios Complejos". Permite a los usuarios resolver ejercicios utilizando métodos multicriterio como Ponderación Lineal, MOORA y TOPSIS.</p>
              <br />
          </li>
          <li>¿Cómo puedo acceder a los métodos de resolución de ejercicios?
              <p> Puedes acceder a los métodos seleccionando la opción correspondiente (Ponderación Lineal, MOORA o TOPSIS) en la barra superior de menú.</p>
              <br />
          </li>
          <li>¿Qué son los métodos de normalización y por qué son importantes?
              <p> La normalización es un proceso que transforma las puntuaciones originales de los criterios para permitir comparaciones justas entre diferentes alternativas. Los métodos de normalización disponibles son: </p>
              <ul style={{ listStyleType: 'circle', paddingLeft: '2.0em' }}>
                <li>Euclidiana: Mantiene la proporcionalidad de las puntuaciones relativas.</li>
                <li>Max: Ajusta todas las puntuaciones a una escala de 0 a 1 comparándolas con la máxima puntuación.</li>
                <li>Suma: Asegura que las puntuaciones normalizadas sumen 1, otorgando una contribución proporcional.</li>
              </ul>
              <br />
          </li>
          <li>¿Qué información necesito para empezar a resolver un ejercicio?
              <p>Para resolver un ejercicio, necesitas:</p>
              <ul style={{ listStyleType: 'circle', paddingLeft: '2.0em' }}>
                <li>Los criterios a evaluar.</li>
                <li>Las puntuaciones de cada alternativa para cada criterio.</li>
                <li>Los pesos asignados a cada criterio según su importancia.</li>
              </ul>
              <br />
          </li>
          <li>¿Cómo puedo descargar los resultados en PDF?
              <p> Después de calcular los resultados, puedes descargar el informe en PDF. La opción de descarga se encuentra al final de la página de resultados.</p>
              <br />
          </li>
          <li>¿Dónde puedo encontrar documentación y tutoriales?
              <p> En la sección de **Documentación** del menú superior, encontrarás manuales de usuario, tutoriales y ejemplos detallados sobre cómo utilizar la plataforma y aplicar los métodos multicriterio.</p>
              <br />
          </li>
          <li>¿Cómo puedo contactar al equipo de soporte?
              <p> Si necesitas ayuda adicional, tienes preguntas o deseas proporcionar retroalimentación, puedes utilizar la opción **Contacto** en el menú superior. Completa el formulario de contacto con tus datos y mensaje, y haz clic en "Enviar".</p>
              <br />
          </li>
          <li> ¿Puedo utilizar la plataforma en dispositivos móviles?
              <p> Sí, nuestra plataforma es compatible con dispositivos móviles y se puede acceder desde cualquier navegador web.</p>
              <br />
          </li>
          <li>¿Es necesario crear una cuenta para utilizar la plataforma?
              <p> No, no es necesario crear una cuenta para utilizar las funcionalidades básicas de la plataforma. Sin embargo, puede que se requiera registro para acceder a características avanzadas o guardar tu progreso.</p>
              <br />
          </li>
        </ol>

      </div>

    </>
  );
};

export default Docs;
