import React from "react";
import PropTypes from "prop-types";

const tipo_celda = {
    "header-text": (valor) => <th>{valor}</th>,
    "header-input": (valor) => (
        <th>
            <input
                type="text"
                value={valor}
            />
        </th>
    ),
    "text": (valor) => <td>{valor}</td>,
    "input": (valor) => (
        <td>
            <input
                type="text"
                value={valor}
            />
        </td>
    )
};

const TablaCelda = ({ tipo, valor }) => {
    const Componente = tipo_celda[tipo];
    return Componente ? <Componente valor={valor} /> : null;
};

TablaCelda.propTypes = {
    tipo: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
};

export default TablaCelda;