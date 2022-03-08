import React from 'react'
import styled from 'styled-components'
import { BackgroundColor } from '../../utils/constants';

const ContainerBriefcase = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background-color: ${BackgroundColor};
  color: white;
`;

const BriefcaseTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
`;
const BriefcaseText = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const BriefcaseButton = styled.a`
  padding: 1rem;
  border-radius: 35px;
  background-color: white;
  color: ${BackgroundColor};
  font-size: 1rem;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: ${BackgroundColor};
    color: white;
    border: 1px solid white;
  }
`;

const Briefcase = () => {
  return (
    <ContainerBriefcase>
      <BriefcaseTitle>¿Quieres Conocer parte de nuestro trabajo?</BriefcaseTitle>
      <BriefcaseText>Descarga nuestra presentación</BriefcaseText>
      <BriefcaseButton
        href='presentación'
        download='presentacion'
      >Descarga aquí!!</BriefcaseButton>
    </ContainerBriefcase>
  )
}

export default Briefcase