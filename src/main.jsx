import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Rutas from "./routes/routes.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBarHome from "./components/navbar.jsx";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <React.StrictMode>
      <NextUIProvider>
        <main
          className={`${theme} text-foreground bg-background px-5 pb-10 flex flex-col items-center transition-colors`}
        >
          <NavBarHome theme={theme} setTheme={setTheme} />
          <Rutas />
        </main>
      </NextUIProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
