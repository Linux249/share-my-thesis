import React, { Component } from 'react';
import styled from 'styled-components'
import playButton from '../svg/play_button_video.svg'
import intro3 from '../svg/Intro_03.svg'


const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;    
`
const Video = styled.img`

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

        )
    }
}
