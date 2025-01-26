import { motion } from "framer-motion";
import SentenceAppear from "../utils/sentenceAppear";
import Footer from "./footer";

const Page = ({name, photo, photoName, number, className, roles, client, annee, footer, children }) => {
    return (
        <section id="top" className="overflow-hidden">
            <section
                className="relative gridCol h-screen w-full bg-cover text-[#FAFAFA] "
            >
                <motion.img 
                initial={{ transform: 'scale(1)' }}
                animate={{ transform: 'scale(1.05)' }}
                transition={{ duration: 1, ease: "easeOut" }} 
                src={`/img/${photo}/${photoName}.jpg`} alt="" className="absolute h-screen w-full object-cover -z-50"/>
                <div className="flex flex-col justify-center items-center col-start-3 col-end-5 row-start-2 row-end-5 ">
                    <SentenceAppear style="apocBase" delay={.5}>{number}</SentenceAppear>
                    <SentenceAppear style="titleProjet" delay={.3}>{name}</SentenceAppear>
                    <SentenceAppear style="apocBase text-center lg:text-justify" delay={.4} >{className}</SentenceAppear>
                </div>
                <div className="hidden md:flex justify-between col-start-2 col-end-6 row-start-5 row-end-6">
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <SentenceAppear style="titleDescriptionProjet text-[#CDCDCD]" delay={.45}>Role</SentenceAppear>
                        <SentenceAppear style="subtitleDescriptionProjet" delay={.5}>{roles}</SentenceAppear>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <SentenceAppear style="titleDescriptionProjet text-[#CDCDCD]" delay={.45}>Client</SentenceAppear>
                        <SentenceAppear style="subtitleDescriptionProjet" delay={.5}>{client}</SentenceAppear>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <SentenceAppear style="titleDescriptionProjet text-[#CDCDCD]" delay={.45}>Annee</SentenceAppear>
                        <SentenceAppear style="subtitleDescriptionProjet" delay={.5}>{annee}</SentenceAppear>
                    </div>
                </div>
            </section>

            <section
                className="lg:px-20 px-5 maxWidth"
            >
                {children}
            </section>

            <Footer nextName={footer} />
        </section>
    );
};

export default Page;
