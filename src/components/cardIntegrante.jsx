import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GitHubIcon from "./iconos/GitHub.jsx";

export default function CardIntegrante({
  imagen,
  nombre,
  rol,
  descripcion,
  github,
}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-xl">{nombre || "Integrante"}</h2>
        <p className="">{rol || "CEO"}</p>
        <p className="">{descripcion || ""}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imagen || "https://nextui.org/images/hero-card-complete.jpeg"}
          width={270}
        />
      </CardBody>
      <CardFooter className="flex">
        <Link
          to={github || "https://github.com/"}
          target="_blank"
        >
          <GitHubIcon />
        </Link>
      </CardFooter>
    </Card>
  );
}

CardIntegrante.propTypes = {
  imagen: PropTypes.string,
  nombre: PropTypes.string,
  rol: PropTypes.string,
  descripcion: PropTypes.string,
  github: PropTypes.string,
};
