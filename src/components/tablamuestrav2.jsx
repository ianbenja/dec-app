import PropTypes from "prop-types";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { TIPO_CRITERIO } from "../constants/index.js";

const TablaMuestra = ({ data }) => {
  const { criterios, tipos_criterios, alternativas, valores, pesos, solucion } =
    data;
  const mostrarPesos = pesos && pesos.length > 0 ? true : false;
  const mostrarSuma = solucion && solucion.length > 0 ? true : false;

  return (
    <Table aria-label="Example static collection table" className="text-center">
      <TableHeader>
        <TableColumn
          align="center"
          className="text-xl text-wrap font-bold text-indigo-500"
        >
          Alternativas \ Criterios
        </TableColumn>
        {criterios.map((columnName, index) => (
          <TableColumn
            key={"C" + index}
            className="relative text-xl text-center font-bold text-indigo-500"
          >
            {columnName}

            <Button
              isDisabled
              color={
                tipos_criterios[index] === TIPO_CRITERIO.Max.value
                  ? TIPO_CRITERIO.Max.color
                  : TIPO_CRITERIO.Min.color
              }
              radius="none"
              className="absolute -top-11 left-1/2 transform -translate-x-1/2"
              endContent={
                tipos_criterios[index] === TIPO_CRITERIO.Max.value
                  ? TIPO_CRITERIO.Max.icon
                  : TIPO_CRITERIO.Min.icon
              }
            >
              {tipos_criterios[index]}
            </Button>
          </TableColumn>
        ))}
        {mostrarSuma ? (
          <TableColumn className="text-xl text-center font-bold text-indigo-500">
            Suma
          </TableColumn>
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
        {valores.map((row, rowIndex) => (
          <TableRow key={"A" + rowIndex}>
            {/* Mostrar el nombre de la fila */}
            <TableCell className="text-xl font-bold text-indigo-500">
              <span>{alternativas[rowIndex]}</span>
            </TableCell>
            {/* Renderizar las celdas restantes */}
            {row.map((cell, cellIndex) => (
              <TableCell key={"V" + rowIndex + "-" + cellIndex}>
                {cell}
              </TableCell>
            ))}

            {mostrarSuma ? (
              <TableCell className=" text-lg text-bold text-pink-600 ">
                {solucion[rowIndex]}{" "}
              </TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
          </TableRow>
        ))}
        {mostrarPesos && (
          <TableRow>
            {mostrarPesos && (
              <TableCell className="text-xl font-bold text-indigo-500">
                Pesos
              </TableCell>
            )}
            {pesos.map((cell, cellIndex) => (
              <TableCell key={"P" + cellIndex}>{cell}</TableCell>
            ))}
            {mostrarSuma ? (
              <TableCell></TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

TablaMuestra.propTypes = {
  data: PropTypes.shape({
    criterios: PropTypes.array,
    tipos_criterios: PropTypes.array,
    alternativas: PropTypes.array,
    valores: PropTypes.array,
    pesos: PropTypes.array,
    solucion: PropTypes.array,
  }),
};

export default TablaMuestra;
