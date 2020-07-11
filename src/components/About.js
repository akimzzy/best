import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( <section className="About" id="about">
            <div className="About__services">
                <h2>Our Services</h2>
                <span className="About__subHead">We provide various kind of service for you</span>
                <div className="list">
                    <div className="item">
                        <img src={require('../Assets/shield.svg')}alt="Shield"/>
                        <h3>Fully Secured</h3>
                        <span> We provide the best service application. please feedback to us .</span>
                    </div>
                    <div className="item">
                        <img src={require('../Assets/cloud.svg')} alt="Cloud"/>
                        <h3>Easy To Edit</h3>
                        <span> We provide the best service application. please feedback to us .</span>
                    </div>
                    <div className="item">
                        <img src={require('../Assets/paint.svg')} alt="Paint"/>
                        <h3>Design & Beanding</h3>
                        <span> We provide the best service application. please feedback to us .</span>
                    </div>
                </div>
            </div>

            <div className="About__builtApp">
                <img src={require('../Assets/iPhoneX_2.png')} alt="iphone"/>
                <div className="box">
                    <span className="About__subHead">Built The App That Everyone Love.</span>
                    <span>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo modi tem.
                    </span>
                    <button className="About__btn">Learn more</button>
                </div>
            </div>

            <div className="About__easyApp">
                <div className="box">
                    <span className="About__subHead">Easy and Perfect Solution For Your Apps.</span>
                    <span>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo modi tem.
                    </span>
                    <button className="About__btn">Learn more</button>
                </div>
                <img src={require('../Assets/iPhoneX_1.png')} alt="iphone"/>
            </div>
        </section> );
    }
}
 
export default About;