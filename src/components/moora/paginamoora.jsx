import React from "react";
import NavBarHome from "../home/navbar";
import EntradaMoora from "./entradamoora";
import Confirmar from "./confirmar";

const PaginaMoora = () => {
  return (
    <>
      <NavBarHome />
      <div>
        <div className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
          MOORA
        </div>
      </div>
      <div className="mt-4">
        <EntradaMoora />
      </div>
      <div className="flex justify-center mt-4">
        <Confirmar />
      </div>
    </>
  );
};

export default PaginaMoora;
