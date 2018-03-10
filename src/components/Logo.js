import React from 'react';
import styled from 'styled-components'
import {red} from '../style/colors'
//import logo from '../svg/Logo.svg'

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const LogoText = styled.div`
    font-family: "Asphalts Brush", sans-serif;
    color: ${red};
`;


export default () => (
    <Logo>

        {/*
        <img src={logo} alt=""/>*/}
        <div>Share</div>
        <LogoText>My</LogoText>
        <div>Thesis</div>
    </Logo>
)