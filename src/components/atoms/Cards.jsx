import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/img/images-test/imgTest1.svg';
import img2 from '../../assets/img/images-test/imgTest2.svg';
import img6 from '../../assets/img/images-test/imgTest3.svg';

import img3 from '../../assets/img/card3.svg';
import img4 from '../../assets/img/card4.svg';
import img5 from '../../assets/img/card5.svg';
import data from '../../infoCards.json';

const CardContainer = styled.div`
  width: 90%;
  height: 35rem;
  padding: 1rem 0;
  background-color: #F8EEE2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 70%;
    height: 20rem;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
    transition: all 0.2s;
    &:hover {
      box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 42%;
    height: 20rem;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
    transition: all 0.2s;
    &:hover {
      box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    }
  }
`;

const TextContainer = styled.div`
  width: 90%;
  height: 45%;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 55%;
  @media (min-width: 768px) {
    width: 50%;
    height: 90%;
  }
  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TituloCard = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
`;

const TextCard = styled.p`
  font-size: 0.8rem;
  padding: 0 0.2rem;
  margin: 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0 1.2rem;
`;

const ListItem = styled.li`
  font-size: 0.8rem;
`;

export const Card1 = () => {
  return (
    <CardContainer>
      <TextContainer>
        <TituloCard>{data.card1.title }</TituloCard>
        <TextCard>{data.card1.text }</TextCard>
        <List>
          <ListItem>{data.card1.puntos[1] }</ListItem>
          <ListItem>{data.card1.puntos[2] }</ListItem>
          <ListItem>{data.card1.puntos[3] }</ListItem>
          <ListItem>{data.card1.puntos[4] }</ListItem>
          <ListItem>{data.card1.puntos[5] }</ListItem>
          <ListItem>{data.card1.puntos[6] }</ListItem>
          <ListItem>{data.card1.puntos[7] }</ListItem>
        </List>
      </TextContainer>
      <ImageContainer>
        <Image src={img1}/>
      </ImageContainer>
    </CardContainer>
  )
}
export const Card2 = () => {
  return (
    <CardContainer>
      <TextContainer>
        <TituloCard>{data.card2.title }</TituloCard>
        <TextCard>{data.card2.text }</TextCard>
        <List>
          <ListItem>{data.card2.puntos[1] }</ListItem>
          <ListItem>{data.card2.puntos[2] }</ListItem>
          <ListItem>{data.card2.puntos[3] }</ListItem>
          <ListItem>{data.card2.puntos[4] }</ListItem>
          <ListItem>{data.card2.puntos[5] }</ListItem>
        </List>
      </TextContainer>
      <ImageContainer>
        <Image src={img2}/>
      </ImageContainer>
    </CardContainer>
  )
}
export const Card3 = () => {
  return (
    <CardContainer>
      <TextContainer>
        <TituloCard>{data.card3.title }</TituloCard>
        <TextCard>{data.card3.text }</TextCard>
        <List>
          <ListItem>{data.card3.puntos[1] }</ListItem>
          <ListItem>{data.card3.puntos[2] }</ListItem>
          <ListItem>{data.card3.puntos[3] }</ListItem>
          <ListItem>{data.card3.puntos[4] }</ListItem>
        </List>
      </TextContainer>
      <ImageContainer>
        <Image src={img3}/>
      </ImageContainer>
    </CardContainer>
  )
}
export const Card4 = () => {
  return (
    <CardContainer>
      <TextContainer>
        <TituloCard>{data.card4.title }</TituloCard>
        <TextCard>{data.card4.text }</TextCard>
        <List>
          <ListItem>{data.card4.puntos[1] }</ListItem>
          <ListItem>{data.card4.puntos[2] }</ListItem>
          <ListItem>{data.card4.puntos[3] }</ListItem>
          <ListItem>{data.card4.puntos[4] }</ListItem>
          <ListItem>{data.card4.puntos[5] }</ListItem>
          <ListItem>{data.card4.puntos[6] }</ListItem>
        </List>
      </TextContainer>
      <ImageContainer>
        <Image src={img4}/>
      </ImageContainer>
    </CardContainer>
  )
}
export const Card5 = () => {
  return (
    <CardContainer>
      <TextContainer>
        <TituloCard>{data.card5.title }</TituloCard>
        <TextCard>{data.card5.text }</TextCard>
        <List>
          <ListItem>{data.card5.puntos[1] }</ListItem>
          <ListItem>{data.card5.puntos[2] }</ListItem>
          <ListItem>{data.card5.puntos[3] }</ListItem>
          <ListItem>{data.card5.puntos[4] }</ListItem>
          <ListItem>{data.card5.puntos[5] }</ListItem>
          <ListItem>{data.card5.puntos[6] }</ListItem>
        </List>
      </TextContainer>
      <ImageContainer>
        <Image src={img5}/>
      </ImageContainer>
    </CardContainer>
  )
}
export const Card6 = () => {
  return (
    <CardContainer>
      <TextContainer>
        <TituloCard>{data.card6.title }</TituloCard>
        <TextCard>{data.card6.text }</TextCard>
        <List>
          <ListItem>{data.card6.puntos[1] }</ListItem>
          <ListItem>{data.card6.puntos[2] }</ListItem>
          <ListItem>{data.card6.puntos[3] }</ListItem>
        </List>
      </TextContainer>
      <ImageContainer>
        <Image src={img6}/>
      </ImageContainer>
    </CardContainer>
  )
}