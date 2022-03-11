import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../utils/constants'
import {Card1, Card2, Card3, Card4,Card5, Card6} from '../atoms/Cards';
import { CardsClick1, CardsClick2, CardsClick3, CardsClick4, CardsClick5, CardsClick6, } from '../atoms/CardsClick'; 

const Container = styled.div`
  /* display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem; */
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30em, 1fr));
	grid-gap: 5em;
  justify-content: center;
  padding: 5rem;
  background-color: ${PrimaryColor};
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    padding: 5rem;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding: 4rem;
  }
  `;

const CardSecction
  = () => {
  return (
    <Container id='Cards'>

      <CardsClick1 />
      <CardsClick2/>
      <CardsClick3/>
      <CardsClick4/>
      <CardsClick5/>
      <CardsClick6/>


      {/* <Card1 />
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <Card6/> */}
    </Container>
  )
}

export { CardSecction };
