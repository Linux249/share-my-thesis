import React from 'react';
import styled from 'styled-components'
import {biscuit} from '../style/colors'
import intro from '../svg/Intro.svg'


const Intro = styled.img`
   // background-color: ${biscuit};
   // height: 800px;
   width: 100%
`;


export default () => (
        <Intro src={intro} alt=""/>
)