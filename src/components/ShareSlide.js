import React, { Fragment } from 'react';
import styled from 'styled-components'
import share from '../svg/share.svg'


const Container = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
`

const ImgBig = styled.img`
    
    width: 100%;
    height: 100%;
`

const Text = styled.div`
    position: absolute;
    
    top: 83%;
    left: 38%;
    
    font-family: "Gilroy-bold", sans-serif;
    
    font-size: 3rem;

`

export default () =>
    <Container>
        <ImgBig src={share}/>
        <Text>shareMyT.com/aBxy</Text>
    </Container>
