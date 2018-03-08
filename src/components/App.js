import React, { Component, Fragment } from 'react';
import { Route, Redirect } from "react-router-dom";

import Header from './Header'
import Intro from './Intro'
import Explore from './Explore'
import About from './About'

class App extends Component {


    render() {

        return(
            <div>
                <Header/>
                <Route exact path="/" component={Intro} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/about" component={About} />
            </div>
        )
    }
}


export default App;
