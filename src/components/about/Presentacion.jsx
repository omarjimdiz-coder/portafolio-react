import React from 'react'
import './about.css'
import omar from './omar.jpg'


const Presentacion = () => {
    return (
        <div id='presentacion' className='animate__animated animate__fadeInBottomLeft'>
            <img className='omar' src={omar} alt="omar" />
            <p className='parrafo-pre'>I'm a Front-End Developer JR from Mexico city, but now I'm at Puerto Escondido, Oaxaca. <br />
                I like challenges and creating user interfaces
                <br />
                80's music lover
            </p>
        </div>
    )
}

export default Presentacion
