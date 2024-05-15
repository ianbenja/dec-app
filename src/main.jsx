import React from "react";
import ReactDOM from "react-dom/client";
import Rutas from "./routes/routes.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBarHome from "./components/navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background px-5 pb-10 flex flex-col items-center">
        <NavBarHome />
        <Rutas />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
