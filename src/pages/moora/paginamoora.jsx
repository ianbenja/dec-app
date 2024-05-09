import NavBarHome from "../home/navbar";
import Confirmar from "./confirmar";
import React, { useState } from "react"; // Import the 'useState' hook
import EntradaMoora from "./entradamoora";
import TablaInicial from "../../components/tabla.jsx";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const PaginaMoora = () => {
  // Define el estado para alternativas y criterios
  const [alternativasInput, setAlternativasInput] = useState(0);
  const [criteriosInput, setCriteriosInput] = useState(0);
  const [alternativas, setAlternativas] = useState(0);
  const [criterios, setCriterios] = useState(0);
  const [generarTabla, setGenerarTabla] = useState(false);

  const handleConfirmar = (e) => {
    e.preventDefault()
    setAlternativas(parseInt(alternativasInput));
    setCriterios(parseInt(criteriosInput));
    setGenerarTabla(true);
  };


  return (
    <>
      <NavBarHome />
      <div>
        <div className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
          MOORA
        </div>
      </div>

      {/* <div className="mt-4 flex justify-center">
        <EntradaMoora
          onAlternativasChange={setAlternativasInput}
          onCriteriosChange={setCriteriosInput}
        />
      </div>

      <div className="flex justify-center mt-4">
        <Confirmar onClick={handleConfirmar} />
      </div> */}


      {/* un formulario que tendra el componente entrada morra que nos dara los valores y el boton para generar la tabla que se llama confirmar */}
      <form onSubmit={(e) => { handleConfirmar(e) }}

        className="flex flex-col items-center"
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
        <div className="mt-4 flex justify-center">
          <TablaInicial
            alternativas={alternativas}
            criterios={criterios}
          />
        </div>
      )}
    </>
  );
};

export default PaginaMoora;
