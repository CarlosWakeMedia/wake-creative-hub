import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../utils/constants'
import { CardsClick1, CardsClick2, CardsClick3, CardsClick4, CardsClick5, CardsClick6, } from '../atoms/CardsClick'; 

const CardSecctionContainer = styled.section`
  width: 100%;
  background-color: ${PrimaryColor};
  padding-bottom: 2em;
`

const Container = styled.div`
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(21em, 1fr));
	grid-gap: 1.5em;
  align-content: center ;
  width: 90%;
  max-width: 1400px;
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
