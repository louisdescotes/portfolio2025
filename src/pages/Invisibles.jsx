import Page from "../layout/page";
import { motion } from "framer-motion";
import ViewApparitionSentence from "../utils/viewApparitionSentence";

const Invisibles = () => {
  return (
    <Page
      name="Invisibles"
      photo="invisibles"
      photoName="invisiblesbg"
      number="02"
      className="developpement - design - 3D"
      roles="Développeur & designer"
      client="Projet perso"
      annee="2024"
      footer="poyzeet"
    >
      <section className="w-full flex justify-center textDescriptionProjet py-32">
        <article className="max-w-xl flex flex-col gap-6">
          <ViewApparitionSentence delay={0}>
            Avec l'accès précoce à Internet, les jeunes passent de plus en plus
            de temps sur les réseaux sociaux. Malheureusement, derrière l'écran
            et l'anonymat de certains comptes, le harcèlement en ligne devient
            plus facile, et les chiffres sont en constante augmentation depuis
            l'année dernière. Mon projet, Invisibles, est un site interactif
            conçu pour sensibiliser les collégiens à cette problématique.
            L'expérience plonge les visiteurs dans le quotidien d'une
            collégienne victime de harcèlement.
          </ViewApparitionSentence>
          <ViewApparitionSentence delay={0.1}>
            J'ai choisi d'exploiter largement la 3D pour capter l'attention de
            ce jeune public. L'accent a été mis sur les visuels plutôt que sur
            le texte, afin de créer un impact émotionnel puissant et de rendre
            le message plus accessible et percutant.
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
          <source src="/img/invisibles/invisibles0.mp4" type="video/mp4" />
        </motion.video>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full"
          src="/img/invisibles/invisibles3.jpg"
          alt=""
        />
        <motion.video
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          controls
          muted
          autoPlay
        >
          <source src="/img/invisibles/invisibles1.mp4" type="video/mp4" />
        </motion.video>
        <motion.video
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          controls
          muted
          autoPlay
        >
          <source src="/img/invisibles/invisibles2.mp4" type="video/mp4" />
        </motion.video>
      </section>
    </Page>
  );
};
export default Invisibles;
