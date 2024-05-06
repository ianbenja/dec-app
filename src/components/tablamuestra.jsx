import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const TablaMuestra = ({ data }) => {
  const { header, rows, pesos, cabezafilas } = data;
  const mostrarPesos = pesos && pesos.length > 0;
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        {header.map((columnName, index) => (
          <TableColumn key={index}>{columnName}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {/* Mostrar el nombre de la fila */}
            <TableCell>{cabezafilas[rowIndex]}</TableCell>
            {/* Renderizar las celdas restantes */}
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
        {mostrarPesos && (
          <TableRow>
            <TableCell>pesos</TableCell>
            {pesos.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TablaMuestra;
