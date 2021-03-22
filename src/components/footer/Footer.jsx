import React from 'react'
import insta from './insta.svg';
import github from './github.svg';

const Footer = () => {

    const footer = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: '30px',
        paddingBottom: '10px' 
    }

    const img = {
        width: '20px',
        marginLeft: '5px'
    }

    return (
        <footer id='footer' style={footer}>
            <p>created by Omar jiménez &copy;</p>
            <a href="https://www.instagram.com/omarjimdiz/" target="_blank" rel="noopener noreferrer">
                <img style={img} src={insta} alt="instagram"/>
            </a>
            <a href="https://github.com/omarjimdiz-coder" target="_blank" rel="noopener noreferrer">
                <img style={img} src={github} alt="github"/>
            </a>
        </footer>
    )
}

export default Footer
