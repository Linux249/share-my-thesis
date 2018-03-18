import React, {Component} from 'react';
import styled from 'styled-components'
import {darkBlue, white} from "../style/colors";

const InputArea = styled.div`

    display: flex;
    width: 100%;
    height: 4rem;
    
    margin: 2rem 0;
`;

const InputStyled = styled.input`
    flex-grow: 4;
    
    border: 0.1rem solid ${darkBlue};
    
    text-indent: 1rem;
    font-size: 1.3rem;
`;

const SearchButton = styled.button`
    flex-grow: 1;
    
    background-color: ${darkBlue};
    border: 1px solid ${darkBlue};
    
    font-family: "Gilroy-bold", sans-serif;
    background-color: ${darkBlue};
    color: ${white};
    font-size: 1.5rem;
    
    cursor: pointer;
    
`;

class Input extends Component {

    state = {
        value: ""
    };

    render() {
        const {show} = this.state;
        const {placeholder,} = this.props;

        return (
            <InputArea>
                <InputStyled
                    placeholder={placeholder}
                />
                <SearchButton>Search</SearchButton>
            </InputArea>
        )
    }

}

export default Input