import React from 'react';
import styled from 'styled-components'
import {red, backGroundColor} from '../style/colors'
import Item from './Item'

const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    
    text-indent: 1rem;
    
    color: ${red};
    height: 10rem;
    
    font-family: Gilroy-bold, sans-serif;
    font-size: 4rem;
`


const ItemContainer = styled.div`
  
   background-color: ${backGroundColor};
   // height: 800px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   padding: 3rem;
`


export default ({items, title}) => (
    <Items>
        <Header>{title}</Header>
        <ItemContainer>
            {items.map((item,i) => (<Item item={item} i={i} />))}
        </ItemContainer>
    </Items>
)