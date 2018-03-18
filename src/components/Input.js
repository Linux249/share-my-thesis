import React, {Component} from 'react';
import styled from 'styled-components'
import {darkBlue, red, white} from "../style/colors";

const InputArea = styled.div`

    display: flex;
    width: 100%;
    height: 4rem;
    
    border: 0.1rem solid ${({color}) => color === "red" ? red : darkBlue};
    
    margin: 2rem 0;
`;

const InputStyled = styled.input`
    flex-grow: 4;
    
    border: none;
    
    background-color: ${({color}) => color === "red" ? darkBlue : white};
    
    text-indent: 1rem;
    font-size: 1.3rem;
`;

const SearchButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-grow: 1;
    
    background-color: ${darkBlue};
    border-left: 0.1rem solid ${({color}) => color === "red" ? red : darkBlue};
    
    font-family: "Gilroy-bold", sans-serif;
    color: ${({color}) => color === "red" ? red : white};
    font-size: 1.5rem;
    
    cursor: pointer;
    
`;

class Input extends Component {

    state = {
        value: ""
    };

    render() {
        const {show} = this.state;
        const {placeholder, color} = this.props;

        return (
            <InputArea color={color}>
                <InputStyled
                    placeholder={placeholder}
                    color={color}
                />
                <SearchButton color={color}>Search</SearchButton>
            </InputArea>
        )
    }

}

export default Input