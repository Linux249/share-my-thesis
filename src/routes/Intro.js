import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import intro from '../svg/Intro.svg'
import intro1 from '../svg/Intro_01.svg'
import intro2 from '../svg/Intro_02.svg'
import intro3 from '../svg/Intro_03.svg'
import Items from '../components/Items'
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

export default class extends Component {
    state = {
        intro: 0,
        timerId: null
    }

    componentDidMount() {
        setInterval(this.updateIntro, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId)
    }

    updateIntro = () => {
        this.setState(oldState => {
            let intro = oldState.intro + 1
            if(intro > 2) intro = 0
            return { intro }
        })
    }

    render() {
        const { intro } = this.state
        return (
            <Intro>
                <SlidesContainer>

                    {intro === 0 &&
                        <Fragment>
                            <Overlay>
                                <Text>Where is your<br/>dissertation<br/>getting dusty?<br/>employee...</Text>
                                <Row>
                                    <Dot color={'grey'} />
                                    <Dot color={'white'} />
                                    <Dot color={'white'} />
                                </Row>
                            </Overlay>
                            <IntroImg src={intro1} alt=""/>
                        </Fragment>
                    }
                    {intro === 1 &&
                        <Fragment>
                            <Overlay>
                                <Text>It could be on <br/>the desk of <br/>your future <br/>employee...</Text>
                                <Row>
                                    <Dot color={'white'} />
                                    <Dot color={'grey'} />
                                    <Dot color={'white'} />
                                </Row>
                            </Overlay>
                            <IntroImg src={intro2} alt=""/>
                        </Fragment>
                    }

                    {intro === 2 &&
                        <Fragment>
                            <Overlay>
                                <Text>It could inspire<br/>someone on the<br/>other side of<br/>the world...</Text>
                                <Row>
                                    <Dot color={'white'} />
                                    <Dot color={'white'} />
                                    <Dot color={'grey'} />
                                </Row>
                            </Overlay>
                            <IntroImg src={intro3} alt=""/>
                        </Fragment>
                    }
                </SlidesContainer>
                <Items items={items} title="Business"/>
            </Intro>
        )
    }
}

