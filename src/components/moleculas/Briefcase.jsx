import React from 'react'
import styled from 'styled-components'
import {Button} from '../atoms/Button'
import { BackgroundColor, TextColor } from '../../utils/constants';
import { AiFillBehanceSquare } from "react-icons/ai";

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
`;

export const Title = styled.h2`
  width: 90%;
  max-width: 600px;
  margin: 1rem auto;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 50px;
  color: ${TextColor};
`;
export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  color: ${TextColor};
`;

const BottonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  a svg{
    width: 1.4rem;
    height: auto;
    margin: 0;
    padding: 0;
  }
`


const Briefcase = () => {
  return (
    <ContainerBriefcase id='Portafolio'>
      <Title>¿Quieres Conocer parte de nuestro trabajo?</Title>
      {/* <Text>Descarga nuestra presentación</Text> */}
      <BottonContainer>
        <Button
          href='https://www.behance.net/'
          value={
            (<React.Fragment>
              <span>
                Ver Behance
              </span> 
              <AiFillBehanceSquare/>
            </React.Fragment>
            )}
        />
      </BottonContainer>
    </ContainerBriefcase>
  )
}

export default Briefcase