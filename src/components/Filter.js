import React from 'react';
import styled from 'styled-components'
import {darkBlue, pale, red, white} from '../style/colors'
import DropDown from './DropDown'
import Input from './Input'

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
    display: flex;  
    flex-wrap: wrap;
    justify-content: space-between;
    
    background-color: ${darkBlue};
    height: 35rem;
    //width: 100%;
    
    padding: 2rem 1rem;

`;

const Column = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    
    
    max-width: 50%;
`;

const Close = styled.div`
    cursor: pointer;
`;

const Title = styled.div`
    font-family: "Gilroy-bold", sans-serif;
    font-size: 1.5rem;
    width: 100%;
    color: ${pale};    
    padding-top: 1rem;
`;

export default ({close}) => (
    <Box>
        <BoxHeader>
            <div>MORE FILTER</div>
            <Close onClick={() => close()}>X</Close>
        </BoxHeader>
        <BoxContent>
            <Column>
                <DropDown
                    title="What Subject are you interested in?"
                    options={["Art", "Business", "Desgin", "Economy", "Maths", "Education", "history"]}
                />
                <DropDown
                    title="What type of dissertation?"
                    options={["Typ1", "Typ2", "Typ3", "Typ4", "Typ5", "Typ6", "Typ7 "]}
                />
            </Column>
            <Column>
                <DropDown
                    small
                    title="Country"
                    options={["Art", "Business", "Desgin", "Economy", "Maths", "Education", "history"]}
                />
                <DropDown
                    small
                    title="Language"
                    options={["Typ1", "Typ2", "Typ3", "Typ4", "Typ5", "Typ6", "Typ7 "]}
                />
                <DropDown
                    small
                    title="Year?"
                    options={["Typ1", "Typ2", "Typ3", "Typ4", "Typ5", "Typ6", "Typ7 "]}
                />
                <DropDown
                    small
                    title="Univerity"
                    options={["Typ1", "Typ2", "Typ3", "Typ4", "Typ5", "Typ6", "Typ7 "]}
                />
            </Column>
            <Title>Search for any specific topic?</Title>
            <Input placeholder="Field for Keywords" color="red"/>
        </BoxContent>

    </Box>
)