import React from 'react'
import Stats from './Stats';
import Pricing from './Pricing';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePge() {
    return ( 
        <>
            
            <Hero />
            <Awards/>
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
        </>
     );
}

export default HomePge;