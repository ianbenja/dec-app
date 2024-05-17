import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const numeroDecimales = 5;
const decimales = Math.pow(10, numeroDecimales)

const TablaOrden = ({ data }) => {
  const { alternativas, solucion } = data;
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="text-xl text-center font-bold text-indigo-500">
          Posicion
        </TableColumn>
        <TableColumn className="text-xl text-center font-bold text-indigo-500">
          Alternativas
        </TableColumn>
        <TableColumn className="text-xl text-center font-bold text-indigo-500">
          Valor
        </TableColumn>
      </TableHeader>
      <TableBody>
        {solucion.map((valores, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell className="text-xl text-center font-bold ">
              {rowIndex + 1}
            </TableCell>
            <TableCell className="text-xl text-center font-bold ">
              {alternativas[rowIndex]}
            </TableCell>
            <TableCell className="text-xl text-center font-bold ">
              {Math.round(valores * decimales) / decimales}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TablaOrden;
