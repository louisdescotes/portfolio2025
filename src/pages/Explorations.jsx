import Page from "../layout/page"

const Explorations = () => {
    return(
        <Page name="Explorations" number="03" className="developpement - design" roles="Développeur & designer" client="Projet perso" annee="2024" footer="sparky">
            <section className="w-full flex justify-center textDescriptionProjet py-32">
                <article className="max-w-xl flex flex-col gap-6">
                    <p>Le développements web étant ma spécialité, je m’intéresse aussi très fortement à l’UX/UI et à la 3D, c’est pourquoi pendant mon temps libres, j’essaye de pratiquer un maximum ses passions et à les utiliser dans la plupart de mes projets personnels et minimaliste.</p>
                </article>
            </section>
            <section className="flex flex-col gap-16 pb-32">
                <img className="w-full" src="/img/test2.jpg" alt="" />
                <img className="w-full" src="/img/test2.jpg" alt="" />
                <img className="w-full" src="/img/test2.jpg" alt="" />
                <img className="w-full" src="/img/test2.jpg" alt="" />
            </section>
        </Page>
    )
}
export default Explorations