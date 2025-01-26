import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Accueil = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <section className="flex gap-24 w-full h-full maxWidth">
      <section className="gridCol lg:max-w-[50%] ">
        <aside className="flex flex-col justify-center items-center row-start-2 row-end-5 col-start-1 col-end-7 lg:col-end-7 lg:pl-[100px] 2xl:px-0 lg:px-0 px-5">
          <Link
            onMouseEnter={() => {
              setHoveredLink("sparky");
            }}
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
            to="/sparky"
            className="h-full flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center w-full "
          >
            <div className="flex items-center relative">
              <p
                className={` ${
                  hoveredLink === "sparky" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } projet lg:pl-4 pt-3`}
              >
                Sparky
              </p>
              <span
                className={` ${
                  hoveredLink === "sparky" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } apocBase absolute top-0`}
              >
                01
              </span>
            </div>
            <p
              className={` apocBase flex items-center ${
                hoveredLink === "sparky" || hoveredLink === null
                  ? "text-[#151414]"
                  : "text-[#CDCDCD]"
              }`}
            >
              developpement - design - 3D
            </p>
          </Link>

          <Link
            onMouseEnter={() => {
              setHoveredLink("invisibles");
            }}
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
            to="/invisibles"
            className="h-full flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center w-full"
          >
            <div className="flex items-center relative">
              <p
                className={` ${
                  hoveredLink === "invisibles" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } projet lg:pl-4 pt-3`}
              >
                Invisibles
              </p>
              <span
                className={` ${
                  hoveredLink === "invisibles" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } apocBase absolute top-0`}
              >
                02
              </span>
            </div>
            <p
              className={` apocBase flex items-center ${
                hoveredLink === "invisibles" || hoveredLink === null
                  ? "text-[#151414]"
                  : "text-[#CDCDCD]"
              }`}
            >
              developpement - design - 3D
            </p>
          </Link>

          <Link
            onMouseEnter={() => {
              setHoveredLink("poyzeet");
            }}
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
            to="/poyzeet"
            className="h-full flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center w-full"
          >
            <div className="flex items-center relative">
              <p
                className={` ${
                  hoveredLink === "poyzeet" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } projet lg:pl-4 pt-3`}
              >
                Poyzeet
              </p>
              <span
                className={` ${
                  hoveredLink === "poyzeet" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } apocBase absolute top-0`}
              >
                03
              </span>
            </div>
            <p
              className={` apocBase flex items-center ${
                hoveredLink === "poyzeet" || hoveredLink === null
                  ? "text-[#151414]"
                  : "text-[#CDCDCD]"
              }`}
            >
              developpement - design - 3D
            </p>
          </Link>

          {/* <Link
            onMouseEnter={() => {
              setHoveredLink("explorations");
            }}
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
            to="/explorations"
            className=" h-full flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center w-full "
          >
            <div className="flex items-center relative">
              <p
                className={` ${
                  hoveredLink === "explorations" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } projet lg:pl-4 pt-3`}
              >
                Explorations
              </p>
              <span
                className={` ${
                  hoveredLink === "explorations" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } apocBase absolute top-0`}
              >
                04
              </span>
            </div>
            <p
              className={` apocBase flex items-center ${
                hoveredLink === "realisations" || hoveredLink === null
                  ? "text-[#151414]"
                  : "text-[#CDCDCD]"
              }`}
            >
              developpement - 3D
            </p>
          </Link> */}
        </aside>
      </section>
      <section className="w-full lg:flex items-center pr-8 2xl:pr-0 hidden">
        {hoveredLink === "poyzeet" && (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
            className="flex flex-col gap-4 px-16"
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              className=" h-full max-h-[30rem] min-h-80 w-full object-cover row-span-2 pb-28 mt-16"
              src="/img/poyzeet/poyzeetP1.jpg"
              alt=""
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              className=" h-full max-h-96 min-h-80 w-full object-cover py-8 -my-8 "
              src="/img/poyzeet/poyzeetP2.jpg"
              alt=""
            />
          </motion.div>
        )}
        {hoveredLink === "invisibles" && (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
            className="flex flex-col gap-4 px-16"
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              className=" h-full w-full max-h-96 min-h-80 object-cover "
              src="/img/invisibles/invisiblesbg.jpg"
              alt=""
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              className=" h-full w-full max-h-96 min-h-80 object-cover py-8 -my-8 "
              src="/img/invisibles/invisibles3.jpg"
              alt=""
            />
          </motion.div>
        )}
        {hoveredLink === "sparky" && (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-[55%_45%] gap-8 px-16"
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              className="h-full w-full max-h-96 min-h-80 object-cover"
              src="/img/sparky/sparky1.jpg"
              alt="Sparky 1"
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              className="h-full w-full max-h-[30rem] min-h-80 object-cover row-span-2 pb-28 mt-16"
              src="/img/sparky/sparky2.jpg"
              alt="Sparky 2"
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              className="h-full w-full max-h-96 min-h-80 object-cover py-8 -my-8"
              src="/img/sparky/sparky3.jpg"
              alt="Sparky 3"
            />
          </motion.div>
        )}
        {/* {hoveredLink === "explorations" && (
          <motion.div
          initial={hidden}
          animate={visible}
          transition={{ staggerChildren: 0.15,}}
          className="grid grid-cols-[55%_45%] gap-8 px-16">
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: { opacity: 1, translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [.215,.61,.355,1],
                  },
                 },
              }}
              className=" h-full w-full max-h-96 min-h-80 object-cover "
              src="/img/test.jpg"
              alt=""
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: { opacity: 1, translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [.215,.61,.355,1],
                  },
                 },
              }}
              className=" h-full w-full max-h-[30rem] min-h-80 object-cover row-span-2 pb-28 mt-16"
              src="/img/test.jpg"
              alt=""
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, translateY: -10 },
                visible: { opacity: 1, translateY: 0,
                  transition: {
                    duration: 0.5,
                    ease: [.215,.61,.355,1],
                  },
                 },
              }}
              className=" h-full w-full max-h-96 min-h-80 object-cover py-8 -my-8 "
              src="/img/test.jpg"
              alt=""
            />
          </motion.div>
        )} */}
      </section>
    </section>
  );
};

export default Accueil;
