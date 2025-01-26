import { motion } from "framer-motion";
import SentenceAppear from "../utils/sentenceAppear";
import TextAppear from "../utils/textAppear";
import ViewTextAppear from "../utils/viewTextAppear";

const About = () => {
  return (
    <section className="gridCol h-dvh maxWidth overflow-hidden">
      <aside className="col-start-1 col-end-6 lg:col-end-4 xl:col-end-3 row-start-2 row-end-5 flex justify-center flex-col lg:pl-[100px] lg:px-0 2xl:px-20 px-5">
        <ViewTextAppear style="aboutTitle">Hello</ViewTextAppear>
        <SentenceAppear style="subtitleDescriptionProjet" delay={0.2}>
          Passionné par le web et le design, je m’inspire des sites primés pour
          recréer et réinventer des effets interactifs captivant qui
          enrichissent l’expérience utilisateur
        </SentenceAppear>
        <div className="flex pt-6 pb-12">
          <SentenceAppear style="subtitleDescriptionProjet" delay={0.5}>
            Actuellement en alternance chez Beease Digital
          </SentenceAppear>
        </div>
        <div className="flex items-center gap-14 overflow-hidden">
          <motion.a
            initial={{ y: "80%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], delay: 0.6, duration: 1 }}
            className="titleDescriptionProjet"
            href="https://www.linkedin.com/in/louis-descotes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextAppear>Linkedin</TextAppear>
          </motion.a>
          <motion.a
            initial={{ y: "80%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], delay: 0.6, duration: 1 }}
            className="titleDescriptionProjet"
            href="https://x.com/ldescotes1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextAppear>X</TextAppear>
          </motion.a>
          <motion.a
            initial={{ y: "80%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], delay: 0.6, duration: 1 }}
            className="titleDescriptionProjet"
            href="https://github.com/louisdescotes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextAppear>Git</TextAppear>
          </motion.a>
          <motion.a
            initial={{ y: "80%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], delay: 0.6, duration: 1 }}
            className="titleDescriptionProjet"
            href="mailto:ldescotes1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextAppear>Email</TextAppear>
          </motion.a>
        </div>
      </aside>
    </section>
  );
};
export default About;
