import React, {Component} from 'react'
import styled from 'styled-components'
import {darkBlue, white} from './colors'

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Gilroy-bold", sans-serif;
    background-color: ${darkBlue};
    color: ${white};
    font-size: 3rem;
    
    height: 9rem;
    width: 100%;
`;

export default TitleBox
