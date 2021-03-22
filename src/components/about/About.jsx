import React from 'react'
import Presentacion from './Presentacion';

import './about.css'
import responsive from './responsive.svg';
import front from './front-end.svg';
import back from './back.svg';
import Footer from '../footer/Footer';


const About = () => {

    return (
        <div>
            <div id='about'>
                <h2 className="animate__animated animate__rotateInDownLeft">About</h2>
                <div className='cards animate__animated animate__rotateInDownLeft'>
                    <div className='card'>
                        <img src={responsive} alt='responsive' />
                        <h5>Responsive</h5>
                        <p className='about-p'>My layouts will work on any <br /> device, big or small.</p>
                    </div>
                    <div className='card'>
                        <img src={front} alt='responsive' />
                        <h5>Front-end</h5>
                        <p className='about-p'>HTML5, CSS3, Javascript, <br /> bootstrap, React, Git</p>
                    </div>
                    <div className='card'>
                        <img src={back} alt='responsive' />
                        <h5>back-end</h5>
                        <p className='about-p'>Node js, express, mongoDB, <br /> mysql</p>
                    </div>
                </div>
            </div>

            <Presentacion />

            <Footer />
        </div>

        
    )
}

export default About
