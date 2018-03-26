import React  from 'react';
import styled from 'styled-components'
import Footer from '../components/Footer'
import Video from '../components/Video'
import {biscuit, darkBlue, red} from '../style/colors'
import about1 from '../svg/about_01.svg'
import about2 from '../svg/about_02.svg'
import about3 from '../svg/about_03.svg'


const Area = styled.div`

   width: 100%;
`;

const Area2 = styled.div`
   display: flex;
   justify-content: space-around;
   
   background-color: ${biscuit};
      
   width: 100%;
   
   padding-top: 5rem;
`;


const Header = styled.div`
    display: flex;
    align-items: center;
    
    text-indent: 1rem;
    
    color: ${red};
    height: 10rem;
    
    font-family: Gilroy-bold, sans-serif;
    font-size: 4rem;
`

const Column = styled.div`
    width: 25%;
    
    padding-bottom: 3rem;
`

const Img = styled.img`
    width: 100%;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

    border: 0.05rem solid ${darkBlue};
    height: 3rem;
    
    font-family: Gilroy-bold, sans-serif;
    font-size: 2rem;
    
    cursor: pointer;
`


const Number = styled.div`

    font-family: Gilroy-bold, sans-serif;
    font-size: 3rem;
    
`

export default () => (
    <Area>
        <Video />
        <Header>What is this site about?</Header>
        <Area2>
            <Column>
                <Number>1.</Number>
                <Img src={about1}/>
                <Button>Upload</Button>
            </Column>
            <Column>
                <Number>2.</Number>
                <Img src={about2}/>
                <Button>Share</Button>
            </Column>
            <Column>
                <Number>3.</Number>
                <Img src={about3}/>
                <Button>Explore</Button>
            </Column>
        </Area2>
        <Footer />
    </Area>
)

