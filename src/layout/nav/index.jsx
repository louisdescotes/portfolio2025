import { Link } from "react-router-dom";
import TextAppear from "../../utils/textAppear";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <header className="absolute top-0 w-full h-24 isolation-auto">
      <nav className="maxWidth w-full h-full flex items-center justify-between lg:px-20 2xl:px-20 px-5">
        <Link
          to="/"
          className="flex items-center gap-4 mix-blend-difference z-50"
        >
            <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1]}}
            className="flex items-center gap-4">

          <div
            className="size-8"
          >
            <img
              className="mix-blend-difference w-full h-full"
              src="/svg/logo.svg"
              alt="Logo"
            />
          </div>
          <div>
            <p
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="logoName text-[#FAFAFA]  "
            >
              Louis Descotes
            </p>
            <p
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="roleName text-[#FAFAFA]  "
            >
              Développeur Front-end
            </p>
            </div>
            </motion.div>
        </Link>
        <Link
          to="/about"
          className="subtitleDescriptionProjet text-[#FAFAFA] mix-blend-difference z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <TextAppear>About</TextAppear>
          </motion.div>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
