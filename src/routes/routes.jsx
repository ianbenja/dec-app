import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import PaginaMoora from "../pages/moora/paginamoora.jsx";
import PaginaTopsis from "../pages/topsis/paginatopsis.jsx";
import Home from "../pages/home/home.jsx";

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
