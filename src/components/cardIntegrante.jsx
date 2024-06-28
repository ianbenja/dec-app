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
import LinkedInIcon from "./iconos/LinkedIn.jsx";
import InstagramIcon from "./iconos/Intragram.jsx";

export default function CardIntegrante({
  integrante: {
    imagen,
    nombre,
    rol,
    descripcion,
    redes: { github, linkedIn, instagram },
  },
}) {
  return (
    <Card
      shadow="lg"
      isHoverable
      className="py-4"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center">
        <h2 className="font-bold text-xl">{nombre || "Integrante"}</h2>
        <p className="">{rol || "CEO"}</p>
        <p className="">{descripcion || ""}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 grid justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imagen || "https://nextui.org/images/hero-card-complete.jpeg"}
          width={270}
        />
      </CardBody>
      <CardFooter className="flex justify-center gap-3">
        {github && (
          <Link
            to={github || "https://github.com/"}
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        )}
        {linkedIn && (
          <Link
            to={linkedIn || "https://www.linkedin.com/"}
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
        )}
        {instagram && (
          <Link
            to={instagram || "https://www.instagram.com/"}
            target="_blank"
          >
            <InstagramIcon />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

CardIntegrante.propTypes = {
  integrante: PropTypes.shape({
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    rol: PropTypes.string,
    descripcion: PropTypes.string,
    redes: PropTypes.shape({
      github: PropTypes.string,
      linkedIn: PropTypes.string,
      instagram: PropTypes.string,
    }),
  }),
};
