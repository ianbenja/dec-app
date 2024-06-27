import CardIntegrante from "../../components/cardIntegrante.jsx";

const Contact = () => {
  return (
    <>
      <div className="text-center mt-16 text-4xl lg:mt-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600  dark:from-pink-300 dark:via-slate-300 dark:to-purple-500  bg-clip-text tracking-tight text-transparent">
        CONTACTO
      </div>
      <section className="flex flex-col xl:flex-row justify-center mt-10 gap-5">
        <CardIntegrante
          imagen="./integrantes/eze.png"
          nombre="Ezequiel Luzaro"
          rol="Backend Developer"
        ></CardIntegrante>
        <CardIntegrante
          imagen="./integrantes/giuliano.png"
          nombre="Giuliano Charra Marquez"
          rol="Frontend Developer"
          github="https://github.com/GiulianoCharra"
        ></CardIntegrante>
        <CardIntegrante
          imagen="./integrantes/ian.png"
          nombre="Ian "
          rol="Full-Stack"
        ></CardIntegrante>
      </section>
    </>
  );
};

export default Contact;
