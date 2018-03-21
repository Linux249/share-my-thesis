import React, {Component} from 'react';
import styled from 'styled-components'
import intro from '../svg/Intro.svg'
import intro1 from '../svg/Intro_01.svg'
import intro2 from '../svg/Intro_02.svg'
import intro3 from '../svg/Intro_03.svg'
import Items from '../components/Items'
import items from '../mock/items'

const Intro = styled.div`
    
`;

const IntroImg = styled.img`
   width: 100%
`;

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
                {intro === 0 && <IntroImg src={intro1} alt=""/>}
                {intro === 1 && <IntroImg src={intro2} alt=""/>}
                {intro === 2 && <IntroImg src={intro3} alt=""/>}
                <Items items={items} title="Business"/>
            </Intro>
        )
    }
}

