const About = () => {
    return(
        <section className="gridCol h-full maxWidth overflow-hidden">
            <aside className="col-start-1 col-end-6 row-start-2 row-end-5 flex justify-center flex-col lg:pl-[100px] lg:px-0 2xl:px-0 px-5">
            <p className=" aboutTitle">Hello</p>
            <p className="subtitleDescriptionProjet">Passionné par le web et le design, je m’inspire des sites primés pour recréer et réinventer des effets interactifs captivant qui enrichissent l’expérience utilisateur.</p>
            <p className="subtitleDescriptionProjet pt-6 pb-12">Actuellement en alternance chez <span className="titleDescriptionProjet underline">Beease Digital.</span></p>
            <div className="flex items-center gap-14">
                <a className="titleDescriptionProjet" href="/">Linkedin</a>
                <a className="titleDescriptionProjet" href="/">X</a>
                <a className="titleDescriptionProjet" href="/">Git</a>
            </div>
            </aside>
        </section>
    )
}
export default About