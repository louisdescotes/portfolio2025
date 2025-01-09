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
        <>
            <p className="flex items-center justify-center row-start-1 row-end-2 col-start-3 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-5 lg:col-end-6 text-center">Louis Descôtes</p>
            <div className="flex items-center justify-end row-start-1 row-end-2 col-start-4 col-end-5 lg:row-start-1 lg:row-end-2 lg:col-start-8 lg:col-end-9 ">
                {navState ? (
                    <p className="z-30 cursor-pointer" onClick={handleBack} onKeyUp={handleBack}>Retour</p>
                ) : (
                    <Link className="z-30 cursor-pointer" href="/about" onClick={handleNavAbout}>About</Link>
                )}
            </div>
            <DateNow />
            <Link className="flex items-center justify-center z-30 cursor-pointer col-start-3 col-end-4 row-start-10 row-end-11 lg:row-start-5 lg:row-end-6 lg:col-start-5 lg:col-end-6" href="mailto:ldescotes1@gmail.com">Contact</Link>
            <div className="flex items-center justify-end gap-1 col-start-4 col-end-5 row-start-10 row-end-11 lg:row-start-5 lg:row-end-6 lg:col-start-8 lg:col-end-9">
                <Link className="z-30 cursor-pointer" href="https://x.com/ldescotes1">X</Link>
                <p className="z-30 ">-</p>
                <Link className="z-30 cursor-pointer" href="https://www.linkedin.com/in/louis-descotes/">Linkedin</Link>
            </div>
        </>
    )
}
export default Nav