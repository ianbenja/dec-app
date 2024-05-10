import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";
import { MaxIcon } from "./iconos/MaxIcon.jsx";
import { MinIcon } from "./iconos/MinIcon.jsx";

const TIPO_CRITERIO = {
  Max: {
    value: "MAX",
    text: "Max",
    color: "danger",
    icon: <MaxIcon />,
  },
  Min: {
    value: "MIN",
    text: "Min",
    color: "primary",
    icon: <MinIcon />,
  },
};

// Componente para el encabezado de la tabla
const TablaCabecera = ({
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
            className="relative criterio"
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

// Componente para el cuerpo de la tabla
const TablaCuerpo = ({
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

// Componente para la tabla de pesos
const TablaPesos = ({
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

// Componente principal que engloba todo
const TablaInicial = ({
  cantidadAlternativas,
  cantidadCriterios,

  alternativas,
  setAlternativas,
  criterios,
  setCriterios,
  tiposDeCriterios,
  setTiposDeCriterio,
  matrizValores,
  setMatrizValores,
  pesos,
  setPesos,
}) => {
  const [botonesTipoCriterios, setTipoCriterio] = useState(
    Array(cantidadCriterios).fill(TIPO_CRITERIO.Max)
  );
  const [mostrarPesos, setMostrarPesos] = useState(true);

  const handleCambioBotonTipoCriterio = (i) => {
    const nuevoBotonesTipoCriterios = [...botonesTipoCriterios];
    nuevoBotonesTipoCriterios[i] =
      nuevoBotonesTipoCriterios[i].value === TIPO_CRITERIO.Max.value
        ? TIPO_CRITERIO.Min
        : TIPO_CRITERIO.Max;
    setTipoCriterio(nuevoBotonesTipoCriterios);

    handleCambioTiposDeCriterio(i, nuevoBotonesTipoCriterios[i].value);
  };

  const hableCambioCriterio = (i, value) => {
    const nuevosCriterios = [...criterios];
    nuevosCriterios[i] = value;
    setCriterios(nuevosCriterios);
  };

  const handleCambioTiposDeCriterio = (i, value) => {
    const nuevosTiposDeCriterios = [...tiposDeCriterios];
    nuevosTiposDeCriterios[i] = value;
    setTiposDeCriterio(nuevosTiposDeCriterios);
  };

  const handleCambioAlternativas = (i, value) => {
    const nuevasAlternativas = [...alternativas];
    nuevasAlternativas[i] = value;
    setAlternativas(nuevasAlternativas);
  };

  const handleCambioMatrizValores = (i, j, value) => {
    const nuevaMatrizValores = [...matrizValores];
    nuevaMatrizValores[i][j] = value;
    setMatrizValores(nuevaMatrizValores);
  };

  const handleMostrarPesosChange = (e) => {
    setMostrarPesos(e.target.checked);
  };

  const handleCambioPesos = (i, value) => {
    const nuevosPesos = [...pesos];
    nuevosPesos[i] = value;
    setPesos(nuevosPesos);
  };

  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <table className="w-full p-2 pt-12 mt-5 border-separate border-spacing-2 bg-zinc-800 rounded-2xl">
        <TablaCabecera
          cantidadCriterios={cantidadCriterios}
          tipoCriterios={botonesTipoCriterios}
          cambiarCriterios={hableCambioCriterio}
          cambiarBotonTipoCriterio={handleCambioBotonTipoCriterio}
        />
        <TablaCuerpo
          cantidadAlternativas={cantidadAlternativas}
          cantidadCriterios={cantidadCriterios}
          cambiarAlternativas={handleCambioAlternativas}
          cambiarMatrizValores={handleCambioMatrizValores}
          cambiarPesos={handleCambioPesos}
        />
      </table>
      <TablaPesos
        cantidadCriterios={cantidadCriterios}
        mostrarPesos={mostrarPesos}
        handleMostrarPesosChange={handleMostrarPesosChange}
        cambiarPesos={handleCambioPesos}
      />
    </div>
  );
};

TablaInicial.propTypes = {
  cantidadAlternativas: PropTypes.number.isRequired,
  cantidadCriterios: PropTypes.number.isRequired,

  alternativas: PropTypes.array.isRequired,
  setAlternativas: PropTypes.func.isRequired,

  criterios: PropTypes.array.isRequired,
  setCriterios: PropTypes.func.isRequired,

  tiposDeCriterios: PropTypes.array.isRequired,
  setTiposDeCriterio: PropTypes.func.isRequired,

  matrizValores: PropTypes.array.isRequired,
  setMatrizValores: PropTypes.func.isRequired,
  
  pesos: PropTypes.array.isRequired,
  setPesos: PropTypes.func.isRequired,
};

export default TablaInicial;
