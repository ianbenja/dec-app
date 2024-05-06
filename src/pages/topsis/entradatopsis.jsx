import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const EntradaTopsis = () => {
  return (
    <>
      <div className=" flex flex-center ">
        <div className="w-full lg:w-1/2  flex flex-wrap justify-center ">
          <p>Ingrese la cantidad de Variables de Decisión (X)</p>

          <div className="w-full flex flex-wrap  justify-center">
            <Select
              color="primary"
              label="Variables"
              placeholder="Variables"
              defaultSelectedKeys={[2]}
              className="max-w-xs"
            >
              <SelectItem value={2}>2</SelectItem>
              <SelectItem value={3}>3</SelectItem>
              <SelectItem value={4}>4</SelectItem>
              <SelectItem value={5}>5</SelectItem>
            </Select>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-wrap  justify-center">
          <p>Ingrese la cantidad de Estados de la Naturaleza (Y)</p>
          <div className="w-full flex flex-wrap  justify-center">
            <Select
              color="primary"
              label="Estados"
              placeholder="Estados"
              defaultSelectedKeys={[2]}
              className="max-w-xs"
            >
              <SelectItem value={2}>2</SelectItem>
              <SelectItem value={3}>3</SelectItem>
              <SelectItem value={4}>4</SelectItem>
              <SelectItem value={5}>5</SelectItem>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntradaTopsis;
