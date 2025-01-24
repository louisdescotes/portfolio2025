import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header className="fixed top-0 w-full h-24 isolation-auto">
            <nav className="w-full h-full flex items-center justify-between lg:px-20 px-5">
                <Link to="/" className="flex items-center gap-4">
                    <div className="size-8">
                        <img src="/svg/logo.svg" alt="Logo" />
                    </div>
                    <div>
                        <p className="logoName text-[#151414] mix-blend-difference">
                            Louis Descotes
                        </p>
                        <p className="roleName text-[#151414] mix-blend-difference">
                            Développeur Front-end
                        </p>
                    </div>
                </Link>
                <Link
                    to="/about"
                    className="text-[#151414] mix-blend-difference transition-colors duration-300"
                >
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Nav;
