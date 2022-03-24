import React from 'react';
import styled from 'styled-components';
import { Black, PrimaryColor, SecondaryColor } from '../../utils/constants'
import clientsImage from '../../assets/img/nuestros-clientes.svg';
import { ClientsLogos } from '../atoms/ClientsLogos';


const ClientsContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 3rem 0;
    background-color: ${SecondaryColor};
`
const ContentContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
    margin: 0 auto;
    /* border-radius: 30px; */
    /* border: 2px solid ${Black}; */
    box-shadow: 0 1px 1px rgba(0,0,0,0.1),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.1),
              0 8px 8px rgba(0,0,0,0.1),
              0 16px 16px rgba(0,0,0,0.1);
    background-color: ${PrimaryColor};
    @media (min-width: 768px) {
    width: 75%;
  }
`
const Image = styled.img`
    width:90%;
    max-width: 650px;
    margin: 1rem;
    @media (min-width: 768px) {
        width:45%;
    }
    `
const MarksContainer = styled.div`
    width:100%;
    height: 100%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width:45%;
    }
`

const ClientsSection = () => {
  return (
    <ClientsContainer id='Clientes'>
      <ContentContainer>
        <Image src={clientsImage} alt={'Imagen de los clientes de wake'} />
        <MarksContainer>
          <ClientsLogos />
        </MarksContainer>
      </ContentContainer>
    </ClientsContainer>
  )
}

export { ClientsSection };
