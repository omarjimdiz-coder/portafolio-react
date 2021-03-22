import React from 'react'
import { Switch, Route } from "react-router-dom";
import About from '../about/About';
import Home from '../home/Home';
import Work from '../work/Work';


import './main.css'


const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
            </Switch>
        </main>
    )
}

export default Main
