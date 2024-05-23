import { PRESENTACION } from "../../constants";
import CardComponent from "../../components/card";

const Home = () => {
  return (
    <>
      <div className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
        {PRESENTACION.title}
      </div>
      <div className="text-center mt-4">{PRESENTACION.description}</div>
      <div className="text-center mt-4">{PRESENTACION.description2}</div>
      <div className="text-center mt-12">
        <CardComponent />
      </div>
    </>
  );
};

export default Home;
