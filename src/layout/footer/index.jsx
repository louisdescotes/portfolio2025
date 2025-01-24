import { Link } from "react-router-dom"

const Footer = ({ nextName }) => {
    return (
        <footer className="bg-[#151414] text-[#FAFAFA] subtitleDescriptionProjet lg:px-[100px] px-5">
            <div className="w-full flex flex-col-reverse lg:flex-row gap-11 lg:gap-0 justify-between lg:items-end pb-16">
                <nav className="flex items-center gap-14">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </nav>
                <Link to={`/${nextName}`} className="flex flex-col gap-2 pt-14">
                <p className="apocBase">Prochain projet</p>
                <p className="footerProjet capitalize">{nextName}</p>
                </Link>
            </div>
            <hr className="border-[#555555] "/>
            <div className="footerSub w-full flex justify-between py-10 text-[#555555] ">
                <p>©2025 - DESCOTES LOUIS</p>
                <a href="#top">RETOURNER EN HAUT</a>
            </div>
        </footer>
    )
}
export default Footer