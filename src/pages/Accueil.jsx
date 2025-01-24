import { useState } from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <section className="flex w-full h-full">
      <section className="container lg:max-w-[50%]">
        <aside className="flex flex-col justify-center  items-center row-start-2 row-end-5 col-start-1 col-end-7 lg:col-end-6 lg:pl-[100px] lg:px-0 px-5">
          <Link
            onMouseEnter={() => {
              setHoveredLink("sparky");
            }}
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
            to="/sparky"
            className="h-full flex justify-between items-center w-full "
          >
            <div className="flex items-center relative">
              <p
                className={` ${
                  hoveredLink === "sparky" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } projet pl-4 pt-1`}
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
              setHoveredLink("poyzeet");
            }}
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
            to="/poyzeet"
            className="h-full flex justify-between items-center w-full transss"
          >
            <div className="flex items-center relative">
              <p
                className={` ${
                  hoveredLink === "poyzeet" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } projet pl-4 pt-1`}
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
                02
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

          <Link
            onMouseEnter={() => {
              setHoveredLink("realisations");
            }}
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
            to="/sparky"
            className=" h-full flex justify-between items-center w-full transss"
          >
            <div className="flex items-center relative">
              <p
                className={` ${
                  hoveredLink === "realisations" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } projet pl-4 pt-1`}
              >
                Realisations
              </p>
              <span
                className={` ${
                  hoveredLink === "realisations" || hoveredLink === null
                    ? "text-[#151414]"
                    : "text-[#CDCDCD]"
                } apocBase absolute top-0`}
              >
                03
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
          </Link>
        </aside>
      </section>
      <section className="w-full h-full ">
        {hoveredLink === "poyzeet" && (
          <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
            <img src="/svg/logo.svg" alt="" />
            <img src="/svg/logo.svg" alt="" />
            <img src="/svg/logo.svg" alt="" />
          </div>
        )}
        {hoveredLink === "sparky" && (
          <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
            <img src="/svg/logo.svg" alt="" />
            <img src="/svg/logo.svg" alt="" />
            <img src="/svg/logo.svg" alt="" />
          </div>
        )}
        {hoveredLink === "realisations" && (
          <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
            <img src="/svg/logo.svg" alt="" />
            <img src="/svg/logo.svg" alt="" />
            <img src="/svg/logo.svg" alt="" />
          </div>
        )}
      </section>
    </section>
  );
};

export default Accueil;
