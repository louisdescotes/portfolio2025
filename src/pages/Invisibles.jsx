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
            Poyzeet vous propose des vinyles de bruits blancs, pour ceux qui
            cherchent à se reconnecter avec eux-mêmes. Les bruits blancs
            permettent à se concentrer, dormir plus facilement.
          </ViewApparitionSentence>
          <ViewApparitionSentence delay={0.1}>
            Ce projet à pour but de créer un site vitrine autour d’un produit
            moderne et très niche. Pour cela, j’ai donc décidé de créer une
            courte animation en 3D du produit. Il ne faut pas oublier qu’un
            vinyle au delà de sa fonction première de produire de la musique et
            aussi un objet esthétique. C’est pourquoi il est aussi important de
            jouer sur cet aspect.
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
