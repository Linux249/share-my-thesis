import React, {Fragment} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {red, biscuit, blue, white, darkBlue, backGroundColor} from '../style/colors'
import ViewIcon from '../svg/eye'
import LikeIcon from '../svg/thumbs-up'

const colors = [red, biscuit, blue]


const Item = styled(Link)`
   background-color: ${white};
   // height: 800px;
   width: 16rem;
   //height: min-content;
   margin: 1rem;
   //text-align: left;
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

export default ({item, i}) => (
    <Fragment>
        <Item to={`/thesis/${i}`}>
            <Title>{item.title}</Title>
            <TextBox>
                <Name>{item.name}</Name>
                <Text>{item.subject}</Text>
                <Text>{item.uni}</Text>
            </TextBox>
            <Row>
                <LikeIcon/>
                <Number>{item.likes}</Number>
                <ViewIcon/>
                <Number>{item.views}</Number>
            </Row>
        </Item>
    </Fragment>
)