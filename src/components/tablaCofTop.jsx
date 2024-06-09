import PropTypes from 'prop-types';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const TablaCoficientes = ({ data }) => {
  const { alternativas, resultados } = data;
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="text-xl text-center font-bold text-indigo-500">
          Alternativas
        </TableColumn>
        <TableColumn className="text-xl text-center font-bold text-indigo-500">C*</TableColumn>
      </TableHeader>
      <TableBody>
        {resultados.map((valores, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell className="text-xl text-center font-bold ">
              {alternativas[rowIndex]}
            </TableCell>
            <TableCell className="text-xl text-center font-bold valor-celda">
              <span title={valores}>{valores}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TablaCoficientes.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TablaCoficientes;
