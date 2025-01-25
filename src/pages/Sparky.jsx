import Page from "../layout/page"

const Sparky = () => {
    return(
        <Page name="Sparky" photo="sparky" photoName="sparky1" number="01" className="developpement - design - 3D" roles="Développeur & designer" client="Projet perso" annee="2024" footer="invisibles">
            <section className="w-full flex justify-center textDescriptionProjet py-32">
                <article className="max-w-xl flex flex-col gap-6">
                    <p>Sparky est un projet fictif que j’ai créer principalement pour mettre au défis mes compétences apprises en threejs et react.</p>
                    <p>Mon idée est de créer un sorte de SASS, un logiciel/application permettant d’analyser et d’améliorer un business quelconque d’un utilisateur.</p>
                </article>
            </section>
            <section className="flex flex-col gap-16 pb-32">
                <video controls muted autoPlay>
                    <source src="/img/sparky/sparky.mp4" type="video/mp4"/>
                </video>
                <img className="w-full" src="/img/sparky/sparky1.jpg" alt="" />
                <img className="w-full" src="/img/sparky/sparky2.jpg" alt="" />
                <img className="w-full" src="/img/sparky/sparky3.jpg" alt="" />
            </section>
        </Page>
    )
}
export default Sparky