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
  const {
    criterios,
    valores,
    pesos,
    alternativas,
    solucion,
    ideal,
    anti_ideal,
    suma,
    resultadosParciales,
    tipo,
  } = data;
  const mostrarPesos = pesos && pesos.length > 0 ? true : false;
  const mostrarIdeal = ideal && ideal.length > 0 ? true : false;
  const mostrarAntiIdeal = anti_ideal && anti_ideal.length > 0 ? true : false;
  const mostrarSuma = solucion && solucion.length > 0 ? true : false;
  const mostrarResultadosParciales =
    resultadosParciales && resultadosParciales.length > 0 ? true : false;

  console.log("suma", mostrarSuma, "peso", mostrarPesos);

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="text-xl text-center font-bold text-indigo-500">
          A \ C
        </TableColumn>
        {criterios.map((columnName, index) => (
          <TableColumn
            className="text-xl text-center font-bold text-indigo-500"
            key={index}
          >
            {columnName}
          </TableColumn>
        ))}
        {mostrarSuma ? (
          <TableColumn className="text-xl text-center font-bold text-indigo-500">
            Suma
          </TableColumn>
        ) : (
          <TableColumn
            hidden={true}
            className="text-xl text-center font-bold text-indigo-500"
          >
            Suma
          </TableColumn>
        )}
        {mostrarResultadosParciales ? (
          <TableColumn className="text-xl text-center font-bold text-indigo-500">
            {" "}
            Suma
          </TableColumn>
        ) : (
          <TableColumn
            hidden={true}
            className="text-xl text-center font-bold text-indigo-500"
          >
            Suma
          </TableColumn>
        )}
        {mostrarResultadosParciales ? (
          <TableColumn className="text-xl text-center font-bold text-indigo-500">
            {" "}
            {tipo === "Smas" ? "S+" : tipo === "Smenos" ? "S-" : ""}
          </TableColumn>
        ) : (
          <TableColumn
            hidden={true}
            className="text-xl text-center font-bold text-indigo-500"
          >
            {tipo === "Smas" ? "S+" : tipo === "Smenos" ? "S-" : ""}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {valores.map((valores, rowIndex) => (
          <TableRow key={rowIndex}>
            {/* Mostrar el nombre de la fila */}
            <TableCell className="text-xl text-center font-bold text-indigo-500">
              {alternativas[rowIndex]}
            </TableCell>
            {/* Renderizar las celdas restantes */}
            {valores.map((cell, cellIndex) => (
              <TableCell className=" text-center " key={cellIndex}>
                {cell}
              </TableCell>
            ))}
            {mostrarSuma ? (
              <TableCell className=" text-lg text-center text-bold text-pink-600 ">
                {solucion[rowIndex]}{" "}
              </TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}

            {mostrarResultadosParciales ? (
              <TableCell className=" text-center text-bold ">
                {suma[rowIndex]}{" "}
              </TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
            {mostrarResultadosParciales ? (
              <TableCell className=" text-lg text-center text-bold text-pink-600 ">
                {resultadosParciales[rowIndex]}{" "}
              </TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
          </TableRow>
        ))}

        {mostrarPesos && (
          <TableRow>
            <TableCell className="text-xl text-center font-bold text-indigo-500">
              Pesos
            </TableCell>
            {pesos.map((cell, cellIndex) => (
              <TableCell className=" text-center " key={cellIndex}>
                {cell}
              </TableCell>
            ))}
            {mostrarSuma ? (
              <TableCell hidden={true}>{0}</TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}

            {mostrarResultadosParciales ? (
              <TableCell hidden={true}>{0}</TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}

            {mostrarResultadosParciales ? (
              <TableCell hidden={true}>{0}</TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
          </TableRow>
        )}

        {mostrarIdeal && (
          <TableRow>
            <TableCell className="text-xl text-center font-bold text-indigo-500">
              A+
            </TableCell>
            {ideal.map((cell, cellIndex) => (
              <TableCell className=" text-center " key={cellIndex}>
                {cell}
              </TableCell>
            ))}
            {mostrarSuma ? (
              <TableCell hidden={true}>{0}</TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
            {mostrarResultadosParciales ? (
              <TableCell hidden={true}>{0}</TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}

            {mostrarResultadosParciales ? (
              <TableCell hidden={true}>{0}</TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
          </TableRow>
        )}

        {mostrarAntiIdeal && (
          <TableRow>
            <TableCell className="text-xl text-center font-bold text-indigo-500">
              A-
            </TableCell>
            {anti_ideal.map((cell, cellIndex) => (
              <TableCell className=" text-center " key={cellIndex}>
                {cell}
              </TableCell>
            ))}
            {mostrarSuma ? (
              <TableCell hidden={true}>{0}</TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}
            {mostrarResultadosParciales ? (
              <TableCell hidden={true}>{0}</TableCell>
            ) : (
              <TableCell hidden={true}>{0}</TableCell>
            )}

            {mostrarResultadosParciales ? (
              <TableCell hidden={true}>{0}</TableCell>
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
