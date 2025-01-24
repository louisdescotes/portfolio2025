import { useState } from "react";
import { Link } from "react-router-dom";

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
      <section className="w-full lg:flex items-center pr-8 2xl:pr-0 hidden">
        {hoveredLink === "poyzeet" && (
          <div className="grid grid-cols-[55%_45%] gap-8 px-16">
            <img
              className=" h-full w-full object-cover "
              src="/img/test.jpg"
              alt=""
            />
            <img
              className=" h-full w-full object-cover row-span-2 pb-28 mt-16"
              src="/img/test.jpg"
              alt=""
            />
            <img
              className=" h-full w-full object-cover py-8 -my-8 "
              src="/img/test.jpg"
              alt=""
            />
          </div>
        )}
        {hoveredLink === "sparky" && (
          <div className="grid grid-cols-[55%_45%] gap-8 px-16">
            <img
              className=" h-full w-full object-cover "
              src="/img/test.jpg"
              alt=""
            />
            <img
              className=" h-full w-full object-cover row-span-2 pb-28 mt-16"
              src="/img/test.jpg"
              alt=""
            />
            <img
              className=" h-full w-full object-cover py-8 -my-8 "
              src="/img/test.jpg"
              alt=""
            />
          </div>
        )}
        {hoveredLink === "explorations" && (
          <div className="grid grid-cols-[55%_45%] gap-8 px-16">
            <img
              className=" h-full w-full object-cover "
              src="/img/test.jpg"
              alt=""
            />
            <img
              className=" h-full w-full object-cover row-span-2 pb-28 mt-16"
              src="/img/test.jpg"
              alt=""
            />
            <img
              className=" h-full w-full object-cover py-8 -my-8 "
              src="/img/test.jpg"
              alt=""
            />
          </div>
        )}
      </section>
    </section>
  );
};

export default Accueil;
