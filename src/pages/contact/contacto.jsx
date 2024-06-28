import CardIntegrante from "../../components/cardIntegrante.jsx";
import { INTENTANTES } from "../../constants/index.js";

const Contact = () => {
  return (
    <>
      <div className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
        CONTACTO
      </div>
      <section className="flex flex-col xl:flex-row justify-center mt-10 gap-5">
        <CardIntegrante integrante={INTENTANTES.EZE}></CardIntegrante>
        <CardIntegrante integrante={INTENTANTES.GIULIANO}></CardIntegrante>
        <CardIntegrante integrante={INTENTANTES.IAN}></CardIntegrante>
        <CardIntegrante integrante={INTENTANTES.JUAN}></CardIntegrante>
      </section>
    </>
  );
};

export default Contact;
