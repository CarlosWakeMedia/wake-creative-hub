import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../utils/constants'
import { CardsClick1, CardsClick2, CardsClick3, CardsClick4, CardsClick5, CardsClick6 } from '../atoms/CardsClick';

const CardSecctionContainer = styled.section`
  width: 100%;
  background-color: ${PrimaryColor};
  padding: 2rem 0;
  @media (min-width: 1024px) {
    padding-top: 3rem;
  }
`
const TitleSection = styled.h2`
  text-align: center;
  font-size: 2rem;
`
const Container = styled.div`
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
	grid-gap: 2em 0;
  align-content: center ;
  width: 90%;
  max-width: 1150px;
  min-width: 320px;
  padding: 3em 0;
  margin: 0 auto;
`;

const CardSecction
  = ({setInfoCard, setOpenModal, setImageModal}) => {
  return (
    <CardSecctionContainer>
      <TitleSection>Servicios</TitleSection>
      <Container id='Cards'>
        <CardsClick1 
          setInfoCard = {setInfoCard}
          setOpenModal = {setOpenModal}
          setImageModal = {setImageModal}
        />
        <CardsClick2
          setInfoCard = {setInfoCard}
          setOpenModal = {setOpenModal}
          setImageModal = {setImageModal}
        />
        <CardsClick3
          setInfoCard = {setInfoCard}
          setOpenModal = {setOpenModal}
          setImageModal = {setImageModal}
        />
        <CardsClick4
          setInfoCard = {setInfoCard}
          setOpenModal = {setOpenModal}
          setImageModal = {setImageModal}
        />
        <CardsClick5
          setInfoCard = {setInfoCard}
          setOpenModal = {setOpenModal}
          setImageModal = {setImageModal}
        />
        <CardsClick6
          setInfoCard = {setInfoCard}
          setOpenModal = {setOpenModal}
          setImageModal = {setImageModal}
        />
      </Container>
    </CardSecctionContainer>
  )
}

export { CardSecction };
