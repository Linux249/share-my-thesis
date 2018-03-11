import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Logo from './Logo'
import user from '../svg/user.svg'
import search from '../svg/searchIcon.svg'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 5em;
    
    font-family: "Gilroy-bold", sans-serif;
    color: salmon;
    font-size: 2rem;
    
    padding: 0 1em;
`;



const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    
    flex-basis: 20em;

`;


const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 6rem;
    height: 2.5rem;
`;

const Image = styled.img`
    height: 100%;
    
`

export default () => (
    <Header>
        <NavLink to="/">
            <Logo/>
        </NavLink>
        <NavLinks>
            <NavLink to="explore" >Explore</NavLink>
            <NavLink to="share" >Share</NavLink>
            <NavLink to="about" >About</NavLink>
        </NavLinks>
        <Buttons>
            <NavLink to="explore" >
                <Image src={search} />
            </NavLink>
            <NavLink to="user">
                <Image src={user} />
            </NavLink>
        </Buttons>

    </Header>
)
