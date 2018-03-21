import React from 'react';
import styled from 'styled-components'
import logo from '../svg/Logo.svg'

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Img = styled.img`
    width: 7rem;
    height: 7rem;
`;


export default () => (
    <Logo>
        <Img src={logo} alt=""/>
    </Logo>
)