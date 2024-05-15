import PropTypes from "prop-types";

// Componente para la tabla de pesos
export const TablaPesos = ({
  cantidadCriterios,
  mostrarPesos,
  cambiarPesos,
  handleMostrarPesosChange,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center mt-5">
        <input
          type="checkbox"
          id="mostrarPesos"
          className="mr-2 w-5 h-5"
          checked={mostrarPesos}
          onChange={handleMostrarPesosChange}
        />
        <label htmlFor="mostrarPesos">Cargar pesos de los criterios</label>
      </div>

      {mostrarPesos && (
        <div className="w-full flex flex-col items-center">
          <table className="w-full p-2 mt-5 border-separate border-spacing-2 bg-zinc-800 rounded-2xl">
            <thead>
              <tr>
                <th className="p-2">
                  <span className=" text-center">Pesos(W)</span>
                </th>
                {[...Array(cantidadCriterios).keys()].map((i) => (
                  <th key={i}>
                    <input
                      type="number"
                      inputMode="decimal"
                      step="any"
                      required
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
  mostrarPesos: PropTypes.bool.isRequired,
  handleMostrarPesosChange: PropTypes.func.isRequired,
};
