import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const TablaMuestra = ({ data }) => {
  const { header, rows, pesos, cabezafilas, sumaTabla } = data;
  const mostrarPesos = pesos && pesos.length > 0 ? true : false;
  const mostrarSuma = sumaTabla && sumaTabla.length > 0 ? true : false;

  console.log("suma", mostrarSuma, "peso", mostrarPesos);

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        {header.map((columnName, index) => (
          <TableColumn
            className="text-xl font-bold text-indigo-500"
            key={index}
          >
            {columnName}
          </TableColumn>
        ))}
        {mostrarSuma ? (
          <TableColumn className="text-xl font-bold text-indigo-500">Suma</TableColumn>
        ) : (
          <TableColumn
            hidden={true}
            className="text-xl font-bold text-indigo-500"
          >
            Suma
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {/* Mostrar el nombre de la fila */}
            <TableCell className="text-xl font-bold text-indigo-500">
              {cabezafilas[rowIndex]}
            </TableCell>
            {/* Renderizar las celdas restantes */}
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
            {mostrarSuma ? (
              <TableCell className=" text-lg text-bold text-pink-600 ">
                {sumaTabla[rowIndex]}{" "}
              </TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
          </TableRow>
        ))}

        {mostrarPesos && (
          <TableRow>
            <TableCell className="text-xl font-bold text-indigo-500">Pesos</TableCell>
            {pesos.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
            {mostrarSuma ? (
              <TableCell>{sumaTabla[rowIndex]} </TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TablaMuestra;
