import Link from "next/link"
import DateNow from "../ux/date"

const Nav = () => {
    return(
        <section className="absolute top-0 h-full w-full p-8">
            <aside className="relative left-0 top-0 w-full h-4 flex items-end">
                <div className="w-full flex items-center justify-center">
                    <p className="z-50 cursor-auto">Louis Descôtes</p>
                </div>
                <div className="absolute flex right-0 pr-10 lg:pr-20">
                    <Link className="z-50 cursor-pointer" href="/about">About</Link>
                </div>
            </aside>
            <aside className="relative left-0 bottom-4 w-full h-full flex items-end ">
                <DateNow />
                <div className="absolute w-full flex justify-center">
                    <Link className="z-50 cursor-pointer" href="mailto:ldescotes1@gmail.com">Contact</Link>
                </div>
                <div className="absolute gap-1 left-0 flex items-end justify-end w-full pr-10 lg:pr-20">
                    <Link className="z-50 cursor-pointer" href="https://x.com/ldescotes1">X</Link>
                    <p>-</p>
                    <Link className="z-50 cursor-pointer" href="https://www.linkedin.com/in/louis-descotes/">Linkedin</Link>
                </div>
            </aside>
        </section>
    )
}
export default Nav