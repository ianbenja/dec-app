import React from "react";
import ReactDOM from "react-dom/client";
import Rutas from "./routes/routes.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <style>
        {`
          main {
            min-height: 100vh;
          }
          body {
            margin: 0; /* Elimina los márgenes predeterminados */
          }
        `}
      </style>
      <main className="dark text-foreground bg-background px-5">
        <Rutas />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
