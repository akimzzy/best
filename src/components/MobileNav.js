import React, { Component } from 'react';

const MobileNav = ({open, toggleNav}) => {
    return ( <div className={ open? "MobileNav openMobileNav" : "MobileNav"}>
            <ul className="UL">
                <li className="item"> <a onClick={toggleNav} href="#home">Home</a></li>
                <li className="item"> <a onClick={toggleNav} href="#about">About</a></li>
                <li className="item"> <a onClick={toggleNav} href="#download">Download</a></li>
                <li className="item"> <a onClick={toggleNav} href="#testimonials">Testimonials</a></li>
                <li className="item"> <a onClick={toggleNav} href="#contact">Contact</a></li>
            </ul>
        </div> );
}
 
export default MobileNav;