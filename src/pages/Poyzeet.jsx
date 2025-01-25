import Page from "../layout/page"

const Poyzeet = () => {
    return(
        <Page name="Poyzeet" photo="poyzeet" photoName="poyzeet1" number="03" className="developpement - design - 3D" roles="Développeur & designer" client="Projet perso" annee="2024" footer="explorations">
            <section className="w-full flex justify-center textDescriptionProjet py-32">
                <article className="max-w-xl flex flex-col gap-6">
                    <p>Poyzeet vous propose des vinyles de bruits blancs, pour ceux qui cherchent à se reconnecter avec eux-mêmes. Les bruits blancs permettent à se concentrer, dormir plus facilement.</p>
                    <p>Ce projet à pour but de créer un site vitrine autour d’un produit moderne et très niche. Pour cela, j’ai donc décidé de créer une courte animation en 3D du produit. Il ne faut pas oublier qu’un vinyle au delà de sa fonction première de produire de la musique et aussi un objet esthétique. C’est pourquoi il est aussi important de jouer sur cet aspect.</p>
                </article>
            </section>
            <section className="flex flex-col gap-16 pb-32">
                <video controls muted autoPlay>
                    <source src="/img/poyzeet/poyzeet.mp4" type="video/mp4"/>
                </video>
                <img className="w-full" src="/img/poyzeet/poyzeet1.jpg" alt="" />
                <img className="w-full" src="/img/poyzeet/poyzeet2.jpg" alt="" />
                <img className="w-full" src="/img/poyzeet/poyzeet3.jpg" alt="" />
            </section>
        </Page>
    )
}
export default Poyzeet