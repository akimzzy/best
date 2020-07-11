import React, { Component } from 'react';

class Download extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    render() {
        return ( <section className="Download" id="download">
            <h2>Visit our app</h2>
            <span className="Download__subHead">Apps Screenshots</span>
            <div className="box">
                <img src={require('../Assets/iPhoneX_1.png')} alt="screenshot"/>
                <img className="active" src={require('../Assets/iPhoneX_2.png')} alt="screenshot"/>
                <img src={require('../Assets/iPhoneX_1.png')} alt="screenshot"/>
                <img src={require('../Assets/iPhoneX_2.png')} alt="screenshot"/>
            </div>
            <button className="Download__btn">Download</button>
        </section> );
    }
}



export default Download;