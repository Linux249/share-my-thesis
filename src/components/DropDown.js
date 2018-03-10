import React, {Component} from 'react';
import styled from 'styled-components'
import {pale, red, white} from '../style/colors'
import ArrowDown from '../svg/ArrowDown'

const DropDownArea = styled.div`

    color: ${pale};
        
    background-color: inherit;
    border: 0.1rem solid ${red};
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 3rem;
    width: 30rem;
    
    border: 0.05rem solid ${red};
    
    margin-top: 0.5rem;
    
    margin-bottom: 1rem;

`;

const Select = styled.div`
    //flex-grow: 4;
    text-indent: 1rem;
    font-size: 1.3rem;    
    
`;

const Option = styled.option`
    background-color: ${white};
    
    
`;


const Title = styled.div`
    font-family: "Gilroy-bold", sans-serif;
    font-size: 1.5rem;
    

`;


const Button = styled.div`
    display: flex;
    justify-content: center;
    width: 3rem;
    border-left: 0.1rem solid ${red};
`;


class DropDown extends Component {

    state = {
        select: "Choose"
    };

    render() {

        const {select} = this.state;

        return (
            <div>
                <Title>What Subject are you interested in?</Title>
                <Row>
                    <Select>{select}</Select>
                    <Button><ArrowDown/></Button>
                </Row>
            </div>

        )
    }
}

export default DropDown