import { Select, SelectItem } from "@nextui-org/react";
import PropTypes from "prop-types";

const opciones = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  15: 15,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  20: 20, 
};

const EntradaDatos = ({ onAlternativasChange, onCriteriosChange }) => {
  return (
    <>
      <div className="w-full flex flex-center flex-wrap md:flex-nowrap gap-5 max-w-screen-xl">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <p className="text-center ">Ingrese la cantidad de Alternativas de Decisión (X)</p>
          <div className="flex w-full flex-wrap justify-center p-1">
            <Select
              color="secondary"
              variant="underlined"
              label="Alternativas"
              // placeholder="Seleccione cantidad de Alternativas"
              // defaultSelectedKeys={[opciones["2"]]}
              className="max-w-xs "
              isRequired
              onChange={(e) => onAlternativasChange(e.target.value)}
            >
              {Object.keys(opciones).map((opcion) => (
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

        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <p className="text-center ">Ingrese la cantidad de Criterios (Y)</p>
          <div className="w-full flex flex-wrap justify-center p-1">
            <Select
              color="secondary"
              variant="underlined"
              label="Criterios"
              // placeholder="Seleccione cantidad de Criterios"
              // defaultSelectedKeys={[opciones["2"]]}
              className="max-w-xs"
              isRequired
              onChange={(e) => onCriteriosChange(e.target.value)}
            >
              {Object.keys(opciones).map((opcion) => (
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
      </div>
    </>
  );
};

EntradaDatos.propTypes = {
  onAlternativasChange: PropTypes.func.isRequired,
  onCriteriosChange: PropTypes.func.isRequired,
};

export default EntradaDatos;
