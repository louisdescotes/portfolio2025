import DateNow from "../ux/date"

const Nav = () => {
    return(
        <section className="absolute top-0 h-full w-full p-8">
            <aside className="absolute left-0 w-full flex items-center justify-center h-4">
                <p className="absolute">Louis Descôtes</p>
                <a className="absolute right-20" href="/about">About</a>
            </aside>
            <aside className="relative left-0 bottom-0 w-full h-full flex items-end ">
                <DateNow />
                <a className="absolute w-full flex justify-center" href="email:ldescotes1@gmail.com">Contact</a>
                <div className="absolute gap-1 left-0 flex items-center justify-end w-full pr-20">
                    <a href="/">X</a>
                    <p>-</p>
                    <a href="/">Linkedin</a>
                </div>
            </aside>
        </section>
    )
}
export default Nav