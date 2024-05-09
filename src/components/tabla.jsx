import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TablaCelda from "./celda.jsx";
import { Button, Input } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { MaxIcon } from "./iconos/MaxIcon.jsx";
import { MinIcon } from "./iconos/MinIcon.jsx";


const TablaInicial = ({ alternativas, criterios }) => {

  const tipo_criterio = {
    Max: {
      value: "MAX",
      text: "Max",
      color: "danger",
      icon: <MaxIcon />
    },
    Min: {
      value: "MIN",
      text: "Min",
      color: "primary",
      icon: <MinIcon />
    },
  };

  const [tipoCriterios, setTipoCriterio] = useState(Array(criterios).fill(tipo_criterio.Max));

  const cambiarTipoCriterio = (i) => {
    const nuevoTipoCriterios = [...tipoCriterios];
    nuevoTipoCriterios[i] = nuevoTipoCriterios[i].value === tipo_criterio.Max.value ? tipo_criterio.Min : tipo_criterio.Max;
    setTipoCriterio(nuevoTipoCriterios);
  };


  useEffect(() => {
    setTipoCriterio(Array(criterios).fill(tipo_criterio.Max));
  }, [criterios]);

  const generarHeader = () => {
    return (
      <thead>
        <tr>
          <th
          //estilo para el header

          >Alternativas</th>
          {[...Array(criterios).keys()].map((i) => (
            <th
              key={i}
              className="relative criterio"
            >
              <input
                type="text"
                // label={`C${i}`}
                defaultValue={`C${1 + i}`}
                className="p-2 w-full"
              />
              <Button
                color={tipoCriterios[i].color}
                radius="none"
                className="absolute -top-11 left-10"
                value={tipoCriterios[i].value}
                onClick={() => cambiarTipoCriterio(i)}
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

  const generarCuerpo = () => {
    return (
      <tbody>
        {/* Aca se generan las filas de la tabla */}
        {[...Array(alternativas).keys()].map((i) => (
          <tr key={i}>
            {/* Aca se genera la primer celda que corresponde a la alternativa */}
            <th>
              <input
                type="text"
                // label={`A${i}`}
                defaultValue={`A${1 + i}`}
                className="p-2 w-full"
              />
            </th>
            {/* Aca se generan las celdas de la fila */}
            {[...Array(criterios).keys()].map((j) => (
              <td key={j}
              >
                <input type="number" className="p-2 w-full remove-arrow" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table className="w-full lg:w-3/4 mt-10">
      {generarHeader()}
      {generarCuerpo()}
    </table>
  );
};

TablaInicial.propTypes = {
  alternativas: PropTypes.number.isRequired,
  criterios: PropTypes.number.isRequired,
};

export default TablaInicial;
