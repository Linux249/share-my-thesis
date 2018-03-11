import React from 'react';
import styled from 'styled-components'
import {red, biscuit, blue, white, darkBlue, backGroundColor} from '../style/colors'
import items from '../mock/items'
import Items from './Items'

const Explore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`




export default () => (
    <Explore>

        <Items items={items} title="Business"/>
    </Explore>
)