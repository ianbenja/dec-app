import React from "react";
import NavBarHome from "../home/navbar";
import EntradaTopsis from "./entradatopsis";
import Confirmar from "../moora/confirmar";

const PaginaTopsis = () => {
  return (
    <>
      <NavBarHome />
      <div>
        <div className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
          TOPSIS
        </div>
      </div>
      <div className="mt-4">
        <EntradaTopsis />
      </div>
      <div className="mt-4 flex justify-center">
        <Confirmar />
      </div>
    </>
  );
};

export default PaginaTopsis;
