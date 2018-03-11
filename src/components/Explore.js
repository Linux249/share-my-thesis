import React, {Component} from 'react'
import styled from 'styled-components'
import {biscuit, darkBlue, red, white} from '../style/colors'
import Filter from './Filter'
import Subjects from './Subjects'
import TitleBox from '../style/TitleBox'

const SearchArea = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${biscuit};
    
    height: 50rem;
`

const ContentMiddle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 50%;

`


const InputArea = styled.div`

    display: flex;
    width: 100%;
    height: 4rem;
    
    margin: 2rem 0;
`

const Input = styled.input`
    flex-grow: 4;
    
    border: 0.1rem solid ${darkBlue};
    
    text-indent: 1rem;
    font-size: 1.3rem;
`

const SearchButton = styled.button`
    flex-grow: 1;
    
    background-color: ${darkBlue};
    border: 1px solid ${darkBlue};
    
    font-family: "Gilroy-bold", sans-serif;
    background-color: ${darkBlue};
    color: ${white};
    font-size: 1.5rem;
    
    cursor: pointer;
    
`

const RedText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: "Gilroy-bold", sans-serif;
    color: ${red};
    font-size: 1.3rem;
    
    border-bottom: 0.1rem solid ${red};
    
    padding: 0.5rem 1rem;
    
    cursor: pointer;
`


class Explore extends Component {

    state = {
        show: false
    }

    showModal = () => {
        console.log("show clicked")
        this.setState({show: true})
    }

    closeModal = () => {
        console.log("show clicked")
        this.setState({show: false})
    }


    render() {
        const {show} = this.state

        return (
            <div>
                <SearchArea>
                    {!show &&
                    <ContentMiddle>
                        <TitleBox>
                            SEARCH THESIS
                        </TitleBox>
                        <InputArea>
                            <Input
                                placeholder="Searching for any specific topic or keyword"
                            />
                            <SearchButton>Search</SearchButton>
                        </InputArea>
                        <RedText onClick={this.showModal}>More filters</RedText>
                    </ContentMiddle>
                    }
                    {show &&
                    <Filter
                        close={this.closeModal}
                    />

                    }
                </SearchArea>
                <Subjects/>
            </div>
        )
    }

}

export default Explore