import React, { useState } from "react";
import PropTypes from "prop-types";
import TablaCelda from "./celda.jsx";
import { Input } from "postcss";

const tipo_criterio = {
  Max: "MAX",
  Min: "MIN",
};

const Tabla = ({ alternativas, criterios }) => {
  //al hacer click en el boton cambiar el texto, si es max o min, color de fondo y el valor del boton

  const cantidad_alternativas = Number(alternativas) + 1;
  const cantidad_criterios = Number(criterios) + 1;

  console.log("cantidad_alternativas", cantidad_alternativas, typeof cantidad_alternativas);
  console.log("cantidad_criterios", cantidad_criterios, typeof cantidad_criterios);

  const cambiarTipoCriterio = (e, i) => {
    console.log("cambiarTipoCriterior", e, i);
    if (e.target.value === "MAX") {
      e.target.value = "MIN";
      e.target.textContent = "Min";
      e.target.className = "absolute -top-10 left-0 bg-blue-500 p-1";
    } else {
      e.target.value = "MAX";
      e.target.textContent = "Max";
      e.target.className = "absolute -top-10 left-0 bg-red-500 p-1";
    }
  };

  const generarCeldas = () => {
    const celdas = [];
    // for (let i = 0; i < cantidad_alternativas; i++) {
    //   const fila = [];
    //   for (let j = 0; j < cantidad_criterios; j++) {
    //     if (i === 0 && j === 0) {
    //       fila.push(
    //         <TablaCelda
    //           key={`${i}-${j}`}
    //           tipo="header-input"
    //         />
    //       );
    //     } else if (i === 0) {
    //       fila.push(
    //         <th
    //           key={`${i}-${j}`}
    //           className="relative criterio"
    //         >
    //           C{j}
    //           <button
    //             onClick={() => cambiarBoton(j)}
    //             className="absolute top-0 right-0"
    //           >
    //             {botones[j]}
    //           </button>
    //         </th>
    //       );
    //     } else if (j === 0) {
    //       fila.push(
    //         <TablaCelda
    //           key={`${i}-${j}`}
    //           tipo="header-input"
    //           valor={`A${i}`}
    //         />
    //       );
    //     } else {
    //       fila.push(
    //         <TablaCelda
    //           key={`${i}-${j}`}
    //           tipo="input"
    //         />
    //       );
    //     }
    //   }
    //   celdas.push(<tr key={i}>{fila}</tr>);
    // }
    // return celdas;

    return (
      <>
        <tr>
          <th></th>
          {[...Array(cantidad_criterios).keys()].map((i) => (
            <th
              key={i}
              className="relative criterio"
            >
              <input
                type="text"
                label={`C${i}`}
                defaultValue={`C${i}`}
              />
              <button
                onClick={(e) => cambiarTipoCriterio(e)}
                className="absolute -top-10 left-0 bg-red-500 p-1"
                value={"MAX"}
              >
                Max
              </button>
            </th>
          ))}
        </tr>
        {[...Array(cantidad_alternativas).keys()].map((i) => (
          <tr key={i}>
            <input
              type="text"
              label={`A${i}`}
              defaultValue={`A${i}`}
            />
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
