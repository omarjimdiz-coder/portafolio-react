import React from 'react'
import Footer from '../footer/Footer'
import './work.css'

import aj from './ajsolutions.PNG';
import breaking from './breaking.PNG';
import citas from './citas.PNG';
import devweb from './devweb.PNG';
import elv from './elv.PNG';
import portafolio from './portafolio.PNG';
import sharon from './sharon.PNG';


const Work = () => {

    return (
        <div id='portafolio'>
            <h2 className='animate__animated animate__flip'>Portafolio</h2>

            <div className='projects'>
                <div>
                    <a href="https://ajsolucion.com/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInTopLeft'>
                        <img src={aj} alt="aj" />
                    </a>
                    <a href="https://omarjimdiz-coder.github.io/breakingbad-react/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInDown'>
                        <img src={breaking} alt="breaking-bad API" />
                    </a>
                    <a href="https://sharp-johnson-8d3484.netlify.app/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInTopRight'>
                        <img src={citas} alt="citas" />
                    </a>
                </div>
                <div>
                    <a href="https://omarjimdiz-coder.github.io/devweb/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInLeft'>
                        <img src={devweb} alt="devweb" />
                    </a>
                    <a href="http://certificacionelv.com/" target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeIn'>
                        <img src={elv} alt="elv" />
                    </a>
                    <a href="https://omarjimdiz-coder.github.io/portafilio/" target="_blank" rel="noopener noreferrer" className='animate__animated animate__fadeInRight'>
                        <img src={portafolio} alt="portafolio" />
                    </a>
                </div>
                <div>
                    <a href="https://omarjimdiz-coder.github.io/sharon-mared/" target="_blank" rel="noopener noreferrer" className='animate__animated animate__fadeInBottomLeft'>
                        <img src={sharon} alt="sharon" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Work
