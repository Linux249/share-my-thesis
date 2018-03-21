import React, { Component } from 'react';
import styled from 'styled-components'
import {biscuit, darkBlue, red} from '../style/colors'
import about1 from '../svg/about_01.svg'
import about2 from '../svg/about_02.svg'
import about3 from '../svg/about_03.svg'
import playButton from '../svg/play_button_video.svg'
import Footer from '../components/Footer'
import intro3 from '../svg/Intro_03.svg'


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
const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;    
`
const Video = styled.img`

`

const Number = styled.div`

    font-family: Gilroy-bold, sans-serif;
    font-size: 3rem;
    
`
const Iframe = styled.iframe`
    border: none;
    width: 100%;
    height: 100%;    
    
`

const Intro = styled.img`
    width: 100%;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;
`;

const WhiteArea = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    //top: 0;
    width: 80%;
    height: 80%;
    
    background-color: white;
`

export default class extends Component {

    state = {
        showVideo: false
    }


    render() {

        const { showVideo } = this.state

        return (
            <Area>

                <Container>
                    <Intro src={intro3}/>
                    <WhiteArea>
                        <VideoContainer onClick={() => this.setState({showVideo: true})}>
                            {!showVideo ?
                                <Video src={playButton}/>
                                :
                                <Iframe src="https://player.vimeo.com/video/260996942" width="900" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></Iframe>
                            }
                        </VideoContainer>
                    </WhiteArea>

                </Container>



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
    }
}
