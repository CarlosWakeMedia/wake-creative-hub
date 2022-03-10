import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../utils/constants'
import {Card1, Card2, Card3, Card4,Card5, Card6} from '../atoms/Cards';

const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
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
