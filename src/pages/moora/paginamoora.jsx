import { useEffect, useState } from "react"; // Import the 'useState' hook
import EntradaDatos from "../../components/entradaDatos.jsx";
import TablaInicial from "../../components/tabla.jsx";
import { Button } from "@nextui-org/react";

const PaginaMoora = () => {
  // Define el estado para alternativas y criterios
  const [alternativasInput, setAlternativasInput] = useState(0);
  const [criteriosInput, setCriteriosInput] = useState(0);
  const [cantidadAlternativas, setCantidadAlternativas] = useState(0);
  const [cantidadCriterios, setCantidadCriterios] = useState(0);
  const [generarTabla, setGenerarTabla] = useState(false);
  const [tablaKey, setTablaKey] = useState(0);

  const [alternativas, setAlternativas] = useState([]);
  const [criterios, setCriterios] = useState([]);
  const [tiposDeCriterio, setTiposDeCriterio] = useState([]);
  const [matrizValores, setMatrizValores] = useState([]);
  const [pesos, setPesos] = useState([]);

  // Definir un efecto para manejar la actualización de los vectores y la matriz
  useEffect(() => {
    // Crear arreglos según las entradas
    setAlternativas(Array.from({ length: cantidadAlternativas }, (_, index) => `A${index + 1}`));
    setCriterios(Array.from({ length: cantidadCriterios }, (_, index) => `C${index + 1}`));

    setPesos(Array(cantidadCriterios).fill(0));
    setTiposDeCriterio(Array(cantidadCriterios).fill("MAX")); // Tipo por defecto
    setMatrizValores(
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
      pesos,
      tiposDeCriterio,
      matrizValores,
    };
    console.log(data);

    // try {
    //   const response = await fetch('/api/endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     console.log('Datos enviados exitosamente');
    //   } else {
    //     console.error('Error al enviar los datos');
    //   }
    // } catch (error) {
    //   console.error('Error en la solicitud:', error);
    // }
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
              tiposDeCriterio={tiposDeCriterio}
              setTiposDeCriterio={setTiposDeCriterio}
              matrizValores={matrizValores}
              setMatrizValores={setMatrizValores}
              pesos={pesos}
              setPesos={setPesos}
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
      <section
        id="seccion-resultados"
        className="flex flex-col items-center gap-5"
      >
        <h2 className="text-2xl">Resultados</h2>
        <TablaResultados
          datosNormalizados={datosNormalizados}
          datosPonderizados={datosPonderizados}
          resultadosFinales={resultadosFinales}
        />
      </section>
    </>
  );
};

export default PaginaMoora;
