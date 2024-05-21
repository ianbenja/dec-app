import { useEffect, useState } from "react"; // Import the 'useState' hook
import EntradaDatos from "../../components/entradaDatos.jsx";
import TablaInicial from "../../components/tabla.jsx";
import { Button } from "@nextui-org/react";
import { metodoTopsis } from "../../services/metodo.js";
import TablaMuestra from "../../components/tablamuestra.jsx";
import TablaCoficientes from "../../components/tablaCofTop.jsx";
import TablaOrden from "../../components/tablaOrden.jsx";
import { TOPSIS } from "../../constants/index.js";
import ExportToPDF from "../../components/exportPdf.jsx";

const PaginaTopsis = () => {
  // Define el estado para alternativas y criterios
  const [alternativasInput, setAlternativasInput] = useState(0);
  const [criteriosInput, setCriteriosInput] = useState(0);
  const [cantidadAlternativas, setCantidadAlternativas] = useState(0);
  const [cantidadCriterios, setCantidadCriterios] = useState(0);
  const [generarTabla, setGenerarTabla] = useState(false);
  const [tablaKey, setTablaKey] = useState(0);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [datosOriginales, setDatosOriginale] = useState();
  const [datosNormalizados, setDatosNormalizados] = useState();
  const [datosPonderizados, setDatosPonderizados] = useState();
  const [datosIdeales, setDatosIdeales] = useState();
  const [datosIdeal, setDatosIdeal] = useState();
  const [datosAntiIdeal, setDatosAntiIdeal] = useState();
  const [datosCoficientes, setDatosCoficientes] = useState();
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
    setAlternativas(
      Array.from(
        { length: cantidadAlternativas },
        (_, index) => `A${index + 1}`
      )
    );
    setCriterios(
      Array.from({ length: cantidadCriterios }, (_, index) => `C${index + 1}`)
    );

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
    };
    console.log(data);

    try {
      const response = await metodoTopsis(data);

      if (response.ok) {
        console.log("Datos enviados exitosamente");
        console.log("Respuesta:", response);
        const json = await response.json();
        console.log("Respuesta:", json);

        const {
          normalizado,
          ponderado,
          original,
          ideales,
          ideal,
          anti_ideal,
          solucion,
          ordenFinal,
        } = json;
        setDatosOriginale(original);
        setDatosNormalizados(normalizado);
        setDatosPonderizados(ponderado);
        setDatosIdeales(ideales);
        setDatosAntiIdeal(anti_ideal);
        setDatosIdeal(ideal);
        setDatosCoficientes(solucion);
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
        className="flex flex-col   items-center gap-5"
      >
        <div>
          <h1 className="text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
            TOPSIS
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
        <form
          className="flex flex-col w-full max-w-7xl items-center gap-5"
          onSubmit={(e) => {
            handleCalcular(e);
          }}
        >
          <div className="mt-4 ">
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
      )}

      {/* Sección de resultados que tendra 4 tablas, la primera sera la tabla con los datos normalizados, la segunda tabla con los datos ponderizados y la tercera con los resultados finales ordenados  */}
      {mostrarResultados && (
        <section
          id="seccion-resultados"
          className="flex flex-col w-full max-w-7xl items-center gap-5"
        >
          <h2 className="text-2xl">Resultados</h2>
          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full  text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Tabla Original
            </h3>
            <TablaMuestra data={datosOriginales} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full  text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Tabla Normalizada
            </h3>
            <p>{TOPSIS.normalizar1}</p>
            <p>{TOPSIS.normalizar2}</p>
            <p>{TOPSIS.normalizar3}</p>
            <p>{TOPSIS.normalizar4}</p>

            <TablaMuestra data={datosNormalizados} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Tabla Ponderada
            </h3>
            <p>{TOPSIS.ponderizar1}</p>
            <p>{TOPSIS.ponderizar2}</p>
            <p>{TOPSIS.ponderizar3}</p>

            <TablaMuestra data={datosPonderizados} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Tabla Ideal y Anti-Ideal
            </h3>
            <p>{TOPSIS.ideales1}</p>
            <p>{TOPSIS.ideales2}</p>
            <p>{TOPSIS.ideales3}</p>
            <TablaMuestra data={datosIdeales} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Tabla distancia Ideal
            </h3>
            <p>{TOPSIS.ideal1}</p>
            <p>{TOPSIS.ideal2}</p>
            <p>{TOPSIS.ideal3}</p>
            <TablaMuestra data={datosIdeal} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Tabla distancia Anti-Ideal
            </h3>
            <p>{TOPSIS.anti_ideal1}</p>
            <p>{TOPSIS.anti_ideal2}</p>
            <p>{TOPSIS.anti_ideal3}</p>
            <TablaMuestra data={datosAntiIdeal} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Tabla de Coficientes
            </h3>
            <p>{TOPSIS.coeficientes1}</p>
            <p>{TOPSIS.coeficientes2}</p>
            <TablaCoficientes data={datosCoficientes} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Tabla de Resultados
            </h3>
            <p>{TOPSIS.orden1}</p>
            <TablaOrden data={datosOrden} />
          </div>
          {mostrarResultados && (
            <ExportToPDF
              paginaTitulo="Resultados de Topsis"
              datosOriginales={datosOriginales}
              datosOrden={datosOrden}
              titlePDF={"Topsis"}
            />
          )}
        </section>
      )}
    </>
  );
};

export default PaginaTopsis;
