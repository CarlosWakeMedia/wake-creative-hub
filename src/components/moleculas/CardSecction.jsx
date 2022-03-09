import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../utils/constants'
import {Card1, Card2, Card3, Card4,Card5, Card6} from '../atoms/Cards';

const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 1rem;
  background-color: ${PrimaryColor};
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  `;

const CardSecction
  = () => {
  return (
    <Container>
      <Card1 />
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <Card6/>
    </Container>
  )
}

export { CardSecction };
