import { Link } from "@nextui-org/react";
import { useRouteError } from "react-router-dom";

const Error404 = () => {
  // Hook to get the error
  const error = useRouteError();
  console.log(error);
  return (
    // Error 404 page
    <div className="flex flex-col items-center justify-center grow">
      <h1>Error 404</h1>
      <p>La página {error?.location.pathname} no existe</p>
      <Link href="#">Volver al inicio</Link>
    </div>
  );
};

export default Error404;
