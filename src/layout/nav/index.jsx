import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header className="absolute top-0 w-full h-24 isolation-auto">
            <nav className="maxWidth w-full h-full flex items-center justify-between lg:px-20 2xl:px-0 px-5">
                <Link to="/" className="flex items-center gap-4">
                    <div className="size-8">
                        <img className="mix-blend-difference" src="/svg/logo.svg" alt="Logo" />
                    </div>
                    <div>
                        <p className="logoName text-[#FAFAFA] mix-blend-difference">
                            Louis Descotes
                        </p>
                        <p className="roleName text-[#FAFAFA] mix-blend-difference">
                            Développeur Front-end
                        </p>
                    </div>
                </Link>
                <Link
                    to="/about"
                    className="roleName text-[#FAFAFA] mix-blend-difference bg-black"
                >
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Nav;
