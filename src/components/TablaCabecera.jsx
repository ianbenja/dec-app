import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";

// Componente para el encabezado de la tabla
export const TablaCabecera = ({
  cantidadCriterios,
  tipoCriterios,
  cambiarCriterios,
  cambiarBotonTipoCriterio,
}) => {
  return (
    <thead>
      <tr>
        <th className="p-2">Alternativas \ Criterios</th>
        {[...Array(cantidadCriterios).keys()].map((i) => (
          <th
            key={i}
            className="relative min-w-24"
          >
            <input
              type="text"
              required
              name={`C${i}`}
              defaultValue={`C${1 + i}`}
              className="p-2 w-full text-center"
              onChange={(e) => cambiarCriterios(i, e.target.value)}
            />
            <Button
              color={tipoCriterios[i].color}
              radius="none"
              className="absolute -top-11 left-1/2 transform -translate-x-1/2"
              value={tipoCriterios[i].value}
              onClick={() => cambiarBotonTipoCriterio(i)}
              endContent={tipoCriterios[i].icon}
            >
              {tipoCriterios[i].text}
            </Button>
          </th>
        ))}
      </tr>
    </thead>
  );
};
TablaCabecera.propTypes = {
  cantidadCriterios: PropTypes.number.isRequired,
  cambiarCriterios: PropTypes.func.isRequired,
  tipoCriterios: PropTypes.array.isRequired,
  cambiarBotonTipoCriterio: PropTypes.func.isRequired,
};
