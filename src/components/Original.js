import React from 'react';
import Header from './Header';
import Services from './Services';
import System from './System';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
//import Footer from './Footer';

const Original= (props) =>{
    return (
    <div>
        <Header />
        <Services />
        <System />
        <Portfolio />
        <About />
        <Team />
        <Clients />
        <Contact />
    </div>
    );
};

export default Original;