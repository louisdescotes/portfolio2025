import Page from "../layout/page"

const Sparky = () => {
    return(
        <Page name="Sparky" number="01" className="developpement - design - 3D" roles="Développeur & designer" client="Projet perso" annee="2024" footer="poyzeet">
            <section className="w-full flex justify-center textDescriptionProjet py-32">
                <article className="max-w-xl flex flex-col gap-6">
                    <p>Sparky est un projet fictif que j’ai créer principalement pour mettre au défis mes compétences apprises en threejs et react.</p>
                    <p>Mon idée est de créer un sorte de SASS, un logiciel/application permettant d’analyser et d’améliorer un business quelconque d’un utilisateur.</p>
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
export default Sparky