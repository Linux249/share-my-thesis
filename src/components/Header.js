import React, { Fragment } from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 5em;
    
    font-family: "Gilroy-bold", sans-serif;
    color: salmon;
    
    padding: 0 1em;
`



const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    
    flex-basis: 20em;

`


const Buttons = styled.div`


`

export default () => (
    <Header>
        <Logo/>
        <NavLinks>
            <NavLink to="explore" >Explore</NavLink>
            <NavLink to="share" >Share</NavLink>
            <NavLink to="about" >About</NavLink>
        </NavLinks>
        <Buttons />

    </Header>
)