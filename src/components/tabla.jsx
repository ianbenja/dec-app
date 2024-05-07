import React, { useState } from "react";
import PropTypes from "prop-types";
import TablaCelda from "./celda.jsx";
import { Button, Input } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const TablaInicial = ({ alternativas, criterios }) => {
  const cantidad_alternativas = Number(alternativas);
  const cantidad_criterios = Number(criterios);

  const tipo_criterio = {
    Max: {
      value: "MAX",
      text: "Max",
      color: "primary",
    },
    Min: {
      value: "MIN",
      text: "Min",
      color: "danger",
    },
  };

  const [botones, setBotones] = useState(Array(cantidad_criterios).fill(tipo_criterio.Max));

  const cambiarTipoCriterio = (i) => {
    setBotones(
      botones.map((boton, index) => {
        if (index === i) {
          if (boton.value === "MAX") {
            return tipo_criterio.Min;
          } else {
            return tipo_criterio.Max;
          }
        } else {
          return boton;
        }
      })
    );
  };

  const generarHeader = () => {
    return (
      <TableHeader>
        <TableColumn>Alternativas</TableColumn>
        {[...Array(cantidad_criterios).keys()].map((i) => (
          <TableColumn
            key={i}
            className="relative criterio"
          >
            <Input
              type="text"
              // label={`C${i}`}
              defaultValue={`C${i}`}
            />
            <Button
              color={botones[i].color}
              radius="none"
              className="absolute -top-10 left-0"
              value={botones[i].value}
              onClick={() => cambiarTipoCriterio(i)}
            >
              {botones[i].text}
            </Button>
          </TableColumn>
        ))}
      </TableHeader>
    );
  };

  const generarCuerpo = () => {
    return (
      <TableBody>
        {/* Aca se generan las filas de la tabla */}
        {[...Array(cantidad_alternativas).keys()].map((i) => (
          <TableRow key={i}>
            {/* Aca se genera la primer celda que corresponde a la alternativa */}
            <TableCell>
              <Input
                type="text"
                // label={`A${i}`}
                defaultValue={`A${i}`}
              />
            </TableCell>
            {/* Aca se generan las celdas de la fila */}
            {[...Array(cantidad_criterios).keys()].map((j) => (
              <TableCell key={j}>
                <Input type="text" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <Table className="w-full lg:w-3/4">
      {generarHeader()}
      {generarCuerpo()}
    </Table>
  );
};

TablaInicial.propTypes = {
  alternativas: PropTypes.number.isRequired,
  criterios: PropTypes.number.isRequired,
};

export default TablaInicial;
