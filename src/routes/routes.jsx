import { RouterProvider, createHashRouter } from "react-router-dom";
import PaginaPonderacion from "../pages/ponderacion/ponderacion.jsx";
import PaginaMoora from "../pages/moora/paginamoora.jsx";
import PaginaTopsis from "../pages/topsis/paginatopsis.jsx";
import Home from "../pages/home/home.jsx";
import Error404 from "../pages/error/Error404.jsx";
import Docs from "../pages/docs/documentacion.jsx";
import Contact from "../pages/contact/contacto.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ponderacion",
    element: <PaginaPonderacion />,
  },
  {
    path: "/moora",
    element: <PaginaMoora />,
  },
  {
    path: "/topsis",
    element: <PaginaTopsis />,
  },
  {
    path: "/documentacion",
    element: <Docs />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const Rutas = () => {
  return <RouterProvider router={router} />;
};
export default Rutas;
