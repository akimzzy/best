import React, { useState } from 'react';
import MobileNav from './MobileNav';

const Nav = () => {

    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!open)
    };

    return (<nav className="navigation">
            <img src={require('../Assets/logo.svg')} alt="logo" className="logo"/> 
            <ul className="list">
                <li className="item"> <a href="#home">Home</a></li>
                <li className="item"> <a href="#about">About</a></li>
                <li className="item"> <a href="#download">Download</a></li>
                <li className="item"> <a href="#testimonials">Testimonials</a></li>
                <li className="item"> <a href="#contact">Contact</a></li>
            </ul>

            <div className={open ? "hamburger openHamburger" : "hamburger"} onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <MobileNav open={open} toggleNav={toggleNav}/>
        </nav>);
}
 
export default Nav;