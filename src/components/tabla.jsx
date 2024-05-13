import { useState } from "react";
import PropTypes from "prop-types";
import { MaxIcon } from "./iconos/maxIcon.jsx";
import { MinIcon } from "./iconos/minIcon.jsx";
import { TablaPesos } from "./tablaPesos.jsx";
import { TablaCuerpo } from "./tablaCuerpo.jsx";
import { TablaCabecera } from "./tablaCabecera.jsx";

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
    newArray[index] = value;
    setFunction(newArray);
  };

  const handleMostrarPesosChange = (e) => {
    setMostrarPesos(e.target.checked);
  };

  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <table className="w-full p-2 pt-12 mt-5 border-separate border-spacing-2 bg-zinc-800 rounded-2xl">
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
            const nuevaMatrizValores = [...matrizValores];
            nuevaMatrizValores[i][j] = value;
            setMatrizValores(nuevaMatrizValores);
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
};

export default TablaInicial;
