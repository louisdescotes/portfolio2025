import DateNow from "../ux/date"

const Nav = () => {
    return(
        <section className="absolute top-0 h-full w-full p-8">
            <aside className="relative left-0 top-0 w-full h-4 flex items-end">
                <div className="w-full flex items-center justify-center">
                    <p className="z-50 cursor-auto">Louis Descôtes</p>
                </div>
                <div className="absolute flex right-0 pr-10 lg:pr-20">
                    <a className="z-50 cursor-pointer" href="/about">About</a>
                </div>
            </aside>
            <aside className="relative left-0 bottom-4 w-full h-full flex items-end ">
                <DateNow />
                <div className="absolute w-full flex justify-center">
                    <a className="z-50 cursor-pointer" href="email:ldescotes1@gmail.com">Contact</a>
                </div>
                <div className="absolute gap-1 left-0 flex items-end justify-end w-full pr-10 lg:pr-20">
                    <a className="z-50 cursor-pointer" href="/">X</a>
                    <p>-</p>
                    <a className="z-50 cursor-pointer" href="/">Linkedin</a>
                </div>
            </aside>
        </section>
    )
}
export default Nav