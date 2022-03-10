import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/img/images-test/imgTest1.svg';
import img2 from '../../assets/img/images-test/imgTest2.svg';
import img6 from '../../assets/img/images-test/imgTest3.svg';

import img3 from '../../assets/img/card3.svg';
import img4 from '../../assets/img/card4.svg';
import img5 from '../../assets/img/card5.svg';
import data from '../../infoCards.json';
import { BackgroundColor } from '../../utils/constants';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  height: 90%;
  text-align: center;
  color: black;
  border-radius: 30px;
  background-color: ${BackgroundColor};
  box-shadow: 0 1px 1px rgba(0,0,0,0.1),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.1),
              0 8px 8px rgba(0,0,0,0.1),
              0 16px 16px rgba(0,0,0,0.1);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: none;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.320) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.540) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.790) 100%
    );
    transform: translateY(-100%);
    transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
  }
  :after {
    transform: translateY(0);
  }
  &::before {
      background-image: url(${props => props.img});
    }
      :after {
        transform: translateY(0);
      }
      :hover,:focus-within {
        align-items: center;
        color: white;
        :before { transform: translateY(-100%); }
        :after { transform: translateY(-50%); }
      }
      @media (min-width: 1024px) {
        width: 100%;
        height:100%;
    }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
  opacity: 0;
  transform: translateY(100%);
  ${CardContainer}:hover & {
    opacity: 1;
    /* transition:  opacity 2s; */
    transform: translateY(0%);
    transition-delay: 1s;
    transition:  transform .8s;
  }
`;

const TituloCard = styled.h2`
  font-size: 1.5rem;
  font-family: 'Fraunces', serif;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
`;

const TextCard = styled.p`
  font-size: 0.8rem;
  padding: 0 0.2rem;
  font-style: italic;
  line-height: 1.35;
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
    <CardContainer img={img1}>
      <ImageContainer>
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
      </ImageContainer>
    </CardContainer>
  )
}
export const Card2 = () => {
  return (
    <CardContainer img={img2}>
      <ImageContainer>
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

      </ImageContainer>
    </CardContainer>
  )
}
export const Card3 = () => {
  return (
    <CardContainer img={img3}>
      <ImageContainer>
        <TituloCard>{data.card2.title }</TituloCard>
        <TextCard>{data.card2.text }</TextCard>
        <List>
          <ListItem>{data.card2.puntos[1] }</ListItem>
          <ListItem>{data.card2.puntos[2] }</ListItem>
          <ListItem>{data.card2.puntos[3] }</ListItem>
          <ListItem>{data.card2.puntos[4] }</ListItem>
          <ListItem>{data.card2.puntos[5] }</ListItem>
        </List>
      </ImageContainer>
    </CardContainer>
  )
}
export const Card4 = () => {
  return (
    <CardContainer img={img4}>
      <ImageContainer>
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
      </ImageContainer>
    </CardContainer>
  )
}
export const Card5 = () => {
  return (
    <CardContainer img={img5}>
      <ImageContainer>
        <TituloCard>{data.card6.title }</TituloCard>
        <TextCard>{data.card6.text }</TextCard>
        <List>
          <ListItem>{data.card6.puntos[1] }</ListItem>
          <ListItem>{data.card6.puntos[2] }</ListItem>
          <ListItem>{data.card6.puntos[3] }</ListItem>
        </List>
      </ImageContainer>
    </CardContainer>
  )
}
export const Card6 = () => {
  return (
    <CardContainer img={img6}>
      <ImageContainer>
        <TituloCard>{data.card3.title }</TituloCard>
        <TextCard>{data.card3.text }</TextCard>
        <List>
          <ListItem>{data.card3.puntos[1] }</ListItem>
          <ListItem>{data.card3.puntos[2] }</ListItem>
          <ListItem>{data.card3.puntos[3] }</ListItem>
          <ListItem>{data.card3.puntos[4] }</ListItem>
        </List>
      </ImageContainer>
    </CardContainer>
  )
}