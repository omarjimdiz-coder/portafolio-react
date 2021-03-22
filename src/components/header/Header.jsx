import React from 'react'
import { Link } from "react-router-dom";

import './nav.css';


const Header = () => {
    return (
        <header id='header'>
            <h1>Omar Jiménez</h1>
             <nav>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                </ul>    
            </nav>
        </header>
    )
}

export default Header
