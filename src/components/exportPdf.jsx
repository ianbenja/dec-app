import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button } from "@nextui-org/react";
import { FaFileDownload } from "react-icons/fa";
import PropTypes from "prop-types";

const ExportToPDF = ({ datosOriginales, datosOrden, paginaTitulo, titlePDF }) => {
  const doc = new jsPDF();
  const columns = ["A \\ C", ...datosOriginales.criterios];
  const criterios = [" ", ...datosOriginales.tipos_criterios];
  const rows = datosOriginales.alternativas.map((alternativa, rowIndex) => [
    alternativa,
    ...datosOriginales.valores[rowIndex],
  ]);
  if (datosOriginales.pesos) {
    rows.push(["Pesos", ...datosOriginales.pesos]);
  }
  const columnsOrden = ["Posición", "Alternativa", "Valor"];
  const rowsOrden = datosOrden.alternativas.map((alternativa, index) => [
    index + 1,
    alternativa,
    datosOrden.solucion[index],
  ]);

  doc.text(paginaTitulo, 14, 10);

  doc.text("Tabla Original", 14, 20);

  doc.autoTable({
    head: [columns],
    body: [criterios, ...rows],
    startY: 30,
  });

  doc.text("Tabla Ordenada", 14, doc.autoTable.previous.finalY + 20);
  doc.autoTable({
    head: [columnsOrden],
    body: rowsOrden,
    startY: doc.autoTable.previous.finalY + 30,
  });

  return (
    <>
      <Button
        onClick={() => {
          doc.save(titlePDF + ".pdf");
        }}
        radius="md"
        className="w-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        style={{ width: "200px" }}
        endContent={<FaFileDownload />}
      >
        Descargar PDF
      </Button>
    </>
  );
};

// Add the 'datosOrden' prop to the props validation
ExportToPDF.propTypes = {
  datosOriginales: PropTypes.object.isRequired,
  datosOrden: PropTypes.object.isRequired,
  paginaTitulo: PropTypes.string.isRequired,
  titlePDF: PropTypes.string.isRequired,
};

export default ExportToPDF;
