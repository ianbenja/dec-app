import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "../components/home/home";
import PaginaTopsis from "../components/topsis/paginatopsis";
import PaginaMoora from "../components/moora/paginamoora";

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
]);

const Rutas = () => {
  return <RouterProvider router={router} />;
};
export default Rutas;
