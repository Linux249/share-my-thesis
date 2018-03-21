import React, {Component} from 'react'
import styled from 'styled-components'
import {biscuit, darkBlue, red} from '../style/colors'
import Filter from '../components/Filter'
import Subjects from '../components/Subjects'
import TitleBox from '../style/TitleBox'
import Input from '../components/Input'
import Footer from '../components/Footer'

const SearchArea = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${biscuit};
    
    height: 50rem;
`;

const ContentMiddle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 50%;

`;

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
`;

const BlueText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: "Gilroy-bold", sans-serif;
    color: ${darkBlue};
    font-size: 3rem;
        
    margin-top: 5rem;
`;


class Explore extends Component {

    state = {
        show: false
    };

    showModal = () => {
        console.log("show clicked");
        this.setState({show: true})
    };

    closeModal = () => {
        console.log("show clicked");
        this.setState({show: false})
    };


    render() {
        const {show} = this.state;

        return (
            <div>
                <SearchArea>
                    {!show &&
                    <ContentMiddle>
                        <TitleBox>
                            SEARCH THESIS
                        </TitleBox>
                        <Input placeholder="Searching for any specific topic or keyword"/>
                        <RedText onClick={this.showModal}>More filters</RedText>
                        <BlueText>EXPLORE BY SUBJECT</BlueText>
                    </ContentMiddle>
                    }
                    {show &&
                    <Filter
                        close={this.closeModal}
                    />

                    }
                </SearchArea>
                <Subjects/>
                <Footer />
            </div>
        )
    }

}

export default Explore