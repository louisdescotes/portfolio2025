"use client"

import Link from "next/link"
import DateNow from "../ux/date"
import { useRouter } from "next/navigation"
import useStore from "@/app/lib/store"

const Nav = () => {
    const navState = useStore((state) => state.navAbout); 
    const router = useRouter()
    const handleNavAbout = useStore((state) => state.handleNavAbout); 
    
  const handleBack = () => {
    handleNavAbout()
    router.back()
  }

    return(
        <section className="absolute top-0 h-full w-full p-8">
            <aside className="relative left-0 top-0 w-full h-5 flex items-end">
                <div className="w-full flex items-center justify-center">
                    <p className="z-30 cursor-auto">Louis Descôtes</p>
                </div>
                <div className="absolute flex right-0 pr-10 lg:pr-20">
                    {navState ? (
                        <p className="z-30 cursor-pointer" onClick={handleBack} onKeyUp={handleBack}>Retour</p>
                    ) : (
                        <Link className="z-30 cursor-pointer" href="/about" onClick={handleNavAbout}>About</Link>
                    )}
                </div>
            </aside>
            <aside className="relative left-0 bottom-5 w-full h-full flex items-end ">
                <DateNow />
                <div className="absolute w-full flex justify-center">
                    <Link className="z-30 cursor-pointer" href="mailto:ldescotes1@gmail.com">Contact</Link>
                </div>
                <div className="absolute gap-1 left-0 flex items-end justify-end w-full pr-10 lg:pr-20">
                    <Link className="z-30 cursor-pointer" href="https://x.com/ldescotes1">X</Link>
                    <p className="z-30 ">-</p>
                    <Link className="z-30 cursor-pointer" href="https://www.linkedin.com/in/louis-descotes/">Linkedin</Link>
                </div>
            </aside>
        </section>
    )
}
export default Nav