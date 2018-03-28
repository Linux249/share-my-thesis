import React from 'react';
import styled from 'styled-components'
import {items} from '../mock/items'
import ViewIcon from '../svg/eye'
import LikeIcon from '../svg/thumbs-up'


const Thesis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > div {
      width: 90%;
  }
  
`;

const Header = styled.div`
    margin: 4rem 0;
`;


const Name = styled.div`
    font-family: Gilroy-bold, sans-serif;
    font-size: 1.2rem;
       
`;

const Title = styled.div`
   font-family: Gilroy-bold, sans-serif;
   font-size: 2.5rem;
   //text-overflow: ellipsis;
   //overflow: hidden;
   //word-wrap: break-word;
  // hyphens: auto;
    margin: 2.5rem 0;
   
`;

const Text = styled.div`
   font-size: 1.3rem;
   //text-overflow: clip;
   //white-space: nowrap;
   line-height: 2rem;

`;

const Row = styled.div`
    height: 2rem;
    display: flex;
    align-items: center;
    //justify-content: space-around;
`;
const Number = styled(Name)`
    font-family: Gilroy-bold, sans-serif;
    padding: 0 1rem;
`;

export default ({match, id}) => {
    const i = match ? match.params.id % items.length : id; // modulus id

    return (
        <Thesis>
            <Header>
                <Name>{items[i].name}</Name>
                <Text>{items[i].subject}</Text>
                <Text>{items[i].uni}</Text>
                <Title>{items[i].title}</Title>
                <Row>
                    <LikeIcon/>
                    <Number>{items[i].likes}</Number>
                    <ViewIcon/>
                    <Number>{items[i].views}</Number>
                </Row>
            </Header>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                --

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.

                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Text>
        </Thesis>
    )
}