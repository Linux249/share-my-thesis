import React, { Fragment } from 'react';
import { Route, Link } from "react-router-dom";
import DropDown from '../components/DropDownWB'
import TextArea from '../components/TextArea'
import ShareSlide from '../components/ShareSlide'
import Item from '../components/Item'
import Thesis from './Thesis'
import TitleBox from '../style/TitleBox'
import styled from 'styled-components'
import {darkBlue, pale, red, white} from '../style/colors'
import pdf from '../svg/pdf.svg'
import arrowR from '../svg/ArrowRightBlue.svg'
import arrowL from '../svg/ArrowLeftBlue.svg'

const ThesisStyled = styled(Thesis)`
  
    background-color: white; !important;
`

const Area = styled.div`
    width: 100%;
`
const Area2 = styled.div`
    width: 45%;
    
    //display: flex;
`

const Img = styled.img`
    width: 15rem;
    height: 15rem;
`

const ImgSmall = styled.img`
    width: 3rem;
    height: 3rem;
`


const SildeArea = styled.div`
    display: flex;
    
    width: 100%;
    min-height: 40rem;
    
    
         
    background-color: ${red};    


`


const Button = styled(Link)`
    display: flex;
    font-family: "Gilroy-bold", sans-serif;
    color: ${white};
    font-size: 2.5rem;
`

const Button2 = styled("div")`

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    
    font-family: "Gilroy-bold", sans-serif;
    background-color: ${white};
    color: ${darkBlue};
    font-size: 2.5rem;
    
    margin-bottom: 5rem;
    
    cursor: pointer;
`

const Left = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    flex: 1;
    
    padding-bottom: 1rem;
`

const Middle = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    flex: 2;
    
    
    padding-top: 10rem;
    padding-bottom: 10rem;
`

const MiddleBig = styled(Middle)`
    flex: 5;
`

const Right = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    flex: 1;
    
    padding-bottom: 1rem
`

const Row = styled.div`
    width: 100%;
    
    display: flex;
    
    justify-content: space-between;
`

const BlueBox = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 30rem;
    
    background-color: ${darkBlue};
    color: ${white};
    
    font-size: 2rem;
    
    margin-top: 2rem;
    
`
const BigText = styled.div`
    font-family: "Gilroy-bold", sans-serif;
`

const ThinText = styled.div`
    
    border-bottom: 0.5rem solid ${red};
    
    padding: 1rem 0;
`

const Row2 = styled.div`
    display: flex;
`

const Title = styled.div`
    font-family: "Gilroy-bold", sans-serif;
    color: ${pale};    
    padding-top: 1rem;
`;

const Input = styled.input`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    
    color: ${pale};
    
    height: 2rem;
   
    
    border: 0.05rem solid ${darkBlue};
    
    margin-top: 0.5rem;    
    margin-bottom: 1rem;

`;

const Slide1 = () => (
    <Fragment>
        <Left>

        </Left>
        <Middle>
            <TitleBox>TELL US ABOUT YOUR THESIS</TitleBox>
            <DropDown title="What type of dissertation did you hand in?" options={["B.A."]}/>
            <DropDown title="What subject describe your dissertation best?" options={["Biology", "Sociology", "Physics"]}/>
            <DropDown title="When did you hand in your dissertation?" options={["2018"]}/>
        </Middle>
        <Right>
            <Button to="/share/2" > Next<ImgSmall src={arrowR}/></Button>
        </Right>
    </Fragment>
)

const Slide2 = () => (
    <Fragment>
        <Left>
            <Button to="/share/1" ><ImgSmall src={arrowL}/>Back</Button>
        </Left>
        <Middle>
            <TitleBox>TELL US ABOUT YOUR THESIS</TitleBox>
            <DropDown title="In which language did you write your dissertation?" options={["B.A."]}/>
            <DropDown title="What is the name of your university?" options={["Biology", "Sociology", "Physics"]}/>
            <DropDown title="What is the land of your university?" options={["2018"]}/>
        </Middle>
        <Right>
            <Button to="/share/3" >Next<ImgSmall src={arrowR}/></Button>
        </Right>
    </Fragment>
)

const Slide3 = () => (
    <Fragment>
        <Left>
            <Button to="/share/2" ><ImgSmall src={arrowL}/>Back</Button>
        </Left>
        <Middle>
            <TitleBox>ONE SENTENCE</TitleBox>
            <TextArea title="How would you summarise your thesis in one sentence?"/>
        </Middle>
        <Right>
            <Button to="/share/4" >Next<ImgSmall src={arrowR}/></Button>
        </Right>
    </Fragment>
)


const Slide4 = () => (
    <Fragment>
        <Left>
            <Button to="/share/3" ><ImgSmall src={arrowL}/>Back</Button>

        </Left>
        <Middle>
            <TitleBox>TELL US MORE</TitleBox>
            <TextArea title="What did you try to find out?"/>
            <TextArea title="What did you find out?"/>
            <TextArea title="What were your main learning or ven mistakes you made?"/>
            <TextArea title="Which tool/abalysis/approach did you use?"/>
        </Middle>
        <Right>
            <Button to="/share/5" >Next<ImgSmall src={arrowR}/></Button>
        </Right>
    </Fragment>
)


const Slide5 = () => (
    <Fragment>
        <Left>
            <Button to="/share/4" ><ImgSmall src={arrowL}/>Back</Button>
        </Left>
        <Middle>
            <Title>You have an abstract for your thesis?</Title>
            <BlueBox>
                <Img src={pdf} />
                <BigText>PDF HIER ABLEGEN</BigText>
                <ThinText>DATEI AUS WÄHLEN</ThinText>
            </BlueBox>
            <Row>
                <Area2>
                    <Title>You did something createive or applied, you can upload pictures, code, video...</Title>
                </Area2>
                <Area2>
                    <Title>Upload your dissertation now. It will not be public but allows you to share it with one click when someone sends you request.</Title>
                </Area2>
            </Row>
            <Row>
                <Area2>
                    <Button2>Upload</Button2>
                </Area2>
                <Area2>
                    <Button2>Upload</Button2>
                </Area2>
            </Row>
        </Middle>
        <Right>
            <Button to="/share/6" > Next<ImgSmall src={arrowR}/></Button>
        </Right>
    </Fragment>
)


const Slide6 = () => (
    <Fragment>
        <Left>
            <Button to="/share/5" ><ImgSmall src={arrowL}/>Back</Button>
        </Left>
        <Middle>
            <TitleBox>ALLMOST DONE</TitleBox>
            <Row>
                <Area2>
                    <Title>Name</Title>
                    <Input/>
                </Area2>
                <Area2>
                    <Title>Email</Title>
                    <Input/>
                </Area2>
            </Row>
            <Row>
                <Area2>
                    <Title>Username</Title>
                    <Input/>
                </Area2>
                <Area2>
                    <Title>Password</Title>
                    <Input/>
                </Area2>
            </Row>
        </Middle>
        <Right>
            <Button to="/share/7" >Next<ImgSmall src={arrowR}/></Button>
        </Right>
    </Fragment>
)


const Slide7 = () => (
    <Fragment>
        <Left>
            <Button to="/share/6" ><ImgSmall src={arrowL}/>Back</Button>
        </Left>
        <MiddleBig>
            <TitleBox>Preview</TitleBox>
            <Row2>
                <Item />
                <ThesisStyled id="0"/>
            </Row2>
        </MiddleBig>
        <Right>
            <Button to="/share/8" >Share<ImgSmall src={arrowR}/></Button>
        </Right>
    </Fragment>
)

const Slide8 = () => (
    <Fragment>
        <ShareSlide />
    </Fragment>
)




export default () => (
    <Area>
        <SildeArea>
            <Route path="/share/1" component={Slide1} />
            <Route path="/share/2" component={Slide2} />
            <Route path="/share/3" component={Slide3} />
            <Route path="/share/4" component={Slide4} />
            <Route path="/share/5" component={Slide5} />
            <Route path="/share/6" component={Slide6} />
            <Route path="/share/7" component={Slide7} />
            <Route path="/share/8" component={Slide8} />
        </SildeArea>
    </Area>
)