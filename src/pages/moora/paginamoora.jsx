import { useEffect, useState } from "react"; // Import the 'useState' hook
import EntradaDatos from "../../components/entradaDatos.jsx";
import TablaInicial from "../../components/tabla.jsx";
import { Button } from "@nextui-org/react";
import { METODOS_NORMALIZACION } from "../../constants/index.js";
import TablaMuestra from "../../components/tablamuestrav2.jsx";

const PaginaMoora = () => {
  // Define el estado para alternativas y criterios
  const [alternativasInput, setAlternativasInput] = useState(0);
  const [criteriosInput, setCriteriosInput] = useState(0);
  const [cantidadAlternativas, setCantidadAlternativas] = useState(0);
  const [cantidadCriterios, setCantidadCriterios] = useState(0);
  const [metodoNormalizacion, setMetodoNormalizacion] = useState(METODOS_NORMALIZACION.EULER);
  const [generarTabla, setGenerarTabla] = useState(false);
  const [tablaKey, setTablaKey] = useState(0);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [datosNormalizados, setDatosNormalizados] = useState();
  const [datosPonderizados, setDatosPonderizados] = useState();
  const [datosFinales, setFinales] = useState();

  const [alternativas, setAlternativas] = useState([]);
  const [criterios, setCriterios] = useState([]);
  const [tipos_criterios, setTiposDeCriterio] = useState([]);
  const [valores, setValores] = useState([]);
  const [pesos, setPesos] = useState([]);

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
    setMostrarResultados(false);
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
      metodoNormalizacion,
    };
    console.log(data);

    try {
      const response = await fetch("https://jtzzynaju6.execute-api.us-east-1.amazonaws.com/moora", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Datos enviados exitosamente");
        console.log("Respuesta:", response);
        const json = await response.json();
        console.log("Respuesta:", json);

        const { normalizado, ponderado, solucion } = json;
        setDatosNormalizados(normalizado);
        setDatosPonderizados(ponderado);
        setFinales(solucion);

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
          <h1 className="text-center mt-16 mb-5 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
            MOORA
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
          className="flex flex-col items-center gap-5"
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
          className="flex flex-col w-full items-center gap-5"
        >
          <h2 className="text-2xl">Resultados</h2>
          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full  text-xl">Tabla Normalizada</h3>
            <TablaMuestra data={datosNormalizados} />
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full text-xl">Tabla Ponderada</h3>
            <TablaMuestra data={datosPonderizados} />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <h3 className="w-full  text-xl">Tabla Suma</h3>
            <TablaMuestra data={datosFinales} />
          </div>
        </section>
      )}
    </>
  );
};

export default PaginaMoora;
