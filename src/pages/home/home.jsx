import React from "react";
import NavBarHome from "./navbar";
import { PRESENTACION } from "../../constants";

const Home = () => {
  return (
    <>
      <div>
        <NavBarHome />
      </div>
      <div className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
        {PRESENTACION.title}{" "}
      </div>
      <div className="text-center mt-4">{PRESENTACION.description}</div>
    </>
  );
};

export default Home;
