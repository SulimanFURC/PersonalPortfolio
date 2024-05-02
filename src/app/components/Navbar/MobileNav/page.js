'use client';
import NavLink from "../NavLinks/page";
import "./styles.css";
import { navLinks } from "@/app/utils/data";

const MobileNav = ({isOpen, toggleMenu}) => {
    return(
        <div onClick={toggleMenu} className={`mobile-menu ${isOpen ? "active" : ""}`}>
            <div className="mobile-menu-container">
                <div className="logo">Suliman Munawar</div>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}

                    <button className="contact-btn" onClick={() => {}}>Hire Me</button>
               </ul>
            </div>
        </div>
    )
}

export default MobileNav;