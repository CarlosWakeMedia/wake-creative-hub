import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../utils/constants'
import { Card1, Card2, Card3, Card4, Card5, Card6, } from '../atoms/Cards';

const CardSecctionContainer = styled.section`
  width: 100%;
  background-color: ${PrimaryColor};
  padding-bottom: 2em;
`

const Container = styled.div`
  display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 3.5em;
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
        <Card1 />
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
      </Container>
    </CardSecctionContainer>
  )
}

export { CardSecction };
