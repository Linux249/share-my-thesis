import React from 'react';
import styled from 'styled-components'
import {red, biscuit, blue, white, darkBlue, backGroundColor} from '../style/colors'
import ViewIcon from '../svg/eye'
import LikeIcon from '../svg/thumbs-up'
import Item from './Item'
const colors = [red, biscuit, blue]

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

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background-color: ${() => colors[Math.ceil(Math.random()*3)-1]};
    border-top: 0.4rem solid ${darkBlue};
    height: 5rem;
   
    padding: 0.2rem 0.4rem;
   
`

const Name = styled.div`
    font-family: Gilroy-bold, sans-serif;
    font-size: 1.2rem;
       
`

const Title = styled.div`
   font-family: Gilroy-bold, sans-serif;
   font-size: 2.2rem;
   text-overflow: ellipsis;
   overflow: hidden;
   word-wrap: break-word;
   height: 16rem;
   padding: 1rem;
  // hyphens: auto;
   
`

const Text = styled.div`
   font-size: 1.2rem;
   text-overflow: clip;
   white-space: nowrap;
   
`

const Row = styled.div`
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0.4rem;
    //justify-content: space-around;
`
const Number = styled(Name)`
    font-family: Gilroy-bold, sans-serif;
    padding: 0 1rem;
`

export default ({items, title}) => (
    <Items>
        <Header>{title}</Header>
        <ItemContainer>
            {items.map((item,i) => (<Item item={item} i={i} />))}
        </ItemContainer>
    </Items>
)