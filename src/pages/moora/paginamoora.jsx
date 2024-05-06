import NavBarHome from "../home/navbar";
import Confirmar from "./confirmar";
import React, { useState } from "react"; // Import the 'useState' hook
import EntradaMoora from "./entradamoora";
import Tabla from "../../components/tabla.jsx";

const PaginaMoora = () => {
  // Define el estado para alternativas y criterios
  const [alternativas, setAlternativas] = useState(0);
  const [criterios, setCriterios] = useState(0);
  const [generarTabla, setGenerarTabla] = useState(false);

  const handleConfirmarClick = () => {
    console.log("Alternativas: ", alternativas);
    console.log("Criterios: ", criterios);
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
      <div className="mt-4 flex justify-center">
        <EntradaMoora
          onAlternativasChange={setAlternativas}
          onCriteriosChange={setCriterios}
        />
      </div>
      <div className="flex justify-center mt-4">
        <Confirmar onClick={handleConfirmarClick} />
      </div>

      {generarTabla && (
        <div className="mt-4">
          <Tabla
            alternativas={alternativas}
            criterios={criterios}
          />
        </div>
      )}
    </>
  );
};

export default PaginaMoora;
