import React, { Fragment } from 'react';
import styled from 'styled-components'
import {biscuit} from '../style/colors'
import intro from '../svg/Intro.svg'


const Intro = styled.div`
   // background-color: ${biscuit};
   // height: 800px;
`


export default () => (
    <Intro>

        <img src={intro} alt=""/>
    </Intro>
)