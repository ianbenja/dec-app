import React from "react";
import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

const Confirmar = ({ onClick }) => {
  return (
    <>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        onClick={onClick}
      >
        Confirmar
      </Button>
    </>
  );
};

Confirmar.propTypes = { onClick: PropTypes.func.isRequired };

export default Confirmar;
