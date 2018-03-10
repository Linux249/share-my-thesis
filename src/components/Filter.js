import React from 'react';
import styled from 'styled-components'
import {darkBlue, pale, red, white} from '../style/colors'
import DropDown from './DropDown'

const Box = styled.div`
    
    width: 80%;
    
    padding-top: 2rem;
    
    color: ${pale};

`;
const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 5rem;
    
    font-size: 2rem;
    color: ${red};
    
    background-color: ${white};
    
    padding: 1rem;

`;
const BoxContent = styled.div`
    
    background-color: ${darkBlue};
    height: 50rem;
    //width: 100%;
    
    padding: 2rem 1rem;

`;

const Close = styled.div`
    cursor: pointer;
`;


export default ({close}) => (
    <Box>
        <BoxHeader>
            <div>MORE FILTER</div>
            <Close onClick={() => close()}>X</Close>
        </BoxHeader>
        <BoxContent>
            <DropDown
                title=""
                options={["Art", "Business", "Desgin", "Economy", "Maths", "Education", "history"]}
            />

        </BoxContent>
    </Box>
)