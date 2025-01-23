import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header className="fixed top-0 w-full h-24 ">
            <nav className="w-full h-full flex items-center justify-between px-20">
                <Link to="/" className="flex items-center gap-4">
                    <div className="size-8">
                        <img src="/svg/logo.svg" alt="" />
                    </div>
                    <div>
                        <p className="logoName">Louis Descotes</p>
                        <p className="roleName">Developpeur Front-end</p>
                    </div>
                </Link>
                <Link to="/about">About</Link>            
            </nav>
        </header>
    )
}
export default Nav