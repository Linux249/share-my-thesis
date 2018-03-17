import React, {Component} from 'react';
import styled from 'styled-components'
import {pale, red, white} from '../style/colors'
import ArrowDown from '../svg/ArrowDown'

const DropDownArea = styled.div`
    position: relative;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    color: ${pale};
    
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

const OptionArea = styled.div`
    
    display: block;
    position: absolute;

    //border: 1px solid #c6c6c6;
    //border-radius: 3px;

    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    top: 100%;
    z-index: 1;
    
    background-color: ${white};
   
    text-indent: 1rem;
    font-size: 1.3rem;    
    
`;

const Option = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 3rem;
    width: 30rem;
    &:hover {
        background-color: #5cb9ff;
    }
   
    
`;


const Title = styled.div`
    font-family: "Gilroy-bold", sans-serif;
    font-size: 1.5rem;
    color: ${pale};    

`;


const Button = styled.div`
    display: flex;
    justify-content: center;
    width: 3rem;
    border-left: 0.1rem solid ${red};
`;


class DropDown extends Component {

    state = {
        selection: "Choose",
        showOptions: false
    };

    toggleOptions = () => {
        this.setState(({showOptions}) => ({showOptions: !showOptions}))
    };

    choose = (index) => {
        this.setState({selection: this.props.options[index]});
        this.toggleOptions()
    };

    render() {
        const {options} = this.props;
        const {selection, showOptions} = this.state;


        return (
            <DropDownArea>
                <Title>What Subject are you interested in?</Title>
                <Row onClick={this.toggleOptions}>
                    <Select>{selection}</Select>
                    <Button><ArrowDown/></Button>
                </Row>
                {showOptions &&
                <OptionArea>
                    {options.map((option, i) =>
                        <Option
                            key={i}
                            onClick={() => this.choose(i)}
                        >
                            {option}
                        </Option>
                    )}
                </OptionArea>
                }
            </DropDownArea>

        )
    }
}

export default DropDown