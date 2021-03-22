import React from 'react'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <>
            <section id='main'>
                <h2 className="animate__animated animate__zoomInDown"><span>Hello, I'm Omar Jiménez.</span> <br /> I'm a Front-End developer</h2>
                <a className='git animate__animated animate__zoomInDown' href="https://github.com/omarjimdiz-coder" target="_blank" rel="noopener noreferrer">github</a>
            </section>

            <Footer />
        </>
        )
}

export default Home
