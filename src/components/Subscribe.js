import React, { Component } from 'react';

class Subscribe extends Component {
    state = {  }
    render() { 
        return ( <section className="Subscribe">
            <img src={require('../Assets/iPhoneX_2.png')} alt="iphone"/>
            <div className="box">
                <h2>Email</h2>
                <span className="Download__subHead">Start work with us and Free trial</span>
                <input placeholder="enter your mail here" id="input" type="text"/>
                <button>Subscribe now</button>
            </div>
        </section> );
    }
}
 
export default Subscribe;