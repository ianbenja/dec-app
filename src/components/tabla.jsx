import React, { useState } from "react";
import PropTypes from "prop-types";
import TablaCelda from "./celda.jsx";
import { Input } from "postcss";
import { Button } from "@nextui-org/react";

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

const Tabla = ({ alternativas, criterios }) => {
  const cantidad_alternativas = Number(alternativas);
  const cantidad_criterios = Number(criterios);

  const [botones, setBotones] = useState(Array(Number(criterios)).fill(tipo_criterio.Max));

  const cambiarTipoCriterio = (i) => {
    setBotones(botones.map((boton, index) => {
      if (index === i) {
        if (boton.value === "MAX") {
          return tipo_criterio.Min;
        } else {
          return tipo_criterio.Max;
        }
      } else {
        return boton;
      }
    }));
  };


  const generarCeldas = () => {
    const celdas = [];

    return (
      <>
        <tr>
          <th></th>
          {[...Array(cantidad_criterios).keys()].map((i) => (
            i = i + 1,  //para que empiece en C1
            <th
              key={i}
              className="relative criterio"
            >
              <input
                type="text"
                label={`C${i}`}
                defaultValue={`C${i}`}
              />
              <Button color={botones[i].color} radius="none"
                className="absolute -top-10 left-0"
                value={botones[i].value}
                onClick={() => cambiarTipoCriterio(i)}
              >
                {botones[i].text}
              </Button>
            </th>
          ))}
        </tr>
        {[...Array(cantidad_alternativas).keys()].map((i) => (
          i = i + 1,  //para que empiece en C1
          <tr key={i}>
            <th>
              <input
                type="text"
                label={`A${i}`}
                defaultValue={`A${i}`}
              />
            </th>
            {[...Array(cantidad_criterios).keys()].map((j) => (
              <td key={j}>
                <input type="text" />
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  };

  return (
    <table className="table-auto border-collapse  w-1/2 mx-auto mt-20">{generarCeldas()}</table>
  );
};

Tabla.propTypes = {
  alternativas: PropTypes.number.isRequired,
  criterios: PropTypes.number.isRequired,
};

export default Tabla;
