import React from 'react';
import styled from 'styled-components'
import {darkBlue, pale, red} from '../style/colors'
import business from '../svg/subjects/01_business.svg'
import artDesign from '../svg/subjects/02_art_design.svg'
import education from '../svg/subjects/03_education.svg'
import law from '../svg/subjects/04_law.svg'
import psycho from '../svg/subjects/05_psycho.svg'
import medicine from '../svg/subjects/06_medicine.svg'
import it from '../svg/subjects/07_it.svg'
import sociology from '../svg/subjects/08_sociology.svg'
import biologie from '../svg/subjects/09_biologie.svg'
import politics from '../svg/subjects/10_politics.svg'
import history from '../svg/subjects/11_history.svg'
import nursery from '../svg/subjects/12_nursery.svg'
import sport from '../svg/subjects/13_sport.svg'
import engineeering from '../svg/subjects/14_engineeering.svg'
import chemistry from '../svg/subjects/15_chemistry.svg'
import physics from '../svg/subjects/16_physics.svg'
import maths from '../svg/subjects/17_maths.svg'


const SubjectArea = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
`;

const SubjectBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${darkBlue};
    
    width: 35rem;
    height: 20rem;
    
    margin: 1rem;

`;

const SubjectText = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  
    color: ${pale};
    font-family: "Gilroy-bold", sans-serif;
    font-size: 2rem;
    
    background-color: ${red};
    
    width: 80%;
    height: 30%;
    
    padding: 0 1rem;
`;

const Image = styled.img`
    height: 100%
`;

export default () => (
    <SubjectArea>
        <SubjectBox>
            <Image src={business}/>
            <SubjectText>Business & Management Studies</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={artDesign} />
            <SubjectText>Art & Design</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={psycho} />
            <SubjectText>Psychology</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={education} />
            <SubjectText>Education</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={law} />
            <SubjectText>Law</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={medicine} />
            <SubjectText>Medicine</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={it} />
            <SubjectText>IT & Computers Science</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={sociology} />
            <SubjectText>Sociology</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={biologie} />
            <SubjectText>Biology</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={politics} />
            <SubjectText>Politics</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={history} />
            <SubjectText>History</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={sport} />
            <SubjectText>Sports</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={engineeering} />
            <SubjectText>Engineering & Technology</SubjectText>
        </SubjectBox>
        <SubjectBox>
            <Image src={chemistry}/>
            <SubjectText>Chemistry</SubjectText>
        </SubjectBox>

        <SubjectBox>
            <Image src={physics}/>
            <SubjectText>Physics</SubjectText>
        </SubjectBox>

        <SubjectBox>
            <Image src={maths}/>
            <SubjectText>Maths</SubjectText>
        </SubjectBox>

        <SubjectBox>
            <Image src={nursery} />
            <SubjectText>Nursing</SubjectText>
        </SubjectBox>

    </SubjectArea>
)