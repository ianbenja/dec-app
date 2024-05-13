import { RouterProvider, createHashRouter } from "react-router-dom";
import PaginaMoora from "../pages/moora/paginamoora.jsx";
import PaginaTopsis from "../pages/topsis/paginatopsis.jsx";
import Home from "../pages/home/home.jsx";
import Error404 from "../pages/error/Error404.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "*",
    element: <Error404 />,
  },
]);

const Rutas = () => {
  return <RouterProvider router={router} />;
};
export default Rutas;
