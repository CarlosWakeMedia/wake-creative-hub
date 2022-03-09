import React from 'react';
import styled, {keyframes} from 'styled-components';
import card1 from '../../assets/img/card1.png';
import data from '../../infoCards.json';

import { White, Black } from '../../utils/constants'

const move = keyframes`
  to {
    top: 35px;
    right: 20px;
  }
`;


const CardContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const ContainerImage = styled.figure`
  position: relative;
  width: 550px;
  height: 550px;
  overflow: hidden;
  border: 4px solid ${Black};
  transition: all .2s;
  z-index: ${props => props.index};
`;
const ImageCard = styled.img`
  width: 100%;
`;
const TitleCardContainer = styled.figcaption`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 5em;
  background-color: ${White};
`;
const TitleCard = styled.h3`
  padding-left: 1em;
  font-size: 2.25rem;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 40px;
  width: 550px;
  height: 550px;
  font-size: 1.5rem;
  overflow: hidden;
  border: 4px solid ${Black};
  background-color: ${White};
  z-index: 10;

  animation: ${move} 1s 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;
const TextCard = styled.p`
  width: 80%;
  margin: 0 auto .8em;
`;
const List = styled.ul`
  width: 80%;
  margin: 0 auto;
`;
const ListItem = styled.li`
  
`;



const CardsClick = () => {
  const [viewInfo, setViewInfo] = React.useState(false)
  
    return (
      <CardContainer onClick={()=> setViewInfo(!viewInfo)} >
        <ContainerImage index = {viewInfo ? 0 : 20}>
            <ImageCard src={card1} alt={data.card1.title} />
            <TitleCardContainer>
              <TitleCard>{data.card1.title}</TitleCard>
            </TitleCardContainer>
        </ContainerImage>

          <InfoContainer>
            <TitleCard>{data.card1.title}</TitleCard>
            <TextCard>{data.card1.text}</TextCard>
            <List>
                <ListItem>{data.card1.puntos[1] }</ListItem>
                <ListItem>{data.card1.puntos[2] }</ListItem>
                <ListItem>{data.card1.puntos[3] }</ListItem>
                <ListItem>{data.card1.puntos[4] }</ListItem>
                <ListItem>{data.card1.puntos[5] }</ListItem>
                <ListItem>{data.card1.puntos[6] }</ListItem>
                <ListItem>{data.card1.puntos[7] }</ListItem>
              </List>
          </InfoContainer>
      </CardContainer>
    )
  }

export { CardsClick }