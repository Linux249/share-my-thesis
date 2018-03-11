import React from 'react';
import styled from 'styled-components'
import {red, biscuit, blue, white, darkBlue, backGroundColor} from '../style/colors'
import ViewIcon from '../svg/eye'
import LikeIcon from '../svg/thumbs-up'
const colors = [red, biscuit, blue]

const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Header = styled.div`
    display: flex;
    align-content: center;
    
    text-indent: 1rem;
    
    color: ${red};
    height: 5rem;
    
    font-family: Gilroy-bold, sans-serif;
    font-size: 4rem;
`


const ItemContainer = styled.div`
   background-color: ${backGroundColor};
   // height: 800px;
   display: flex;
   flex-wrap: wrap;
`

const Item = styled.div`
   background-color: ${white};
   // height: 800px;
   width: 15rem;
   height: min-content;
   margin: 1rem;
   text-align: left;
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
const Text = styled.div`
   font-size: 1.2rem;
   text-overflow: clip;
   white-space: nowrap;
   
`

const Row = styled.div`
    font-family: Gilroy-bold, sans-serif;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`


export default ({items, title}) => (
    <Items>
        <Header>{title}</Header>
        <ItemContainer>
            {items.map(item => (
                <Item>
                    <Title>{item.title}</Title>
                    <TextBox>
                        <Name>{item.name}</Name>
                        <Text>{item.topic}</Text>
                        <Text>{item.uni}</Text>
                    </TextBox>
                    <Row><LikeIcon/>{item.likes}<ViewIcon/>{item.views}</Row>
                </Item>
            ))}
        </ItemContainer>
    </Items>
)