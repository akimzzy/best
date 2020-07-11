import React, { Component } from 'react';

class Testimonials extends Component {
    state = {  }
    render() { 
        return ( <div className="Testimonials" id="testimonials">
            <h2>Testimonials</h2>
            <span className="Download__subHead">Our Happy Customers</span>
            <div className="box">
                <img src={require('../Assets/josh-howard.png')} alt="customer"/>
                <div className="box__details">
                    <span>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo modi tem."
                    </span>
                    <span className="name">Touhidul Islm</span>
                    <span className="work">Owner & Design lead</span>
                </div>
            </div>
            <div className="controls">
                <button>prev</button>
                <button>next</button>   
            </div>
        </div> );
    }
}
 
export default Testimonials;