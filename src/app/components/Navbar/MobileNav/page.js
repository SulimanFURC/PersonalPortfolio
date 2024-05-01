'use client';

import "./styles.css";
const MobileNav = ({isOpen, toggleMenu}) => {
    return(
        <div onClick={toggleMenu} className={`mobile-menu ${isOpen ? "active" : ""}`}>
            <div className="mobile-menu-container">
                <div className="logo">Suliman Munawar</div>
                <ul>
                    <li>
                        <a className="menu-item">Home</a>
                    </li>
                    <li>
                        <a className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a className="menu-item">Contact Me</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>Hire Me</button>
               </ul>
            </div>
        </div>
    )
}

export default MobileNav;