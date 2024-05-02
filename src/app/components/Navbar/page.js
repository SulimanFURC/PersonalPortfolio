'use client';
import { useState } from "react";
import "./styles.css"
import MobileNav from "./MobileNav/page";
import NavLink from "./NavLinks/page";
import { navLinks } from "@/app/utils/data";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className="nav-wrapper">
           <div className="nav-content">
               <div className="logo">Suliman Munawar</div>
               <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}

                    <button className="contact-btn" onClick={() => {}}>Hire Me</button>
               </ul>
               <button className="menu-btn" onClick={() => toggleMenu()}>
                    <span style={{fontSize: "1rem"}}> 
                    {!openMenu ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"></path></svg> :
                     <svg style={{position: "relative", right: "3px"}} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg>
                     }
                    </span>
               </button>
              
           </div>
        </nav>  
        </>
    )
}

export default Navbar;