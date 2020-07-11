import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return (<header className="Header" id="home">
            <div className="Header__text">
                <h2>Best</h2>
                <h1>Mobile App</h1>
                <h2>Showcase</h2>
                <span>
                    We provide the best service by application. You can try yourself.
                    please feedback to us . It's always appreciate . 
                </span>
            </div>
            <img src={require('../Assets/iPhoneX_2.png')} alt="iphone" className="Header__img"/>
            <div className="Header__sign">
                <button className="Header__sign--signUp">Open a free account</button><br/>
                or<br/>
                <button className="Header__sign--signIn" >Sign in</button>
            </div>
        </header>);
    }
}
 
export default Header;