import PropTypes from "prop-types";

// Componente para el cuerpo de la tabla
export const TablaCuerpo = ({
  cantidadAlternativas,
  cantidadCriterios,
  cambiarAlternativas,
  cambiarMatrizValores,
}) => {
  return (
    <tbody>
      {[...Array(cantidadAlternativas).keys()].map((i) => (
        <tr key={i}>
          <th>
            <input
              type="text"
              required
              name={`A${i}`}
              defaultValue={`A${1 + i}`}
              className="p-2 w-full text-center"
              onChange={(e) => cambiarAlternativas(i, e.target.value)}
            />
          </th>
          {[...Array(cantidadCriterios).keys()].map((j) => (
            <td key={j}>
              <input
                type="number"
                inputMode="decimal"
                step="any"
                required
                name={`A${i}C${j}`}
                className="p-2 w-full text-center remove-arrow bg-zinc-900"
                onChange={(e) => cambiarMatrizValores(i, j, e.target.value)}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
TablaCuerpo.propTypes = {
  cantidadAlternativas: PropTypes.number.isRequired,
  cantidadCriterios: PropTypes.number.isRequired,
  cambiarAlternativas: PropTypes.func.isRequired,
  cambiarMatrizValores: PropTypes.func.isRequired,
};
