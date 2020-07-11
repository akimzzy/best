import React from 'react';
import './App.scss';

import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Download from './components/Download';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Copyright from './components/copyright';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Download />
      <Testimonials />
      <Subscribe />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
