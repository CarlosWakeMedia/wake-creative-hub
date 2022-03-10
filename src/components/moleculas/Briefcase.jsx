import React from 'react'
import styled from 'styled-components'
import {Button} from '../atoms/Button'
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

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;
export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const Briefcase = () => {
  return (
    <ContainerBriefcase>
      <Title>¿Quieres Conocer parte de nuestro trabajo?</Title>
      <Text>Descarga nuestra presentación</Text>
      <Button
        href='presentación'
        download='presentacion'
        value={'Descarga aquí!!'}
      >
      </Button>
    </ContainerBriefcase>
  )
}

export default Briefcase