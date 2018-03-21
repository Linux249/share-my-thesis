import React, {Component} from 'react';
import styled from 'styled-components'
import {blue, darkBlue, pale, white} from '../style/colors'

const TextAreaArea = styled.div`

    width: 100%;
`;

const TextArea = styled.textarea`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-size: 1rem;
    
    color: ${blue};
    
    height: 3rem;
    width: 95%;
    
    background-color: ${white};
   
    font-family: "Gilroy-light", sans-serif;
    
    border: 0.05rem solid ${darkBlue};
    
    margin: 1rem 0;
    padding: 2rem 1rem;

`;


const Title = styled.div`
    font-family: "Gilroy-bold", sans-serif;
    color: ${pale};    
    padding-top: 1rem;
`;


export default ({title}) => (
    <TextAreaArea>
        <Title>{title}</Title>
        <TextArea
        >
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,

        </TextArea>

    </TextAreaArea>

)