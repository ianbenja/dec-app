import React from "react";
import NavBarHome from "../home/navbar";
import EntradaTopsis from "./entradatopsis";
import Confirmar from "../moora/confirmar";
import TablaMuestra from "../tablamuestra";
import { DATATABLAPRUEBA1, DATATABLAPRUEBA2 } from "../../constants";

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
      <div className="mt-4">
        <h2 className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
          Tabla Inicial De Prueba
        </h2>
        <TablaMuestra data={DATATABLAPRUEBA1} />
      </div>

      <div className="mt-4">
        <h2 className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
          Tabla Inicial con pesos De Prueba
        </h2>
        <TablaMuestra data={DATATABLAPRUEBA2} />
      </div>
    </>
  );
};

export default PaginaTopsis;
