import Page from "../layout/page";
import { motion } from "framer-motion";
import ViewApparitionSentence from "../utils/viewApparitionSentence";

const Sparky = () => {
  return (
    <Page
      name="Sparky"
      photo="sparky"
      photoName="sparky1"
      number="01"
      className="developpement - design - 3D"
      roles="Développeur & designer"
      client="Projet perso"
      annee="2024"
      footer="invisibles"
    >
      <section className="w-full flex justify-center textDescriptionProjet py-32">
        <article className="max-w-xl flex flex-col gap-6">
            <ViewApparitionSentence delay={0}>
            Sparky est un projet fictif que j’ai créer principalement pour
            mettre au défis mes compétences apprises en threejs et react.
            </ViewApparitionSentence>
            <ViewApparitionSentence delay={.1}>
            Mon idée est de créer un sorte de SASS, un logiciel/application
            permettant d’analyser et d’améliorer un business quelconque d’un
            utilisateur.
            </ViewApparitionSentence>
        </article>
      </section>
      <section className="flex flex-col gap-16 pb-32">
        <motion.video
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          controls
          muted
          autoPlay
        >
          <source src="/img/sparky/sparky.mp4" type="video/mp4" />
        </motion.video>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full"
          src="/img/sparky/sparky1.jpg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full"
          src="/img/sparky/sparky2.jpg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full"
          src="/img/sparky/sparky3.jpg"
          alt=""
        />
      </section>
    </Page>
  );
};
export default Sparky;
