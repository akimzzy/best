import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( <footer className="Footer">
            <div className="Footer__box1">
                <img src={require('../Assets/logo.svg')} alt="lofo" className="Footer__logo"/>
                <span>
                Why I say old chap that is sping lavatory chip shop taking the piss  young.!!
                </span>
            </div>
            
            <div className="Footer__box2">
                <ul className="Footer__links">
                    <h3>Links</h3>
                    <li>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#download">Download</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <ul className="Footer__contact">
                    <h3>Contact</h3>
                    <li>
                        <a href="tel:+23412345678">+234 12345678</a>
                        <a href="mailto:mobileapp@gmail.com">mobileapp@gmail.com</a>
                        <a href="#download">53 street, Lagos, Nigeria</a>
                        <span className="socials">
                            <a href="https://twitter.com"><img src={require('../Assets/twitter.svg')} alt="twitter"/></a>
                            <a href="https://facebook.com"><img src={require('../Assets/facebook.svg')} alt="facebook"/></a>
                            <a href="https://pinterest.com"><img src={require('../Assets/pinterest.svg')} alt="pinterest"/></a>
                            <a href="https://linkedin.com"><img src={require('../Assets/linkedin.svg')} alt="linkedin"/></a>
                        </span>
                    </li>
                </ul>
            </div>
        </footer> );
    }
}
 
export default Footer;