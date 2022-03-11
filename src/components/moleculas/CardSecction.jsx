import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../utils/constants'
import {Card1, Card2, Card3, Card4,Card5, Card6} from '../atoms/Cards';
import { CardsClick1, CardsClick2, CardsClick3, CardsClick4, CardsClick5, CardsClick6, } from '../atoms/CardsClick'; 

const CardSecctionContainer = styled.section`
  width: 100%;
  background-color: ${PrimaryColor};
`

const Container = styled.div`
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
	grid-gap: 1.5em;
  align-content: star;
  width: 90%;
  margin: 0 auto;
  min-width: 320px;
`;

const CardSecction
  = () => {
  return (
    <CardSecctionContainer>
      <Container id='Cards'>
        <CardsClick1 />
        <CardsClick2/>
        <CardsClick3/>
        <CardsClick4/>
        <CardsClick5/>
        <CardsClick6/>
      </Container>
    </CardSecctionContainer>
  )
}

export { CardSecction };
