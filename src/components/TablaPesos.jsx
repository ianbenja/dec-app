import PropTypes from "prop-types";
import { useState } from "react";

// Componente para la tabla de pesos
export const TablaPesos = ({ cantidadCriterios, cambiarPesos }) => {
  const [mostrarPesos, setMostrarPesos] = useState(true);
  const [esRequerido, setEsRequerido] = useState(true);

  const handleCambiarMostrarPesos = () => {
    setMostrarPesos(!mostrarPesos);
    setEsRequerido(!esRequerido);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-center items-center mt-5">
        <input
          type="checkbox"
          id="mostrarPesos"
          className="mr-2 w-5 h-5"
          checked={mostrarPesos}
          onChange={handleCambiarMostrarPesos}
        />
        <label htmlFor="mostrarPesos">Cargar pesos de los criterios</label>
      </div>

      {mostrarPesos && (
        <div className="w-full flex flex-col">
          <table className="w-full p-2 mt-5 border-separate border-spacing-2 rounded-2xl bg-zinc-200 dark:bg-zinc-800">
            <thead>
              <tr>
                <th className="min-w-24">
                  <input
                    type="text"
                    value={"Pesos(W)"}
                    disabled
                    className="p-2 w-full text-center bg-transparent"
                  />
                </th>
                {[...Array(cantidadCriterios).keys()].map((i) => (
                  <th
                    key={i}
                    className="min-w-24"
                  >
                    <input
                      type="number"
                      inputMode="decimal"
                      step="any"
                      required={esRequerido}
                      name={`WC${i}`}
                      className=" p-2 w-full text-center remove-arrow"
                      onChange={(e) => cambiarPesos(i, e.target.value)}
                    />
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
      )}
    </div>
  );
};
TablaPesos.propTypes = {
  cantidadCriterios: PropTypes.number.isRequired,
  cambiarPesos: PropTypes.func.isRequired,
};
