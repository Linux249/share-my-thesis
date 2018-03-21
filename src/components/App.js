import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Header from './Header'
import Intro from '../routes/Intro'
import Explore from '../routes/Explore'
import About from '../routes/About'
import User from '../routes/User'
import Share from '../routes/Share'
import Thesis from '../routes/Thesis'
import styled from 'styled-components'

const Column = styled.div`
    display: flex;
    flex-flow: column;
    
    align-items: center;

`

const MaxWidth = styled.div`
    width: 100%;
    max-width: 90rem;

`

class App extends Component {


    render() {

        return(
            <Column>
                <Header/>
                <MaxWidth>
                    <Route exact path="/" component={Intro} />
                    <Route exact path="/explore" component={Explore} />
                    <Route exact path="/share/:id" component={Share}/>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/thesis/:id" component={Thesis} />
                </MaxWidth>
            </Column>
        )
    }
}


export default App;
