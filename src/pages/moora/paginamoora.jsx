import NavBarHome from "../home/navbar";
import { useState } from "react"; // Import the 'useState' hook
import EntradaMoora from "./entradamoora";
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

  const handleConfirmarTabla = (e) => {
    e.preventDefault();
    setCantidadAlternativas(parseInt(alternativasInput) || 2);
    setCantidadCriterios(parseInt(criteriosInput) || 2);

    // Crear arreglos según las entradas
    setAlternativas(Array(cantidadAlternativas).fill(""));
    setCriterios(Array(cantidadCriterios).fill(""));
    setPesos(Array(cantidadCriterios).fill(0));
    setTiposDeCriterio(Array(cantidadCriterios).fill("MAX")); // Tipo por defecto
    setMatrizValores(
      Array(cantidadAlternativas)
        .fill([])
        .map(() => Array(cantidadCriterios).fill(0))
    );

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
      <NavBarHome />
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
        <EntradaMoora
          onAlternativasChange={setAlternativasInput}
          onCriteriosChange={setCriteriosInput}
        />
        <Button
          type="submit"
          radius="full"
          className="w-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Confirmar
        </Button>
      </form>
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
              criterios={criterios}
              tiposDeCriterio={tiposDeCriterio}
              matrizValores={matrizValores}
              pesos={pesos}

              setAlternativas={setAlternativas}
              setCriterios={setCriterios}
              setTiposDeCriterio={setTiposDeCriterio}
              setMatrizValores={setMatrizValores}
              setPesos={setPesos}
            />
          </div>
          <Button
            type="submit"
            radius="full"
            className="w-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Calcular
          </Button>
        </form>
      )}
    </>
  );
};

export default PaginaMoora;
