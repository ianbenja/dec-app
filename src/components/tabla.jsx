import { useState } from "react";
import PropTypes from "prop-types";
import { TablaPesos } from "./TablaPesos.jsx";
import { TablaCuerpo } from "./TablaCuerpo.jsx";
import { TablaCabecera } from "./TablaCabecera.jsx";
import { Select, SelectItem } from "@nextui-org/react";
import { METODOS_NORMALIZACION, TIPO_CRITERIO } from "../constants/index.js";

const TablaInicial = ({
  cantidadAlternativas,
  cantidadCriterios,
  alternativas,
  setAlternativas,
  criterios,
  setCriterios,
  tiposDeCriterio,
  setTiposDeCriterio,
  matrizValores,
  setMatrizValores,
  pesos,
  setPesos,
  setMetodoNormalizacion,
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
    handleCambioValor(tiposDeCriterio, i, nuevoBotonesTipoCriterios[i].value, setTiposDeCriterio);
  };

  const handleCambioValor = (array, index, value, setFunction) => {
    const newArray = [...array];
    const newValue = parseFloat(value);
    newArray[index] = newValue ? newValue : value;
    setFunction(newArray);
  };

  const handleCambioValorMatriz = (matrizValores, i, j, value, setMatrizValores) => {
    const nuevaMatrizValores = [...matrizValores];
    nuevaMatrizValores[i][j] = parseFloat(value);
    setMatrizValores(nuevaMatrizValores);
  };

  const handleMostrarPesosChange = (e) => {
    setMostrarPesos(e.target.checked);
  };

  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <table className=" max-w-full max-md::max-w-7xl w-full overflow-x-scroll p-2 pt-12 mt-5 border-separate border-spacing-2 bg-zinc-800 rounded-2xl">
        <TablaCabecera
          cantidadCriterios={cantidadCriterios}
          tipoCriterios={botonesTipoCriterios}
          cambiarCriterios={(i, value) => handleCambioValor(criterios, i, value, setCriterios)}
          cambiarBotonTipoCriterio={handleCambioBotonTipoCriterio}
        />
        <TablaCuerpo
          cantidadAlternativas={cantidadAlternativas}
          cantidadCriterios={cantidadCriterios}
          cambiarAlternativas={(i, value) =>
            handleCambioValor(alternativas, i, value, setAlternativas)
          }
          cambiarMatrizValores={(i, j, value) => {
            handleCambioValorMatriz(matrizValores, i, j, value, setMatrizValores);
          }}
          cambiarPesos={(i, value) => handleCambioValor(pesos, i, value, setPesos)}
        />
      </table>
      <TablaPesos
        cantidadCriterios={cantidadCriterios}
        mostrarPesos={mostrarPesos}
        handleMostrarPesosChange={handleMostrarPesosChange}
        cambiarPesos={(i, value) => handleCambioValor(pesos, i, value, setPesos)}
      />

      <div className="flex justify-center items-center mt-5">
        <Select
          color="secondary"
          variant="underlined"
          label="Método de Normalización"
          labelPlacement="outside"
          placeholder="Método"
          // defaultSelectedKeys={[opciones["2"]]}
          className="max-w-xs "
          isRequired
          onChange={(e) => setMetodoNormalizacion(e.target.value)}
        >
          {Object.keys(METODOS_NORMALIZACION).map((opcion) => (
            <SelectItem
              key={opcion}
              value={opcion}
            >
              {opcion}
            </SelectItem>
          ))}
        </Select>
      </div>
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
  tiposDeCriterio: PropTypes.array.isRequired,
  setTiposDeCriterio: PropTypes.func.isRequired,
  matrizValores: PropTypes.array.isRequired,
  setMatrizValores: PropTypes.func.isRequired,
  pesos: PropTypes.array.isRequired,
  setPesos: PropTypes.func.isRequired,
  setMetodoNormalizacion: PropTypes.func.isRequired,
};

export default TablaInicial;
