import React, {Component} from 'react'
import styled from 'styled-components'
import intro1 from '../svg/Intro_01.svg'
import intro2 from '../svg/Intro_02.svg'
import intro3 from '../svg/Intro_03.svg'
import Items from '../components/Items'
import Video from '../components/Video'
import items from '../mock/items'

const Intro = styled.div`
    
`;

const SlidesContainer = styled.div`
    position: relative;
`;

const Overlay = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    
    position: absolute;
    top: 0;
    z-index: 1;
    
    height: 80%;
    
    padding: 5rem;
`;

const IntroImg = styled.img`
   width: 100%
`;

const Text = styled.div`
   color: white;
   
   font-family: "Gilroy-bold", sans-serif;
   font-size: 4rem;
`;

const Dot = styled.div`
   background-color: ${({color}) => color};
   
   width: 2rem;
   height: 2rem;
   
   border-radius: 5rem;
   
   margin: 1rem;
`;

const Row = styled.div`
  display: flex;
`
const Transision = styled.div`
  width: ${({show}) => show ? '100%' : 0};
  height: 100%;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  opacity: ${({show}) => show ? 1 : 0};
  visibility: ${({show}) => show ? 'visible' : 'hidden'}; 
`

export default class extends Component {
    state = {
        intro: 0,
        timerId: null
    }

    componentDidMount() {
        this.startInterval()
    }

    componentWillUnmount() {
        this.endInterval()
    }

    startInterval = () => {
        this.setState({timerId: setInterval(this.updateIntro, 5000)})
    }

    endInterval = () => {
        clearInterval(this.state.timerId)
        this.setState({timerId: null})
    }

    updateIntro = () => {
        this.setState(oldState => {
            let intro = oldState.intro + 1
            if(intro > 2) intro = 0
            return { intro }
        })
    }

    handleClick = (i) => {
        this.endInterval()
        this.setState({intro: i})
        this.startInterval()
    }

    render() {

        const { intro } = this.state
        return (
            <Intro>
                <SlidesContainer>
                    <Transision show={intro === 0} onClick={this.endInterval}>
                        <Video />
                    </Transision>
                    <Transision show={intro === 1}>
                        <Overlay>
                            <Text>Where is your<br/>dissertation<br/>getting dusty?<br/>employee...</Text>
                            <Row>
                                <Dot onClick={() => this.handleClick(0)} color={'white'} />
                                <Dot onClick={() => this.handleClick(1)} color={'grey'} />
                                <Dot onClick={() => this.handleClick(2)} color={'white'} />
                                <Dot onClick={() => this.handleClick(3)} color={'white'} />
                            </Row>
                        </Overlay>
                        <IntroImg src={intro1} alt=""/>
                    </Transision>

                    <Transision show={intro === 2}>
                        <Overlay>
                            <Text>It could inspire<br/>someone on the<br/>other side of<br/>the world...</Text>
                            <Row>
                                <Dot onClick={() => this.handleClick(0)} color={'white'} />
                                <Dot onClick={() => this.handleClick(1)} color={'white'} />
                                <Dot onClick={() => this.handleClick(2)} color={'grey'} />
                                <Dot onClick={() => this.handleClick(3)} color={'white'} />
                            </Row>
                        </Overlay>
                        <IntroImg src={intro2} alt=""/>
                    </Transision>


                    <Transision show={intro === 3}>
                        <Overlay>
                            <Text>It could be on <br/>the desk of <br/>your future <br/>employee...</Text>
                            <Row>
                                <Dot onClick={() => this.handleClick(0)} color={'white'} />
                                <Dot onClick={() => this.handleClick(1)} color={'white'} />
                                <Dot onClick={() => this.handleClick(2)} color={'white'} />
                                <Dot onClick={() => this.handleClick(3)} color={'grey'} />
                            </Row>
                        </Overlay>
                        <IntroImg src={intro3} alt=""/>
                    </Transision>

                </SlidesContainer>
                <Items items={items} title="Business"/>
            </Intro>
        )
    }
}

