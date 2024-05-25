import { MaxIcon } from "../components/iconos/MaxIcon.jsx";
import { MinIcon } from "../components/iconos/MinIcon.jsx";

export const METODOS = {
  PONDERACION: "Ponderación Lineal",
  MOORA: "Moora",
  TOPSIS: "Topsis",
};

export const PRESENTACION = {
  title: "Herramienta de Apoyo a la Toma de Decisiones",
  description:
    "Esta pagina tiene como fin asistir a la resolución de problemas de toma de decisiones complejas, a través de la implementación de los métodos de Ponderación Lineal, Moora y Topsis.",
  description2:
    "Para comenzar escoja alguno de los siguientes métodos que le presentamos a continuación",
};

export const PONDERACION_LINEAL = {
  criterizar1:
    "Lo primero que haremos será poner todos las columnas de la tabla en un solo criterio MAX o MIN",
  criterizar2:
    "Para ello tendremos que invertir los valores de las columnas que no estén bajo el criterio general",
  normalizar1:
    "Luego normalizaremos los valores de cada fila de la tabla según el método de normalización seleccionado",
  normalizar2:
    "Para ello se dividirá cada valor de la fila por el valor obtenido por el método aplicado",
  normalizar3: "El resultado de la normalización será una tabla con valores entre 0 y 1",
  normalizar4: "Ademas se normalizaran los pesos de hacer falta",
  ponderizar1: "Ahora se procederá a ponderar los valores de la tabla",
  ponderizar2: "Para ello se multiplicara cada valor de la tabla por el peso correspondiente",
  ponderizar3: "El resultado de la ponderación será una tabla con valores ponderados",
  solucion1: "Finalmente se sumaran los valores de cada fila de la tabla",
  solucion2: "El resultado de la suma será la solución del problema",
  orden1:
    "En base a los resultados obtenidos se ordenaran las alternativas de la mejor opción a la peor",
};

export const MOORA = {
  normalizar1: "Luego normalizaremos los valores de cada fila de la tabla según el método de Euler",
  normalizar2: "Para ello se dividirá cada valor de la fila por el valor obtenido por el método",
  normalizar3: "El resultado de la normalización será una tabla con valores entre 0 y 1",
  ponderizar1: "Ahora se procederá a ponderar los valores de la tabla",
  ponderizar2: "Para ello se multiplicara cada valor de la tabla por el peso correspondiente",
  ponderizar3: "El resultado de la ponderación será una tabla con valores ponderados",
  normalizar4: "Ademas se normalizaran los pesos de hacer falta",
  suma1: "Luego se sumaran por fila los valores máximos entre si y mínimos entre si",
  suma2: "La diferencia entre los valores máximos y mínimos sera la solución de cada fila",
  orden1:
    "En base a los resultados obtenidos se ordenaran las alternativas de la mejor opción a la peor",
};

export const TOPSIS = {
  normalizar1:
    "Luego normalizaremos los valores de cada fila de la tabla según el método de normalización seleccionado",
  normalizar2:
    "Para ello se dividirá cada valor de la fila por el valor obtenido por el método aplicado",
  normalizar3: "El resultado de la normalización será una tabla con valores entre 0 y 1",
  normalizar4: "Ademas se normalizaran los pesos de hacer falta",
  ponderizar1: "Ahora se procederá a ponderizar los valores de la tabla",
  ponderizar2: "Para ello se multiplicara cada valor de la tabla por el peso correspondiente",
  ponderizar3: "El resultado de la ponderación será una tabla con valores ponderados",
  ideales1: "Luego se seleccionaran los valores ideales y anti-ideales de la tabla",
  ideales2:
    "Para ello se seleccionara la mejor opción (ideal) y la peor opción (anti-ideal) de cada columna",
  ideales3: "Mostraremos los valores ideales (A+) y anti-ideales (A-) seleccionados",
  ideal1:
    "Ahora calcularemos la distancia de cada alternativa a los valores ideales y la elevaremos al cuadrado",
  ideal2: "Una vez calculadas las distancias se procederá a sumar cada fila",
  ideal3: "Si realizamos la raíz cuadrada de la suma previa obtendremos el S+",
  anti_ideal1:
    "Ahora calcularemos la distancia de cada alternativa a los valores anti-ideales y la elevaremos al cuadrado",
  anti_ideal2: "Una vez calculadas las distancias se procederá a sumar cada fila",
  anti_ideal3: "Si realizamos la raíz cuadrada de la suma previa obtendremos el S-",
  coeficientes1: "Finalmente se calculara el coeficiente de similitud de cada alternativa",
  coeficientes2: "Para ello se aplicara la siguiente división   S- / [(S+) + (S-)]",
  orden1:
    "En base a los resultados obtenidos se ordenaran las alternativas de la mejor opción a la peor",
};

export const TIPO_CRITERIO = {
  Max: {
    value: "MAX",
    text: "Max",
    color: "danger",
    icon: MaxIcon,
  },
  Min: {
    value: "MIN",
    text: "Min",
    color: "primary",
    icon: MinIcon,
  },
};

export const METODOS_NORMALIZACION = {
  MAX: "MAX",
  SUMA: "SUMA",
  EUCLIDEANA: "EULER",
};
const cantDecimales = 5;
export const decimales = Math.pow(10, cantDecimales);

export const DOCUMENTACION = {
  columnas: [
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
  ],
  
  tablaOriginal: [
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
    {
      key: "4",
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
  ],
  
  pesos: [
    {
      key: "4",
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
};

export const DATATABLAPRUEBA1 = {
  header: [
    " ",
    "Y1",
    "Y2",
    "Y3",
    "Y4",
    "Y5",
    "Y6",
    "Y7",
    "Y8",
    "Y9",
    "Y10",
    "Y11",
    "Y12",
    "Y13",
    "Y14",
    "Y15",
    "Y16",
    "Y17",
    "Y18",
    "Y19",
    "Y20",
  ],
  rows: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [4, 5, 6, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [7, 8, 9, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [10, 11, 12, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [10, 11, 12, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [10, 11, 12, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  ],
  cabezafilas: ["X1", "X2", "X3", "X4", "X5", "X6"],
  sumaTabla: [10, 20, 30, 40, 50, 60],
};

export const DATATABLAPRUEBA2 = {
  header: [
    " ",
    "Y1",
    "Y2",
    "Y3",
    "Y4",
    "Y5",
    "Y6",
    "Y7",
    "Y8",
    "Y9",
    "Y10",
    "Y11",
    "Y12",
    "Y13",
    "Y14",
    "Y15",
    "Y16",
    "Y17",
    "Y18",
    "Y19",
    "Y20",
  ],
  rows: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [4, 5, 6, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [7, 8, 9, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [10, 11, 12, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [10, 11, 12, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [10, 11, 12, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  ],
  pesos: [
    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17,
    0.18, 0.19, 0.2,
  ],
  cabezafilas: ["X1", "X2", "X3", "X4", "X5", "X6"],
};
