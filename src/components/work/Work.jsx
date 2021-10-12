import React from 'react'
import Footer from '../footer/Footer'
import './work.css'

import aj from './ajsolutions.png';
import breaking from './breaking.png';
import citas from './citas.png';
import devweb from './devweb.png';
import portafolio from './portafolio.png';
import atarrayaIA from './atarraya-ia.png';
import atarraya from './atarraya.png';

const Work = () => {

    return (
        <div id='portafolio'>
            <h2 className='animate__animated animate__flip'>Portafolio</h2>

            <div className='projects'>
                <a href="https://ajsolucion.com/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInTopLeft'>
                    <img src={aj} alt="aj" />
                </a>
                <a href="https://omarjimdiz-coder.github.io/breakingbad-react/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInDown'>
                    <img src={breaking} alt="breaking-bad API" />
                </a>
                <a href="https://sharp-johnson-8d3484.netlify.app/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInTopRight'>
                    <img src={citas} alt="citas" />
                </a>
                <a href="https://omarjimdiz-coder.github.io/devweb/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInLeft'>
                    <img src={devweb} alt="devweb" />
                </a>
                <a href="https://omarjimdiz-coder.github.io/portafilio/" target="_blank" rel="noopener noreferrer" className='animate__animated animate__fadeInRight'>
                    <img src={portafolio} alt="portafolio" />
                </a>
                <a href="https://atarraya.ai/" target="_blank" rel="noopener noreferrer" className='animate__animated animate__fadeInRight'>
                    <img src={atarrayaIA} alt="Atarraya page" />
                </a>
                <a href="https://app.atarraya.market/" target="_blank" rel="noopener noreferrer" className='animate__animated animate__fadeInLeft'>
                    <img src={atarraya} alt="Atarraya Inc" />
                </a>
            </div>

            <Footer />
        </div>
    )
}

export default Work
