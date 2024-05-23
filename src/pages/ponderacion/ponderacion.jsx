import { useEffect, useState } from "react";
import EntradaDatos from "../../components/entradaDatos.jsx";
import TablaInicial from "../../components/tabla.jsx";
import { Button } from "@nextui-org/react";
import { PONDERACION_LINEAL as PONDERACIONLINEAL } from "../../constants/index.js";
import TablaMuestra from "../../components/tablamuestra.jsx";
import TablaOrden from "../../components/tablaOrden.jsx";
import { metodoPonLin } from "../../services/metodo";
import ExportToPDF from "../../components/exportPdf.jsx";

const PaginaPonderacion = (theme) => {
  const [alternativasInput, setAlternativasInput] = useState(0);
  const [criteriosInput, setCriteriosInput] = useState(0);
  const [cantidadAlternativas, setCantidadAlternativas] = useState(0);
  const [cantidadCriterios, setCantidadCriterios] = useState(0);
  const [generarTabla, setGenerarTabla] = useState(false);
  const [tablaKey, setTablaKey] = useState(0);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [datosOriginales, setDatosOriginale] = useState();
  const [datosCriterizados, setDatosCriterizados] = useState();
  const [datosNormalizados, setDatosNormalizados] = useState();
  const [datosPonderizados, setDatosPonderizados] = useState();
  const [datosSolucion, setDatosSolucion] = useState();
  const [datosOrden, setDatosOrden] = useState();

  const [alternativas, setAlternativas] = useState([]);
  const [criterios, setCriterios] = useState([]);
  const [tipos_criterios, setTiposDeCriterio] = useState([]);
  const [valores, setValores] = useState([]);
  const [pesos, setPesos] = useState([]);
  const [normalizacion, setMetodoNormalizacion] = useState("EULER");

  // Definir un efecto para manejar la actualización de los vectores y la matriz
  useEffect(() => {
    // Crear arreglos según las entradas
    setAlternativas(Array.from({ length: cantidadAlternativas }, (_, index) => `A${index + 1}`));
    setCriterios(Array.from({ length: cantidadCriterios }, (_, index) => `C${index + 1}`));

    setPesos(Array(cantidadCriterios).fill(0));
    setTiposDeCriterio(Array(cantidadCriterios).fill("MAX")); // Tipo por defecto
    setValores(
      Array(cantidadAlternativas)
        .fill([])
        .map(() => Array(cantidadCriterios).fill(0))
    );
  }, [cantidadAlternativas, cantidadCriterios]); // Se ejecuta cuando cambian estas dependencias

  const handleConfirmarTabla = (e) => {
    e.preventDefault();
    setCantidadAlternativas(parseInt(alternativasInput) || 2);
    setCantidadCriterios(parseInt(criteriosInput) || 2);
    setGenerarTabla(true);
    setTablaKey(tablaKey + 1);
  };

  //funcion que al hacer submit del formulario tranforma todos los datos de la tabla en un json y lo envia al backend
  const handleCalcular = async (e) => {
    e.preventDefault();

    const data = {
      alternativas,
      criterios,
      tipos_criterios,
      valores,
      pesos,
      normalizacion,
      criterio_general: "MAX",
    };
    console.log(data);

    try {
      const response = await metodoPonLin(data);

      if (response.ok) {
        console.log("Datos enviados exitosamente");
        console.log("Respuesta:", response);
        const json = await response.json();
        console.log("Respuesta:", json);

        const { normalizado, ponderado, original, criterizado, solucion, ordenFinal } = json;
        setDatosOriginale(original);
        setDatosNormalizados(normalizado);
        setDatosPonderizados(ponderado);
        setDatosCriterizados(criterizado);
        setDatosSolucion(solucion);
        setDatosOrden(ordenFinal);

        setMostrarResultados(true);
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      {/* Sección inicial */}
      <section
        id="seccion-inicial"
        className="flex flex-col items-center gap-5"
      >
        <div>
          <h1 className="text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
            PONDERACIÓN LINEAL
          </h1>
        </div>

        <form
          onSubmit={(e) => {
            handleConfirmarTabla(e);
          }}
          className="flex flex-col items-center gap-5"
        >
          <EntradaDatos
            onAlternativasChange={setAlternativasInput}
            onCriteriosChange={setCriteriosInput}
          />
          <Button
            type="submit"
            radius="md"
            className="w-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Confirmar
          </Button>
        </form>
      </section>

      {/* Sección de la tabla de datos */}
      {generarTabla && (
        <section
          id="seccion-carga-datos"
          className="flex flex-col items-center gap-5 w-full max-w-7xl"
        >
          <form
            className="flex flex-col items-center gap-5 w-full"
            onSubmit={(e) => {
              handleCalcular(e);
            }}
          >
            <div className="mt-4 w-full">
              <TablaInicial
                key={tablaKey}
                cantidadAlternativas={cantidadAlternativas}
                cantidadCriterios={cantidadCriterios}
                alternativas={alternativas}
                setAlternativas={setAlternativas}
                criterios={criterios}
                setCriterios={setCriterios}
                tiposDeCriterio={tipos_criterios}
                setTiposDeCriterio={setTiposDeCriterio}
                matrizValores={valores}
                setMatrizValores={setValores}
                pesos={pesos}
                setPesos={setPesos}
                setMetodoNormalizacion={setMetodoNormalizacion}
              />
            </div>
            <Button
              type="submit"
              radius="md"
              className="w-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Calcular
            </Button>
          </form>
        </section>
      )}

      {/* Sección de resultados que tendra 4 tablas, la primera sera la tabla con los datos normalizados, la segunda tabla con los datos ponderizados y la tercera con los resultados finales ordenados  */}
      {mostrarResultados && (
        <section
          id="seccion-resultados"
          className="flex flex-col w-full max-w-7xl items-center gap-5"
        >
          <h2 className="text-center mt-16 text-6xl  leading-inherit   lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
            Resultados
          </h2>
          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full  text-center mt-5 mb-5 text-4xl lg:mt-5 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
              Tabla Original
            </h3>
            <TablaMuestra data={datosOriginales} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
              Tabla Criterizada
            </h3>
            <p>{PONDERACIONLINEAL.criterizar1}</p>
            <p>{PONDERACIONLINEAL.criterizar2}</p>
            <TablaMuestra data={datosCriterizados} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full  text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
              Tabla Normalizada
            </h3>
            <p>{PONDERACIONLINEAL.normalizar1}</p>
            <p>{PONDERACIONLINEAL.normalizar2}</p>
            <p>{PONDERACIONLINEAL.normalizar3}</p>
            <p>{PONDERACIONLINEAL.normalizar4}</p>
            <TablaMuestra data={datosNormalizados} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
              Tabla Ponderada
            </h3>
            <p>{PONDERACIONLINEAL.ponderizar1}</p>
            <p>{PONDERACIONLINEAL.ponderizar2}</p>
            <p>{PONDERACIONLINEAL.ponderizar3}</p>

            <TablaMuestra data={datosPonderizados} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
              Tabla Solucion
            </h3>
            <p>{PONDERACIONLINEAL.solucion1}</p>
            <p>{PONDERACIONLINEAL.solucion2}</p>
            <TablaMuestra data={datosSolucion} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
              Tabla de Resultados
            </h3>
            <p>{PONDERACIONLINEAL.orden1}</p>
            <TablaOrden data={datosOrden} />
          </div>
          {mostrarResultados && (
            <ExportToPDF
              paginaTitulo="Resultados de Ponderación Lineal"
              datosOriginales={datosOriginales}
              datosOrden={datosOrden}
              titlePDF={"PonderacionLineal"}
            />
          )}
        </section>
      )}
    </>
  );
};

export default PaginaPonderacion;
