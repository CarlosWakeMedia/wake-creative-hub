import React from 'react'
import styled from 'styled-components'
import {Button} from '../atoms/Button'
import { BackgroundColor } from '../../utils/constants';
import { AiFillBehanceCircle } from "react-icons/ai";

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
  margin: 1rem 0;
`;
export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

const BottonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`


const Briefcase = () => {
  return (
    <ContainerBriefcase id='Portafolio'>
      <Title>¿Quieres Conocer parte de nuestro trabajo?</Title>
      <Text>Descarga nuestra presentación</Text>
      <BottonContainer>
        <Button
          href='https://www.behance.net/'
          value={
            (<React.Fragment>
              <span>
                Ver Behance
              </span> 
              <AiFillBehanceCircle/>
            </React.Fragment>
            )}
        />
      </BottonContainer>
    </ContainerBriefcase>
  )
}

export default Briefcase