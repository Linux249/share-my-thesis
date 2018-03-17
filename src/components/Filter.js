import React from 'react';
import styled from 'styled-components'
import {darkBlue, red, white} from '../style/colors'
import DropDown from './DropDown'

const Box = styled.div`
    width: 70%;
    padding-top: 2rem;
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
    height: 35rem;
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
                title="What Subject are you interested in?"
                options={["Art", "Business", "Desgin", "Economy", "Maths", "Education", "history"]}
            />
            <DropDown
                title="What type of dissertation?"
                options={["Typ1", "Typ2", "Typ3", "Typ4", "Typ5", "Typ6", "Typ7"]}
            />

        </BoxContent>
    </Box>
)