import React from 'react';
import styled, {keyframes} from 'styled-components';

import card1 from '../../assets/img/images-test/imgTest1.svg';
import card2 from '../../assets/img/images-test/imgTest2.svg';
import card6 from '../../assets/img/images-test/imgTest3.svg';

import card3 from '../../assets/img/card3.svg';
import card4 from '../../assets/img/card4.svg';
import card5 from '../../assets/img/card5.svg';

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
  width: 90%;
  min-width: 300px;
  max-width: 550px;
  height: auto;
`;
const ContainerImage = styled.figure`
  position: relative;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  margin: 0;
  overflow: hidden;
  border: 4px solid ${Black};
  background-color: ${White};
  z-index: ${props => props.index};
  transition: all .5s ease;
`;
const ImageCard = styled.img`
  width: 100%;
`;
const TitleCardContainer = styled.figcaption`
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: ${White};
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 5%;
  width: 90%;
  height: 90%;
  font-size: 1rem;
  overflow-y: scroll;
  border: 4px solid ${Black};
  background-color: ${White};
  color: ${Black};
  z-index: 10;

  animation: ${move} 1s 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;
const TitleCard = styled.h3`
  padding-left: 1em;
  font-size: 1.25rem;
  transform: translateX( ${props => props.isWatch}% );
  transition: transform .5s ease-in-out;
`;
const TextCard = styled.p`
  width: 80%;
  margin: 0 auto .8em;
  transform: translateX( ${props => props.isWatch}% );
  transition: transform .5s ease-in-out;
  transition-delay: .2s;
`;
const List = styled.ul`
  width: 80%;
  margin: 0 auto;
  transform: translateX( ${props => props.isWatch}% );
  transition: transform .5s ease-in-out;
  transition-delay: .4s;
`;
const ListItem = styled.li`
  
`;



const CardsClick1 = () => {
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
              <TitleCard isWatch = {viewInfo ? 0 : -100}>{data.card1.title}</TitleCard>
              <TextCard isWatch = {viewInfo ? 0 : -100}>{data.card1.text}</TextCard>
              <List isWatch = {viewInfo ? 0 : -100}>
                  {data.card1.puntos.map(item => (
                      <ListItem key={item}>{item}</ListItem>
                  ))}
                </List>
          </InfoContainer>
      </CardContainer>
    )
  }


  const CardsClick2 = () => {
    const [viewInfo, setViewInfo] = React.useState(false)
    
      return (
        <CardContainer onClick={()=> setViewInfo(!viewInfo)} >
          <ContainerImage index = {viewInfo ? 0 : 20}>
              <ImageCard src={card2} alt={data.card2.title} />
              <TitleCardContainer>
                <TitleCard>{data.card2.title}</TitleCard>
              </TitleCardContainer>
          </ContainerImage>
  
          <InfoContainer>
              <TitleCard isWatch = {viewInfo ? 0 : -100}>{data.card2.title}</TitleCard>
              <TextCard isWatch = {viewInfo ? 0 : -100}>{data.card2.text}</TextCard>
                <List isWatch = {viewInfo ? 0 : -100}>
                  {data.card2.puntos.map(item => (
                      <ListItem key={item}>{item}</ListItem>
                  ))}
                </List>
              </InfoContainer>
        </CardContainer>
      )
    }
    const CardsClick3 = () => {
      const [viewInfo, setViewInfo] = React.useState(false)
      
        return (
          <CardContainer onClick={()=> setViewInfo(!viewInfo)} >
            <ContainerImage index = {viewInfo ? 0 : 20}>
                <ImageCard src={card3} alt={data.card3.title} />
                <TitleCardContainer>
                  <TitleCard>{data.card3.title}</TitleCard>
                </TitleCardContainer>
            </ContainerImage>
    
              <InfoContainer>
                <TitleCard isWatch = {viewInfo ? 0 : -100}>{data.card3.title}</TitleCard>
                <TextCard isWatch = {viewInfo ? 0 : -100}>{data.card3.text}</TextCard>
                <List isWatch = {viewInfo ? 0 : -100}>
                  {data.card3.puntos.map(item => (
                      <ListItem key={item}>{item}</ListItem>
                  ))}
                </List>
              </InfoContainer>
          </CardContainer>
        )
      }
      const CardsClick4 = () => {
        const [viewInfo, setViewInfo] = React.useState(false)
        
          return (
            <CardContainer onClick={()=> setViewInfo(!viewInfo)} >
              <ContainerImage index = {viewInfo ? 0 : 20}>
                  <ImageCard src={card4} alt={data.card4.title} />
                  <TitleCardContainer>
                    <TitleCard>{data.card4.title}</TitleCard>
                  </TitleCardContainer>
              </ContainerImage>
      
                <InfoContainer>
                  <TitleCard isWatch = {viewInfo ? 0 : -100}>{data.card4.title}</TitleCard>
                  <TextCard isWatch = {viewInfo ? 0 : -100}>{data.card4.text}</TextCard>
                  <List isWatch = {viewInfo ? 0 : -100}>
                    {data.card4.puntos.map(item => (
                        <ListItem key={item}>{item}</ListItem>
                    ))}
                  </List>
                </InfoContainer>
            </CardContainer>
          )
        }
        const CardsClick5 = () => {
          const [viewInfo, setViewInfo] = React.useState(false)
          
            return (
              <CardContainer onClick={()=> setViewInfo(!viewInfo)} >
                <ContainerImage index = {viewInfo ? 0 : 20}>
                    <ImageCard src={card5} alt={data.card5.title} />
                    <TitleCardContainer>
                      <TitleCard>{data.card5.title}</TitleCard>
                    </TitleCardContainer>
                </ContainerImage>
        
                  <InfoContainer>
                    <TitleCard isWatch = {viewInfo ? 0 : -100}>{data.card5.title}</TitleCard>
                    <TextCard isWatch = {viewInfo ? 0 : -100}>{data.card5.text}</TextCard>
                    <List isWatch = {viewInfo ? 0 : -100}>
                      {data.card5.puntos.map(item => (
                        <ListItem key={item}>{item}</ListItem>
                      ))}
                    </List>
                  </InfoContainer>
              </CardContainer>
            )
          }
const CardsClick6 = () => {
  const [viewInfo, setViewInfo] = React.useState(false)
    return (
      <CardContainer onClick={()=> setViewInfo(!viewInfo)} >
        <ContainerImage index = {viewInfo ? 0 : 20}>
            <ImageCard src={card6} alt={data.card6.title} />
            <TitleCardContainer>
              <TitleCard>{data.card6.title}</TitleCard>
            </TitleCardContainer>
        </ContainerImage>

          <InfoContainer>
            <TitleCard isWatch = {viewInfo ? 0 : -100}>{data.card6.title}</TitleCard>
            <TextCard isWatch = {viewInfo ? 0 : -100}>{data.card6.text}</TextCard>
            <List isWatch = {viewInfo ? 0 : -100}>
              {data.card6.puntos.map(item => (
                  <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </InfoContainer>
      </CardContainer>
    )
  }

export { CardsClick1, CardsClick2, CardsClick3, CardsClick4, CardsClick5, CardsClick6, }