import Footer from "./footer"

const Page = ({name, number, className, role, client, annee, children }) => {
    return (
        <section>
            <section className="gridCol h-screen w-full bg-[url(/img/test.jpg)] bg-cover text-[#FAFAFA]">
                <div className="flex flex-col justify-center items-center col-start-3 col-end-5 row-start-2 row-end-5">
                    <p className="apocBase">{number}</p>
                    <p className="titleProjet">{name}</p>
                    <p className="apocBase text-center lg:text-justify">{className}</p>
                </div>
                <div className="hidden md:flex justify-between col-start-2 col-end-6 row-start-5 row-end-6">
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <p className="titleDescriptionProjet text-[#CDCDCD]">Role</p>
                        <p className="subtitleDescriptionProjet">{role}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <p className="titleDescriptionProjet text-[#CDCDCD]">Client</p>
                        <p className="subtitleDescriptionProjet">{client}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <p className="titleDescriptionProjet text-[#CDCDCD]">Annee</p>
                        <p className="subtitleDescriptionProjet">{annee}</p>
                    </div>
                </div>
            </section>
            <section className="lg:px-20 px-5">
                {children}
            </section>
            <Footer nextName="poyzeet" />
        </section>
    )
}
export default Page