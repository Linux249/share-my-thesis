import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Header from './Header'
import Intro from './Intro'
import Explore from './Explore'
import About from './About'
import User from './User'
import Share from './Share'
import Thesis from './Thesis'

class App extends Component {


    render() {

        return(
            <div>
                <Header/>
                <Route exact path="/" component={Intro} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/share" component={Share}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/user" component={User} />
                <Route exact path="/thesis/:id" component={Thesis} />
            </div>
        )
    }
}


export default App;
