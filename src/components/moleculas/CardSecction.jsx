import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../utils/constants'
import {Card1, Card2, Card3, Card4,Card5, Card6} from '../atoms/Cards';
import { CardsClick1, CardsClick2, CardsClick3, CardsClick4, CardsClick5, CardsClick6, } from '../atoms/CardsClick';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

const CardSecction
  = () => {
  return (
    <Container>
      <CardsClick1 />
      <CardsClick2 />
      <CardsClick3 />
      <CardsClick4 />
      <CardsClick5 />
      <CardsClick6 />

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
