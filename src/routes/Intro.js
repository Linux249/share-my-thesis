import React from 'react';
import styled from 'styled-components'
import intro from '../svg/Intro.svg'
import Items from '../components/Items'
import items from '../mock/items'

const Intro = styled.div`
    
`;

const IntroImg = styled.img`
   width: 100%
`;

export default () => (
    <Intro>
        <IntroImg src={intro} alt=""/>
        <Items items={items} title="Business"/>
    </Intro>
)